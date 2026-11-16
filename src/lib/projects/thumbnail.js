import { getMode } from './modes.js';
import { delicaEntry } from '@/components/peyote/delicaCatalog.js';

// Thumbnails are stored with each project as a tiny, palette-compressed bead
// matrix ({ w, h, palette, cells }) and drawn on a canvas when displayed.
// Storing data (not a PNG) keeps them small and crisp at any size.

const MAX_SIDE = 96;
const EMPTY = '#ffffff';
const IMAGE_BEAD = '#cdbfb3';
const CHAR_OFFSET = 48;
export const THUMB_VERSION = 2;

export function makeProjectThumb(mode, data) {
  const layout =
    mode === '3d' ? 'triangle' : mode === 'flat' ? 'loom' : 'peyote';
  return makeThumb(getMode(mode).toMatrix(data), {
    layout,
    vertical: data.orientation !== 'horizontal',
  });
}

/** Any cell value the editors store (Delica code, hex, image URL, null) -> hex. */
export function cellColor(value) {
  if (value === null || value === undefined || value === '') return EMPTY;
  if (typeof value !== 'string') return EMPTY;
  if (value.startsWith('#')) return value;
  const entry = delicaEntry(value);
  if (entry) return entry.color;
  if (/^(\/|data:|https?:|blob:)/.test(value)) return IMAGE_BEAD;
  return value;
}

/**
 * Build a compact thumbnail from a 2D matrix of cell values. The long side
 * of the pattern is laid out horizontally, the way a bracelet is pictured.
 */
export function makeThumb(matrix, { layout = 'loom', vertical = true } = {}) {
  if (!Array.isArray(matrix) || !matrix.length) return null;
  let h = matrix.length;
  let w = Math.max(...matrix.map((row) => row?.length ?? 0));
  if (!w) return null;

  const rotate =
    layout === 'peyote' ? vertical : layout !== 'triangle' && h > w;
  const sourceWidth = w;
  const at = rotate
    ? (x, y) => matrix[x]?.[sourceWidth - 1 - y] // 90° turn: long side horizontal
    : (x, y) => matrix[y]?.[x];
  if (rotate) [w, h] = [h, w];

  let step = Math.max(1, Math.ceil(Math.max(w, h) / MAX_SIDE));
  // An even stride would sample only one of the staggered tracks.
  if (layout === 'peyote' && step % 2 === 0) step++;
  const tw = Math.ceil(w / step);
  const th = Math.ceil(h / step);

  const palette = [];
  const lookup = new Map();
  let cells = '';
  for (let y = 0; y < th; y++) {
    for (let x = 0; x < tw; x++) {
      const value = at(x * step, y * step);
      if (layout === 'triangle' && value == null) {
        cells += ' ';
        continue;
      }
      const color = cellColor(value).toLowerCase();
      let index = lookup.get(color);
      if (index === undefined) {
        index = palette.length;
        palette.push(color);
        lookup.set(color, index);
      }
      cells += String.fromCharCode(CHAR_OFFSET + index);
    }
  }
  return {
    version: THUMB_VERSION,
    layout,
    staggerPhase: rotate ? (sourceWidth - 1) % 2 : 0,
    w: tw,
    h: th,
    palette,
    cells,
  };
}

/** Draw a thumbnail as little rounded beads. Returns false if nothing drawn. */
export function drawThumb(canvas, thumb, { bead = 8 } = {}) {
  if (!canvas || !thumb?.w) return false;
  const ctx = canvas.getContext('2d');
  if (!ctx) return false;
  const { layout, w, h } = thumb;
  const peyote = layout === 'peyote';
  const triangle = layout === 'triangle';
  const pitchY = bead * (peyote ? 0.72 : triangle ? 0.78 : 0.88);
  const gap = triangle ? bead * 0.65 : 0;
  const padding = bead * 0.55;
  const faceWidth = h;
  const faceCount = triangle ? Math.ceil(w / faceWidth) : 1;
  canvas.width = Math.ceil(
    w * bead +
      (peyote && h > 1 ? bead / 2 : 0) +
      (faceCount - 1) * gap +
      padding * 2,
  );
  canvas.height = Math.ceil(h * pitchY + padding * 2);

  const inset = bead * 0.045;
  const width = bead - inset * 2;
  const height = pitchY - inset * 2;
  const radius = Math.min(width, height) * 0.28;
  const glaze = ctx.createLinearGradient(0, 0, 0, height);
  glaze.addColorStop(0, 'rgba(255,255,255,0.42)');
  glaze.addColorStop(0.35, 'rgba(255,255,255,0.12)');
  glaze.addColorStop(0.68, 'rgba(0,0,0,0)');
  glaze.addColorStop(1, 'rgba(0,0,0,0.22)');

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const code = thumb.cells.charCodeAt(y * w + x) - CHAR_OFFSET;
      if (code < 0) continue;
      let offset = peyote && (y + (thumb.staggerPhase ?? 0)) % 2 ? bead / 2 : 0;
      if (triangle) {
        // The stored face matrix uses integer padding. Restore its half-bead centring.
        offset =
          Math.floor(x / faceWidth) * gap +
          (((faceWidth - y - 1) % 2) * bead) / 2;
      }
      ctx.save();
      ctx.translate(
        padding + x * bead + offset + inset,
        padding + y * pitchY + inset,
      );
      ctx.beginPath();
      ctx.roundRect(0, 0, width, height, radius);
      ctx.fillStyle = thumb.palette[code] ?? EMPTY;
      ctx.fill();
      ctx.fillStyle = glaze;
      ctx.fill();
      ctx.restore();
    }
  }
  return true;
}
