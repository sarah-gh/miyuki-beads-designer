<template>
  <div class="peyote-editor">
    <!-- ===== Header: project name + file actions ===== -->
    <AppPortal to="header-start">
      <EditableTitle v-model="projectName" />
      <SavedBadge
        class="peyote-editor__saved"
        :timestamp="lastSavedTime"
      />
    </AppPortal>

    <AppPortal to="header">
      <FileActions
        :export-items="exportItems"
        :more-items="moreItems"
        @new="newPattern"
        @open="openProjects"
        @import="handleTxtUpload"
      />
    </AppPortal>

    <!-- ===== Toolbar: zoom & view toggles (only while the editor is shown) ===== -->
    <AppPortal to="toolbar-center">
      <div
        v-if="active"
        class="peyote-editor__view-controls"
      >
        <ZoomControls
          v-model="zoom"
          class="peyote-editor__zoom"
          @fit="canvasRef?.fitToScreen()"
          @fit-width="canvasRef?.fitWidth()"
        />
        <span class="peyote-editor__toolbar-sep"></span>
        <BaseButton
          size="sm"
          icon="maximize"
          icon-only
          variant="ghost"
          title="Fit to screen (0)"
          aria-label="Fit to screen"
          @click="canvasRef?.fitToScreen()"
        />
        <BaseButton
          size="sm"
          icon="hand"
          icon-only
          variant="ghost"
          :active="panMode"
          :pressed="panMode"
          title="Hand tool — drag to move the pattern (H, or hold Space)"
          aria-label="Hand tool"
          @click="togglePanMode"
        />
        <span class="peyote-editor__toolbar-sep hide-on-phone"></span>
        <BaseButton
          size="sm"
          icon="grid"
          icon-only
          variant="ghost"
          class="hide-on-phone"
          :active="showGridLines"
          :pressed="showGridLines"
          title="Show grid lines"
          aria-label="Show grid lines"
          @click="showGridLines = !showGridLines"
        />
        <BaseButton
          size="sm"
          :icon="showReference && selectedImage ? 'eye' : 'eyeOff'"
          icon-only
          variant="ghost"
          class="hide-on-phone"
          :active="showReference && !!selectedImage"
          :pressed="showReference && !!selectedImage"
          :disabled="!selectedImage"
          :title="
            selectedImage
              ? 'Show reference image'
              : 'Add a reference image in the Reference tab'
          "
          aria-label="Show reference image"
          @click="showReference = !showReference"
        />
      </div>
    </AppPortal>

    <!-- ===== Body ===== -->
    <div class="peyote-editor__body">
      <ToolSidebar
        class="peyote-editor__tools"
        :items="toolItems"
      />

      <div class="peyote-editor__workspace">
        <div
          v-if="isPasteMode"
          class="peyote-editor__banner"
          role="status"
        >
          <BaseIcon
            name="target"
            :size="16"
          />
          <span
            >Click a bead to paste the copied beads{{
              pasteMirrorLabel
            }}.</span
          >
          <BaseButton
            size="sm"
            variant="ghost"
            icon="x"
            @click="cancelPasteMode"
            >Cancel</BaseButton
          >
        </div>

        <div
          class="peyote-editor__stage"
          :class="referenceSideBySide ? 'is-side' : 'is-below'"
        >
          <figure
            v-if="showReferencePane"
            class="peyote-editor__reference"
          >
            <img
              :src="selectedImage"
              alt="Reference image"
            />
            <button
              type="button"
              class="peyote-editor__reference-close"
              aria-label="Hide reference image"
              title="Hide reference image"
              @click="showReference = false"
            >
              <BaseIcon
                name="x"
                :size="14"
              />
            </button>
          </figure>

          <BeadCanvas
            ref="canvasRef"
            v-model:zoom="zoom"
            class="peyote-editor__canvas"
            :cells="canvasCells"
            :columns="cols"
            :row-count="rows"
            :cell-width="cellWidth"
            :cell-height="cellHeight"
            :selection="canvasSelection"
            :show-grid-lines="showGridLines"
            :show-rulers="showRulers"
            :pan-mode="panMode"
            :stagger="gridOrientation === 'vertical' ? 'columns' : 'rows'"
            :color-of="beadSwatch"
            :draw-bead="drawDelicaBead"
            :image-prefix="BEAD_IMAGE_PREFIX"
            @stroke-start="startStroke"
            @stroke-move="moveStroke"
            @stroke-end="endStroke"
            @stroke-cancel="cancelStroke"
            @hover="hoverIndex = $event"
          >
            <!-- Phone / tablet: buttons that open the side panel as a sheet -->
            <div
              v-if="isCompact"
              class="peyote-editor__fabs"
            >
              <button
                type="button"
                class="peyote-editor__fab"
                aria-label="Colours"
                @click="openSheet('colors')"
              >
                <span
                  class="peyote-editor__fab-swatch"
                  :style="currentPaintStyle"
                ></span>
              </button>
              <button
                type="button"
                class="peyote-editor__fab"
                aria-label="Properties"
                @click="openSheet('properties')"
              >
                <BaseIcon
                  name="sliders"
                  :size="20"
                />
              </button>
              <button
                type="button"
                class="peyote-editor__fab"
                aria-label="Reference image"
                @click="openSheet('reference')"
              >
                <BaseIcon
                  name="image"
                  :size="20"
                />
              </button>
            </div>
          </BeadCanvas>
        </div>

        <StatusBar :items="statusItems" />
      </div>

      <!-- ===== Side panel (desktop) / bottom sheet (phone & tablet) ===== -->
      <component
        :is="isCompact ? BottomSheet : 'aside'"
        v-bind="panelWrapperProps"
      >
        <template
          v-if="isCompact"
          #header
        >
          <SegmentedControl
            v-model="panelTab"
            :options="panelTabs"
            variant="tabs"
            size="sm"
          />
        </template>

        <div class="peyote-editor__panel-inner">
          <PanelCard
            v-if="!isCompact"
            flush
            class="peyote-editor__tabs-card"
          >
            <div class="peyote-editor__tabs-head">
              <SegmentedControl
                v-model="panelTab"
                :options="panelTabs"
                variant="tabs"
                size="md"
                block
              />
            </div>
            <div class="peyote-editor__tabs-body">
              <component
                :is="panelComponent"
                v-bind="panelProps"
                v-on="panelListeners"
              />
            </div>
          </PanelCard>

          <component
            :is="panelComponent"
            v-else
            v-bind="panelProps"
            v-on="panelListeners"
          />

          <GridDimensionsCard
            v-model:columns="cols"
            v-model:rows="rows"
            :max-columns="MAX_SIZE"
            :max-rows="MAX_SIZE"
            hint="Beads outside the new size are removed; the rest are kept."
          />

          <PanelCard
            title="Peyote Presets"
            icon="peyote"
            collapsible
          >
            <select
              class="peyote-editor__preset"
              aria-label="Peyote presets"
              value=""
              @change="applyPreset"
            >
              <option
                value=""
                disabled
              >
                Choose a pattern…
              </option>
              <option
                v-for="preset in peyotePresets"
                :key="preset.id"
                :value="preset.id"
              >
                {{ preset.name }} ({{ preset.cols }} × {{ preset.rows }})
              </option>
            </select>
            <p class="peyote-editor__hint">
              Loading a preset replaces the current grid. You can undo it.
            </p>
          </PanelCard>
        </div>
      </component>
    </div>

    <!-- Hidden picker used by the ⋮ menu -->
    <FilePickerButton
      ref="referencePicker"
      class="sr-only"
      accept="image/*"
      tabindex="-1"
      aria-hidden="true"
      @change="onReferenceUpload"
    />
  </div>
