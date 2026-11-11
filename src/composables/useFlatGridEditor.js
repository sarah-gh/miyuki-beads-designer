import {
  beadSwatch,
  defaultDelicaCode,
  delicaEntry,
} from '@/components/peyote/delicaCatalog.js';
import { drawDelicaBead } from '@/components/peyote/delicaThumbnail.js';
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  watch,
} from 'vue';
import {
  showConfirm,
  showError,
  showInfo,
  showSuccess,
  showToast,
} from '@/lib/utils/sweetalert';
import {
  getProject,
  loadProjectData,
  renameProject,
  saveProjectData,
} from '@/lib/projects/projectStore.js';

// Bead images live in /public/beads and are stored in the grid by URL.
export const BEAD_IMAGE_PREFIX = '/miyuki-beads-designer/beads/';
const ORIENTATION_KEY = 'gridEditor_isVertical';
const EMPTY = '#ffffff';

const BEAD_IMAGE_FILES = [
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

export function isBeadImage(value) {
  return typeof value === 'string' && value.startsWith(BEAD_IMAGE_PREFIX);
}

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw !== null ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function timestampForFile() {
  return new Date().toISOString().slice(0, 19).replace(/:/g, '-');
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * All state and actions of the flat grid editor.
 *
 * Naming note (kept from the original editor so saved files stay compatible):
 *   rows = number of beads ACROSS (shown to the user as "Columns")
 *   cols = number of beads ALONG the bracelet (shown as "Rows")
 *   grid index = y * rows + x
 *
 * @param {object}   options
 * @param {Function} options.onGridChange  called (debounced) with the grid matrix
 * @param {import('vue').Ref<boolean>} options.active  keyboard shortcuts only fire while true
 * @param {string}   options.projectId  the saved project this editor reads and writes
 */
export function useFlatGridEditor({ onGridChange, active, projectId } = {}) {
  // ---- State -----------------------------------------------------------------
  const rows = ref(16);
  const cols = ref(80);
  const cellWidth = ref(15);
  const cellHeight = ref(17);
  const selectedColor = ref(defaultDelicaCode);
  const recentColors = ref([]);
  const lastSavedTime = ref(null);
  // Reference image beside the grid (true) or below it (false).
  const isVertical = ref(readJson(ORIENTATION_KEY, true));
  // Grid shown upright (true) or rotated 90° (false).
  const isVerticalGrid = ref(true);
  const selectedImage = ref(null); // reference image (object URL)
  const paintMode = ref('color'); // 'color' | 'image'
  const selectedBeadImage = ref(null);
  const recentImages = ref([]);
  const availableImages = ref([]);
  const projectName = ref(getProject(projectId)?.name || 'Untitled bracelet');

  const grid = ref([]);
  const selection = ref([]);
  const clipboard = ref([]);
  const clipboardSize = ref({ width: 0, height: 0 });
  const pastePosition = ref({ x: 0, y: 0 });
  const isPasteMode = ref(false);
  const tool = ref('paint'); // paint | fill | select | paste

  const backgroundColor = ref('#ffffff');
  const backgroundMode = ref('color'); // 'color' | 'image'
  const selectedBackgroundImage = ref(null);

  const hoverIndex = ref(null);

  const beadCount = computed(() => rows.value * cols.value);
  const centerIndex = computed(() => Math.floor((rows.value * cols.value) / 2));

  watch(projectName, (name) => renameProject(projectId, name));

  // ---- History ---------------------------------------------------------------
  const history = reactive({ stacks: [], index: -1 });

  function saveHistory() {
    history.stacks = history.stacks.slice(0, history.index + 1);
    history.stacks.push({
      cells: [...grid.value],
      rows: rows.value,
      cols: cols.value,
      cellWidth: cellWidth.value,
      cellHeight: cellHeight.value,
      isVerticalGrid: isVerticalGrid.value,
    });
    history.index++;
  }

  function resetHistory() {
    history.stacks = [];
    history.index = -1;
    saveHistory();
  }

  function undo() {
    if (history.index > 0) {
      history.index--;
      restoreHistory();
    }
  }

  function redo() {
    if (history.index < history.stacks.length - 1) {
      history.index++;
      restoreHistory();
    }
  }

  function restoreHistory() {
    const state = history.stacks[history.index];
    rows.value = state.rows;
    cols.value = state.cols;
    cellWidth.value = state.cellWidth;
    cellHeight.value = state.cellHeight;
    isVerticalGrid.value = state.isVerticalGrid;
    grid.value = [...state.cells];
    selection.value = [];
    isPasteMode.value = false;
    if (tool.value === 'paste') tool.value = 'paint';
  }

  function applyPreset(preset) {
    rows.value = preset.columns;
    cols.value = preset.rows;
    cellWidth.value = 20;
    cellHeight.value = 16;
    isVerticalGrid.value = true;
    grid.value = [...preset.pattern];
    selection.value = [];
    isPasteMode.value = false;
    tool.value = 'paint';
    saveHistory();
  }

  function fillWithBead(code) {
    if (!delicaEntry(code)) return;
    grid.value = Array(rows.value * cols.value).fill(code);
    addToRecentColors(code);
    saveHistory();
  }

  const canUndo = computed(() => history.index > 0);
  const canRedo = computed(() => history.index < history.stacks.length - 1);

  // ---- Save / load (browser storage) -----------------------------------------
  function buildSaveData() {
    return {
      grid: grid.value,
      rows: rows.value,
      cols: cols.value,
      cellWidth: cellWidth.value,
      cellHeight: cellHeight.value,
      isVerticalGrid: isVerticalGrid.value,
      recentColors: recentColors.value,
      recentImages: recentImages.value,
      projectName: projectName.value,
      timestamp: new Date().toISOString(),
    };
  }

  function saveGridToLocalStorage({ silent = false } = {}) {
    try {
      lastSavedTime.value = saveProjectData(projectId, buildSaveData());
      if (!silent) showToast('Project saved');
    } catch (error) {
      if (!silent) {
        showError('Save failed', 'Could not save the grid: ' + error.message);
      }
      console.error('Error saving grid:', error);
    }
  }

  function loadGridFromLocalStorage() {
    try {
      // Returns null when the project is missing or its data is invalid.
      const data = loadProjectData(projectId);
      if (!data) return false;

      rows.value = data.rows;
      cols.value = data.cols;
      grid.value = [...data.grid];

      if (data.cellWidth && typeof data.cellWidth === 'number') {
        cellWidth.value = data.cellWidth;
      }
      if (data.cellHeight && typeof data.cellHeight === 'number') {
        cellHeight.value = data.cellHeight;
      }
      if (typeof data.isVertical === 'boolean') {
        isVertical.value = data.isVertical;
      }
      if (typeof data.isVerticalGrid === 'boolean') {
        isVerticalGrid.value = data.isVerticalGrid;
      }
      if (Array.isArray(data.recentColors)) {
        recentColors.value = [...data.recentColors];
      }
      if (Array.isArray(data.recentImages)) {
        recentImages.value = [...data.recentImages];
      }
      if (typeof data.projectName === 'string' && data.projectName) {
        projectName.value = data.projectName;
      }
      lastSavedTime.value = data.timestamp;

      resetHistory();
      onGridChange?.(getGridMatrix());
      return true;
    } catch (error) {
      showError('Load failed', 'Could not load the grid: ' + error.message);
      console.error('Error loading grid:', error);
      return false;
    }
  }

  /** Reload the project's last save (drops unsaved changes). */
  function openLastSave() {
    if (loadGridFromLocalStorage()) {
      selection.value = [];
      showToast('Last saved version loaded');
    } else {
      showInfo('Nothing saved yet', 'This project has no saved version.');
    }
  }

  async function newPattern() {
    const result = await showConfirm(
      'Start a new pattern?',
      'All beads will be reset to white. You can undo this.',
    );
    if (!result.isConfirmed) return;
    grid.value = Array(rows.value * cols.value).fill(EMPTY);
    selection.value = [];
    isPasteMode.value = false;
    tool.value = 'paint';
    saveHistory();
  }

  // ---- Bead images -------------------------------------------------------------
  function loadAvailableImages() {
    availableImages.value = BEAD_IMAGE_FILES.map((filename) => ({
      name: filename,
      url: `${BEAD_IMAGE_PREFIX}${filename}`,
      displayName: filename.replace('.jpg', ''),
    }));
  }

  // ---- TXT import ----------------------------------------------------------------
  function isValidCell(cell) {
    return (
      typeof cell === 'string' &&
      (!!delicaEntry(cell) ||
        /^#[0-9A-Fa-f]{6}$/.test(cell) ||
        isBeadImage(cell))
    );
  }

  function handleTxtUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result.trim());

        if (parsed.grid && parsed.rows && parsed.cols) {
          // Current format: includes the dimensions.
          const { grid: colors, rows: fileRows, cols: fileCols } = parsed;
          if (!Array.isArray(colors) || !colors.every(isValidCell)) {
            showError(
              'Invalid file',
              'The file must contain a valid list of colours or bead images.',
            );
            return;
          }
          if (colors.length !== fileRows * fileCols) {
            showError(
              'Size mismatch',
              `The number of cells (${colors.length}) does not match the stated size (${fileRows}×${fileCols}).`,
            );
            return;
          }
          rows.value = fileRows;
          cols.value = fileCols;
          if (parsed.cellWidth && typeof parsed.cellWidth === 'number') {
            cellWidth.value = parsed.cellWidth;
          }
          if (parsed.cellHeight && typeof parsed.cellHeight === 'number') {
            cellHeight.value = parsed.cellHeight;
          }
          if (typeof parsed.isVertical === 'boolean') {
            isVertical.value = parsed.isVertical;
          }
          if (typeof parsed.isVerticalGrid === 'boolean') {
            isVerticalGrid.value = parsed.isVerticalGrid;
          }
          // Let the size watcher run first, then apply the cells.
          nextTick(() => {
            grid.value = [...colors];
            selection.value = [];
            saveHistory();
            showSuccess(
              'Pattern imported',
              `A ${fileRows}×${fileCols} grid was loaded.`,
            );
          });
        } else if (Array.isArray(parsed)) {
          // Legacy format: just the list of colours, uses the current size.
          if (!parsed.every(isValidCell)) {
            showError(
              'Invalid file',
              'The file must contain a valid list of colours or bead images.',
            );
            return;
          }
          if (parsed.length !== rows.value * cols.value) {
            showError(
              'Size mismatch',
              `The number of cells (${parsed.length}) does not match the current size (${rows.value}×${cols.value}). Adjust the grid size or use a file in the new format.`,
            );
            return;
          }
          grid.value = [...parsed];
          saveHistory();
          showSuccess(
            'Pattern imported',
            `Loaded using the current size (${rows.value}×${cols.value}).`,
          );
        } else {
          showError(
            'Invalid file',
            'The file must contain a list of colours/bead images, or an object with grid, rows and cols.',
          );
        }
      } catch (error) {
        showError(
          'Could not read file',
          'Error reading the file: ' + error.message,
        );
        console.error('Error parsing text file:', error);
      }
    };
    reader.readAsText(file);
  }

  // ---- Reference image -------------------------------------------------------------
  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (selectedImage.value) URL.revokeObjectURL(selectedImage.value);
    selectedImage.value = URL.createObjectURL(file);
  }

  function removeReferenceImage() {
    if (selectedImage.value) URL.revokeObjectURL(selectedImage.value);
    selectedImage.value = null;
  }

  // ---- Watchers --------------------------------------------------------------------
  watch(
    [rows, cols],
    () => {
      // Only reset the grid if the number of cells changed.
      const newSize = rows.value * cols.value;
      if (grid.value.length !== newSize) {
        grid.value = Array(newSize).fill(EMPTY);
        // Reset the selection but keep the clipboard.
        selection.value = [];
        isPasteMode.value = false;
        if (tool.value === 'paste') tool.value = 'paint';
        saveHistory();
      }
    },
    { immediate: true },
  );

  // Auto-save (debounced) and notify the parent.
  let autoSaveTimer = null;
  function autoSave() {
    autoSaveTimer = null;
    try {
      lastSavedTime.value = saveProjectData(projectId, buildSaveData());
    } catch (error) {
      console.error('Error auto-saving grid:', error);
    }
  }
  let changeTimer = null;
  watch(
    grid,
    () => {
      clearTimeout(autoSaveTimer);
      autoSaveTimer = setTimeout(autoSave, 1000);

      clearTimeout(changeTimer);
      changeTimer = setTimeout(() => onGridChange?.(getGridMatrix()), 250);
    },
    { deep: true },
  );

  watch(isVertical, (value) => {
    try {
      localStorage.setItem(ORIENTATION_KEY, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving isVertical to localStorage:', error);
    }
  });

  // ---- Tools -----------------------------------------------------------------------
  function setTool(t) {
    tool.value = t;
    selection.value = [];
    if (t !== 'paste') isPasteMode.value = false;
  }

  function hasClipboardContent() {
    return (
      clipboard.value &&
      clipboard.value.length > 0 &&
      clipboardSize.value.width > 0
    );
  }

  const hasClipboard = computed(() => hasClipboardContent());

  function getFillValue() {
    if (paintMode.value === 'image' && selectedBeadImage.value) {
      return selectedBeadImage.value.url;
    }
    return selectedColor.value;
  }

  function addToRecentColors(color) {
    if (isBeadImage(color)) return;
    const index = recentColors.value.indexOf(color);
    if (index === 0) return;
    if (index > -1) recentColors.value.splice(index, 1);
    recentColors.value.unshift(color);
    if (recentColors.value.length > 10) {
      recentColors.value = recentColors.value.slice(0, 10);
    }
  }

  function addToRecentImages(image) {
    const index = recentImages.value.findIndex((img) => img.url === image.url);
    if (index === 0) return;
    if (index > -1) recentImages.value.splice(index, 1);
    recentImages.value.unshift(image);
    if (recentImages.value.length > 10) {
      recentImages.value = recentImages.value.slice(0, 10);
    }
  }

  function paintCell(i) {
    if (i < 0 || i >= grid.value.length) return false;
    if (paintMode.value === 'color') {
      if (grid.value[i] === selectedColor.value) return false;
      grid.value[i] = selectedColor.value;
      addToRecentColors(selectedColor.value);
      return true;
    }
    if (paintMode.value === 'image' && selectedBeadImage.value) {
      if (grid.value[i] === selectedBeadImage.value.url) return false;
      grid.value[i] = selectedBeadImage.value.url;
      addToRecentImages(selectedBeadImage.value);
      return true;
    }
    return false;
  }

  function selectBeadImage(image) {
    selectedBeadImage.value = image;
    addToRecentImages(image);
  }

  function removeRecentImage(image) {
    const index = recentImages.value.findIndex((img) => img.url === image.url);
    if (index > -1) recentImages.value.splice(index, 1);
  }

  async function clearRecentImages() {
    const result = await showConfirm(
      'Clear recent images?',
      'All recent bead images will be removed from the list.',
    );
    if (result.isConfirmed) recentImages.value = [];
  }

  function removeRecentColor(color) {
    const index = recentColors.value.indexOf(color);
    if (index > -1) recentColors.value.splice(index, 1);
  }

  async function clearRecentColors() {
    const result = await showConfirm(
      'Clear recent colours?',
      'All recent colours will be removed from the list.',
    );
    if (result.isConfirmed) recentColors.value = [];
  }

  /** "+" next to the recent colours: pin the current colour. */
  function addCurrentColorToRecent() {
    addToRecentColors(selectedColor.value);
  }

  // Flood fill. Grid layout: x in [0, rows), y in [0, cols).
  function bucketFill(startIndex, targetColor, newColor) {
    if (targetColor === newColor) return false;
    const stack = [startIndex];
    const visited = new Set();
    while (stack.length) {
      const idx = stack.pop();
      if (visited.has(idx) || grid.value[idx] !== targetColor) continue;
      visited.add(idx);
      grid.value[idx] = newColor;

      const x = idx % rows.value;
      const y = Math.floor(idx / rows.value);
      if (x > 0) stack.push(idx - 1);
      if (x < rows.value - 1) stack.push(idx + 1);
      if (y > 0) stack.push(idx - rows.value);
      if (y < cols.value - 1) stack.push(idx + rows.value);
    }
    if (isBeadImage(newColor)) {
      if (selectedBeadImage.value) addToRecentImages(selectedBeadImage.value);
    } else {
      addToRecentColors(newColor);
    }
    return true;
  }

  function getSelectionRect(startIdx, endIdx) {
    const sx = startIdx % rows.value;
    const sy = Math.floor(startIdx / rows.value);
    const ex = endIdx % rows.value;
    const ey = Math.floor(endIdx / rows.value);
    const minX = Math.min(sx, ex);
    const maxX = Math.max(sx, ex);
    const minY = Math.min(sy, ey);
    const maxY = Math.max(sy, ey);
    const selected = [];
    for (let y = minY; y <= maxY; y++) {
      for (let x = minX; x <= maxX; x++) {
        const idx = y * rows.value + x;
        if (idx >= 0 && idx < grid.value.length) selected.push(idx);
      }
    }
    return selected;
  }

  // ---- Strokes (pointer input from the canvas) -------------------------------------
  let strokeActive = false;
  let strokeChanged = false;
  let selectionStart = null;

  function startStroke(index) {
    if (tool.value === 'paste') {
      if (isPasteMode.value) {
        pastePosition.value = {
          x: index % rows.value,
          y: Math.floor(index / rows.value),
        };
        pasteAtPosition();
      }
      return;
    }
    strokeActive = true;
    strokeChanged = false;
    if (tool.value === 'paint') {
      strokeChanged = paintCell(index) || strokeChanged;
    } else if (tool.value === 'fill') {
      strokeChanged = bucketFill(index, grid.value[index], getFillValue());
    } else if (tool.value === 'select') {
      selectionStart = index;
      selection.value = [index];
    }
  }

  function moveStroke(indices) {
    if (!strokeActive || !indices.length) return;
    if (tool.value === 'paint') {
      for (const index of indices) {
        strokeChanged = paintCell(index) || strokeChanged;
      }
    } else if (tool.value === 'select' && selectionStart !== null) {
      selection.value = getSelectionRect(
        selectionStart,
        indices[indices.length - 1],
      );
    }
  }

  function endStroke() {
    if (strokeActive && strokeChanged) saveHistory();
    strokeActive = false;
    strokeChanged = false;
    selectionStart = null;
  }

  /** Two-finger gesture started right after a tap: undo that tap. */
  function cancelStroke() {
    if (strokeActive && strokeChanged && history.index >= 0) {
      restoreHistory();
    }
    if (tool.value === 'select') selection.value = [];
    strokeActive = false;
    strokeChanged = false;
    selectionStart = null;
  }

  // ---- Copy / cut / paste ----------------------------------------------------------
  function selectionBounds() {
    const selCols = rows.value;
    const xs = selection.value.map((i) => i % selCols);
    const ys = selection.value.map((i) => Math.floor(i / selCols));
    return {
      minX: Math.min(...xs),
      maxX: Math.max(...xs),
      minY: Math.min(...ys),
      maxY: Math.max(...ys),
    };
  }

  function requireSelection() {
    if (selection.value.length === 0) {
      showError('No selection', 'Select an area first with the Select tool.');
      return false;
    }
    return true;
  }

  function requireClipboard() {
    if (!hasClipboardContent()) {
      showError('Clipboard is empty', 'Copy or cut an area before pasting.');
      return false;
    }
    return true;
  }

  function copySelection({ silent = false } = {}) {
    if (!requireSelection()) return;
    const { minX, maxX, minY, maxY } = selectionBounds();
    const width = maxX - minX + 1;
    const height = maxY - minY + 1;
    clipboardSize.value = { width, height };
    clipboard.value = [];
    for (let y = 0; y < height; y++) {
      const row = [];
      for (let x = 0; x < width; x++) {
        row.push(grid.value[(minY + y) * rows.value + (minX + x)]);
      }
      clipboard.value.push(row);
    }
    if (!silent) showToast(`Copied ${width}×${height} beads`);
  }

  function cutSelection() {
    if (!requireSelection()) return;
    copySelection({ silent: true });
    selection.value.forEach((idx) => (grid.value[idx] = EMPTY));
    saveHistory();
    showToast('Cut to clipboard');
  }

  function pasteBlockAt(pasteX, pasteY) {
    for (let y = 0; y < clipboardSize.value.height; y++) {
      for (let x = 0; x < clipboardSize.value.width; x++) {
        const targetX = pasteX + x;
        const targetY = pasteY + y;
        if (
          targetX >= 0 &&
          targetX < rows.value &&
          targetY >= 0 &&
          targetY < cols.value
        ) {
          const value = clipboard.value[y]?.[x];
          if (value) grid.value[targetY * rows.value + targetX] = value;
        }
      }
    }
    saveHistory();
  }

  /** Paste at the top-left of the selection, or centred if nothing is selected. */
  function pasteSelection() {
    if (!requireClipboard()) return;
    if (selection.value.length > 0) {
      const { minX, minY } = selectionBounds();
      pasteBlockAt(minX, minY);
    } else {
      pasteAtCenter();
    }
  }

  function pasteAtCenter() {
    if (!requireClipboard()) return;
    pasteBlockAt(
      Math.floor((rows.value - clipboardSize.value.width) / 2),
      Math.floor((cols.value - clipboardSize.value.height) / 2),
    );
  }

  function enablePasteMode() {
    if (!requireClipboard()) return;
    isPasteMode.value = true;
    tool.value = 'paste';
    selection.value = [];
    showToast('Click a bead to choose where to paste', 'info');
  }

  function pasteAtPosition() {
    if (!requireClipboard()) return;
    pasteBlockAt(pastePosition.value.x, pastePosition.value.y);
    isPasteMode.value = false;
    tool.value = 'paint';
  }

  function cancelPasteMode() {
    isPasteMode.value = false;
    tool.value = 'paint';
    showToast('Paste cancelled', 'info');
  }

  function clearSelection() {
    selection.value = [];
  }

  // ---- Mirror ------------------------------------------------------------------------
  function mirror(direction) {
    if (!requireSelection()) return;
    try {
      const { minX, maxX, minY, maxY } = selectionBounds();
      const width = maxX - minX + 1;
      const height = maxY - minY + 1;
      const selected = new Set(selection.value);
      const block = [];
      for (let y = 0; y < height; y++) {
        const row = [];
        for (let x = 0; x < width; x++) {
          const idx = (minY + y) * rows.value + (minX + x);
          row.push(selected.has(idx) ? grid.value[idx] : EMPTY);
        }
        block.push(row);
      }
      const mirrored =
        direction === 'horizontal'
          ? block.map((row) => row.reverse())
          : block.reverse();
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const idx = (minY + y) * rows.value + (minX + x);
          if (selected.has(idx)) grid.value[idx] = mirrored[y][x];
        }
      }
      saveHistory();
      showToast(
        direction === 'horizontal'
          ? 'Selection mirrored horizontally'
          : 'Selection mirrored vertically',
      );
    } catch (error) {
      showError(
        'Mirror failed',
        'Could not mirror the selection: ' + error.message,
      );
      console.error('Error mirroring selection:', error);
    }
  }

  const mirrorSelection = () => mirror('horizontal');
  const mirrorSelectionVertical = () => mirror('vertical');

  // ---- Fill everything -------------------------------------------------------------
  async function changeAllBeadsToColor() {
    let newValue;
    let message;
    if (backgroundMode.value === 'color') {
      newValue = backgroundColor.value;
      message = `Change every bead to ${newValue}?`;
    } else if (
      backgroundMode.value === 'image' &&
      selectedBackgroundImage.value
    ) {
      newValue = selectedBackgroundImage.value.url;
      message = `Change every bead to the ${selectedBackgroundImage.value.displayName} bead?`;
    } else {
      showError('Nothing selected', 'Please choose a colour or a bead image.');
      return;
    }

    const result = await showConfirm('Change all beads', message);
    if (!result.isConfirmed) return;

    const total = rows.value * cols.value;
    for (let i = 0; i < total; i++) grid.value[i] = newValue;
    saveHistory();

    if (backgroundMode.value === 'color') {
      addToRecentColors(newValue);
      showToast(`All beads changed to ${newValue}`);
    } else {
      addToRecentImages(selectedBackgroundImage.value);
      showToast(
        `All beads changed to ${selectedBackgroundImage.value.displayName}`,
      );
    }
  }

  // ---- Export ------------------------------------------------------------------------
  const imageLoadCache = new Map();
  function loadImage(url) {
    if (!imageLoadCache.has(url)) {
      imageLoadCache.set(
        url,
        new Promise((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = url;
        }),
      );
    }
    return imageLoadCache.get(url);
  }

  async function drawCell(ctx, x, y, w, h, value) {
    if (drawDelicaBead(ctx, value, x, y, w, h, cols.value > rows.value)) return;
    if (isBeadImage(value)) {
      try {
        const img = await loadImage(value);
        ctx.drawImage(img, x, y, w, h);
      } catch (error) {
        console.warn('Failed to load image:', value, error);
        ctx.fillStyle = '#cccccc';
        ctx.fillRect(x, y, w, h);
      }
    } else {
      ctx.fillStyle = beadSwatch(value);
      ctx.fillRect(x, y, w, h);
    }
  }

  async function renderPatternImage({
    scale,
    padding,
    titleFont,
    lineColor,
    lineWidth,
    footer,
  }) {
    const cw = cellWidth.value * scale;
    const ch = cellHeight.value * scale;
    const width = rows.value * cw + padding * 2;
    const height = cols.value * ch + padding * 2;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    for (let y = 0; y < cols.value; y++) {
      for (let x = 0; x < rows.value; x++) {
        const value = grid.value[y * rows.value + x];
        if (!value) continue;
        const cx = padding + x * cw;
        const cy = padding + y * ch;
        await drawCell(ctx, cx, cy, cw, ch, value);
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctx.strokeRect(cx, cy, cw, ch);
      }
    }

    ctx.fillStyle = '#000000';
    ctx.font = titleFont;
    ctx.textAlign = 'center';
    ctx.fillText(
      `Grid: ${rows.value}×${cols.value}`,
      width / 2,
      padding / 2 + 10 * scale,
    );

    if (footer) {
      ctx.font = '16px Arial';
      ctx.fillStyle = '#666666';
      ctx.fillText(
        new Date().toLocaleString('en-US'),
        width / 2,
        height - padding / 2,
      );
    }
    return canvas;
  }

  async function exportGridAsImage() {
    try {
      showToast('Creating image…', 'info');
      const canvas = await renderPatternImage({
        scale: 1,
        padding: 20,
        titleFont: '16px Arial',
        lineColor: '#e0e0e0',
        lineWidth: 0.5,
        footer: false,
      });
      canvas.toBlob((blob) => {
        downloadBlob(
          blob,
          `grid_${rows.value}x${cols.value}_${timestampForFile()}.png`,
        );
        showToast('Image downloaded');
      }, 'image/png');
    } catch (error) {
      showError(
        'Export failed',
        'Could not create the image: ' + error.message,
      );
      console.error('Error exporting grid as image:', error);
    }
  }

  async function exportGridAsHighQualityImage() {
    try {
      showToast('Creating HD image…', 'info');
      const canvas = await renderPatternImage({
        scale: 2,
        padding: 40,
        titleFont: 'bold 24px Arial',
        lineColor: '#d0d0d0',
        lineWidth: 1,
        footer: true,
      });
      canvas.toBlob(
        (blob) => {
          downloadBlob(
            blob,
            `grid_HD_${rows.value}x${cols.value}_${timestampForFile()}.png`,
          );
          showToast('HD image downloaded');
        },
        'image/png',
        1.0,
      );
    } catch (error) {
      showError(
        'Export failed',
        'Could not create the HD image: ' + error.message,
      );
      console.error('Error exporting grid as high quality image:', error);
    }
  }

  function exportGridAsTxt() {
    try {
      const data = {
        grid: grid.value,
        rows: rows.value,
        cols: cols.value,
        cellWidth: cellWidth.value,
        cellHeight: cellHeight.value,
        isVertical: isVertical.value,
        isVerticalGrid: isVerticalGrid.value,
        timestamp: new Date().toISOString(),
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: 'text/plain;charset=utf-8',
      });
      downloadBlob(
        blob,
        `grid_${rows.value}x${cols.value}_${timestampForFile()}.txt`,
      );
      showToast('TXT file downloaded');
    } catch (error) {
      showError(
        'Export failed',
        'Could not create the TXT file: ' + error.message,
      );
      console.error('Error exporting grid as TXT:', error);
    }
  }

  /** Grid as a 2D matrix [y][x] for the 3D preview / step-by-step pages. */
  function getGridMatrix() {
    const matrix = [];
    for (let y = 0; y < cols.value; y++) {
      const row = [];
      for (let x = 0; x < rows.value; x++) {
        row.push(grid.value[y * rows.value + x]);
      }
      matrix.push(row);
    }
    return matrix;
  }

  // ---- Keyboard shortcuts ----------------------------------------------------------
  function isTyping(target) {
    return (
      target &&
      (target.isContentEditable ||
        ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))
    );
  }

  function handleKeydown(event) {
    if (active && !active.value) return;
    if (isTyping(event.target)) return;
    const mod = event.ctrlKey || event.metaKey;
    const key = event.key.toLowerCase();

    if (mod && key === 'z' && !event.shiftKey) {
      event.preventDefault();
      undo();
    } else if (mod && (key === 'y' || (key === 'z' && event.shiftKey))) {
      event.preventDefault();
      redo();
    } else if (mod && key === 'c' && selection.value.length) {
      event.preventDefault();
      copySelection();
    } else if (mod && key === 'x' && selection.value.length) {
      event.preventDefault();
      cutSelection();
    } else if (mod && key === 'v' && hasClipboardContent()) {
      event.preventDefault();
      pasteSelection();
    } else if (mod && key === 's') {
      event.preventDefault();
      saveGridToLocalStorage();
    } else if (!mod && !event.altKey) {
      if (key === 'escape') {
        if (isPasteMode.value) cancelPasteMode();
        else clearSelection();
      } else if (key === 'b') setTool('paint');
      else if (key === 'g') setTool('fill');
      else if (key === 'm') setTool('select');
    }
  }

  // ---- Lifecycle ---------------------------------------------------------------------
  onMounted(() => {
    const loaded = loadGridFromLocalStorage();
    isVertical.value = readJson(ORIENTATION_KEY, true);
    if (!loaded) {
      grid.value = Array(rows.value * cols.value).fill(EMPTY);
      saveHistory();
    }
    loadAvailableImages();
    document.addEventListener('keydown', handleKeydown);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleKeydown);
    // Leaving the editor: don't lose the last second of edits.
    if (autoSaveTimer) {
      clearTimeout(autoSaveTimer);
      autoSave();
    }
    clearTimeout(changeTimer);
    if (selectedImage.value) URL.revokeObjectURL(selectedImage.value);
  });

  return {
    // state
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
    // actions
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
    addCurrentColorToRecent,
    changeAllBeadsToColor,
    fillWithBead,
    applyPreset,
    saveGridToLocalStorage,
    loadGridFromLocalStorage,
    openLastSave,
    newPattern,
    handleTxtUpload,
    handleImageUpload,
    removeReferenceImage,
    exportGridAsImage,
    exportGridAsHighQualityImage,
    exportGridAsTxt,
    getGridMatrix,
  };
}
