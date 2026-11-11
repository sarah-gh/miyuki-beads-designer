import { delicaEntry } from './delicaCatalog.js';

const tiles = new Map();
const urls = new Map();
const size = 64;
const tileInset = 2;
const beadSize = size - 2 * tileInset;

// Side view of the Delica cylinder. Axial edges sit at the top and bottom.
function tile(entry) {
  if (tiles.has(entry.code)) return tiles.get(entry.code);
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const surface = entry.surface;
  const matte = surface.roughness >= 0.48;
  const metallic = surface.metalness >= 0.6;
  const translucent = surface.transmission > 0;

  ctx.beginPath();
  ctx.roundRect(tileInset, tileInset, beadSize, beadSize, 10);
  ctx.clip();
  ctx.fillStyle = translucent ? surface.color : entry.color;
  ctx.globalAlpha = translucent ? 0.58 : 1;
  ctx.fillRect(0, 0, size, size);
  ctx.globalAlpha = 1;

  if (entry.lining) {
    const core = ctx.createLinearGradient(0, 0, size, 0);
    core.addColorStop(0.22, 'transparent');
    core.addColorStop(0.31, entry.lining.color);
    core.addColorStop(0.69, entry.lining.color);
    core.addColorStop(0.78, 'transparent');
    ctx.fillStyle = core;
    ctx.globalAlpha = 0.72;
    ctx.fillRect(0, 0, size, size);
    ctx.globalAlpha = 1;
  }

  const light = ctx.createLinearGradient(0, 0, size, 0);
  light.addColorStop(0, 'rgba(18,11,9,.58)');
  light.addColorStop(0.18, 'rgba(18,11,9,.13)');
  light.addColorStop(
    0.36,
    matte ? 'rgba(255,255,255,.27)' : 'rgba(255,255,255,.48)',
  );
  light.addColorStop(
    0.53,
    metallic ? 'rgba(255,255,255,.70)' : 'rgba(255,255,255,.08)',
  );
  light.addColorStop(0.85, 'rgba(18,11,9,.17)');
  light.addColorStop(1, 'rgba(18,11,9,.55)');
  ctx.fillStyle = light;
  ctx.fillRect(0, 0, size, size);

  if (entry.finishTags.includes('iridescent')) {
    const sheen = ctx.createLinearGradient(8, 0, 58, 64);
    sheen.addColorStop(0, 'rgba(255,158,204,.28)');
    sheen.addColorStop(0.5, 'rgba(143,225,250,.10)');
    sheen.addColorStop(1, 'rgba(250,218,122,.28)');
    ctx.fillStyle = sheen;
    ctx.fillRect(0, 0, size, size);
  }
  if (surface.anisotropy) {
    for (let x = 8; x < 57; x += 3) {
      ctx.fillStyle = x % 2 ? 'rgba(255,255,255,.20)' : 'rgba(39,24,22,.13)';
      ctx.fillRect(x, 5, 1, 54);
    }
  }
  const rims = ctx.createLinearGradient(0, 0, 0, size);
  rims.addColorStop(0, 'rgba(30,17,13,.46)');
  rims.addColorStop(0.09, 'rgba(255,255,255,.44)');
  rims.addColorStop(0.21, 'transparent');
  rims.addColorStop(0.83, 'transparent');
  rims.addColorStop(0.95, 'rgba(38,22,18,.34)');
  rims.addColorStop(1, 'rgba(255,255,255,.30)');
  ctx.fillStyle = rims;
  ctx.fillRect(0, 0, size, size);

  if (!matte) {
    ctx.fillStyle = metallic
      ? 'rgba(255,255,255,.79)'
      : 'rgba(255,255,255,.57)';
    ctx.beginPath();
    ctx.roundRect(18, 11, 4, 39, 2);
    ctx.fill();
  }
  tiles.set(entry.code, canvas);
  return canvas;
}

export function delicaThumbnail(value) {
  const entry = delicaEntry(value);
  if (!entry) return undefined;
  if (!urls.has(entry.code)) urls.set(entry.code, tile(entry).toDataURL());
  return urls.get(entry.code);
}

export function drawDelicaBead(
  ctx,
  value,
  x,
  y,
  width,
  height,
  axisHorizontal,
) {
  const entry = delicaEntry(value);
  if (!entry) return false;
  const image = tile(entry);
  // Keep the thumbnail padding in the picker and crop it out on the grid.
  const crop = [tileInset, tileInset, beadSize, beadSize];
  if (axisHorizontal) {
    ctx.save();
    ctx.translate(x + width, y);
    ctx.rotate(Math.PI / 2);
    ctx.drawImage(image, ...crop, 0, 0, height, width);
    ctx.restore();
  } else {
    ctx.drawImage(image, ...crop, x, y, width, height);
  }
  return true;
}
