<template>
  <div class="triangle-page">
    <AppPortal
      v-if="mode === 'editor'"
      to="toolbar-center"
    >
      <ZoomControls
        v-model="zoom"
        :max="4"
        @fit="zoom = 1"
        @fit-width="zoom = 1"
      />
      <BaseButton
        size="sm"
        icon="grid"
        icon-only
        aria-label="Toggle bead outlines"
        :aria-pressed="outlines"
        @click="outlines = !outlines"
      />
    </AppPortal>
    <AppPortal to="toolbar-end">
      <EditableTitle
        :model-value="projectName"
        @update:model-value="rename"
      />
      <ViewModeActions
        v-model="mode"
        :show-beads="false"
      />
    </AppPortal>

    <div
      v-if="mode === 'editor'"
      class="triangle-editor"
    >
      <ToolSidebar :items="tools" />
      <main
        class="triangle-editor__canvas"
        :class="{
          'with-reference': reference && referenceVisible && referenceBeside,
        }"
      >
        <img
          v-if="reference && referenceVisible"
          class="triangle-editor__reference"
          :src="reference"
          alt="Pattern reference"
        />
        <div
          class="triangle-editor__paper"
          :style="{ '--zoom': zoom }"
          aria-label="2D Peyote triangle pattern"
          :class="{ 'is-painting': tool === 'paint', 'has-outlines': outlines }"
          @pointerdown="startBrush"
          @pointermove="moveBrush"
          @pointerup="endBrush"
          @pointercancel="endBrush"
          @lostpointercapture="endBrush"
        >
          <button
            v-for="cell in layout"
            :key="cell.panel + ':' + cell.index"
            type="button"
            class="triangle-editor__bead"
            :class="{
              'is-highlighted':
                faceFilter !== '' && faceFilter === String(cell.panel),
              'is-muted':
                faceFilter !== '' && faceFilter !== String(cell.panel),
            }"
            :style="{
              left: cell.x + '%',
              top: cell.y + '%',
              rotate: cell.angle + 'deg',
              width: cell.width + '%',
              height: cell.height + '%',
              backgroundImage: `url(${delicaThumbnail(design.panels[cell.panel][cell.index])})`,
            }"
            :aria-label="`Face ${cell.panel + 1}, row ${cell.row + 1}, bead ${cell.column + 1}: ${design.panels[cell.panel][cell.index]}`"
            :data-panel="cell.panel"
            :data-index="cell.index"
            @click="onBeadClick($event, cell)"
          ></button>
        </div>
      </main>
      <aside class="triangle-editor__panel">
        <SegmentedControl
          v-model="tab"
          size="sm"
          block
          :options="tabs"
        />
        <DelicaColorsPanel
          v-if="tab === 'colors'"
          v-model:color="selected"
          paint-mode="color"
          :recent-colors="recent"
          :show-image-mode="false"
          show-finish-filter
          @fill-with-bead="fillFace"
          @clear-recent-colors="recent = []"
          @remove-recent-color="
            recent = recent.filter((code) => code !== $event)
          "
        />
        <div
          v-else-if="tab === 'properties'"
          class="triangle-editor__properties"
        >
          <label
            >Rounds
            <input
              type="number"
              min="1"
              :max="MAX_TRIANGLE_ROUNDS"
              :value="design.rounds"
              @change="resizeRounds"
            />
          </label>
          <label
            >Show face
            <select v-model="faceFilter">
              <option value="">All faces</option>
              <option
                v-for="(_, face) in design.panels"
                :key="face"
                :value="String(face)"
              >
                Face {{ face + 1 }}
              </option>
            </select>
          </label>
          <label
            ><input
              v-model="outlines"
              type="checkbox"
            />
            Show bead outlines</label
          >
        </div>
        <ReferencePanel
          v-else
          :image="reference"
          v-model:visible="referenceVisible"
          v-model:side-by-side="referenceBeside"
          @upload="uploadReference"
          @remove="removeReference"
        />
      </aside>
    </div>

    <div
      v-else-if="mode === 'preview'"
      class="triangle-output"
    >
      <h1>3D Peyote Triangle</h1>
      <RaisedTrianglePreview :design="design" />
    </div>

    <div
      v-else
      class="triangle-output"
    >
      <h1>Triangle row chart</h1>
      <table>
        <thead>
          <tr>
            <th>Row</th>
            <th
              v-for="(_, face) in design.panels"
              :key="face"
            >
              Face {{ face + 1 }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="row in design.rounds"
            :key="row"
          >
            <th>{{ row }}</th>
            <td
              v-for="(face, index) in design.panels"
              :key="index"
            >
              {{ triangleRow(face, row - 1).join(', ') }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <StatusBar :items="statusItems" />
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, ref } from 'vue';
import AppPortal from '@/components/layout/AppPortal.vue';
import EditableTitle from '@/components/ui/EditableTitle.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import StatusBar from '@/components/ui/StatusBar.vue';
import SegmentedControl from '@/components/ui/SegmentedControl.vue';
import ViewModeActions from '@/components/editor/ViewModeActions.vue';
import ZoomControls from '@/components/editor/ZoomControls.vue';
import ToolSidebar from '@/components/editor/ToolSidebar.vue';
import ReferencePanel from '@/components/editor/ReferencePanel.vue';
import DelicaColorsPanel from '@/components/peyote/DelicaColorsPanel.vue';
import { delicaThumbnail } from '@/components/peyote/delicaThumbnail.js';
import {
  defaultDelicaCode,
  delicaEntry,
} from '@/components/peyote/delicaCatalog.js';
import RaisedTrianglePreview from '@/components/design3d/RaisedTrianglePreview.vue';
import {
  designShapes,
  shapeFor,
  triangleCell,
  trianglePlacement,
  triangleRow,
  MAX_TRIANGLE_ROUNDS,
  triangleBeadCount,
  triangleRounds,
} from '@/lib/projects/designShapes.js';
import {
  getProject,
  loadProjectData,
  renameProject,
  saveProjectData,
} from '@/lib/projects/projectStore.js';

const props = defineProps({ id: { type: String, required: true } });
const id = props.id;
const stored = loadProjectData(id) ?? designShapes.triangle.blank();
const savedColors = stored.panels.map((panel) => [...panel]);
const rounds = triangleRounds(stored);
const design = ref({
  ...stored,
  rounds,
  panels: savedColors.map((panel) => panel.slice(0, triangleBeadCount(rounds))),
});
const shape = shapeFor(design.value);
const projectName = ref(getProject(id)?.name ?? '');
const selected = ref(defaultDelicaCode);
const recent = ref([]);
const mode = ref('editor');
const zoom = ref(1);
const tab = ref('colors');
const tool = ref('paint');
const faceFilter = ref('');
const activeFace = ref(0);
const outlines = ref(false);
const reference = ref(null);
const referenceVisible = ref(true);
const referenceBeside = ref(true);
const undoStack = ref([]);
const redoStack = ref([]);
const saveFailed = ref(false);
let pendingSave;
let brush;

const tabs = [
  { value: 'colors', label: 'Colors', icon: 'palette' },
  { value: 'properties', label: 'Properties', icon: 'sliders' },
  { value: 'reference', label: 'Reference', icon: 'image' },
];
const tools = computed(() => [
  {
    id: 'paint',
    label: 'Paint',
    icon: 'brush',
    primary: true,
    active: tool.value === 'paint',
    onClick: () => {
      tool.value = 'paint';
    },
  },
  {
    id: 'fill',
    label: 'Fill face',
    icon: 'bucket',
    primary: true,
    active: tool.value === 'fill',
    onClick: () => {
      tool.value = 'fill';
    },
  },
  {
    id: 'pick',
    label: 'Pick bead',
    icon: 'eyedropper',
    primary: true,
    active: tool.value === 'pick',
    onClick: () => {
      tool.value = 'pick';
    },
  },
  {
    id: 'undo',
    label: 'Undo',
    icon: 'undo',
    disabled: !undoStack.value.length,
    onClick: () => restore(undoStack.value, redoStack.value),
  },
  {
    id: 'redo',
    label: 'Redo',
    icon: 'redo',
    disabled: !redoStack.value.length,
    onClick: () => restore(redoStack.value, undoStack.value),
  },
]);
const statusItems = computed(() => [
  { key: 'shape', value: shape.label },
  {
    key: 'beads',
    value: `${design.value.panels.flat().length} beads`,
  },
  { key: 'face', value: `Face ${activeFace.value + 1}` },
  ...(saveFailed.value
    ? [{ key: 'save', value: 'Changes could not be saved' }]
    : []),
]);

// Top projection of the same three faces and bead addresses exported from Blender.
const layout = computed(() => {
  const cells = design.value.panels.flatMap((panel, side) =>
    panel.map((_, index) => {
      const { row, column } = triangleCell(index);
      return {
        panel: side,
        index,
        row,
        column,
        ...trianglePlacement(side, index),
      };
    }),
  );
  const xs = cells.map((cell) => cell.x),
    ys = cells.map((cell) => cell.y);
  const minX = Math.min(...xs),
    maxX = Math.max(...xs);
  const minY = Math.min(...ys),
    maxY = Math.max(...ys);
  const scale = 94 / (Math.max(maxX - minX, maxY - minY) + 2);
  return cells.map((cell) => ({
    ...cell,
    x: 50 + (cell.x - (minX + maxX) / 2) * scale,
    y: 50 - (cell.y - (minY + maxY) / 2) * scale,
    angle: 90 - (cell.angle * 180) / Math.PI,
    width: 1.59 * scale,
    height: 1.29 * scale,
  }));
});

function resizeRounds(event) {
  const next = Math.min(
    MAX_TRIANGLE_ROUNDS,
    Math.max(1, Math.trunc(Number(event.target.value) || design.value.rounds)),
  );
  event.target.value = next;
  if (next === design.value.rounds) return;
  rememberColors();
  design.value.rounds = next;
  design.value.panels = savedColors.map((panel) =>
    Array.from(
      { length: triangleBeadCount(next) },
      (_, index) => panel[index] ?? 'DB141',
    ),
  );
  undoStack.value = [];
  redoStack.value = [];
  scheduleSave();
}

function rememberColors() {
  design.value.panels.forEach((panel, side) => {
    panel.forEach((code, index) => {
      savedColors[side][index] = code;
    });
  });
}

function rename(name) {
  renameProject(id, name);
  projectName.value = name;
}

function save() {
  clearTimeout(pendingSave);
  pendingSave = undefined;
  try {
    rememberColors();
    saveProjectData(id, { ...design.value, panels: savedColors });
    saveFailed.value = false;
  } catch {
    saveFailed.value = true;
  }
}
function scheduleSave() {
  clearTimeout(pendingSave);
  pendingSave = setTimeout(save, 200);
}

function setFace(face, cells, code) {
  if (cells.every((value, i) => value === design.value.panels[face][i])) return;
  undoStack.value.push([{ face, cells: design.value.panels[face] }]);
  redoStack.value = [];
  design.value.panels[face] = cells;
  recent.value = [
    code,
    ...recent.value.filter((value) => value !== code),
  ].slice(0, 12);
  scheduleSave();
}
function restore(from, to) {
  const previous = from.pop();
  if (!previous) return;
  to.push(
    previous.map(({ face }) => ({ face, cells: design.value.panels[face] })),
  );
  for (const { face, cells } of previous) design.value.panels[face] = cells;
  activeFace.value = previous[0].face;
  scheduleSave();
}
function onBeadClick(event, cell) {
  // Mouse and touch painting is handled by the brush. Keyboard clicks still paint.
  if (tool.value !== 'paint' || event.detail === 0) editCell(cell);
}

function startBrush(event) {
  if (tool.value !== 'paint' || event.button !== 0 || brush) return;
  event.preventDefault();
  event.currentTarget.setPointerCapture(event.pointerId);
  const bead = event.currentTarget.querySelector('.triangle-editor__bead');
  brush = {
    id: event.pointerId,
    surface: event.currentTarget,
    code: selected.value,
    x: event.clientX,
    y: event.clientY,
    step: Math.max(1, Math.min(bead.offsetWidth, bead.offsetHeight) / 4),
    before: new Map(),
  };
  sweepBrush(event.clientX, event.clientY);
}

function sweepBrush(x, y) {
  const dx = x - brush.x,
    dy = y - brush.y;
  const steps = Math.max(1, Math.ceil(Math.hypot(dx, dy) / brush.step));
  for (let i = 1; i <= steps; i++) {
    const hit = document.elementFromPoint(
      brush.x + (dx * i) / steps,
      brush.y + (dy * i) / steps,
    );
    const bead = hit?.closest('.triangle-editor__bead');
    if (!bead || !brush.surface.contains(bead)) continue;
    const { panel, index } = bead.dataset;
    if (faceFilter.value !== '' && panel !== faceFilter.value) continue;
    const face = Number(panel);
    const cells = design.value.panels[face];
    if (cells[index] === brush.code) continue;
    if (!brush.before.has(face)) brush.before.set(face, [...cells]);
    cells[index] = brush.code;
    activeFace.value = face;
  }
  brush.x = x;
  brush.y = y;
}

function moveBrush(event) {
  if (brush?.id !== event.pointerId) return;
  const samples = event.getCoalescedEvents?.() ?? [];
  for (const sample of samples.length ? samples : [event])
    sweepBrush(sample.clientX, sample.clientY);
}

function endBrush(event) {
  if (brush?.id !== event.pointerId) return;
  if (event.type === 'pointerup') moveBrush(event);
  const { before, code } = brush;
  brush = undefined;
  if (!before.size) return;
  undoStack.value.push(
    Array.from(before, ([face, cells]) => ({ face, cells })),
  );
  redoStack.value = [];
  recent.value = [
    code,
    ...recent.value.filter((value) => value !== code),
  ].slice(0, 12);
  scheduleSave();
}

function editCell(cell) {
  if (faceFilter.value !== '' && String(cell.panel) !== faceFilter.value)
    return;
  activeFace.value = cell.panel;
  const cells = design.value.panels[cell.panel];
  if (tool.value === 'pick') {
    selected.value = cells[cell.index];
    tool.value = 'paint';
  } else if (tool.value === 'fill') {
    fillFace(selected.value);
  } else {
    const next = [...cells];
    next[cell.index] = selected.value;
    setFace(cell.panel, next, selected.value);
  }
}
function fillFace(code) {
  if (!delicaEntry(code)) return;
  const face =
    faceFilter.value === '' ? activeFace.value : Number(faceFilter.value);
  setFace(face, Array(triangleBeadCount(design.value.rounds)).fill(code), code);
}
function removeReference() {
  if (reference.value) URL.revokeObjectURL(reference.value);
  reference.value = null;
}
function uploadReference(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  removeReference();
  reference.value = URL.createObjectURL(file);
  referenceVisible.value = true;
}
onBeforeUnmount(() => {
  if (pendingSave) save();
  removeReference();
});
</script>

<style scoped>
.triangle-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
}
.triangle-editor {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) minmax(275px, 345px);
}
.triangle-editor__canvas {
  position: relative;
  overflow: auto;
  padding: 16px;
  background: var(--canvas-bg, var(--surface-muted));
}
.triangle-editor__paper {
  position: relative;
  aspect-ratio: 1;
  width: calc(min(100%, 590px) * var(--zoom));
  margin-inline: auto;
}
.triangle-editor__paper.is-painting {
  touch-action: none;
}
.triangle-editor__bead {
  position: absolute;
  width: 2.7%;
  height: 2.2%;
  translate: -50% -50%;
  border-radius: 18%;
  background-size: 107% 107%;
  background-position: center;
}
.triangle-editor__bead:hover,
.triangle-editor__bead:focus-visible {
  outline: 2px solid var(--accent);
  z-index: 1;
}
.has-outlines .triangle-editor__bead {
  box-shadow: inset 0 0 0 1px #56453788;
}
.triangle-editor__bead.is-muted {
  opacity: 0.24;
}
.triangle-editor__reference {
  position: absolute;
  inset: 10px;
  width: calc(100% - 20px);
  max-height: 75%;
  object-fit: contain;
  opacity: 0.34;
  pointer-events: none;
}
.with-reference .triangle-editor__reference {
  position: static;
  max-height: 240px;
  opacity: 1;
  display: block;
}
.triangle-editor__panel {
  overflow: auto;
  display: grid;
  gap: 14px;
  align-content: start;
  padding: 14px;
  background: var(--surface);
  border-left: 1px solid var(--border);
}
.triangle-editor__properties {
  display: grid;
  gap: 14px;
}
.triangle-editor__properties select {
  margin-inline-start: 6px;
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 4px;
}
.triangle-output {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 16px;
}
h1 {
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 12px;
}
td,
th {
  padding: 6px 8px;
  text-align: left;
  border-bottom: 1px solid var(--border);
}
@media (max-width: 850px) {
  .triangle-editor {
    grid-template-columns: auto minmax(0, 1fr);
    overflow: auto;
  }
  .triangle-editor__panel {
    grid-column: 1 / -1;
  }
}
</style>
