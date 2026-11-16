import { delicaCatalog } from '@/components/peyote/delicaCatalog.js';

export const fullCrop = () => [
  [0, 0],
  [1, 0],
  [1, 1],
  [0, 1],
];

export function validCrop(points) {
  return points.every(([x, y], i) => {
    const [bx, by] = points[(i + 1) % 4];
    const [cx, cy] = points[(i + 2) % 4];
    return (bx - x) * (cy - by) - (by - y) * (cx - bx) > 0.0001;
  });
}

export function rectify(image, points, width, height) {
  if (!validCrop(points))
    throw new Error('Move the corners to form a convex four-sided crop.');
  const scale = Math.min(1, 1600 / Math.max(image.width, image.height));
  const source = document.createElement('canvas');
  source.width = Math.max(1, Math.round(image.width * scale));
  source.height = Math.max(1, Math.round(image.height * scale));
  const ctx = source.getContext('2d');
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, source.width, source.height);
  ctx.drawImage(image, 0, 0, source.width, source.height);
  const pixels = ctx.getImageData(0, 0, source.width, source.height).data;
  const [[ax, ay], [bx, by], [cx, cy], [dx, dy]] = points;
  const ux = bx - cx,
    uy = by - cy,
    vx = dx - cx,
    vy = dy - cy;
  const wx = ax - bx + cx - dx,
    wy = ay - by + cy - dy;
  const det = ux * vy - uy * vx;
  const g = (wx * vy - wy * vx) / det,
    h = (ux * wy - uy * wx) / det;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const output = canvas.getContext('2d');
  const data = output.createImageData(width, height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const u = (x + 0.5) / width,
        v = (y + 0.5) / height;
      const z = 1 + g * u + h * v;
      const sx = (ax + ((1 + g) * bx - ax) * u + ((1 + h) * dx - ax) * v) / z;
      const sy = (ay + ((1 + g) * by - ay) * u + ((1 + h) * dy - ay) * v) / z;
      const ix = Math.max(
        0,
        Math.min(source.width - 1, Math.floor(sx * source.width)),
      );
      const iy = Math.max(
        0,
        Math.min(source.height - 1, Math.floor(sy * source.height)),
      );
      const from = (iy * source.width + ix) * 4,
        to = (y * width + x) * 4;
      data.data.set(pixels.subarray(from, from + 4), to);
    }
  }
  output.putImageData(data, 0, 0);
  return canvas;
}

function lab(r, g, b) {
  const [red, green, blue] = [r, g, b].map((value) => {
    const n = value / 255;
    return n <= 0.04045 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4;
  });
  const [x, y, z] = [
    (0.4124 * red + 0.3576 * green + 0.1805 * blue) / 0.95047,
    0.2126 * red + 0.7152 * green + 0.0722 * blue,
    (0.0193 * red + 0.1192 * green + 0.9505 * blue) / 1.08883,
  ].map((n) => (n > 0.008856 ? Math.cbrt(n) : 7.787 * n + 16 / 116));
  return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
}

const distance = (a, b) =>
  (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2;
const catalog = Object.values(delicaCatalog)
  .filter(({ color }) => /^#[\da-f]{6}$/i.test(color))
  .map((entry) => {
    const rgb = Number.parseInt(entry.color.slice(1), 16);
    return { entry, color: lab(rgb >> 16, (rgb >> 8) & 255, rgb & 255) };
  });

function beadCenter(cropPixels, width, row, col) {
  const channels = [[], [], []];
  // Use the central half of each cell to exclude thread and bead boundaries.
  for (let y = 2; y < 6; y++) {
    for (let x = 2; x < 6; x++) {
      const index = ((row * 8 + y) * width + col * 8 + x) * 4;
      channels.forEach((values, channel) =>
        values.push(cropPixels[index + channel]),
      );
    }
  }
  return lab(
    ...channels.map((values) => {
      values.sort((a, b) => a - b);
      return (values[7] + values[8]) / 2;
    }),
  );
}

export function mapBeads(crop, rows, cols, limit, focus, bracelet = false) {
  const canvas = document.createElement('canvas');
  canvas.width = cols;
  canvas.height = rows;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(crop, 0, 0, cols, rows);
  const { data } = ctx.getImageData(0, 0, cols, rows);
  const cropPixels = bracelet
    ? crop.getContext('2d').getImageData(0, 0, crop.width, crop.height).data
    : null;
  const samples = Array.from({ length: rows * cols }, (_, i) => ({
    color: cropPixels
      ? beadCenter(cropPixels, crop.width, Math.floor(i / cols), i % cols)
      : lab(data[i * 4], data[i * 4 + 1], data[i * 4 + 2]),
    weight:
      focus &&
      ((i % cols) + 0.5) / cols >= focus.left &&
      ((i % cols) + 0.5) / cols <= focus.right &&
      (Math.floor(i / cols) + 0.5) / rows >= focus.top &&
      (Math.floor(i / cols) + 0.5) / rows <= focus.bottom
        ? 3
        : 1,
  }));
  const nearest = (color, palette) =>
    palette.reduce((best, candidate) =>
      distance(color, candidate.color) < distance(color, best.color)
        ? candidate
        : best,
    );
  const totalWeight = samples.reduce((sum, sample) => sum + sample.weight, 0);
  const mean = [0, 1, 2].map(
    (axis) =>
      samples.reduce(
        (sum, sample) => sum + sample.color[axis] * sample.weight,
        0,
      ) / totalWeight,
  );
  const first = bracelet ? nearest(mean, samples) : { color: mean };
  const palette = [nearest(first.color, catalog)];
  const errors = samples.map(({ color }) => distance(color, palette[0].color));
  while (palette.length < limit) {
    // Try catalog matches for the worst represented pixels and pick the one
    // that reduces total error the most across the entire photograph.
    const candidates = new Set(
      samples
        .map((sample, i) => ({ sample, score: errors[i] * sample.weight }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 36)
        .map(({ sample }) => nearest(sample.color, catalog)),
    );
    let best;
    let improvement = 0;
    for (const candidate of candidates) {
      const gain = samples.reduce(
        (sum, sample, i) =>
          sum +
          sample.weight *
            Math.max(0, errors[i] - distance(sample.color, candidate.color)),
        0,
      );
      if (gain > improvement) {
        best = candidate;
        improvement = gain;
      }
    }
    if (!best) break;
    palette.push(best);
    samples.forEach(({ color }, i) => {
      errors[i] = Math.min(errors[i], distance(color, best.color));
    });
  }
  return samples.map(({ color }) => nearest(color, palette).entry.code);
}
