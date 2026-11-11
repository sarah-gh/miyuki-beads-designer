<template>
  <div
    ref="container"
    class="bead-canvas"
    :class="{
      'is-panning': panActive,
      'is-grabbing': gesture === 'pan',
    }"
  >
    <canvas
      ref="canvas"
      class="bead-canvas__canvas"
      role="img"
      :aria-label="`Bead grid, ${columns} columns by ${rowCount} rows`"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerCancel"
      @pointerleave="onPointerLeave"
      @wheel.prevent="onWheel"
      @contextmenu.prevent
    ></canvas>
    <slot />
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

/**
 * Canvas based bead grid with zoom / pan.
 *
 * Indexing matches the old DOM grid: index = row * columns + column, where
 * `columns` is the number of beads across (the editor's `rows` variable) and
 * `rowCount` is the number of beads along the bracelet (`cols`).
 *
 * The canvas is only as large as the viewport; on every frame we draw the
 * cells that are visible, so very large patterns stay fast at any zoom.
 *
 * Input
 *  - mouse / pen / single finger: emits stroke-start, stroke-move, stroke-end
 *  - two fingers: pinch zoom + pan (cancels an accidental stroke)
 *  - wheel: pan; ctrl/cmd + wheel (or trackpad pinch): zoom at cursor
 *  - space + drag, middle mouse, or `panMode`: pan
 */
const props = defineProps({
  cells: { type: Array, required: true },
  columns: { type: Number, required: true },
  rowCount: { type: Number, required: true },
  cellWidth: { type: Number, default: 15 },
  cellHeight: { type: Number, default: 17 },
  zoom: { type: Number, default: 1 },
  minZoom: { type: Number, default: 0.1 },
  maxZoom: { type: Number, default: 8 },
  selection: { type: Array, default: () => [] },
  markerIndex: { type: Number, default: -1 },
  showGridLines: { type: Boolean, default: true },
  showRulers: { type: Boolean, default: true },
  rotated: { type: Boolean, default: false },
  panMode: { type: Boolean, default: false },
  /** { cells: string[][], width, height } drawn under the cursor (paste preview) */
  ghost: { type: Object, default: null },
  imagePrefix: { type: String, default: '/miyuki-beads-designer/beads/' },
  /**
   * Peyote offset: 'columns' shifts every odd column down by half a bead,
   * 'rows' shifts every odd row right by half a bead. 'none' = flat grid.
   */
  stagger: {
    type: String,
    default: 'none',
    validator: (v) => ['none', 'columns', 'rows'].includes(v),
  },
  /** Maps a cell value to a CSS colour (e.g. bead code → swatch). */
  colorOf: { type: Function, default: null },
  drawBead: { type: Function, default: null },
});

const emit = defineEmits([
  'stroke-start',
  'stroke-move',
  'stroke-end',
  'stroke-cancel',
  'hover',
  'update:zoom',
]);

const container = ref(null);
const canvas = ref(null);

// ---- View state -------------------------------------------------------------
const view = { zoom: props.zoom, panX: 0, panY: 0 };
let viewportW = 0;
let viewportH = 0;
let dpr = 1;
let initialised = false;

const RULER_TOP = 22;
const RULER_LEFT = 30;
const PAD = 24;

const staggered = computed(() => props.stagger !== 'none');
const logicalW = computed(
  () =>
    props.columns * props.cellWidth +
    (props.stagger === 'rows' && props.rowCount > 1 ? props.cellWidth / 2 : 0),
);
const logicalH = computed(
  () =>
    props.rowCount * props.cellHeight +
    (props.stagger === 'columns' && props.columns > 1
      ? props.cellHeight / 2
      : 0),
);

/** Top-left corner of a cell in logical px (includes the peyote offset). */
function cellOrigin(col, row) {
  return {
    x:
      col * props.cellWidth +
      (props.stagger === 'rows' && row % 2 === 1 ? props.cellWidth / 2 : 0),
    y:
      row * props.cellHeight +
      (props.stagger === 'columns' && col % 2 === 1 ? props.cellHeight / 2 : 0),
  };
}
// Size of the content on screen at zoom 1 (after the optional rotation).
const worldW = computed(() =>
  props.rotated ? logicalH.value : logicalW.value,
);
const worldH = computed(() =>
  props.rotated ? logicalW.value : logicalH.value,
);

