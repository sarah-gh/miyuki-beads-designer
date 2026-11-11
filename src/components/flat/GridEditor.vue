<template>
  <div class="flat-editor">
    <!-- ===== Header: project name + file actions ===== -->
    <AppPortal to="header-start">
      <EditableTitle v-model="projectName" />
      <SavedBadge
        class="flat-editor__saved"
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
        class="flat-editor__view-controls"
      >
        <ZoomControls
          v-model="zoom"
          class="flat-editor__zoom"
          @fit="canvasRef?.fitToScreen()"
          @fit-width="canvasRef?.fitWidth()"
        />
        <span class="flat-editor__toolbar-sep"></span>
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
        <span class="flat-editor__toolbar-sep hide-on-phone"></span>
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
    <div class="flat-editor__body">
      <ToolSidebar
        class="flat-editor__tools"
        :items="toolItems"
      />

      <div class="flat-editor__workspace">
        <div
          v-if="isPasteMode"
          class="flat-editor__banner"
          role="status"
        >
          <BaseIcon
            name="target"
            :size="16"
          />
          <span
            >Click a bead to paste the copied area ({{ clipboardSize.width }}×{{
              clipboardSize.height
            }}).</span
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
          class="flat-editor__stage"
          :class="referenceSideBySide ? 'is-side' : 'is-below'"
        >
          <figure
            v-if="showReferencePane"
            class="flat-editor__reference"
          >
            <img
              :src="selectedImage"
              alt="Reference image"
            />
            <button
              type="button"
              class="flat-editor__reference-close"
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
            class="flat-editor__canvas"
            :cells="grid"
            :columns="rows"
            :row-count="cols"
            :cell-width="cellWidth"
            :cell-height="cellHeight"
            :selection="selection"
            :marker-index="centerIndex"
            :show-grid-lines="showGridLines"
            :show-rulers="showRulers"
            :rotated="!isVerticalGrid"
            :pan-mode="panMode"
            :ghost="ghost"
            :image-prefix="BEAD_IMAGE_PREFIX"
            :color-of="beadSwatch"
            :draw-bead="drawFlatBead"
            @stroke-start="startStroke"
            @stroke-move="moveStroke"
            @stroke-end="endStroke"
            @stroke-cancel="cancelStroke"
            @hover="hoverIndex = $event"
          >
            <!-- Phone / tablet: buttons that open the side panel as a sheet -->
            <div
              v-if="isCompact"
              class="flat-editor__fabs"
            >
              <button
                type="button"
                class="flat-editor__fab"
                aria-label="Colours"
                @click="openSheet('colors')"
              >
                <span
                  class="flat-editor__fab-swatch"
                  :style="currentPaintStyle"
                ></span>
              </button>
              <button
                type="button"
                class="flat-editor__fab"
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
                class="flat-editor__fab"
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

        <div class="flat-editor__panel-inner">
          <PanelCard
            v-if="!isCompact"
            flush
            class="flat-editor__tabs-card"
          >
            <div class="flat-editor__tabs-head">
              <SegmentedControl
                v-model="panelTab"
                :options="panelTabs"
                variant="tabs"
                size="md"
                block
              />
            </div>
            <div class="flat-editor__tabs-body">
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

          <label class="flat-preset">
            <span>Ready-made patterns</span>
            <select
              aria-label="Ready-made square-stitch patterns"
              @change="selectPreset"
            >
              <option
                value=""
                disabled
                selected
              >
                Select a pattern…
              </option>
              <option
                v-for="preset in flatPresets"
                :key="preset.id"
                :value="preset.id"
              >
                {{ preset.name }} ({{ preset.columns }} × {{ preset.rows }})
              </option>
            </select>
          </label>
          <GridDimensionsCard
            v-model:columns="displayColumns"
            v-model:rows="displayRows"
            :max-columns="isVerticalGrid ? 200 : 1000"
            :max-rows="isVerticalGrid ? 1000 : 200"
          />
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
import { computed, onBeforeUnmount, onMounted, ref, toRef } from 'vue';
import { useMediaQuery } from '@vueuse/core';
import { useRouter } from 'vue-router';
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
import DelicaColorsPanel from '@/components/peyote/DelicaColorsPanel.vue';
import { beadSwatch, delicaEntry } from '@/components/peyote/delicaCatalog.js';
import {
  delicaThumbnail,
  drawDelicaBead,
} from '@/components/peyote/delicaThumbnail.js';
import { flatPresets } from './flatPresets.js';
import FileActions from '@/components/editor/FileActions.vue';
import GridDimensionsCard from '@/components/editor/GridDimensionsCard.vue';
import PropertiesPanel from '@/components/editor/PropertiesPanel.vue';
import ReferencePanel from '@/components/editor/ReferencePanel.vue';
import ToolSidebar from '@/components/editor/ToolSidebar.vue';
import ZoomControls from '@/components/editor/ZoomControls.vue';
import { showInfo } from '@/lib/utils/sweetalert';
import {
  BEAD_IMAGE_PREFIX,
  useFlatGridEditor,
} from '@/composables/useFlatGridEditor';

