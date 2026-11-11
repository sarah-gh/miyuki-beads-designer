import catalog from './miyuki-delica-11-0.json';

const finishes = {
  opaque: {
    label: 'Shiny opaque glass',
    surface: { roughness: 0.27, clearcoat: 0.35 },
  },
  matte: { label: 'Matte opaque glass', surface: { roughness: 0.65 } },
  duracoat: {
    label: 'Dyed glass with Duracoat',
    surface: { roughness: 0.3, clearcoat: 0.28 },
  },
  galvanized: {
    label: 'Glass with metallic Duracoat',
    surface: { roughness: 0.22, metalness: 0.92 },
  },
  matteGalvanized: {
    label: 'Glass with matte metallic Duracoat',
    surface: { roughness: 0.55, metalness: 0.82 },
  },
};

const clearGlass = {
  transmission: 1,
  roughness: 0.08,
  ior: 1.5,
  thickness: 0.0004,
};
const clear = { label: 'Shiny transparent glass', surface: clearGlass };
const frosted = {
  label: 'Matte transparent glass',
  surface: { ...clearGlass, transmission: 0.85, roughness: 0.46 },
};
const colorLined = {
  label: 'Clear glass, colour lined',
  surface: clearGlass,
};
const silverLined = {
  label: 'Transparent glass, silver lined',
  surface: clearGlass,
  lining: { color: '#e7edf2', metalness: 1, roughness: 0.17 },
};
const goldLined = {
  label: 'Transparent glass, gold lined',
  surface: clearGlass,
  lining: { color: '#efba58', metalness: 1, roughness: 0.19 },
};
const silk = {
  label: 'Shiny silk glass, colour lined',
  surface: {
    ...clearGlass,
    transmission: 0.56,
    roughness: 0.29,
    anisotropy: 0.8,
    clearcoat: 0.48,
    clearcoatRoughness: 0.16,
  },
};

function bead(code, name, color, finish, layers = {}) {
  return [
    code,
    {
      code,
      name,
      color,
      label: finish.label,
      surface: { color, ...finish.surface, ...layers.surface },
      lining: layers.lining ?? finish.lining,
    },
  ];
}

// MIYUKI Delica durability chart and sample cards 849 / 1012.
// Swatch and rendering colors are approximate. Swatches combine glass and lining.
const tunedEntries = Object.fromEntries([
  bead('DB10', 'Shiny black', '#272525', finishes.opaque),
  bead('DB41', 'Crystal, silver lined', '#d4d9dc', silverLined, {
    surface: { color: '#ffffff' },
  }),
  bead('DB141', 'Clear crystal', '#e3eaed', clear, {
    surface: { color: '#ffffff' },
  }),
  bead('DB239', 'Crystal, light blue lined', '#86c9da', colorLined, {
    surface: { color: '#ffffff' },
    lining: { color: '#41a9c7', roughness: 0.4 },
  }),
  bead('DB753', 'Matte red', '#d81822', finishes.matte),
  bead('DB782', 'Matte coloured glass', '#b8a8bc', frosted),
  bead('DB1801', 'Yellow silk', '#e5c99c', silk, {
    surface: { color: '#fff3d8' },
    lining: { color: '#b98343', roughness: 0.42 },
  }),
  bead('DB1806', 'Purple silk', '#b27b9d', silk, {
    surface: { color: '#e4badb' },
    lining: { color: '#83446f', roughness: 0.42 },
  }),
  bead('DB1831', 'Rose gold', '#c39578', finishes.galvanized),
  bead('DB1831F', 'Matte rose gold', '#bd987f', finishes.matteGalvanized),
  bead('DB1832', 'Gold', '#d39c2a', finishes.galvanized),
  bead('DB2117', 'Pink', '#f28994', finishes.duracoat),
  bead('DB2521', 'Crystal, gold lined', '#e6bd75', goldLined, {
    surface: { color: '#ffffff' },
  }),
  bead('DB2523', 'Teal glass, gold lined', '#91a476', goldLined, {
    surface: {
      color: '#d6fff0',
      attenuationColor: '#76cfb7',
      attenuationDistance: 0.001,
    },
  }),
]);

export function normalizeDelicaCode(value) {
  return typeof value === 'string'
    ? value
        .trim()
        .toUpperCase()
        .replace(/^DB[ -]?0*(?=\d)/, 'DB')
    : '';
}

const metals = { gold: '#efba58', silver: '#e7edf2', copper: '#c87950' };

function makeEntry(record) {
  const tuned = tunedEntries[record.code];
  const color = record.swatch?.hex ?? tuned?.color ?? '#a5a29f';
  const tags = record.finishTags;
  const matte = tags.includes('matte');
  const silk = record.glassType === 'silk' || tags.includes('silk');
  const metallic = ['metallic', 'galvanized', 'plated'].some((tag) =>
    tags.includes(tag),
  );
  const translucent =
    !metallic &&
    (['transparent', 'alabaster'].includes(record.glassType) ||
      !!record.lining ||
      silk);
  const metalColor = metals[record.lining];
  const lining = record.lining
    ? {
        color: metalColor ?? color,
        metalness: metalColor ? 1 : 0,
        roughness: metalColor ? 0.19 : 0.4,
      }
    : undefined;
  const surface = {
    color: record.lining === 'color' ? '#ffffff' : color,
    roughness: matte ? 0.62 : metallic ? 0.24 : 0.27,
    metalness: metallic ? 0.86 : 0,
    clearcoat: matte ? 0 : 0.3,
    ...(translucent
      ? {
          transmission: silk ? 0.56 : matte ? 0.78 : 0.94,
          thickness: 0.0004,
          ior: 1.5,
        }
      : {}),
    ...(silk ? { anisotropy: 0.8 } : {}),
    ...(tags.includes('iridescent') ? { iridescence: 0.45 } : {}),
  };
  return {
    ...record,
    name: record.name ?? tuned?.name ?? record.code,
    label: record.finish ?? tuned?.label ?? record.glassType ?? '',
    color,
    surface: tuned?.surface ?? surface,
    lining: tuned?.lining ?? lining,
  };
}

export const delicaCatalog = Object.fromEntries(
  catalog.colors.map((record) => [record.code, makeEntry(record)]),
);
export const defaultDelicaCode = 'DB753';
export const delicaEntry = (value) => {
  const code = normalizeDelicaCode(value);
  return Object.hasOwn(delicaCatalog, code) ? delicaCatalog[code] : undefined;
};
export const beadSwatch = (value) => delicaEntry(value)?.color ?? value;