// ---- Theme colours (read once from CSS variables) ---------------------------
const colors = {
  bg: '#f9f4ef',
  paper: '#ffffff',
  line: 'rgba(61, 46, 41, 0.16)',
  ruler: '#85736a',
  selection: '#d6455d',
  marker: '#e7a3ad',
  hover: 'rgba(61, 46, 41, 0.75)',
};

function readThemeColors() {
  const style = getComputedStyle(container.value);
  const read = (name, fallback) =>
    style.getPropertyValue(name).trim() || fallback;
  colors.bg = read('--canvas-bg', colors.bg);
  colors.ruler = read('--text-muted', colors.ruler);
  colors.selection = read('--selection', colors.selection);
  colors.marker = read('--center-marker', colors.marker);
}

// ---- Bead image cache -------------------------------------------------------
const imageCache = new Map();
function isImageValue(value) {
  return (
    typeof value === 'string' &&
    (value.startsWith(props.imagePrefix) || value.startsWith('data:image/'))
  );
}
function getImage(url) {
  let img = imageCache.get(url);
  if (!img) {
    img = new Image();
    img.onload = scheduleDraw;
    img.onerror = scheduleDraw;
    img.src = url;
    imageCache.set(url, img);
  }
  return img.complete && img.naturalWidth > 0 ? img : null;
}

// ---- Coordinate helpers -----------------------------------------------------
function clampZoom(z) {
  return Math.min(props.maxZoom, Math.max(props.minZoom, z));
}

/** Screen (CSS px relative to canvas) -> logical px inside the grid. */
function screenToLogical(sx, sy) {
  const u = (sx - view.panX) / view.zoom;
  const v = (sy - view.panY) / view.zoom;
  return props.rotated ? { x: v, y: logicalH.value - u } : { x: u, y: v };
}

function logicalToCell(x, y) {
  if (props.stagger === 'columns') {
    const col = Math.floor(x / props.cellWidth);
    const shift = col % 2 === 1 ? props.cellHeight / 2 : 0;
    return { col, row: Math.floor((y - shift) / props.cellHeight) };
  }
  if (props.stagger === 'rows') {
    const row = Math.floor(y / props.cellHeight);
    const shift = row % 2 === 1 ? props.cellWidth / 2 : 0;
    return { col: Math.floor((x - shift) / props.cellWidth), row };
  }
  const col = Math.floor(x / props.cellWidth);
  const row = Math.floor(y / props.cellHeight);
  return { col, row };
}

function cellAt(sx, sy) {
  const { x, y } = screenToLogical(sx, sy);
  const { col, row } = logicalToCell(x, y);
  if (col < 0 || row < 0 || col >= props.columns || row >= props.rowCount)
    return -1;
  return row * props.columns + col;
}

function pointerPos(event) {
  const rect = canvas.value.getBoundingClientRect();
  return { x: event.clientX - rect.left, y: event.clientY - rect.top };
}

/** Keep at least part of the pattern on screen. */
function clampPan() {
  const w = worldW.value * view.zoom;
  const h = worldH.value * view.zoom;
  const keep = 60;
  view.panX = Math.min(
    viewportW - Math.min(keep, w),
    Math.max(view.panX, Math.min(keep, w) - w),
  );
  view.panY = Math.min(
    viewportH - Math.min(keep, h),
    Math.max(view.panY, Math.min(keep, h) - h),
  );
}

function setZoom(next, anchorX = viewportW / 2, anchorY = viewportH / 2) {
  const z = clampZoom(next);
  if (!Number.isFinite(z)) return;
  // Keep the point under the anchor fixed.
  const wx = (anchorX - view.panX) / view.zoom;
  const wy = (anchorY - view.panY) / view.zoom;
  view.zoom = z;
  view.panX = anchorX - wx * z;
  view.panY = anchorY - wy * z;
  clampPan();
  if (Math.abs(props.zoom - z) > 1e-6) emit('update:zoom', z);
  scheduleDraw();
}

// ---- Public view helpers ----------------------------------------------------
function fitToScreen() {
  if (!viewportW || !viewportH) return;
  const availW = viewportW - (props.showRulers ? RULER_LEFT : 0) - PAD * 2;
  const availH = viewportH - (props.showRulers ? RULER_TOP : 0) - PAD * 2;
  const z = clampZoom(Math.min(availW / worldW.value, availH / worldH.value));
  view.zoom = z;
  const offX = props.showRulers ? RULER_LEFT : 0;
  const offY = props.showRulers ? RULER_TOP : 0;
  view.panX = offX + (viewportW - offX - worldW.value * z) / 2;
  view.panY = offY + (viewportH - offY - worldH.value * z) / 2;
  emit('update:zoom', z);
  scheduleDraw();
}