const props = defineProps({
  /** The saved project this editor reads and writes. */
  projectId: { type: String, required: true },
  /** False while another view (3D, steps…) is shown in place of the editor. */
  active: { type: Boolean, default: true },
});

const emit = defineEmits(['update-grid']);

const router = useRouter();
function openProjects() {
  router.push({ name: 'projects', query: { mode: 'flat' } });
}

const {
  rows,
  cols,
  cellWidth,
  cellHeight,
  selectedColor,
  recentColors,
  lastSavedTime,
  isVertical,
  isVerticalGrid,
  selectedImage,
  paintMode,
  selectedBeadImage,
  recentImages,
  availableImages,
  projectName,
  grid,
  selection,
  clipboard,
  clipboardSize,
  isPasteMode,
  tool,
  backgroundColor,
  backgroundMode,
  selectedBackgroundImage,
  hoverIndex,
  beadCount,
  centerIndex,
  canUndo,
  canRedo,
  hasClipboard,
  setTool,
  startStroke,
  moveStroke,
  endStroke,
  cancelStroke,
  undo,
  redo,
  copySelection,
  cutSelection,
  pasteSelection,
  pasteAtCenter,
  enablePasteMode,
  cancelPasteMode,
  clearSelection,
  mirrorSelection,
  mirrorSelectionVertical,
  selectBeadImage,
  removeRecentImage,
  clearRecentImages,
  removeRecentColor,
  clearRecentColors,
  fillWithBead,
  applyPreset,
  changeAllBeadsToColor,
  saveGridToLocalStorage,
  loadGridFromLocalStorage,
  newPattern,
  handleTxtUpload,
  handleImageUpload,
  removeReferenceImage,
  exportGridAsImage,
  exportGridAsHighQualityImage,
  exportGridAsTxt,
  getGridMatrix,
} = useFlatGridEditor({
  onGridChange: () => emit('update-grid', getDisplayGridMatrix()),
  active: toRef(props, 'active'),
  projectId: props.projectId,
});

// Keep the saved matrix in its original order and map the canvas rotation at the UI boundary.
const displayColumns = computed({
  get: () => (isVerticalGrid.value ? rows.value : cols.value),
  set: (value) => {
    (isVerticalGrid.value ? rows : cols).value = value;
  },
});
const displayRows = computed({
  get: () => (isVerticalGrid.value ? cols.value : rows.value),
  set: (value) => {
    (isVerticalGrid.value ? cols : rows).value = value;
  },
});

function drawFlatBead(ctx, value, x, y, width, height) {
  return drawDelicaBead(ctx, value, x, y, width, height, cols.value > rows.value);
}

