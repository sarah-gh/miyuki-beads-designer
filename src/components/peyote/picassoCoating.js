import { CanvasTexture, SRGBColorSpace } from 'three';

const tiles = new Map();
const size = 128;

export function picassoTile(entry) {
  if (!entry?.finish?.toLowerCase().includes('picasso')) return null;
  if (tiles.has(entry.code)) return tiles.get(entry.code);

  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(size, size);
  const value = Number.parseInt(entry.color.slice(1), 16);
  const base = [value >> 16, (value >> 8) & 255, value & 255];
  const seed = Number.parseInt(entry.code.slice(2), 10);
  const turquoise = entry.code === 'DB2264';
  const mineral = turquoise ? [77, 70, 39] : [145, 110, 82];
  const hash = (x, y) => {
    const n = Math.sin(x * 127.1 + y * 311.7 + seed) * 43758.5453;
    return n - Math.floor(n);
  };

  function noise(x, y, frequency) {
    const px = (x * frequency) / size;
    const py = (y * frequency) / size;
    const i = Math.floor(px);
    const j = Math.floor(py);
    const smooth = (t) => t * t * (3 - 2 * t);
    const u = smooth(px - i);
    const v = smooth(py - j);
    const a = hash(i, j) * (1 - u) + hash((i + 1) % frequency, j) * u;
    const b =
      hash(i, (j + 1) % frequency) * (1 - u) +
      hash((i + 1) % frequency, (j + 1) % frequency) * u;
    return a * (1 - v) + b * v;
  }

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const grain =
        0.65 * noise(x, y, 6) + 0.25 * noise(x, y, 15) + 0.1 * noise(x, y, 37);
      const cluster = turquoise
        ? 0.72 * noise(x, y, 8) + 0.2 * noise(x, y, 19) + 0.08 * noise(x, y, 39)
        : 0;
      const fleck = turquoise
        ? Math.max(0, Math.min(0.94, (cluster - 0.65) * 12))
        : Math.max(0, Math.min(1, (grain - 0.43) * 4));
      const shade = turquoise ? 0.85 + grain * 0.35 : 0.7 + grain * 0.55;
      const index = (y * size + x) * 4;
      for (let channel = 0; channel < 3; channel++) {
        image.data[index + channel] =
          base[channel] * shade * (1 - fleck) +
          mineral[channel] * fleck +
          (hash(x, y) - 0.5) * (turquoise ? 5 : 16);
      }
      image.data[index + 3] = 255;
    }
  }
  ctx.putImageData(image, 0, 0);
  tiles.set(entry.code, canvas);
  return canvas;
}

export function applyPicassoCoating(material, entry) {
  const tile = picassoTile(entry);
  if (!tile) return;
  material.map = new CanvasTexture(tile);
  material.map.colorSpace = SRGBColorSpace;
  material.map.flipY = false;
  material.color.set('#ffffff');
  material.roughness = 0.64;
  material.clearcoat = 0.12;
  if (entry.code === 'DB2264') {
    material.roughness = 0.28;
    material.clearcoat = 0.55;
    material.clearcoatRoughness = 0.18;
  }
}