/** Fit the pattern's width (capped at 300%) and align it to the top. */
function fitWidth(maxZoom = 3) {
  if (!viewportW || !viewportH) return;
  const offX = props.showRulers ? RULER_LEFT : 0;
  const offY = props.showRulers ? RULER_TOP : 0;
  const availW = viewportW - offX - PAD * 2;
  const z = clampZoom(Math.min(maxZoom, availW / worldW.value));
  view.zoom = z;
  view.panX = offX + (viewportW - offX - worldW.value * z) / 2;
  view.panY = offY + PAD / 2;
  emit('update:zoom', z);
  scheduleDraw();
}

/** Default framing: 100% zoom, centred horizontally and aligned to the top. */
function resetView() {
  if (!viewportW || !viewportH) return;
  const offX = props.showRulers ? RULER_LEFT : 0;
  const offY = props.showRulers ? RULER_TOP : 0;
  const z = clampZoom(1);
  view.zoom = z;
  view.panX = offX + Math.max(PAD, (viewportW - offX - worldW.value * z) / 2);
  view.panY = offY + PAD / 2;
  emit('update:zoom', z);
  scheduleDraw();
}

function panBy(dx, dy) {
  view.panX += dx;
  view.panY += dy;
  clampPan();
  scheduleDraw();
}

// ---- Drawing ----------------------------------------------------------------
let rafId = 0;
function scheduleDraw() {
  if (rafId) return;
  rafId = requestAnimationFrame(() => {
    rafId = 0;
    draw();
  });
}

let hoverIndex = -1;
let hoverIsMouse = false;

function applyWorldTransform(ctx) {
  ctx.setTransform(
    dpr * view.zoom,
    0,
    0,
    dpr * view.zoom,
    dpr * view.panX,
    dpr * view.panY,
  );
  if (props.rotated) {
    ctx.translate(logicalH.value, 0);
    ctx.rotate(Math.PI / 2);
  }
}

function visibleCellRange() {
  // Inverse-map the viewport corners into logical space.
  const corners = [
    screenToLogical(0, 0),
    screenToLogical(viewportW, 0),
    screenToLogical(0, viewportH),
    screenToLogical(viewportW, viewportH),
  ];
  const xs = corners.map((c) => c.x);
  const ys = corners.map((c) => c.y);
  // Staggered cells can poke in from the neighbouring row / column.
  const extra = staggered.value ? 1 : 0;
  const c0 = Math.max(
    0,
    Math.floor(Math.min(...xs) / props.cellWidth) - extra,
  );
  const c1 = Math.min(
    props.columns - 1,
    Math.floor(Math.max(...xs) / props.cellWidth),
  );
  const r0 = Math.max(
    0,
    Math.floor(Math.min(...ys) / props.cellHeight) - extra,
  );
  const r1 = Math.min(
    props.rowCount - 1,
    Math.floor(Math.max(...ys) / props.cellHeight),
  );
  return { c0, c1, r0, r1 };
}

function drawCellValue(ctx, value, x, y, w, h) {
  if (props.drawBead?.(ctx, value, x, y, w, h, props.stagger === 'columns')) return;
  if (isImageValue(value)) {
    const img = getImage(value);
    if (img) {
      ctx.drawImage(img, x, y, w, h);
    } else {
      ctx.fillStyle = '#e9e4df';
      ctx.fillRect(x, y, w, h);
    }
  } else {
    const color = value && props.colorOf ? props.colorOf(value) : value;
    ctx.fillStyle = color || '#ffffff';
    ctx.fillRect(x, y, w, h);
  }
}

function selectionBounds() {
  if (!props.selection.length) return null;
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const idx of props.selection) {
    const x = idx % props.columns;
    const y = Math.floor(idx / props.columns);
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  return { minX, minY, maxX, maxY };
}