</template>

<script setup>
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  watch,
} from 'vue';
import { useMediaQuery } from '@vueuse/core';
import { useRoute, useRouter } from 'vue-router';
import {
  getProject,
  loadProjectData,
  renameProject,
  saveProjectData,
} from '@/lib/projects/projectStore.js';
import AppPortal from '@/components/layout/AppPortal.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseIcon from '@/components/ui/BaseIcon.vue';
import BottomSheet from '@/components/ui/BottomSheet.vue';
import EditableTitle from '@/components/ui/EditableTitle.vue';
import FilePickerButton from '@/components/ui/FilePickerButton.vue';
import PanelCard from '@/components/ui/PanelCard.vue';
import SavedBadge from '@/components/ui/SavedBadge.vue';
import SegmentedControl from '@/components/ui/SegmentedControl.vue';
import StatusBar from '@/components/ui/StatusBar.vue';
import BeadCanvas from '@/components/editor/BeadCanvas.vue';
import FileActions from '@/components/editor/FileActions.vue';
import GridDimensionsCard from '@/components/editor/GridDimensionsCard.vue';
import PropertiesPanel from '@/components/editor/PropertiesPanel.vue';
import ReferencePanel from '@/components/editor/ReferencePanel.vue';
import ToolSidebar from '@/components/editor/ToolSidebar.vue';
import ZoomControls from '@/components/editor/ZoomControls.vue';
import {
  showConfirm,
  showError,
  showInfo,
  showToast,
} from '@/lib/utils/sweetalert';
import DelicaColorsPanel from './DelicaColorsPanel.vue';
import { beadSwatch, defaultDelicaCode, delicaEntry } from './delicaCatalog.js';
import { peyotePresets } from './peyotePresets.js';
import { delicaThumbnail, drawDelicaBead } from './delicaThumbnail.js';

const props = defineProps({
  /** The saved project this editor reads and writes. */
  projectId: { type: String, required: true },
  initialOrientation: { type: String, default: 'vertical' },
  initialPattern: { type: Array, default: null },
  initialRows: { type: Number, default: null },
  initialCols: { type: Number, default: null },
  /** False while another view (3D, steps…) is shown in place of the editor. */
  active: { type: Boolean, default: true },
});

const emit = defineEmits(['update-grid', 'preview-grid']);

const BEAD_IMAGE_PREFIX = '/miyuki-beads-designer/beads/';
const route = useRoute();
const router = useRouter();
function openProjects() {
  // Also used by the Weaving page, so go back to whichever mode is open.
  router.push({ name: 'projects', query: { mode: route.meta.mode ?? 'peyote' } });
}
const MAX_SIZE = 200;
const HISTORY_LIMIT = 10;

// ---- Pattern state -------------------------------------------------------------------
const cols = ref(props.initialCols ?? 12); // beads across (columns)
const rows = ref(props.initialRows ?? 50); // beads down each column
const cellWidth = ref(15);
const cellHeight = ref(17);
const gridOrientation = ref(props.initialOrientation); // 'vertical' | 'horizontal'

const selectedColor = ref(defaultDelicaCode);
const backgroundColor = ref('#ffffff');
const backgroundMode = ref('color'); // 'color' | 'image'
const selectedBackgroundImage = ref(null);
const selectionMode = ref('color'); // paint with a Delica colour or a bead image
const recentColors = ref([]);

const availableImages = ref([]);
const selectedBeadImage = ref(null);
const recentImages = ref([]);
const selectedImage = ref(null); // reference image (preview only)

const projectName = ref(getProject(props.projectId)?.name || 'Untitled peyote');
const lastSavedTime = ref(null);

// grid[r][c] (rows x cols)
const grid = reactive([]);
const gridInitialized = ref(false);

// ---- Tools state ---------------------------------------------------------------------
const tool = ref('paint'); // paint | fill | select | selectRect
const selection = ref([]); // ["r,c", ...]
const clipboard = ref(null); // [{ r, c, color }]
const isPasteMode = ref(false);
const pasteMirrorMode = ref('none'); // 'none' | 'horizontal' | 'vertical'
const rectStartCell = ref(null);
const rectEndCell = ref(null);
let strokeActive = false;

// ---- History (undo / redo) -----------------------------------------------------------
const history = ref([]);
const historyIndex = ref(-1);
const pendingHistorySave = ref(false);

function getHistoryState() {
  return {
    grid: getGridMatrix(),
    orientation: gridOrientation.value,
    cellWidth: cellWidth.value,
    cellHeight: cellHeight.value,
  };
}

function saveToHistory() {
  const currentState = getHistoryState();
  if (historyIndex.value < history.value.length - 1) {
    history.value = history.value.slice(0, historyIndex.value + 1);
  }
  const lastState = history.value[historyIndex.value];
  if (lastState && JSON.stringify(currentState) === JSON.stringify(lastState))
    return;

  history.value.push(currentState);
  historyIndex.value = history.value.length - 1;
  if (history.value.length > HISTORY_LIMIT) {
    history.value.shift();
    historyIndex.value--;
  }
}

function resetHistory() {
  pendingHistorySave.value = false;
  history.value = [getHistoryState()];
  historyIndex.value = 0;
}

/** Save the state before an operation (batched until endOperation). */
function startOperation() {
  if (!pendingHistorySave.value) {
    saveToHistory();
    pendingHistorySave.value = true;
  }
}

function endOperation() {
  if (pendingHistorySave.value) {
    nextTick(() => {
      if (!pendingHistorySave.value) return;
      saveToHistory();
      pendingHistorySave.value = false;
    });
  }
}

function restoreHistory(index) {
  const state = history.value[index];
  rows.value = state.grid.length;
  cols.value = state.grid[0]?.length ?? 1;
  gridOrientation.value = state.orientation;
  cellWidth.value = state.cellWidth;
  cellHeight.value = state.cellHeight;
  grid.splice(0, grid.length, ...state.grid.map((row) => [...row]));
  clearSelection();
  cancelPasteMode();
  historyIndex.value = index;
  emit('update-grid', ...snapshot());
}

function undo() {
  if (pendingHistorySave.value) {
    saveToHistory();
    pendingHistorySave.value = false;
  }
  if (historyIndex.value > 0) restoreHistory(historyIndex.value - 1);
}

function redo() {
  if (historyIndex.value < history.value.length - 1)
    restoreHistory(historyIndex.value + 1);
}

const canUndo = computed(() => historyIndex.value > 0);
const canRedo = computed(
  () => historyIndex.value < history.value.length - 1,
);

// ---- Grid setup / resize -------------------------------------------------------------
function initializeGrid(initialPattern = null) {
  const newGrid = Array.from({ length: rows.value }, () =>
    Array.from({ length: cols.value }, () => backgroundColor.value),
  );
  if (Array.isArray(initialPattern) && initialPattern.length > 0) {
    for (let r = 0; r < rows.value; r++) {
      for (let c = 0; c < cols.value; c++) {
        const index = r * cols.value + c;
        if (index < initialPattern.length) {
          newGrid[r][c] = initialPattern[index] || backgroundColor.value;
        }
      }
    }
  }
  grid.splice(0, grid.length, ...newGrid);
  gridInitialized.value = true;
  resetHistory();
}

