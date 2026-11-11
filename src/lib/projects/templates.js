import { triangleDesign } from './designShapes.js';
import { flatPresets } from '@/components/flat/flatPresets.js';
import { peyotePresets } from '@/components/peyote/peyotePresets.js';

// Ready-made designs a user can start a project from. Each template carries
// its data in the same format the matching editor saves, so creating a
// project from it is just a copy.
//
// Template: { id, mode, name, category, data }

const CATEGORIES = ['Floral', 'Geometric', 'Traditional', 'Nature'];
export { CATEGORIES };

// ---- Flat ------------------------------------------------------------------------
// Flat editor naming: rows = beads ACROSS, cols = beads ALONG, index = y * rows + x.
function flatTemplate(id, name, category, across, along, colorAt) {
  return {
    id: `flat-${id}`,
    mode: 'flat',
    name,
    category,
    data: {
      rows: across,
      cols: along,
      grid: Array.from({ length: across * along }, (_, i) =>
        colorAt(i % across, Math.floor(i / across)),
      ),
      cellWidth: 20,
      cellHeight: 16,
      isVerticalGrid: true,
    },
  };
}

const flatPresetCategories = {
  'turquoise-diamonds': 'Geometric',
  'silk-checks': 'Traditional',
  'glass-stripes': 'Geometric',
};

// A small flower repeated along the band.
const FLOWER = [
  '...rr...',
  '..rRRr..',
  '.rRyyRr.',
  'rRyyyyRr',
  '.rRyyRr.',
  '..rRRr..',
  'g..rr..g',
  'gg....gg',
];
const flowerColors = {
  '.': 'DB352', // cream
  r: 'DB2117', // pink
  R: 'DB159', // red
  y: 'DB160', // yellow
  g: 'DB163', // green
};

const flatTemplates = [
  flatTemplate('floral-band', 'Floral band', 'Floral', 16, 80, (x, y) => {
    if (y % 12 >= 10 || x === 0 || x === 15) return 'DB1832';
    const fy = (y % 12) - 1;
    const fx = x - 4;
    if (fy < 0 || fy >= 8 || fx < 0 || fx >= 8) return 'DB352';
    return flowerColors[FLOWER[fy][fx]];
  }),
  flatTemplate('ocean-waves', 'Ocean waves', 'Nature', 14, 84, (x, y) => {
    const crest = 6 + 3 * Math.sin((y * Math.PI) / 10);
    const d = x - crest;
    if (d < -2) return 'DB352';
    if (d < -0.5) return 'DB200';
    if (d < 1.5) return 'DB164';
    if (d < 4) return 'DB166';
    return 'DB165';
  }),
  ...flatPresets.map((preset) => ({
    id: `flat-${preset.id}`,
    mode: 'flat',
    name: preset.name,
    category: flatPresetCategories[preset.id] ?? 'Geometric',
    data: {
      // Same mapping the editor's own preset picker uses.
      rows: preset.columns,
      cols: preset.rows,
      grid: [...preset.pattern],
      cellWidth: 20,
      cellHeight: 16,
      isVerticalGrid: true,
    },
  })),
];

// ---- Peyote -------------------------------------------------------------------------
const peyoteTemplates = peyotePresets.map((preset) => ({
  id: `peyote-${preset.id}`,
  mode: 'peyote',
  name: preset.name,
  category: preset.id.startsWith('reference') ? 'Traditional' : 'Geometric',
  data: {
    rows: preset.rows,
    cols: preset.cols,
    orientation: preset.orientation,
    cellWidth: preset.cellWidth,
    cellHeight: preset.cellHeight,
    backgroundColor: '#ffffff',
    grid: Array.from({ length: preset.rows }, (_, r) =>
      preset.pattern.slice(r * preset.cols, (r + 1) * preset.cols),
    ),
  },
}));

// ---- Weaving (peyote editor format, laid out horizontally) ----------------------------
const W = {
  red: 'DB162',
  orange: 'DB161',
  gold: 'DB1832',
  navy: 'DB165',
  white: 'DB200',
};

function weavingTemplate(id, name, category, rows, cols, colorAt) {
  return {
    id: `weaving-${id}`,
    mode: 'weaving',
    name,
    category,
    data: {
      rows,
      cols,
      orientation: 'horizontal',
      cellWidth: 16,
      cellHeight: 20,
      backgroundColor: '#ffffff',
      grid: Array.from({ length: rows }, (_, r) =>
        Array.from({ length: cols }, (_, c) => colorAt(c, r)),
      ),
    },
  };
}

const weavingTemplates = [
  weavingTemplate(
    'sunset-zigzag',
    'Sunset zigzag',
    'Geometric',
    11,
    80,
    (x, y) => {
      const zig = Math.abs((x % 10) - 5);
      const band = (y + zig) % 11;
      if (band < 2) return W.navy;
      if (band < 4) return W.red;
      if (band < 6) return W.orange;
      if (band < 8) return W.gold;
      return W.white;
    },
  ),
  weavingTemplate(
    'kilim-diamonds',
    'Kilim diamonds',
    'Traditional',
    13,
    78,
    (x, y) => {
      if (y === 0 || y === 12) return W.navy;
      const d = Math.abs((x % 13) - 6) + Math.abs(y - 6);
      if (d <= 1) return W.gold;
      if (d <= 3) return W.red;
      if (d === 5) return W.navy;
      if (d === 6) return W.orange;
      return W.white;
    },
  ),
  weavingTemplate('desert-stripes', 'Desert stripes', 'Nature', 10, 80, (x) => {
    const colors = [
      W.navy,
      W.white,
      W.gold,
      W.orange,
      W.red,
      W.orange,
      W.gold,
      W.white,
    ];
    return colors[Math.floor(x / 4) % colors.length];
  }),
];

export const TEMPLATES = [
  {
    id: 'triangle-crimson',
    mode: '3d',
    name: 'Crimson and ivory triangle',
    category: 'Geometric',
    data: triangleDesign(['DB602', 'DB200', 'DB753', 'DB602']),
  },
  {
    id: 'triangle-gold',
    mode: '3d',
    name: 'Black and gold triangle',
    category: 'Geometric',
    data: triangleDesign(),
  },
  {
    id: 'triangle-turquoise',
    mode: '3d',
    name: 'Turquoise and lilac triangle',
    category: 'Geometric',
    data: triangleDesign(['DB200', 'DB1832', 'DB2130', 'DB1806']),
  },
  ...flatTemplates,
  ...weavingTemplates,
  ...peyoteTemplates,
];

export function templatesFor(mode) {
  return TEMPLATES.filter((template) => template.mode === mode);
}

export function getTemplate(id) {
  return TEMPLATES.find((template) => template.id === id) ?? null;
}
