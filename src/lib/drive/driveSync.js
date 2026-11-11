import { reactive } from 'vue';
import { timeAgo } from '@/lib/projects/timeAgo.js';
import {
  exportProject,
  getProject,
  deleteProject,
  importProject,
  onProjectChange,
  projectState,
} from '@/lib/projects/projectStore.js';
import {
  currentToken,
  fetchUser,
  hasSignedInBefore,
  isGoogleConfigured,
  preloadGoogle,
  requestToken,
  savedUser,
  signOutGoogle,
} from './googleAuth.js';
import {
  DriveAuthError,
  downloadFile,
  ensureFolder,
  folderUrl,
  listProjectFiles,
  trashFile,
  uploadProject,
} from './driveApi.js';

// Local-first sync between this browser's projects and Google Drive.
// The browser copy is always the one being edited; Drive gets a copy of every
// project a few seconds after it changes, and changes made on other devices
// are pulled on sign-in, when the tab regains focus and when coming online.
// When both sides changed, the most recent edit wins.

const MAP_KEY = 'mbd.drive.sync';
const PUSH_DELAY = 2500;
const FOCUS_SYNC_GAP = 30_000;
const FORMAT = 'miyuki-beads-project';

/** Reactive status for the UI. */
export const drive = reactive({
  configured: isGoogleConfigured,
  // signedOut | connecting | syncing | synced | expired | offline | error
  status: 'signedOut',
  user: null,
  error: '',
  lastSyncedAt: null,
  folderUrl: '',
});

// { account, folderId, files: { [projectId]: { fileId, updatedAt } }, tombstones: { [projectId]: fileId } }
let map = readMap();
const dirty = new Set();
let pushTimer = null;
let chain = Promise.resolve();
let activeProjectId = null;

function emptyMap(account = null) {
  return { account, folderId: null, files: {}, tombstones: {} };
}

function readMap() {
  try {
    return { ...emptyMap(), ...JSON.parse(localStorage.getItem(MAP_KEY)) };
  } catch {
    return emptyMap();
  }
}

function writeMap() {
  try {
    localStorage.setItem(MAP_KEY, JSON.stringify(map));
  } catch {
    /* storage unavailable */
  }
}

/** The editor tells us which project is open, so we never overwrite it under the user. */
export function setActiveProject(id) {
  activeProjectId = id ?? null;
}

// ---- Task queue -------------------------------------------------------------------------

function run(task) {
  chain = chain.then(task).catch(handleError);
  return chain;
}

function handleError(error) {
  console.error('Google Drive sync:', error);
  if (error instanceof DriveAuthError) {
    drive.status = 'expired';
    drive.error = '';
  } else if (!navigator.onLine) {
    drive.status = 'offline';
    drive.error = '';
  } else {
    drive.status = 'error';
    drive.error = error?.message || 'Sync failed.';
  }
}

function tokenOrExpire() {
  const token = currentToken();
  if (!token) {
    drive.status = 'expired';
    return null;
  }
  return token;
}

async function folderFor(token) {
  const folderId = await ensureFolder(token, map.folderId);
  if (folderId !== map.folderId) {
    // A different (new) folder: nothing in it is known yet.
    map = { ...emptyMap(map.account), folderId };
    writeMap();
  }
  drive.folderUrl = folderUrl(folderId);
  return folderId;
}

function payloadFor(id) {
  const exported = exportProject(id);
  return exported ? { format: FORMAT, version: 1, ...exported } : null;
}

async function upload(token, folderId, id) {
  const payload = payloadFor(id);
  if (!payload) return;
  const known = map.files[id];
  let fileId;
  try {
    fileId = await uploadProject(token, {
      folderId,
      fileId: known?.fileId,
      payload,
    });
  } catch (error) {
    if (!known || error instanceof DriveAuthError) throw error;
    // The known file is gone (deleted in Drive): create a new one.
    fileId = await uploadProject(token, { folderId, payload });
  }
  map.files[id] = { fileId, updatedAt: payload.project.updatedAt };
  writeMap();
}

async function pull(token, fileId) {
  const content = await downloadFile(token, fileId);
  if (content?.format !== FORMAT || !content.project) return null;
  return importProject(content.project, content.data);
}

async function flushTombstones(token) {
  for (const [id, fileId] of Object.entries(map.tombstones)) {
    await trashFile(token, fileId);
    delete map.tombstones[id];
    writeMap();
  }
}

// ---- Sync -------------------------------------------------------------------------------