function resizeGrid(newRows, newCols) {
  const oldRows = grid.length;
  const oldCols = grid[0]?.length ?? 0;
  startOperation();
  const newGrid = Array.from({ length: newRows }, () =>
    Array.from({ length: newCols }, () => backgroundColor.value),
  );
  for (let r = 0; r < Math.min(oldRows, newRows); r++) {
    for (let c = 0; c < Math.min(oldCols, newCols); c++) {
      if (grid[r]?.[c] !== undefined) newGrid[r][c] = grid[r][c];
    }
  }
  grid.splice(0, grid.length, ...newGrid);
  gridInitialized.value = true;
  clearSelection();
  endOperation();
}

watch([rows, cols], ([newRows, newCols]) => {
  if (!gridInitialized.value) return;
  const validRows = Math.max(1, Math.min(MAX_SIZE, newRows || 1));
  const validCols = Math.max(1, Math.min(MAX_SIZE, newCols || 1));
  if (validRows !== newRows) rows.value = validRows;
  if (validCols !== newCols) cols.value = validCols;
  if (validRows !== grid.length || validCols !== grid[0]?.length) {
    resizeGrid(validRows, validCols);
  }
});

// Restore the grid when the parent passes a new pattern back in.
watch(
  () => [props.initialPattern, props.initialRows, props.initialCols],
  ([newPattern, newRows, newCols], [oldPattern]) => {
    if (!gridInitialized.value) return;
    if (
      Array.isArray(newPattern) &&
      newPattern.length > 0 &&
      newPattern !== oldPattern
    ) {
      if (newRows && newRows !== rows.value) rows.value = newRows;
      if (newCols && newCols !== cols.value) cols.value = newCols;
      nextTick(() => withoutAutoSave(() => initializeGrid(newPattern)));
    }
  },
  { deep: true },
);

// ---- Recent colours & bead images ----------------------------------------------------
function addToRecentColors(color) {
  if (color === backgroundColor.value) return;
  const index = recentColors.value.indexOf(color);
  if (index > -1) recentColors.value.splice(index, 1);
  recentColors.value.unshift(color);
  if (recentColors.value.length > 20)
    recentColors.value = recentColors.value.slice(0, 20);
}

function removeRecentColor(color) {
  const index = recentColors.value.indexOf(color);
  if (index > -1) recentColors.value.splice(index, 1);
}

function clearRecentColors() {
  recentColors.value = [];
}

function addToRecentImages(image) {
  const index = recentImages.value.findIndex((img) => img.url === image.url);
  if (index > -1) recentImages.value.splice(index, 1);
  recentImages.value.unshift(image);
  if (recentImages.value.length > 10)
    recentImages.value = recentImages.value.slice(0, 10);
}

function removeRecentImage(image) {
  const index = recentImages.value.findIndex((img) => img.url === image.url);
  if (index > -1) recentImages.value.splice(index, 1);
}

function clearRecentImages() {
  recentImages.value = [];
}

function selectBeadImage(image) {
  selectedBeadImage.value = image;
  addToRecentImages(image);
  selectionMode.value = 'image';
}

function loadAvailableImages() {
  const imageFiles = [
    '310.jpg',
    '1130.jpg',
    '1135.jpg',
    '2116.jpg',
    '2131.jpg',
    '2132.jpg',
    '725.jpg',
    '877.jpg',
    'f111.jpg',
    'f222.jpg',
    'f333.jpg',
    'f444.jpg',
    'f555.jpg',
    'f666.jpg',
    'f777.jpg',
    'f888.jpg',
    'f999.jpg',
    'f1010.jpg',
    'f1111.jpg',
    'f1212.jpg',
    'f1313.jpg',
    'f1414.jpg',
    'f1515.jpg',
    'Awhite.jpg',
    'Turquoise.jpg',
    'db0042.jpg',
    'db0221.jpg',
    'db0231.jpg',
    'db0268.jpg',
    'db0623.jpg',
    'db0627.jpg',
    'db0635.jpg',
    'db0651.jpg',
    'db0680.jpg',
    'db0721.jpg',
    'db0722.jpg',
    'db0723.jpg',
    'db0725.jpg',
    'db0726.jpg',
    'db0729.jpg',
    'db0759.jpg',
    'db0763.jpg',
    'db0791.jpg',
    'db0796.jpg',
    'db0877.jpg',
    'db1132.jpg',
    'db1133.jpg',
    'db1135.jpg',
    'db1153.jpg',
    'db1262.jpg',
    'db1570.jpg',
    'db1802.jpg',
    'db1832.jpg',
    'db1832-2.jpg',
    'db2111.jpg',
    'db2127.jpg',
    'db2131.jpg',
    'db2132.jpg',
    'db2144.jpg',
    'db2316.jpg',
    'db2352.jpg',
    'db2357.jpg',
    'db310.jpg',
    'db626.jpg',
    'db732.jpg',
    'db856.jpg',
  ];
  availableImages.value = imageFiles.map((filename) => ({
    name: filename,
    url: `${BEAD_IMAGE_PREFIX}${filename}`,
    displayName: filename.replace('.jpg', ''),
  }));
}

// ---- Painting ------------------------------------------------------------------------
function currentPaintValue() {
  return selectionMode.value === 'image' && selectedBeadImage.value
    ? selectedBeadImage.value.url
    : selectedColor.value;
}

function rememberPaintValue(value) {
  if (value === selectedColor.value) addToRecentColors(value);
  else if (selectedBeadImage.value?.url === value)
    addToRecentImages(selectedBeadImage.value);
}

function paintCell(r, c) {
  if (grid[r]?.[c] === undefined) return;
  const value = currentPaintValue();
  if (grid[r][c] === value) return;
  grid[r][c] = value;
  rememberPaintValue(value);
}

function fillArea(startR, startC) {
  if (grid[startR]?.[startC] === undefined) return;
  const targetValue = grid[startR][startC];
  const fillValue = currentPaintValue();
  if (targetValue === fillValue) return;

  const visited = new Set();
  const stack = [[startR, startC]];
  while (stack.length > 0) {
    const [r, c] = stack.pop();
    const key = `${r},${c}`;
    if (
      visited.has(key) ||
      r < 0 ||
      r >= rows.value ||
      c < 0 ||
      c >= cols.value ||
      grid[r]?.[c] !== targetValue
    )
      continue;
    visited.add(key);
    grid[r][c] = fillValue;
    stack.push([r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1]);
  }
  rememberPaintValue(fillValue);
}

function changeAllBeadsToColor() {
  const value =
    backgroundMode.value === 'image' && selectedBackgroundImage.value
      ? selectedBackgroundImage.value.url
      : backgroundColor.value;
  fillAllBeads(value);
}

function fillAllBeads(value) {
  startOperation();
  for (let r = 0; r < rows.value; r++) {
    for (let c = 0; c < cols.value; c++) {
      if (grid[r]?.[c] !== undefined) grid[r][c] = value;
    }
  }
  endOperation();
}

// ---- Selection -----------------------------------------------------------------------
function toggleSelection(r, c) {
  const key = `${r},${c}`;
  const index = selection.value.indexOf(key);
  if (index > -1) selection.value.splice(index, 1);
  else selection.value.push(key);
}

function rectKeys(start, end) {
  if (!start || !end) return [];
  const keys = [];
  for (let r = Math.min(start.r, end.r); r <= Math.max(start.r, end.r); r++) {
    for (let c = Math.min(start.c, end.c); c <= Math.max(start.c, end.c); c++) {
      if (grid[r]?.[c] !== undefined) keys.push(`${r},${c}`);
    }
  }
  return keys;
}

