import { reactive } from 'vue';
import { getMode } from './modes.js';
import { makeThumb } from './thumbnail.js';

// Saved projects live in this browser's localStorage:
//   mbd.projects.v1      -> index: [{ id, mode, name, createdAt, updatedAt, size, thumb, templateId }]
//   mbd.project.<id>     -> the editor's own save data for that project
// The index is kept small so listing projects never has to read every grid.

const INDEX_KEY = 'mbd.projects.v1';
const DATA_PREFIX = 'mbd.project.';

// Single-save keys used before projects existed; imported once as projects.
const LEGACY = [
  { key: 'gridEditorData', mode: 'flat' },
  { key: 'peyoteGrid', mode: 'peyote' },
];

const state = reactive({ projects: [] });

// Change listeners (used by Google Drive sync): fn({ type: 'save' | 'delete', id })
const listeners = new Set();
export function onProjectChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
function notify(type, id) {
  for (const fn of listeners) {
    try {
      fn({ type, id });
    } catch (error) {
      console.error(error);
    }
  }
}

function readJson(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? null : JSON.parse(raw);
  } catch {
    return null;
  }
}

function writeIndex() {
  try {
    localStorage.setItem(INDEX_KEY, JSON.stringify(state.projects));
  } catch (error) {
    console.error('Could not save the project list:', error);
  }
}

function newId() {
  return (
    globalThis.crypto?.randomUUID?.().slice(0, 13) ??
    `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`
  );
}

function describe(mode, data) {
  const def = getMode(mode);
  return {
    size: def.size(data),
    thumb: makeThumb(def.toMatrix(data)),
  };
}

// Fields that never count as an edit: bookkeeping, plus editor conveniences
// that are saved with the project but don't change the design itself.
const BOOKKEEPING = ['timestamp', 'projectName'];
const CONVENIENCE = [
  'recentColors',
  'recentImages',
  'selectedColor',
  'isVertical',
];

function without(data, keys) {
  if (!data || typeof data !== 'object') return data;
  return Object.fromEntries(
    Object.entries(data).filter(([key]) => !keys.includes(key)),
  );
}

function sameJson(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function migrateLegacy() {
  for (const { key, mode } of LEGACY) {
    const data = readJson(key);
    if (!data || !getMode(mode).isValid(data)) continue;
    try {
      createProject({
        mode,
        name: data.projectName || getMode(mode).defaultName,
        data,
      });
    } catch (error) {
      console.error('Could not import the previous save:', error);
    }
  }
}

function init() {
  const index = readJson(INDEX_KEY);
  if (Array.isArray(index)) {
    state.projects = index.filter((p) => p && p.id && getMode(p.mode));
  } else {
    state.projects = [];
    migrateLegacy();
    writeIndex();
  }
}

// ---- Queries --------------------------------------------------------------------------

/** The reactive project list (newest first when read through `sortedProjects`). */
export const projectState = state;

export function sortedProjects(mode = null) {
  return state.projects
    .filter((p) => !mode || p.mode === mode)
    .slice()
    .sort((a, b) => (b.updatedAt ?? '').localeCompare(a.updatedAt ?? ''));
}

export function getProject(id) {
  return state.projects.find((p) => p.id === id) ?? null;
}

export function loadProjectData(id) {
  const project = getProject(id);
  if (!project) return null;
  const data = readJson(DATA_PREFIX + id);
  return getMode(project.mode).isValid(data) ? data : null;
}

// ---- Mutations ------------------------------------------------------------------------

/** Create a project and return its index entry. Throws if storage is full. */
export function createProject({ mode, name, data, templateId = null }) {
  const def = getMode(mode);
  if (!def) throw new Error(`Unknown mode: ${mode}`);
  const payload = JSON.parse(JSON.stringify(data ?? def.blank()));
  const now = new Date().toISOString();
  const project = {
    id: newId(),
    mode,
    name: (name || def.defaultName).trim(),
    createdAt: now,
    updatedAt: now,
    templateId,
    ...describe(mode, payload),
  };
  payload.projectName = project.name;
  payload.timestamp = now;
  localStorage.setItem(DATA_PREFIX + project.id, JSON.stringify(payload));
  state.projects.push(project);
  writeIndex();
  notify('save', project.id);
  return project;
}

/**
 * Save an editor's data for a project. Only real design changes update the
 * project's "last edited" time and thumbnail, so simply opening a project
 * doesn't move it to the top of "recent".
 * Returns the timestamp of the stored version. Throws if storage is full.
 */
export function saveProjectData(id, data) {
  const project = getProject(id);
  if (!project) return null;

  const previous = readJson(DATA_PREFIX + id);
  if (
    previous &&
    sameJson(without(previous, BOOKKEEPING), without(data, BOOKKEEPING))
  ) {
    return previous.timestamp ?? project.updatedAt;
  }
  const ignored = [...BOOKKEEPING, ...CONVENIENCE];
  const edited =
    !previous || !sameJson(without(previous, ignored), without(data, ignored));

  const timestamp = edited
    ? new Date().toISOString()
    : (previous.timestamp ?? project.updatedAt);
  const payload = { ...data, projectName: project.name, timestamp };
  localStorage.setItem(DATA_PREFIX + id, JSON.stringify(payload));
  if (edited) {
    Object.assign(
      project,
      { updatedAt: timestamp },
      describe(project.mode, payload),
    );
    writeIndex();
    notify('save', id);
  }
  return timestamp;
}

export function renameProject(id, name) {
  const project = getProject(id);
  const value = name?.trim();
  if (!project || !value || value === project.name) return;
  project.name = value;
  project.updatedAt = new Date().toISOString();
  writeIndex();
  notify('save', id);
}

export function duplicateProject(id) {
  const project = getProject(id);
  const data = loadProjectData(id);
  if (!project || !data) return null;
  return createProject({
    mode: project.mode,
    name: `${project.name} (copy)`,
    data,
    templateId: project.templateId,
  });
}

/** `silent`: removed because it was deleted elsewhere (don't sync back). */
export function deleteProject(id, { silent = false } = {}) {
  const index = state.projects.findIndex((p) => p.id === id);
  if (index === -1) return;
  state.projects.splice(index, 1);
  try {
    localStorage.removeItem(DATA_PREFIX + id);
  } catch {
    /* storage unavailable */
  }
  writeIndex();
  if (!silent) notify('delete', id);
}

/**
 * Add or replace a project with a copy that came from elsewhere (Google
 * Drive), keeping its id and dates. Does not notify listeners.
 * Throws if storage is full.
 */
export function importProject(meta, data) {
  const def = getMode(meta?.mode);
  if (!def || !meta.id || !def.isValid(data)) return null;
  const project = {
    id: meta.id,
    mode: meta.mode,
    name: meta.name || def.defaultName,
    createdAt: meta.createdAt ?? meta.updatedAt,
    updatedAt: meta.updatedAt,
    templateId: meta.templateId ?? null,
    ...describe(meta.mode, data),
  };
  localStorage.setItem(
    DATA_PREFIX + project.id,
    JSON.stringify({ ...data, projectName: project.name }),
  );
  const existing = getProject(project.id);
  if (existing) Object.assign(existing, project);
  else state.projects.push(project);
  writeIndex();
  return project;
}

/** Everything needed to store a project elsewhere: { project, data }. */
export function exportProject(id) {
  const project = getProject(id);
  const data = loadProjectData(id);
  if (!project || !data) return null;
  // eslint-disable-next-line no-unused-vars
  const { thumb, size, ...meta } = project;
  return { project: { ...meta }, data };
}

init();
