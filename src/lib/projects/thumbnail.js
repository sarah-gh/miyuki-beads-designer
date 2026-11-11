import { delicaEntry } from '@/components/peyote/delicaCatalog.js';

// Thumbnails are stored with each project as a tiny, palette-compressed bead
// matrix ({ w, h, palette, cells }) and drawn on a canvas when displayed.
// Storing data (not a PNG) keeps them small and crisp at any size.

const MAX_SIDE = 96;
const EMPTY = '#ffffff';
const IMAGE_BEAD = '#cdbfb3';
const CHAR_OFFSET = 48;

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
export function makeThumb(matrix) {
  if (!Array.isArray(matrix) || !matrix.length) return null;
  let h = matrix.length;
  let w = Math.max(...matrix.map((row) => row?.length ?? 0));
  if (!w) return null;

  const rotate = h > w;
  const sourceWidth = w;
  const at = rotate
    ? (x, y) => matrix[x]?.[sourceWidth - 1 - y] // 90° turn: long side horizontal
    : (x, y) => matrix[y]?.[x];
  if (rotate) [w, h] = [h, w];

  const step = Math.max(1, Math.ceil(Math.max(w, h) / MAX_SIDE));
  const tw = Math.ceil(w / step);
  const th = Math.ceil(h / step);

  const palette = [];
  const lookup = new Map();
  let cells = '';
  for (let y = 0; y < th; y++) {
    for (let x = 0; x < tw; x++) {
      const color = cellColor(at(x * step, y * step)).toLowerCase();
      let index = lookup.get(color);
      if (index === undefined) {
        index = palette.length;
        palette.push(color);
        lookup.set(color, index);
      }
      cells += String.fromCharCode(CHAR_OFFSET + index);
    }
  }
  return { w: tw, h: th, palette, cells };
}

/** Draw a thumbnail as little rounded beads. Returns false if nothing drawn. */
export function drawThumb(canvas, thumb, { bead = 8 } = {}) {
  if (!canvas || !thumb?.w) return false;
  const ctx = canvas.getContext('2d');
  canvas.width = thumb.w * bead;
  canvas.height = thumb.h * bead;
  ctx.fillStyle = '#efe6dd';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const inset = Math.max(0.5, bead * 0.06);
  const radius = bead * 0.28;
  for (let y = 0; y < thumb.h; y++) {
    for (let x = 0; x < thumb.w; x++) {
      const code = thumb.cells.charCodeAt(y * thumb.w + x) - CHAR_OFFSET;
      const px = x * bead + inset;
      const py = y * bead + inset;
      const size = bead - inset * 2;
      ctx.fillStyle = thumb.palette[code] ?? EMPTY;
      ctx.beginPath();
      ctx.roundRect(px, py, size, size, radius);
      ctx.fill();
      // A soft highlight so the cells read as glass beads.
      ctx.fillStyle = 'rgba(255,255,255,0.22)';
      ctx.beginPath();
      ctx.roundRect(
        px + size * 0.18,
        py + size * 0.14,
        size * 0.4,
        size * 0.26,
        radius,
      );
      ctx.fill();
    }
  }
  return true;
}