function selectCellsInRectangle(start, end) {
  rectKeys(start, end).forEach((key) => {
    if (!selection.value.includes(key)) selection.value.push(key);
  });
}

function clearSelection() {
  selection.value = [];
}

function selectedCells() {
  return selection.value.map((key) => {
    const [r, c] = key.split(',').map(Number);
    return { r, c, color: grid[r]?.[c] || backgroundColor.value };
  });
}

function mirrorSelection() {
  if (selection.value.length === 0) return;
  startOperation();
  const cells = selectedCells();
  const maxC = Math.max(...cells.map((cell) => cell.c));
  cells.forEach(({ r, c, color }) => {
    const newC = maxC - c;
    if (newC >= 0 && newC < cols.value && grid[r]?.[newC] !== undefined) {
      grid[r][newC] = color;
    }
  });
  endOperation();
}

function mirrorSelectionVertical() {
  if (selection.value.length === 0) return;
  startOperation();
  const cells = selectedCells();
  const maxR = Math.max(...cells.map((cell) => cell.r));
  cells.forEach(({ r, c, color }) => {
    const newR = maxR - r;
    if (newR >= 0 && newR < rows.value && grid[newR]?.[c] !== undefined) {
      grid[newR][c] = color;
    }
  });
  endOperation();
}

// ---- Clipboard -----------------------------------------------------------------------
const hasClipboard = computed(() => !!clipboard.value?.length);

function copySelection() {
  if (selection.value.length === 0) return;
  clipboard.value = selectedCells();
  clearSelection();
  enablePasteMode();
}

function cutSelection() {
  if (selection.value.length === 0) return;
  startOperation();
  clipboard.value = selectedCells();
  clipboard.value.forEach(({ r, c }) => {
    if (grid[r]?.[c] !== undefined) grid[r][c] = backgroundColor.value;
  });
  clearSelection();
  enablePasteMode();
  endOperation();
}

function getTransformedClipboard(mirrorMode = 'none') {
  if (!clipboard.value) return [];
  const minR = Math.min(...clipboard.value.map((cell) => cell.r));
  const minC = Math.min(...clipboard.value.map((cell) => cell.c));
  const maxR = Math.max(...clipboard.value.map((cell) => cell.r));
  const maxC = Math.max(...clipboard.value.map((cell) => cell.c));
  return clipboard.value.map(({ r, c, color }) => ({
    r: mirrorMode === 'vertical' ? minR + (maxR - r) : r,
    c: mirrorMode === 'horizontal' ? minC + (maxC - c) : c,
    color,
  }));
}

function pasteAtCenter(mirrorMode = 'none') {
  if (!clipboard.value) return;
  startOperation();
  clearSelection();
  const transformed = getTransformedClipboard(mirrorMode);
  if (transformed.length === 0) {
    endOperation();
    return;
  }

  const minR = Math.min(...transformed.map((cell) => cell.r));
  const minC = Math.min(...transformed.map((cell) => cell.c));
  const maxR = Math.max(...transformed.map((cell) => cell.r));
  const maxC = Math.max(...transformed.map((cell) => cell.c));
  const offsetR = Math.floor(rows.value / 2) - (minR + maxR) / 2;
  const offsetC = Math.floor(cols.value / 2) - (minC + maxC) / 2;

  transformed.forEach(({ r, c, color }) => {
    const targetCol = c + offsetC;
    // Peyote: moving between odd and even columns shifts the beads one row.
    const sourceIsOdd = minC % 2 === 1;
    const targetIsOdd = targetCol % 2 === 1;
    const cellAdjustment = sourceIsOdd !== targetIsOdd ? -1 : 0;
    const newR = r + offsetR + cellAdjustment;
    const newC = targetCol;
    if (
      newR >= 0 &&
      newR < rows.value &&
      newC >= 0 &&
      newC < cols.value &&
      grid[newR]?.[newC] !== undefined
    ) {
      grid[newR][newC] = color;
    }
  });
  endOperation();
}

function pasteAtPosition(r, c, mirrorMode = 'none') {
  if (!clipboard.value) return;
  startOperation();
  clearSelection();
  const transformed = getTransformedClipboard(mirrorMode);
  if (transformed.length === 0) {
    endOperation();
    return;
  }

  const minR = Math.min(...transformed.map((cell) => cell.r));
  const minC = Math.min(...transformed.map((cell) => cell.c));

  transformed.forEach(({ r: origR, c: origC, color }) => {
    const offsetR = origR - minR;
    const offsetC = origC - minC;
    const targetCol = c + offsetC;

    // Peyote row adjustment based on source vs target column parity.
    const sourceIsOdd = minC % 2 === 1;
    const targetIsOdd = targetCol % 2 === 1;
    const cellColIsOdd = origC % 2 === 1;
    let cellAdjustment;
    if (sourceIsOdd && !targetIsOdd) {
      cellAdjustment = cellColIsOdd ? 0 : -1;
    } else if (!sourceIsOdd && targetIsOdd) {
      cellAdjustment = cellColIsOdd ? -1 : -2;
    } else {
      cellAdjustment = mirrorMode === 'none' ? -1 : 0;
    }

    const newR = r + offsetR + cellAdjustment;
    const newC = targetCol;
    if (
      newR >= 0 &&
      newR < rows.value &&
      newC >= 0 &&
      newC < cols.value &&
      grid[newR]?.[newC] !== undefined
    ) {
      grid[newR][newC] = color;
    }
  });
  endOperation();
  // Paste mode stays on so the user can paste several times.
}

function enablePasteMode(mode = 'none') {
  if (!hasClipboard.value) return;
  panMode.value = false;
  pasteMirrorMode.value = mode;
  isPasteMode.value = true;
}

function cancelPasteMode() {
  isPasteMode.value = false;
  pasteMirrorMode.value = 'none';
}

function togglePasteMode(mode) {
  if (isPasteMode.value && pasteMirrorMode.value === mode) cancelPasteMode();
  else enablePasteMode(mode);
}

const pasteMirrorLabel = computed(
  () =>
    ({ horizontal: ' (mirrored)', vertical: ' (flipped)' })[
      pasteMirrorMode.value
    ] ?? '',
);

// ---- Canvas strokes ------------------------------------------------------------------
function cellOf(index) {
  return { r: Math.floor(index / cols.value), c: index % cols.value };
}

function startStroke(index) {
  const { r, c } = cellOf(index);
  strokeActive = false;

  if (isPasteMode.value) {
    pasteAtPosition(r, c, pasteMirrorMode.value);
    return;
  }

  strokeActive = true;
  switch (tool.value) {
    case 'paint':
      startOperation();
      paintCell(r, c);
      break;
    case 'fill':
      startOperation();
      fillArea(r, c);
      endOperation();
      strokeActive = false;
      break;
    case 'select':
      toggleSelection(r, c);
      break;
    case 'selectRect':
      rectStartCell.value = { r, c };
      rectEndCell.value = { r, c };
      break;
  }
}

function moveStroke(path) {
  if (!strokeActive) return;
  for (const index of path) {
    const { r, c } = cellOf(index);
    if (tool.value === 'paint') paintCell(r, c);
    else if (tool.value === 'select') toggleSelection(r, c);
    else if (tool.value === 'selectRect') rectEndCell.value = { r, c };
  }
}

function endStroke() {
  if (tool.value === 'selectRect' && rectStartCell.value) {
    selectCellsInRectangle(rectStartCell.value, rectEndCell.value);
  }
  rectStartCell.value = null;
  rectEndCell.value = null;
  strokeActive = false;
  endOperation();
}