function draw() {
  const el = canvas.value;
  if (!el || !viewportW || !viewportH) return;
  const ctx = el.getContext('2d');
  const cw = props.cellWidth;
  const ch = props.cellHeight;
  const z = view.zoom;

  // Background
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = colors.bg;
  ctx.fillRect(0, 0, viewportW, viewportH);

  if (!props.columns || !props.rowCount) return;

  // Paper shadow behind the pattern
  ctx.save();
  ctx.shadowColor = 'rgba(61, 46, 41, 0.12)';
  ctx.shadowBlur = 12;
  ctx.shadowOffsetY = 2;
  ctx.fillStyle = colors.paper;
  ctx.fillRect(view.panX, view.panY, worldW.value * z, worldH.value * z);
  ctx.restore();

  applyWorldTransform(ctx);
  const { c0, c1, r0, r1 } = visibleCellRange();

  // Cells
  ctx.imageSmoothingEnabled = true;
  for (let r = r0; r <= r1; r++) {
    const base = r * props.columns;
    for (let c = c0; c <= c1; c++) {
      const { x, y } = cellOrigin(c, r);
      drawCellValue(ctx, props.cells[base + c], x, y, cw, ch);
    }
  }

  // Grid lines (1 screen px wide regardless of zoom)
  const onScreen = Math.min(cw, ch) * z;
  if (
    staggered.value &&
    props.showGridLines &&
    onScreen >= 4 &&
    c1 >= c0 &&
    r1 >= r0
  ) {
    ctx.beginPath();
    for (let r = r0; r <= r1; r++) {
      for (let c = c0; c <= c1; c++) {
        const { x, y } = cellOrigin(c, r);
        ctx.rect(x, y, cw, ch);
      }
    }
    ctx.lineWidth = 1 / z;
    ctx.strokeStyle = colors.line;
    ctx.stroke();
  } else if (props.showGridLines && onScreen >= 4 && c1 >= c0 && r1 >= r0) {
    ctx.beginPath();
    for (let c = c0; c <= c1 + 1; c++) {
      ctx.moveTo(c * cw, r0 * ch);
      ctx.lineTo(c * cw, (r1 + 1) * ch);
    }
    for (let r = r0; r <= r1 + 1; r++) {
      ctx.moveTo(c0 * cw, r * ch);
      ctx.lineTo((c1 + 1) * cw, r * ch);
    }
    ctx.lineWidth = 1 / z;
    ctx.strokeStyle = colors.line;
    ctx.stroke();
  }

  // Centre marker
  if (props.markerIndex >= 0 && props.markerIndex < props.cells.length) {
    const { x: mx, y: my } = cellOrigin(
      props.markerIndex % props.columns,
      Math.floor(props.markerIndex / props.columns),
    );
    ctx.lineWidth = 2 / z;
    ctx.strokeStyle = colors.marker;
    ctx.strokeRect(mx + 1 / z, my + 1 / z, cw - 2 / z, ch - 2 / z);
  }

  // Selection
  if (staggered.value && props.selection.length) {
    // Peyote: outline each selected bead (the cells don't form a rectangle).
    ctx.beginPath();
    for (const idx of props.selection) {
      const { x, y } = cellOrigin(
        idx % props.columns,
        Math.floor(idx / props.columns),
      );
      ctx.rect(x, y, cw, ch);
    }
    ctx.fillStyle = 'rgba(214, 69, 93, 0.22)';
    ctx.fill();
    ctx.lineWidth = 2 / z;
    ctx.strokeStyle = colors.selection;
    ctx.stroke();
  }
  const sel = staggered.value ? null : selectionBounds();
  if (sel) {
    const x = sel.minX * cw;
    const y = sel.minY * ch;
    const w = (sel.maxX - sel.minX + 1) * cw;
    const h = (sel.maxY - sel.minY + 1) * ch;
    ctx.fillStyle = 'rgba(214, 69, 93, 0.12)';
    ctx.fillRect(x, y, w, h);
    ctx.setLineDash([5 / z, 4 / z]);
    ctx.lineWidth = 2 / z;
    ctx.strokeStyle = colors.selection;
    ctx.strokeRect(x, y, w, h);
    ctx.setLineDash([]);
  }

  // Paste preview under the cursor
  if (props.ghost && hoverIndex >= 0) {
    const gx = hoverIndex % props.columns;
    const gy = Math.floor(hoverIndex / props.columns);
    ctx.globalAlpha = 0.7;
    for (let y = 0; y < props.ghost.height; y++) {
      for (let x = 0; x < props.ghost.width; x++) {
        const tx = gx + x;
        const ty = gy + y;
        if (tx >= props.columns || ty >= props.rowCount) continue;
        const value = props.ghost.cells[y]?.[x];
        if (value) drawCellValue(ctx, value, tx * cw, ty * ch, cw, ch);
      }
    }
    ctx.globalAlpha = 1;
    ctx.setLineDash([5 / z, 4 / z]);
    ctx.lineWidth = 2 / z;
    ctx.strokeStyle = colors.selection;
    ctx.strokeRect(
      gx * cw,
      gy * ch,
      Math.min(props.ghost.width, props.columns - gx) * cw,
      Math.min(props.ghost.height, props.rowCount - gy) * ch,
    );
    ctx.setLineDash([]);
  }

  // Hover outline (mouse only)
  if (hoverIsMouse && hoverIndex >= 0 && !props.ghost && !panActive.value) {
    const { x: hx, y: hy } = cellOrigin(
      hoverIndex % props.columns,
      Math.floor(hoverIndex / props.columns),
    );
    ctx.lineWidth = 1.5 / z;
    ctx.strokeStyle = colors.hover;
    ctx.strokeRect(hx, hy, cw, ch);
  }

  if (props.showRulers) drawRulers(ctx);
}