function getDisplayGridMatrix() {
  const matrix = getGridMatrix();
  if (isVerticalGrid.value) return matrix;
  return Array.from({ length: displayRows.value }, (_, row) =>
    matrix.map((line) => line[row]).reverse(),
  );
}

const hoverPosition = computed(() => {
  const column = hoverIndex.value % rows.value;
  const row = Math.floor(hoverIndex.value / rows.value);
  return isVerticalGrid.value
    ? { column: column + 1, row: row + 1 }
    : { column: cols.value - row, row: column + 1 };
});

// ---- View state (not part of the pattern) -----------------------------------------
const canvasRef = ref(null);
const referencePicker = ref(null);
const zoom = ref(1);
const panMode = ref(false);
const showGridLines = ref(true);
const showRulers = ref(true);
const showReference = ref(true);
const panelTab = ref('colors');
const sheetOpen = ref(false);

const isCompact = useMediaQuery('(max-width: 900px)');
const isPhone = useMediaQuery('(max-width: 640px)');

const showReferencePane = computed(
  () => !!selectedImage.value && showReference.value,
);
const referenceSideBySide = computed(() => isVertical.value && !isPhone.value);

// ---- Tools ---------------------------------------------------------------------------
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
    active: tool.value === 'paint' && !panMode.value,
    onClick: () => chooseTool('paint'),
  },
  {
    id: 'fill',
    primary: true,
    label: 'Fill',
    icon: 'bucket',
    shortcut: 'G',
    active: tool.value === 'fill' && !panMode.value,
    onClick: () => chooseTool('fill'),
  },
  {
    id: 'select',
    primary: true,
    label: 'Select',
    icon: 'select',
    shortcut: 'M',
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
    onClick: () => copySelection(),
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
    id: 'paste',
    label: 'Paste',
    icon: 'clipboard',
    shortcut: 'Ctrl+V',
    disabled: !hasClipboard.value,
    onClick: pasteSelection,
  },
  {
    id: 'paste-center',
    label: 'Paste center',
    icon: 'crosshair',
    disabled: !hasClipboard.value,
    onClick: pasteAtCenter,
  },
  {
    id: 'paste-at',
    label: 'Paste at…',
    icon: 'target',
    toggle: true,
    active: isPasteMode.value,
    disabled: !hasClipboard.value,
    onClick: () => (isPasteMode.value ? cancelPasteMode() : enablePasteMode()),
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

const ghost = computed(() =>
  tool.value === 'paste' && isPasteMode.value && hasClipboard.value
    ? {
        cells: clipboard.value,
        width: clipboardSize.value.width,
        height: clipboardSize.value.height,
      }
    : null,
);

// ---- Header menus ----------------------------------------------------------------------
const exportItems = computed(() => [
  {
    label: 'Save to this browser',
    icon: 'save',
    shortcut: 'Ctrl+S',
    onSelect: () => saveGridToLocalStorage(),
  },
  { divider: true },
  { heading: 'Download' },
  { label: 'Image (PNG)', icon: 'camera', onSelect: () => exportGridAsImage() },
  {
    label: 'HD image (PNG)',
    icon: 'image',
    onSelect: () => exportGridAsHighQualityImage(),
  },
  { label: 'Pattern file (TXT)', icon: 'fileText', onSelect: exportGridAsTxt },
  { divider: true },
  {
    label: 'Send to 3D preview',
    icon: 'rocket',
    onSelect: () => emit('update-grid', getDisplayGridMatrix()),
  },
]);

const moreItems = computed(() => [
  {
    label: selectedImage.value
      ? 'Replace reference image'
      : 'Upload reference image',
    icon: 'image',
    onSelect: () => referencePicker.value?.open(),
  },
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
    'B Paint · G Fill · M Select · H Move · Space+drag Move · Ctrl/⌘+wheel Zoom · + / − Zoom · 0 Fit · Ctrl+Z Undo · Ctrl+Y Redo · Ctrl+C / X / V Copy, cut, paste · Ctrl+S Save · Esc Deselect / cancel paste',
  );
}

// ---- Side panel ------------------------------------------------------------------------
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
      paintMode: paintMode.value,
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
      gridUpright: isVerticalGrid.value,
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
    sideBySide: isVertical.value,
  };
});