/** Touch gesture turned into a pinch: drop the accidental stroke. */
function cancelStroke() {
  rectStartCell.value = null;
  rectEndCell.value = null;
  strokeActive = false;
  if (pendingHistorySave.value) {
    const state = history.value[historyIndex.value];
    if (state) grid.splice(0, grid.length, ...state.grid.map((row) => [...row]));
    pendingHistorySave.value = false;
  }
}

function setTool(newTool) {
  tool.value = newTool;
  clearSelection();
  cancelPasteMode();
  rectStartCell.value = null;
  rectEndCell.value = null;
}

// ---- Canvas data ---------------------------------------------------------------------
const canvasCells = computed(() => grid.flat());

const canvasSelection = computed(() => {
  const keys = new Set(selection.value);
  if (rectStartCell.value) {
    rectKeys(rectStartCell.value, rectEndCell.value).forEach((key) =>
      keys.add(key),
    );
  }
  return [...keys].map((key) => {
    const [r, c] = key.split(',').map(Number);
    return r * cols.value + c;
  });
});

// ---- View state (not part of the pattern) --------------------------------------------
const canvasRef = ref(null);
const referencePicker = ref(null);
const zoom = ref(1);
const panMode = ref(false);
const showGridLines = ref(true);
const showRulers = ref(true);
const showReference = ref(true);
const referenceBeside = ref(true);
const panelTab = ref('colors');
const sheetOpen = ref(false);
const hoverIndex = ref(null);

const isCompact = useMediaQuery('(max-width: 900px)');
const isPhone = useMediaQuery('(max-width: 640px)');

const showReferencePane = computed(
  () => !!selectedImage.value && showReference.value,
);
const referenceSideBySide = computed(
  () => referenceBeside.value && !isPhone.value,
);

function chooseTool(t) {
  panMode.value = false;
  setTool(t);
}

function togglePanMode() {
  panMode.value = !panMode.value;
}

const hasSelection = computed(() => selection.value.length > 0);

const toolItems = computed(() => [
  {
    id: 'paint',
    primary: true,
    label: 'Paint',
    icon: 'brush',
    shortcut: 'B',
    active: tool.value === 'paint' && !panMode.value && !isPasteMode.value,
    onClick: () => chooseTool('paint'),
  },
  {
    id: 'fill',
    primary: true,
    label: 'Fill',
    icon: 'bucket',
    shortcut: 'G',
    active: tool.value === 'fill' && !panMode.value && !isPasteMode.value,
    onClick: () => chooseTool('fill'),
  },
  {
    id: 'select-rect',
    primary: true,
    label: 'Select',
    icon: 'select',
    shortcut: 'M',
    active: tool.value === 'selectRect' && !panMode.value,
    onClick: () => chooseTool('selectRect'),
  },
  {
    id: 'select',
    label: 'Pick beads',
    icon: 'check',
    shortcut: 'P',
    active: tool.value === 'select' && !panMode.value,
    onClick: () => chooseTool('select'),
  },
  {
    id: 'hand',
    primary: true,
    label: 'Move',
    icon: 'hand',
    shortcut: 'H',
    toggle: true,
    active: panMode.value,
    onClick: togglePanMode,
  },
  { divider: true },
  {
    id: 'copy',
    label: 'Copy',
    icon: 'copy',
    shortcut: 'Ctrl+C',
    disabled: !hasSelection.value,
    onClick: copySelection,
  },
  {
    id: 'cut',
    label: 'Cut',
    icon: 'scissors',
    shortcut: 'Ctrl+X',
    disabled: !hasSelection.value,
    onClick: cutSelection,
  },
  {
    id: 'paste-center',
    label: 'Paste center',
    icon: 'crosshair',
    disabled: !hasClipboard.value,
    onClick: () => pasteAtCenter(),
  },
  {
    id: 'paste-at',
    label: 'Paste at…',
    icon: 'target',
    shortcut: 'Ctrl+V',
    toggle: true,
    active: isPasteMode.value && pasteMirrorMode.value === 'none',
    disabled: !hasClipboard.value,
    onClick: () => togglePasteMode('none'),
  },
  {
    id: 'paste-mirror',
    label: 'Paste mirror',
    icon: 'flipH',
    toggle: true,
    active: isPasteMode.value && pasteMirrorMode.value === 'horizontal',
    disabled: !hasClipboard.value,
    onClick: () => togglePasteMode('horizontal'),
  },
  {
    id: 'paste-flip',
    label: 'Paste flip',
    icon: 'flipV',
    toggle: true,
    active: isPasteMode.value && pasteMirrorMode.value === 'vertical',
    disabled: !hasClipboard.value,
    onClick: () => togglePasteMode('vertical'),
  },
  { divider: true },
  {
    id: 'mirror-h',
    label: 'Mirror',
    icon: 'flipH',
    disabled: !hasSelection.value,
    onClick: mirrorSelection,
  },
  {
    id: 'mirror-v',
    label: 'Flip',
    icon: 'flipV',
    disabled: !hasSelection.value,
    onClick: mirrorSelectionVertical,
  },
  {
    id: 'deselect',
    label: 'Deselect',
    icon: 'deselect',
    shortcut: 'Esc',
    disabled: !hasSelection.value,
    onClick: clearSelection,
  },
  { divider: true },
  {
    id: 'undo',
    primary: true,
    label: 'Undo',
    icon: 'undo',
    shortcut: 'Ctrl+Z',
    disabled: !canUndo.value,
    onClick: undo,
  },
  {
    id: 'redo',
    primary: true,
    label: 'Redo',
    icon: 'redo',
    shortcut: 'Ctrl+Y',
    disabled: !canRedo.value,
    onClick: redo,
  },
]);

// ---- Header menus --------------------------------------------------------------------
const exportItems = computed(() => [
  {
    label: 'Save to this browser',
    icon: 'save',
    shortcut: 'Ctrl+S',
    onSelect: () => saveGridToLocalStorage(),
  },
  { divider: true },
  { heading: 'Download' },
  { label: 'Image (PNG)', icon: 'camera', onSelect: exportGridAsImage },
  {
    label: 'HD image (PNG)',
    icon: 'image',
    onSelect: exportGridAsHighQualityImage,
  },
  { label: 'Pattern file (TXT)', icon: 'fileText', onSelect: exportGridAsTxt },
  { divider: true },
  { label: 'Send to 3D preview', icon: 'rocket', onSelect: previewGrid },
]);

const moreItems = computed(() => [
  {
    label: selectedImage.value
      ? 'Replace reference image'
      : 'Upload reference image',
    icon: 'image',
    onSelect: () => referencePicker.value?.open(),
  },
  { divider: true },
  { heading: 'Paste at center' },
  {
    label: 'Paste mirrored at center',
    icon: 'flipH',
    disabled: !hasClipboard.value,
    onSelect: () => pasteAtCenter('horizontal'),
  },
  {
    label: 'Paste flipped at center',
    icon: 'flipV',
    disabled: !hasClipboard.value,
    onSelect: () => pasteAtCenter('vertical'),
  },
  { divider: true },
  {
    label: 'Clear recent colours',
    icon: 'palette',
    disabled: !recentColors.value.length,
    onSelect: clearRecentColors,
  },
  {
    label: 'Clear recent bead images',
    icon: 'trash',
    disabled: !recentImages.value.length,
    onSelect: clearRecentImages,
  },
  { divider: true },
  { label: 'Keyboard shortcuts', icon: 'info', onSelect: showShortcuts },
]);