function rulerStep(cellOnScreen, minGap) {
  for (const step of [1, 2, 5, 10, 20, 50, 100, 200, 500]) {
    if (step * cellOnScreen >= minGap) return step;
  }
  return 1000;
}

function drawRulers(ctx) {
  const z = view.zoom;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  // Strip backgrounds so scrolled content slides underneath.
  ctx.fillStyle = colors.bg;
  ctx.fillRect(0, 0, viewportW, RULER_TOP);
  ctx.fillRect(0, 0, RULER_LEFT, viewportH);

  ctx.fillStyle = colors.ruler;
  ctx.font = '600 10.5px Nunito, "Segoe UI", system-ui, sans-serif';
  ctx.textBaseline = 'middle';

  // Displayed grid (after rotation)
  const displayCols = props.rotated ? props.rowCount : props.columns;
  const displayRows = props.rotated ? props.columns : props.rowCount;
  const dcw = (props.rotated ? props.cellHeight : props.cellWidth) * z;
  const dch = (props.rotated ? props.cellWidth : props.cellHeight) * z;
  // Label numbers shown for display column j / row i.
  const colLabel = (j) => j + 1;
  const rowLabel = (i) => i + 1;

  // Top ruler
  ctx.textAlign = 'center';
  const topStep = rulerStep(dcw, 18);
  const j0 = Math.max(0, Math.floor((RULER_LEFT - view.panX) / dcw));
  const j1 = Math.min(
    displayCols - 1,
    Math.ceil((viewportW - view.panX) / dcw),
  );
  for (let j = j0; j <= j1; j++) {
    const n = colLabel(j);
    if (n !== 1 && n % topStep !== 0) continue;
    const x = view.panX + (j + 0.5) * dcw;
    if (x < RULER_LEFT + 4) continue;
    ctx.fillText(String(n), x, RULER_TOP / 2 + 1);
  }

  // Left ruler
  ctx.textAlign = 'right';
  const leftStep = rulerStep(dch, 16);
  const i0 = Math.max(0, Math.floor((RULER_TOP - view.panY) / dch));
  const i1 = Math.min(
    displayRows - 1,
    Math.ceil((viewportH - view.panY) / dch),
  );
  for (let i = i0; i <= i1; i++) {
    const n = rowLabel(i);
    if (n !== 1 && n % leftStep !== 0) continue;
    const y = view.panY + (i + 0.5) * dch;
    if (y < RULER_TOP + 4) continue;
    ctx.fillText(String(n), RULER_LEFT - 6, y);
  }
}

// ---- Sizing -----------------------------------------------------------------
let resizeObserver = null;

function resize() {
  const el = container.value;
  if (!el || !canvas.value) return;
  const rect = el.getBoundingClientRect();
  const w = Math.round(rect.width);
  const h = Math.round(rect.height);
  if (!w || !h) return; // hidden (v-show) — keep the last view
  dpr = window.devicePixelRatio || 1;
  if (w !== viewportW || h !== viewportH) {
    viewportW = w;
    viewportH = h;
    canvas.value.width = Math.round(w * dpr);
    canvas.value.height = Math.round(h * dpr);
    canvas.value.style.width = `${w}px`;
    canvas.value.style.height = `${h}px`;
  }
  if (!initialised) {
    initialised = true;
    resetView();
  } else {
    clampPan();
  }
  draw();
}