async function fullSync() {
  const token = tokenOrExpire();
  if (!token) return;
  drive.status = 'syncing';
  drive.error = '';
  const folderId = await folderFor(token);
  await flushTombstones(token);

  // Newest file per project (in case a project was saved twice).
  const remote = new Map();
  for (const file of await listProjectFiles(token, folderId)) {
    const seen = remote.get(file.projectId);
    if (!seen || file.updatedAt > seen.updatedAt)
      remote.set(file.projectId, file);
  }

  for (const file of remote.values()) {
    const local = getProject(file.projectId);
    const localTime = local?.updatedAt ?? '';
    map.files[file.projectId] = {
      fileId: file.fileId,
      updatedAt: file.updatedAt,
    };
    if (
      !local ||
      (file.updatedAt > localTime && file.projectId !== activeProjectId)
    ) {
      await pull(token, file.fileId);
    } else if (localTime > file.updatedAt) {
      await upload(token, folderId, file.projectId);
    }
  }

  for (const local of [...projectState.projects]) {
    if (remote.has(local.id)) continue;
    const known = map.files[local.id];
    if (
      known &&
      local.updatedAt <= known.updatedAt &&
      local.id !== activeProjectId
    ) {
      // It was in Drive and isn't any more: deleted on another device.
      deleteProject(local.id, { silent: true });
      delete map.files[local.id];
    } else {
      await upload(token, folderId, local.id);
    }
  }

  dirty.clear();
  writeMap();
  drive.status = 'synced';
  drive.lastSyncedAt = new Date().toISOString();
}

async function pushDirty() {
  if (!dirty.size && !Object.keys(map.tombstones).length) return;
  const token = tokenOrExpire();
  if (!token) return;
  drive.status = 'syncing';
  const folderId = await folderFor(token);
  await flushTombstones(token);
  for (const id of [...dirty]) {
    dirty.delete(id);
    if (getProject(id)) await upload(token, folderId, id);
  }
  drive.status = 'synced';
  drive.lastSyncedAt = new Date().toISOString();
}

function schedulePush() {
  if (!drive.user) return;
  clearTimeout(pushTimer);
  pushTimer = setTimeout(() => run(pushDirty), PUSH_DELAY);
}

onProjectChange(({ type, id }) => {
  if (!drive.user) return;
  if (type === 'delete') {
    dirty.delete(id);
    const known = map.files[id];
    if (known) {
      map.tombstones[id] = known.fileId;
      delete map.files[id];
      writeMap();
    }
  } else {
    dirty.add(id);
  }
  schedulePush();
});

/** One-line status for the UI. */
export function statusText() {
  switch (drive.status) {
    case 'connecting':
      return 'Connecting to Google…';
    case 'syncing':
      return 'Syncing with Google Drive…';
    case 'synced':
      return `Synced ${timeAgo(drive.lastSyncedAt)}`;
    case 'expired':
      return 'Sign-in expired — reconnect to keep syncing';
    case 'offline':
      return 'Offline — changes will sync later';
    case 'error':
      return drive.error || 'Sync failed';
    default:
      return 'Not connected';
  }
}

// ---- Public actions ---------------------------------------------------------------------

/** Sign in (or reconnect) — must be called from a click. */
export async function signIn() {
  if (!drive.configured) return;
  const previous = drive.status;
  drive.status = 'connecting';
  drive.error = '';
  try {
    const token = await requestToken({
      hint: drive.user?.email ?? savedUser()?.email,
    });
    const user = await fetchUser(token);
    if (map.account !== user.email) {
      map = emptyMap(user.email);
      writeMap();
    }
    drive.user = user;
    await run(fullSync);
  } catch (error) {
    drive.status = drive.user ? previous : 'signedOut';
    drive.error = error?.message || 'Sign-in failed.';
    throw error;
  }
}

export function syncNow() {
  if (!drive.user) return Promise.resolve();
  if (!currentToken()) {
    drive.status = 'expired';
    return Promise.resolve();
  }
  return run(fullSync);
}

export function signOut() {
  clearTimeout(pushTimer);
  dirty.clear();
  signOutGoogle();
  map = emptyMap();
  writeMap();
  Object.assign(drive, {
    status: 'signedOut',
    user: null,
    error: '',
    lastSyncedAt: null,
    folderUrl: '',
  });
}

function syncIfStale() {
  if (!drive.user || !currentToken()) return;
  if (['syncing', 'connecting'].includes(drive.status)) return;
  const last = Date.parse(drive.lastSyncedAt ?? 0);
  if (Date.now() - last > FOCUS_SYNC_GAP) run(fullSync);
}

/** Resume a previous session on app start. */
export function initDriveSync() {
  if (!drive.configured) return;
  preloadGoogle();
  if (hasSignedInBefore()) {
    drive.user = savedUser();
    if (drive.user && currentToken()) run(fullSync);
    else if (drive.user) drive.status = 'expired';
  }
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') syncIfStale();
  });
  window.addEventListener('online', syncIfStale);
  window.addEventListener('offline', () => {
    if (drive.user) drive.status = 'offline';
  });
}