function showShortcuts() {
  showInfo(
    'Keyboard shortcuts',
    'B Paint · G Fill · M Select area · P Pick beads · H Move · Space+drag Move · Ctrl/⌘+wheel Zoom · + / − Zoom · 0 Fit · Ctrl+Z Undo · Ctrl+Y Redo · Ctrl+C / X Copy, cut · Ctrl+V Paste at… · Ctrl+S Save · Esc Deselect / cancel paste',
  );
}

// ---- Side panel ----------------------------------------------------------------------
const panelTabs = [
  { value: 'colors', label: 'Colors', icon: 'palette' },
  { value: 'properties', label: 'Properties', icon: 'sliders' },
  { value: 'reference', label: 'Reference', icon: 'image' },
];

const panelComponent = computed(
  () =>
    ({
      colors: DelicaColorsPanel,
      properties: PropertiesPanel,
      reference: ReferencePanel,
    })[panelTab.value],
);

const panelProps = computed(() => {
  if (panelTab.value === 'colors') {
    return {
      paintMode: selectionMode.value,
      color: selectedColor.value,
      recentColors: recentColors.value,
      beadImages: availableImages.value,
      recentImages: recentImages.value,
      selectedImageUrl: selectedBeadImage.value?.url ?? null,
    };
  }
  if (panelTab.value === 'properties') {
    return {
      cellWidth: cellWidth.value,
      cellHeight: cellHeight.value,
      gridUpright: gridOrientation.value === 'vertical',
      showGridLines: showGridLines.value,
      showRulers: showRulers.value,
      backgroundMode: backgroundMode.value,
      backgroundColor: backgroundColor.value,
      backgroundImage: selectedBackgroundImage.value,
      beadImages: availableImages.value,
    };
  }
  return {
    image: selectedImage.value,
    visible: showReference.value,
    sideBySide: referenceBeside.value,
  };
});

const panelListeners = computed(() => {
  if (panelTab.value === 'colors') {
    return {
      'update:paintMode': (v) => (selectionMode.value = v),
      'update:color': (v) => {
        selectedColor.value = v;
        selectionMode.value = 'color';
      },
      'select-image': selectBeadImage,
      'fill-with-bead': (code) => {
        if (!delicaEntry(code)) return;
        fillAllBeads(code);
        addToRecentColors(code);
      },
      'remove-recent-color': removeRecentColor,
      'clear-recent-colors': clearRecentColors,
      'remove-recent-image': removeRecentImage,
      'clear-recent-images': clearRecentImages,
    };
  }
  if (panelTab.value === 'properties') {
    return {
      'update:cellWidth': (v) => (cellWidth.value = v),
      'update:cellHeight': (v) => (cellHeight.value = v),
      'update:gridUpright': (v) =>
        (gridOrientation.value = v ? 'vertical' : 'horizontal'),
      'update:showGridLines': (v) => (showGridLines.value = v),
      'update:showRulers': (v) => (showRulers.value = v),
      'update:backgroundMode': (v) => (backgroundMode.value = v),
      'update:backgroundColor': (v) => (backgroundColor.value = v),
      'update:backgroundImage': (v) => (selectedBackgroundImage.value = v),
      'apply-background': changeAllBeadsToColor,
      save: () => saveGridToLocalStorage(),
      load: openLastSave,
    };
  }
  return {
    'update:visible': (v) => (showReference.value = v),
    'update:sideBySide': (v) => (referenceBeside.value = v),
    upload: onReferenceUpload,
    remove: () => (selectedImage.value = null),
  };
});

const panelWrapperProps = computed(() =>
  isCompact.value
    ? {
        modelValue: sheetOpen.value,
        'onUpdate:modelValue': (v) => (sheetOpen.value = v),
        title: 'Design panel',
      }
    : { class: 'peyote-editor__panel' },
);

function openSheet(tab) {
  if (sheetOpen.value && panelTab.value === tab) {
    sheetOpen.value = false;
    return;
  }
  panelTab.value = tab;
  sheetOpen.value = true;
}

const currentPaintStyle = computed(() =>
  selectionMode.value === 'image' && selectedBeadImage.value
    ? {
        backgroundImage: `url(${selectedBeadImage.value.url})`,
        backgroundSize: 'cover',
      }
    : {
        backgroundColor: beadSwatch(selectedColor.value),
        backgroundImage: delicaEntry(selectedColor.value) ? `url(${delicaThumbnail(selectedColor.value)})` : undefined,
        backgroundSize: 'cover',
      },
);

// ---- Status bar ----------------------------------------------------------------------
const beadCount = computed(() => rows.value * cols.value);

const toolLabels = {
  paint: 'Paint',
  fill: 'Fill',
  select: 'Pick beads',
  selectRect: 'Select',
};

const statusItems = computed(() => {
  const items = [
    {
      key: 'size',
      value: `${cols.value} x ${rows.value}`,
      title: 'Columns x rows',
    },
    { key: 'beads', value: `${beadCount.value} beads` },
    {
      key: 'grams',
      label: 'grams:',
      value: (beadCount.value / 190).toFixed(2),
    },
  ];
  if (hoverIndex.value !== null && hoverIndex.value >= 0) {
    const { r, c } = cellOf(hoverIndex.value);
    const value = grid[r]?.[c];
    const entry = delicaEntry(value);
    items.push({
      key: 'cursor',
      label: 'Bead:',
      value: `col ${c + 1}, row ${r + 1}${entry ? ` · ${entry.code}` : ''}`,
      hideOnMobile: true,
    });
  }
  if (selection.value.length > 0) {
    items.push({
      key: 'selection',
      label: 'Selected:',
      value: `${selection.value.length} beads`,
      hideOnMobile: true,
    });
  }
  items.push({
    key: 'tool',
    label: 'Tool:',
    value: panMode.value
      ? 'Move'
      : isPasteMode.value
        ? 'Paste'
        : toolLabels[tool.value],
    hideOnMobile: true,
  });
  return items;
});

// ---- Save / load ---------------------------------------------------------------------
function getGridMatrix() {
  return grid.map((row) => [...row]);
}

function snapshot() {
  return [getGridMatrix(), gridOrientation.value];
}

function previewGrid() {
  emit('update-grid', ...snapshot());
  emit('preview-grid');
}

function buildSaveData() {
  return {
    grid: getGridMatrix(),
    cols: cols.value,
    rows: rows.value,
    cellWidth: cellWidth.value,
    cellHeight: cellHeight.value,
    selectedColor: selectedColor.value,
    backgroundColor: backgroundColor.value,
    orientation: gridOrientation.value,
    recentColors: recentColors.value,
    recentImages: recentImages.value,
    projectName: projectName.value,
    timestamp: new Date().toISOString(),
  };
}

function saveGridToLocalStorage({ silent = false } = {}) {
  try {
    lastSavedTime.value = saveProjectData(props.projectId, buildSaveData());
    if (!silent) showToast('Project saved');
  } catch (error) {
    if (!silent) showError('Save failed', 'Could not save the grid.');
    console.error('Error saving peyote grid:', error);
  }
}