// ---- Pointer input ----------------------------------------------------------
const pointers = new Map();
const gesture = ref('none'); // none | stroke | pan | pinch | blocked
const spaceDown = ref(false);
const panActive = computed(() => props.panMode || spaceDown.value);

let lastCell = -1;
let strokeStartTime = 0;
let strokeCellCount = 0;
let pinch = null;
let panLast = null;

function cellsOnLine(from, to) {
  // Bresenham between two cells so fast drags don't leave gaps.
  const x0 = from % props.columns;
  const y0 = Math.floor(from / props.columns);
  const x1 = to % props.columns;
  const y1 = Math.floor(to / props.columns);
  const dx = Math.abs(x1 - x0);
  const dy = -Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;
  let err = dx + dy;
  let x = x0;
  let y = y0;
  const out = [];
  // Skip the start cell (already painted).
  for (let guard = 0; guard < 10000; guard++) {
    if (x === x1 && y === y1) break;
    const e2 = 2 * err;
    if (e2 >= dy) {
      err += dy;
      x += sx;
    }
    if (e2 <= dx) {
      err += dx;
      y += sy;
    }
    out.push(y * props.columns + x);
  }
  return out;
}

function beginPinch() {
  const [a, b] = [...pointers.values()];
  pinch = {
    dist: Math.hypot(a.x - b.x, a.y - b.y) || 1,
    midX: (a.x + b.x) / 2,
    midY: (a.y + b.y) / 2,
    zoom: view.zoom,
    panX: view.panX,
    panY: view.panY,
  };
  gesture.value = 'pinch';
}

function endStroke(cancel = false) {
  if (gesture.value !== 'stroke') return;
  emit(cancel ? 'stroke-cancel' : 'stroke-end');
  lastCell = -1;
}

function onPointerDown(event) {
  const pos = pointerPos(event);
  pointers.set(event.pointerId, { ...pos, type: event.pointerType });
  canvas.value.setPointerCapture?.(event.pointerId);

  // Second finger → switch to pinch/pan; undo an accidental stroke start.
  if (pointers.size === 2 && event.pointerType === 'touch') {
    if (gesture.value === 'stroke') {
      const quick = performance.now() - strokeStartTime < 300;
      endStroke(quick && strokeCellCount <= 3);
    }
    beginPinch();
    return;
  }
  if (pointers.size > 1) return;

  const wantsPan = panActive.value || event.button === 1;
  if (wantsPan) {
    gesture.value = 'pan';
    panLast = pos;
    return;
  }
  if (event.button !== 0 && event.pointerType === 'mouse') return;

  const index = cellAt(pos.x, pos.y);
  gesture.value = 'stroke';
  strokeStartTime = performance.now();
  strokeCellCount = 0;
  lastCell = index;
  if (index >= 0) {
    strokeCellCount = 1;
    emit('stroke-start', index, { pointerType: event.pointerType });
  } else {
    // Started outside the grid: wait until the pointer enters it.
    lastCell = -1;
  }
}

function onPointerMove(event) {
  const pos = pointerPos(event);
  if (pointers.has(event.pointerId)) {
    pointers.set(event.pointerId, { ...pos, type: event.pointerType });
  }

  if (gesture.value === 'pinch' && pointers.size >= 2 && pinch) {
    const [a, b] = [...pointers.values()];
    const dist = Math.hypot(a.x - b.x, a.y - b.y) || 1;
    const midX = (a.x + b.x) / 2;
    const midY = (a.y + b.y) / 2;
    const z = clampZoom((pinch.zoom * dist) / pinch.dist);
    // World point that was under the starting midpoint stays under the fingers.
    const wx = (pinch.midX - pinch.panX) / pinch.zoom;
    const wy = (pinch.midY - pinch.panY) / pinch.zoom;
    view.zoom = z;
    view.panX = midX - wx * z;
    view.panY = midY - wy * z;
    clampPan();
    emit('update:zoom', z);
    scheduleDraw();
    return;
  }

  if (gesture.value === 'pan' && panLast) {
    panBy(pos.x - panLast.x, pos.y - panLast.y);
    panLast = pos;
    return;
  }

  const index = cellAt(pos.x, pos.y);
  if (index !== hoverIndex) {
    hoverIndex = index;
    hoverIsMouse = event.pointerType === 'mouse';
    emit('hover', index >= 0 ? index : null);
    scheduleDraw();
  }

  if (gesture.value === 'stroke' && index >= 0 && index !== lastCell) {
    if (lastCell < 0) {
      lastCell = index;
      strokeCellCount++;
      emit('stroke-start', index, { pointerType: event.pointerType });
      return;
    }
    const path = cellsOnLine(lastCell, index);
    strokeCellCount += path.length;
    lastCell = index;
    emit('stroke-move', path);
  }
}