const panelListeners = computed(() => {
  if (panelTab.value === 'colors') {
    return {
      'update:paintMode': (v) => (paintMode.value = v),
      'update:color': (v) => {
        selectedColor.value = v;
        paintMode.value = 'color';
      },
      'fill-with-bead': fillWithBead,
      'select-image': selectBeadImage,
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
      'update:gridUpright': (v) => (isVerticalGrid.value = v),
      'update:showGridLines': (v) => (showGridLines.value = v),
      'update:showRulers': (v) => (showRulers.value = v),
      'update:backgroundMode': (v) => (backgroundMode.value = v),
      'update:backgroundColor': (v) => (backgroundColor.value = v),
      'update:backgroundImage': (v) => (selectedBackgroundImage.value = v),
      'apply-background': changeAllBeadsToColor,
      save: () => saveGridToLocalStorage(),
      load: () => {
        if (loadGridFromLocalStorage()) selection.value = [];
      },
    };
  }
  return {
    'update:visible': (v) => (showReference.value = v),
    'update:sideBySide': (v) => (isVertical.value = v),
    upload: onReferenceUpload,
    remove: removeReferenceImage,
  };
});

const panelWrapperProps = computed(() =>
  isCompact.value
    ? {
        modelValue: sheetOpen.value,
        'onUpdate:modelValue': (v) => (sheetOpen.value = v),
        title: 'Design panel',
      }
    : { class: 'flat-editor__panel' },
);

function openSheet(tab) {
  if (sheetOpen.value && panelTab.value === tab) {
    sheetOpen.value = false;
    return;
  }
  panelTab.value = tab;
  sheetOpen.value = true;
}

function onReferenceUpload(event) {
  handleImageUpload(event);
  showReference.value = true;
}

function selectPreset(event) {
  const preset = flatPresets.find(({ id }) => id === event.target.value);
  if (preset) applyPreset(preset);
  event.target.value = '';
}

const currentPaintStyle = computed(() =>
  paintMode.value === 'image' && selectedBeadImage.value
    ? {
        backgroundImage: `url(${selectedBeadImage.value.url})`,
        backgroundSize: 'cover',
      }
    : {
        backgroundColor: beadSwatch(selectedColor.value),
        backgroundImage: delicaEntry(selectedColor.value)
          ? `url(${delicaThumbnail(selectedColor.value)})`
          : undefined,
        backgroundSize: 'cover',
      },
);

// ---- Status bar -------------------------------------------------------------------------
const toolLabels = {
  paint: 'Paint',
  fill: 'Fill',
  select: 'Select',
  paste: 'Paste',
};

const statusItems = computed(() => {
  const items = [
    {
      key: 'size',
      value: `${displayColumns.value} x ${displayRows.value}`,
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
    items.push({
      key: 'cursor',
      label: 'Bead:',
      value: `col ${hoverPosition.value.column}, row ${hoverPosition.value.row}`,
      hideOnMobile: true,
    });
  }
  if (selection.value.length > 1) {
    const xs = selection.value.map((i) => i % rows.value);
    const ys = selection.value.map((i) => Math.floor(i / rows.value));
    items.push({
      key: 'selection',
      label: 'Selection:',
      value: `${Math.max(...xs) - Math.min(...xs) + 1} x ${Math.max(...ys) - Math.min(...ys) + 1}`,
      hideOnMobile: true,
    });
  }
  items.push({
    key: 'tool',
    label: 'Tool:',
    value: panMode.value ? 'Move' : toolLabels[tool.value],
    hideOnMobile: true,
  });
  return items;
});

// ---- View shortcuts (zoom / hand) -------------------------------------------------------
function isTyping(target) {
  return (
    target &&
    (target.isContentEditable ||
      ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))
  );
}