function loadGridFromLocalStorage() {
  try {
    // Returns null when the project is missing or its data is invalid.
    const data = loadProjectData(props.projectId);
    if (!data) return false;

    cellWidth.value = data.cellWidth || 15;
    cellHeight.value = data.cellHeight || 17;
    selectedColor.value = data.selectedColor || defaultDelicaCode;
    backgroundColor.value = data.backgroundColor || '#ffffff';
    if (data.orientation === 'vertical' || data.orientation === 'horizontal') {
      gridOrientation.value = data.orientation;
    }
    if (Array.isArray(data.recentColors))
      recentColors.value = [...data.recentColors];
    if (Array.isArray(data.recentImages))
      recentImages.value = [...data.recentImages];
    if (typeof data.projectName === 'string' && data.projectName)
      projectName.value = data.projectName;

    const loadedRows = Math.min(MAX_SIZE, data.rows);
    const loadedCols = Math.min(MAX_SIZE, data.cols);
    rows.value = loadedRows;
    cols.value = loadedCols;
    const newGrid = Array.from({ length: loadedRows }, (_, r) =>
      Array.from(
        { length: loadedCols },
        (_, c) => data.grid[r]?.[c] || backgroundColor.value,
      ),
    );
    grid.splice(0, grid.length, ...newGrid);
    gridInitialized.value = true;
    lastSavedTime.value = data.timestamp ?? null;
    clearSelection();
    cancelPasteMode();
    resetHistory();
    emit('update-grid', ...snapshot());
    return true;
  } catch (error) {
    console.error('Error loading peyote grid:', error);
    return false;
  }
}

function openLastSave() {
  if (loadGridFromLocalStorage()) {
    showToast('Last saved version loaded');
  } else {
    showInfo('Nothing saved yet', 'This project has no saved version.');
  }
}

async function newPattern() {
  const result = await showConfirm(
    'Start a new pattern?',
    'All beads will be reset to the background colour. You can undo this.',
  );
  if (!result.isConfirmed) return;
  startOperation();
  grid.splice(
    0,
    grid.length,
    ...Array.from({ length: rows.value }, () =>
      Array.from({ length: cols.value }, () => backgroundColor.value),
    ),
  );
  clearSelection();
  cancelPasteMode();
  endOperation();
}

function applyPreset(event) {
  const preset = peyotePresets.find(({ id }) => id === event.target.value);
  event.target.value = '';
  if (!preset) return;
  saveToHistory();
  pendingHistorySave.value = false;
  rows.value = preset.rows;
  cols.value = preset.cols;
  gridOrientation.value = preset.orientation;
  cellWidth.value = preset.cellWidth;
  cellHeight.value = preset.cellHeight;
  const cells = Array.from({ length: preset.rows }, (_, row) =>
    preset.pattern.slice(row * preset.cols, (row + 1) * preset.cols),
  );
  grid.splice(0, grid.length, ...cells);
  setTool('paint');
  saveToHistory();
  emit('update-grid', ...snapshot());
}

watch(projectName, (name) => renameProject(props.projectId, name));

// Auto-save (debounced) and keep the parent's previews up to date.
// Grids set up from props / defaults are not auto-saved, so opening the
// editor never overwrites the user's last save.
let autoSaveTimer = null;
let changeTimer = null;
let suppressAutoSave = false;

function withoutAutoSave(fn) {
  suppressAutoSave = true;
  fn();
  nextTick(() => (suppressAutoSave = false));
}

watch(
  grid,
  () => {
    if (!gridInitialized.value || suppressAutoSave) return;
    clearTimeout(autoSaveTimer);
    autoSaveTimer = setTimeout(() => {
      autoSaveTimer = null;
      saveGridToLocalStorage({ silent: true });
    }, 1000);
    clearTimeout(changeTimer);
    changeTimer = setTimeout(() => emit('update-grid', ...snapshot()), 250);
  },
  { deep: true },
);

// ---- Export --------------------------------------------------------------------------
function isImageValue(value) {
  return (
    typeof value === 'string' &&
    (value.startsWith('data:image/') || value.startsWith(BEAD_IMAGE_PREFIX))
  );
}

async function renderGridToCanvas(scale) {
  const cw = cellWidth.value * scale;
  const ch = cellHeight.value * scale;
  const horizontal = gridOrientation.value === 'horizontal';
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = cols.value * cw + (horizontal ? cw / 2 : 0);
  canvas.height = rows.value * ch + (horizontal ? 0 : ch / 2);

  ctx.fillStyle = backgroundColor.value;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Load every distinct bead image once.
  const urls = new Set();
  grid.forEach((row) =>
    row.forEach((value) => isImageValue(value) && urls.add(value)),
  );
  const images = new Map(
    await Promise.all(
      [...urls].map(
        (url) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve([url, img]);
            img.onerror = () => resolve([url, null]);
            img.src = url;
          }),
      ),
    ),
  );

  for (let r = 0; r < rows.value; r++) {
    for (let c = 0; c < cols.value; c++) {
      const value = grid[r][c] || backgroundColor.value;
      // Peyote offset: odd rows (horizontal) / odd columns (vertical) shift half a bead.
      const x = c * cw + (horizontal && r % 2 === 1 ? cw / 2 : 0);
      const y = r * ch + (!horizontal && c % 2 === 1 ? ch / 2 : 0);
      if (drawDelicaBead(ctx, value, x, y, cw, ch, !horizontal)) continue;
      if (isImageValue(value)) {
        const img = images.get(value);
        if (img) ctx.drawImage(img, x, y, cw, ch);
      } else {
        ctx.fillStyle = beadSwatch(value);
        ctx.fillRect(x, y, cw, ch);
      }
    }
  }
  return canvas;
}

function download(href, filename) {
  const link = document.createElement('a');
  link.download = filename;
  link.href = href;
  link.click();
}

async function exportGridAsImage() {
  const canvas = await renderGridToCanvas(1);
  download(canvas.toDataURL(), `peyote-grid-${gridOrientation.value}.png`);
}

async function exportGridAsHighQualityImage() {
  const canvas = await renderGridToCanvas(4);
  download(canvas.toDataURL(), `peyote-grid-hd-${gridOrientation.value}.png`);
}

function exportGridAsTxt() {
  try {
    const gridData = {
      grid: grid.flatMap((row) =>
        row.map((value) => value || backgroundColor.value),
      ),
      rows: rows.value,
      cols: cols.value,
      orientation: gridOrientation.value,
      type: 'peyote',
      timestamp: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(gridData, null, 2)], {
      type: 'text/plain;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    download(
      url,
      `peyote_grid_${rows.value}x${cols.value}_${gridOrientation.value}_${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.txt`,
    );
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error exporting TXT file:', error);
    showError('Export failed', 'Could not create the TXT file.');
  }
}

function isValidCellValue(value) {
  return (
    value === null ||
    value === backgroundColor.value ||
    (typeof value === 'string' &&
      (!!delicaEntry(value) ||
        /^#[0-9A-Fa-f]{6}$/.test(value) ||
        isImageValue(value)))
  );
}

function loadImportedGrid(fileRows, fileCols, cellAt) {
  rows.value = Math.min(MAX_SIZE, fileRows);
  cols.value = Math.min(MAX_SIZE, fileCols);
  const newGrid = Array.from({ length: rows.value }, (_, r) =>
    Array.from({ length: cols.value }, (_, c) => cellAt(r, c)),
  );
  saveToHistory();
  pendingHistorySave.value = false;
  grid.splice(0, grid.length, ...newGrid);
  clearSelection();
  cancelPasteMode();
  saveToHistory();
  showToast('Pattern imported');
}

function handleTxtUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const content = String(e.target.result).trim();

      // JSON format (what "Pattern file (TXT)" exports)
      if (content.startsWith('{')) {
        const parsed = JSON.parse(content);
        const { grid: colors, rows: fileRows, cols: fileCols } = parsed;
        if (
          Array.isArray(colors) &&
          fileRows &&
          fileCols &&
          colors.length === fileRows * fileCols &&
          colors.every(isValidCellValue)
        ) {
          if (
            parsed.orientation === 'vertical' ||
            parsed.orientation === 'horizontal'
          ) {
            gridOrientation.value = parsed.orientation;
          }
          loadImportedGrid(
            fileRows,
            fileCols,
            (r, c) => colors[r * fileCols + c] ?? backgroundColor.value,
          );
          return;
        }
      }

      // Legacy format: text with ██ characters
      const lines = content.split('\n');
      const headerMatch =
        lines.length > 2 &&
        lines[0].includes('Peyote Grid') &&
        lines[0].match(/(\d+)x(\d+)/);
      if (headerMatch) {
        const fileCols = parseInt(headerMatch[1]);
        const fileRows = parseInt(headerMatch[2]);
        loadImportedGrid(fileRows, fileCols, (r, c) =>
          lines[r + 2]?.substring(c * 2, c * 2 + 2) === '██'
            ? '#FF0000'
            : backgroundColor.value,
        );
        return;
      }

      showError('Import failed', 'This file is not a supported peyote grid.');
    } catch (error) {
      console.error('Error parsing TXT file:', error);
      showError('Import failed', 'Could not read this file.');
    }
  };
  reader.readAsText(file);
}

function handleImageUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    selectedImage.value = e.target.result;
  };
  reader.readAsDataURL(file);
}

function onReferenceUpload(event) {
  handleImageUpload(event);
  showReference.value = true;
}

// ---- Keyboard shortcuts --------------------------------------------------------------
function isTyping(target) {
  return (
    target &&
    (target.isContentEditable ||
      ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))
  );
}

function onKeydown(event) {
  if (!props.active || isTyping(event.target)) return;
  const key = event.key.toLowerCase();

  if (event.ctrlKey || event.metaKey) {
    const actions = {
      z: event.shiftKey ? redo : undo,
      y: redo,
      c: copySelection,
      x: cutSelection,
      v: () => enablePasteMode(),
      s: () => saveGridToLocalStorage(),
    };
    if (actions[key]) {
      event.preventDefault();
      actions[key]();
    }
    return;
  }
  if (event.altKey) return;

  if (event.key === 'Escape') {
    if (isPasteMode.value) cancelPasteMode();
    else clearSelection();
  } else if (event.key === '+' || event.key === '=') {
    canvasRef.value?.setZoom(zoom.value * 1.25);
  } else if (event.key === '-' || event.key === '_') {
    canvasRef.value?.setZoom(zoom.value / 1.25);
  } else if (event.key === '0') {
    canvasRef.value?.fitToScreen();
  } else if (key === 'h') {
    togglePanMode();
  } else if (key === 'b') {
    chooseTool('paint');
  } else if (key === 'g') {
    chooseTool('fill');
  } else if (key === 'm') {
    chooseTool('selectRect');
  } else if (key === 'p') {
    chooseTool('select');
  }
}

// ---- Lifecycle -----------------------------------------------------------------------
onMounted(() => {
  loadAvailableImages();

  withoutAutoSave(() => {
    if (props.initialPattern?.length) {
      initializeGrid(props.initialPattern);
    } else if (!loadGridFromLocalStorage()) {
      initializeGrid();
      // A sample wave across the columns so the grid isn't empty.
      for (let j = 0; j < cols.value; j++) {
        const rr = Math.floor(
          rows.value / 2 + Math.sin(j / 1.5) * (rows.value / 6),
        );
        if (rr >= 0 && rr < rows.value) grid[rr][j] = defaultDelicaCode;
      }
      resetHistory();
    }
  });

  document.addEventListener('keydown', onKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown);
  // Leaving the editor: don't lose the last second of edits.
  if (autoSaveTimer) {
    clearTimeout(autoSaveTimer);
    autoSaveTimer = null;
    saveGridToLocalStorage({ silent: true });
  }
  clearTimeout(changeTimer);
  if (gridInitialized.value && grid.length > 0) {
    emit('update-grid', ...snapshot());
  }
});

defineExpose({ snapshot, getGridMatrix });
</script>

<style scoped>
.peyote-editor {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
}

.peyote-editor__body {
  flex: 1;
  display: flex;
  min-height: 0;
}

.peyote-editor__tools {
  flex-shrink: 0;
}

.peyote-editor__workspace {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
}

.peyote-editor__banner {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 8px 6px 14px;
  background: var(--accent-soft);
  border-bottom: 1px solid var(--border);
  color: var(--accent-text);
  font-size: 13px;
  font-weight: 600;
}

.peyote-editor__banner span {
  flex: 1;
}

.peyote-editor__stage {
  flex: 1;
  display: flex;
  min-height: 0;
}

.peyote-editor__stage.is-side {
  flex-direction: row;
}

.peyote-editor__stage.is-below {
  flex-direction: column-reverse;
}

.peyote-editor__canvas {
  flex: 1;
  min-width: 0;
  min-height: 0;
}

.peyote-editor__reference {
  position: relative;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background: var(--surface-muted);
  overflow: hidden;
}

.is-side .peyote-editor__reference {
  width: min(32%, 360px);
  border-right: 1px solid var(--border);
}

.is-below .peyote-editor__reference {
  height: min(32%, 260px);
  border-top: 1px solid var(--border);
}

.peyote-editor__reference img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow);
}

.peyote-editor__reference-close {
  position: absolute;
  top: 8px;
  right: 8px;
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: var(--surface);
  color: var(--text-muted);
}

/* Side panel (desktop) */
.peyote-editor__panel {
  flex: 0 0 360px;
  width: 360px;
  padding: 14px;
  overflow-y: auto;
  background: var(--bg);
  border-left: 1px solid var(--border);
}

.peyote-editor__panel-inner {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.peyote-editor__tabs-head {
  padding: 8px;
  border-bottom: 1px solid var(--border);
}

.peyote-editor__tabs-head :deep(.segmented__item) {
  padding: 0 8px;
}

.peyote-editor__tabs-body {
  padding: 14px;
}

.peyote-editor__preset {
  width: 100%;
  height: 34px;
  padding: 0 10px;
  border: 1px solid var(--border-strong);
  border-radius: 8px;
  background: var(--surface);
  color: var(--text);
  font-size: 13px;
}

.peyote-editor__preset:focus {
  border-color: var(--accent);
}

.peyote-editor__hint {
  margin-top: 8px;
  font-size: 12.5px;
  color: var(--text-muted);
}

/* Toolbar controls */
.peyote-editor__view-controls {
  display: flex;
  align-items: center;
  gap: 6px;
}

.peyote-editor__toolbar-sep {
  width: 1px;
  height: 22px;
  margin: 0 4px;
  background: var(--border);
}

/* Floating buttons on small screens */
.peyote-editor__fabs {
  position: absolute;
  right: 12px;
  bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.peyote-editor__fab {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  box-shadow: var(--shadow-lg);
}

.peyote-editor__fab-swatch {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px var(--border-strong);
}

@media (max-width: 1100px) {
  .peyote-editor__panel {
    flex-basis: 300px;
    width: 300px;
  }

  .peyote-editor__tabs-head :deep(.segmented__item .base-icon) {
    display: none;
  }

  .peyote-editor__saved {
    display: none;
  }
}

/* Phone: tools move under the canvas */
@media (max-width: 640px) {
  .peyote-editor__body {
    flex-direction: column;
  }

  .peyote-editor__tools {
    order: 2;
  }

  .peyote-editor__workspace {
    order: 1;
  }

  .peyote-editor__zoom {
    display: none;
  }

  .hide-on-phone {
    display: none;
  }
}
</style>