function releasePointer(event, cancel) {
  pointers.delete(event.pointerId);
  canvas.value?.releasePointerCapture?.(event.pointerId);
  if (gesture.value === 'stroke') {
    endStroke(cancel);
    gesture.value = 'none';
  } else if (gesture.value === 'pinch') {
    // Don't resume painting with the remaining finger.
    gesture.value = pointers.size ? 'blocked' : 'none';
    pinch = null;
  } else if (gesture.value === 'pan') {
    gesture.value = 'none';
    panLast = null;
  } else if (gesture.value === 'blocked' && !pointers.size) {
    gesture.value = 'none';
  }
}

function onPointerUp(event) {
  releasePointer(event, false);
}

function onPointerCancel(event) {
  releasePointer(event, false);
}

function onPointerLeave(event) {
  if (event.pointerType === 'mouse' && hoverIndex !== -1) {
    hoverIndex = -1;
    emit('hover', null);
    scheduleDraw();
  }
}

function onWheel(event) {
  const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? 400 : 1;
  const dx = event.deltaX * unit;
  const dy = event.deltaY * unit;
  if (event.ctrlKey || event.metaKey) {
    const pos = pointerPos(event);
    setZoom(view.zoom * Math.exp(-dy * 0.0025), pos.x, pos.y);
  } else if (event.shiftKey && !dx) {
    panBy(-dy, 0);
  } else {
    panBy(-dx, -dy);
  }
}

// ---- Keyboard (space to pan) ------------------------------------------------
function isTyping(target) {
  return (
    target &&
    (target.isContentEditable ||
      ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))
  );
}

function onKeyDown(event) {
  if (event.code === 'Space' && !isTyping(event.target)) {
    if (!container.value?.offsetParent) return; // hidden
    event.preventDefault();
    if (!spaceDown.value) {
      spaceDown.value = true;
      scheduleDraw();
    }
  }
}

function onKeyUp(event) {
  if (event.code === 'Space' && spaceDown.value) {
    spaceDown.value = false;
    scheduleDraw();
  }
}

// ---- Reactivity -------------------------------------------------------------
watch(
  () => props.zoom,
  (z) => {
    if (Math.abs(z - view.zoom) > 1e-6) setZoom(z);
  },
);

watch(
  () => [
    props.cells,
    props.selection,
    props.markerIndex,
    props.showGridLines,
    props.ghost,
    props.cellWidth,
    props.cellHeight,
    props.colorOf,
    props.drawBead,
  ],
  () => {
    clampPan();
    scheduleDraw();
  },
  { deep: true },
);

// A different shape or orientation: re-frame the pattern.
watch(
  () => [
    props.columns,
    props.rowCount,
    props.rotated,
    props.showRulers,
    props.stagger,
  ],
  () => {
    if (initialised) resetView();
  },
);

onMounted(() => {
  readThemeColors();
  resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container.value);
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);
  // Redraw rulers once the web font is ready.
  document.fonts?.ready?.then(scheduleDraw);
});

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
  cancelAnimationFrame(rafId);
  window.removeEventListener('keydown', onKeyDown);
  window.removeEventListener('keyup', onKeyUp);
});

defineExpose({
  fitToScreen,
  fitWidth,
  setZoom,
  panBy,
  redraw: scheduleDraw,
  getCanvas: () => canvas.value,
});
</script>

<style scoped>
.bead-canvas {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  background: var(--canvas-bg);
  cursor: crosshair;
}

.bead-canvas.is-panning {
  cursor: grab;
}

.bead-canvas.is-grabbing {
  cursor: grabbing;
}

.bead-canvas__canvas {
  display: block;
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}
</style>
