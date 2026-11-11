import {
  designMatrix,
  designShapes,
  shapeFor,
  validDesign,
  triangleRounds,
} from './designShapes.js';

// The bead-work "modes" a project can be made in. Each saved project belongs to
// exactly one mode, and the mode decides which editor opens it and how its
// saved data is read back as a picture (for thumbnails).

const WHITE = '#ffffff';

function filled(rows, cols, value) {
  return Array.from({ length: rows }, () => Array(cols).fill(value));
}

// Peyote editor save format: grid[r][c], rows x cols.
function peyoteBlank() {
  return {
    rows: 80,
    cols: 16,
    grid: filled(80, 16, WHITE),
    orientation: 'vertical',
    cellWidth: 20,
    cellHeight: 16,
    backgroundColor: WHITE,
  };
}

function isPeyoteData(data) {
  return Array.isArray(data?.grid) && data.rows > 0 && data.cols > 0;
}

export const MODES = {
  '3d': {
    id: '3d',
    label: '3D Design',
    description: 'Design beaded shapes and preview them in 3D',
    icon: 'cube',
    route: 'design3d-editor',
    defaultName: 'Untitled 3D design',
    blank: designShapes.triangle.blank,
    toMatrix: designMatrix,
    size: (data) => ({
      width: triangleRounds(data),
      height: triangleRounds(data),
    }),
    isValid: validDesign,
  },
  flat: {
    id: 'flat',
    label: 'Flat Grid',
    description: 'Simple, straight square-stitch patterns',
    icon: 'flatGrid',
    route: 'flat-editor',
    defaultName: 'Untitled bracelet',
    /** Blank project in the flat editor's save format. */
    blank: () => ({
      // Flat editor naming: rows = beads ACROSS, cols = beads ALONG.
      rows: 16,
      cols: 80,
      grid: Array(16 * 80).fill(WHITE),
      cellWidth: 15,
      cellHeight: 17,
      isVerticalGrid: true,
    }),
    /** Saved data -> 2D matrix of cell values (rows of the picture). */
    toMatrix: (data) => {
      const across = data.rows;
      const along = data.cols;
      return Array.from({ length: along }, (_, y) =>
        data.grid.slice(y * across, (y + 1) * across),
      );
    },
    size: (data) => ({ width: data.rows, height: data.cols }),
    isValid: (data) =>
      Array.isArray(data?.grid) &&
      data.rows > 0 &&
      data.cols > 0 &&
      data.grid.length === data.rows * data.cols,
  },

  // The Weaving page currently uses the peyote editor, so weaving projects
  // share the peyote save format (see peyoteBlank above).
  weaving: {
    id: 'weaving',
    label: 'Weaving Grid',
    description: 'Brick stitch and loom patterns',
    icon: 'weave',
    route: 'weaving-editor',
    defaultName: 'Untitled weaving',
    blank: () => peyoteBlank(),
    toMatrix: (data) => data.grid,
    size: (data) => ({ width: data.cols, height: data.rows }),
    isValid: (data) => isPeyoteData(data),
  },

  peyote: {
    id: 'peyote',
    label: 'Peyote Grid',
    description: 'Even-count peyote patterns',
    icon: 'peyote',
    route: 'peyote-editor',
    defaultName: 'Untitled peyote',
    blank: () => peyoteBlank(),
    toMatrix: (data) => data.grid,
    size: (data) => ({ width: data.cols, height: data.rows }),
    isValid: (data) => isPeyoteData(data),
  },
};

/** Modes that support saved projects, in display order. */
export const PROJECT_MODES = [
  MODES.flat,
  MODES.weaving,
  MODES.peyote,
  MODES['3d'],
];

/** Extra entries shown on the home page that are not project based. */
export const EXTRA_MODES = [
  {
    id: 'beadwork',
    label: 'Beadwork Pattern',
    description: 'Fringe and custom bead structures',
    icon: 'pattern',
    to: { name: 'beadwork-pattern' },
    badge: 'Experimental',
  },
];

export function getMode(id) {
  return MODES[id] ?? null;
}