function onViewKeydown(event) {
  if (!props.active || isTyping(event.target)) return;
  if (event.ctrlKey || event.metaKey || event.altKey) return;
  if (event.key === '+' || event.key === '=') {
    canvasRef.value?.setZoom(zoom.value * 1.25);
  } else if (event.key === '-' || event.key === '_') {
    canvasRef.value?.setZoom(zoom.value / 1.25);
  } else if (event.key === '0') {
    canvasRef.value?.fitToScreen();
  } else if (event.key.toLowerCase() === 'h') {
    togglePanMode();
  }
}

onMounted(() => document.addEventListener('keydown', onViewKeydown));
onBeforeUnmount(() => document.removeEventListener('keydown', onViewKeydown));

defineExpose({
  getGridMatrix: getDisplayGridMatrix,
  snapshot: getDisplayGridMatrix,
});
</script>

<style scoped>
.flat-preset {
  display: grid;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
}
.flat-preset select {
  min-width: 0;
  padding: 6px 8px;
  border: 1px solid var(--border-strong);
  border-radius: 8px;
  color: var(--text);
  background: var(--surface);
}
.flat-editor {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
}

.flat-editor__body {
  flex: 1;
  display: flex;
  min-height: 0;
}

.flat-editor__tools {
  flex-shrink: 0;
}

.flat-editor__workspace {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
}

.flat-editor__banner {
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

.flat-editor__banner span {
  flex: 1;
}

.flat-editor__stage {
  flex: 1;
  display: flex;
  min-height: 0;
}

.flat-editor__stage.is-side {
  flex-direction: row;
}

.flat-editor__stage.is-below {
  flex-direction: column-reverse;
}

.flat-editor__canvas {
  flex: 1;
  min-width: 0;
  min-height: 0;
}

.flat-editor__reference {
  position: relative;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background: var(--surface-muted);
  overflow: hidden;
}

.is-side .flat-editor__reference {
  width: min(32%, 360px);
  border-right: 1px solid var(--border);
}

.is-below .flat-editor__reference {
  height: min(32%, 260px);
  border-top: 1px solid var(--border);
}

.flat-editor__reference img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow);
}

.flat-editor__reference-close {
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
.flat-editor__panel {
  flex: 0 0 360px;
  width: 360px;
  padding: 14px;
  overflow-y: auto;
  background: var(--bg);
  border-left: 1px solid var(--border);
}

.flat-editor__panel-inner {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.flat-editor__tabs-head {
  padding: 8px;
  border-bottom: 1px solid var(--border);
}

.flat-editor__tabs-head :deep(.segmented__item) {
  padding: 0 8px;
}

.flat-editor__tabs-body {
  padding: 14px;
}

/* Toolbar controls */
.flat-editor__view-controls {
  display: flex;
  align-items: center;
  gap: 6px;
}

.flat-editor__toolbar-sep {
  width: 1px;
  height: 22px;
  margin: 0 4px;
  background: var(--border);
}

/* Floating buttons on small screens */
.flat-editor__fabs {
  position: absolute;
  right: 12px;
  bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.flat-editor__fab {
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

.flat-editor__fab-swatch {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px var(--border-strong);
}

@media (max-width: 1100px) {
  .flat-editor__panel {
    flex-basis: 300px;
    width: 300px;
  }

  .flat-editor__tabs-head :deep(.segmented__item .base-icon) {
    display: none;
  }

  .flat-editor__saved {
    display: none;
  }
}

/* Phone: tools move under the canvas */
@media (max-width: 640px) {
  .flat-editor__body {
    flex-direction: column;
  }

  .flat-editor__tools {
    order: 2;
  }

  .flat-editor__workspace {
    order: 1;
  }

  .flat-editor__zoom {
    display: none;
  }

  .hide-on-phone {
    display: none;
  }
}
</style>
