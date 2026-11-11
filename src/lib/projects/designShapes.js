export const PANEL_SIZE = 12;
export const PANEL_COUNT = 3;

export const TRIANGLE_ROW_COUNT = 10;
export const MAX_TRIANGLE_ROUNDS = 30;

export function triangleBeadCount(rounds) {
  return (rounds * (rounds + 1)) / 2;
}

// Each side uses two alternating tracks. Along a track the axial pitch
// is 2.64 mm; the next round sits 1.32 mm into its gaps.
const faceCells = Array.from({ length: MAX_TRIANGLE_ROUNDS }, (_, row) =>
  Array.from({ length: row + 1 }, (_, column) => ({
    row,
    column,
    columnOffset: column - row / 2,
    radius: row === 0 ? 1.18 : 2.05 + (row - 1) * 0.81,
    offset: 2.64 * (column - row / 2),
  })),
).flat();

export function trianglePlacement(side, index) {
  const { radius, offset } = faceCells[index];
  const theta = (side * 2 * Math.PI) / 3;
  return {
    x: radius * Math.sin(theta) + offset * Math.cos(theta),
    y: radius * Math.cos(theta) - offset * Math.sin(theta),
    angle: -theta,
  };
}

export function triangleCell(index) {
  return faceCells[index];
}

export function triangleRow(panel, row) {
  return panel.filter((_, index) => triangleCell(index)?.row === row);
}

export function triangleDesign(palette = ['DB10', 'DB1832', 'DB62', 'DB1832']) {
  const [ground, edge, accent, center] = palette;
  const panels = Array.from({ length: PANEL_COUNT }, () =>
    faceCells
      .slice(0, triangleBeadCount(TRIANGLE_ROW_COUNT))
      .map(({ row, columnOffset }) => {
        if (row < 2 || row === TRIANGLE_ROW_COUNT - 1) return ground;
        const distance = Math.abs(row - 5.8) + Math.abs(columnOffset) / 2;
        return distance < 1.1
          ? center
          : distance < 2.7
            ? accent
            : distance < 3.65
              ? edge
              : ground;
      }),
  );
  return { shape: 'triangle', rounds: TRIANGLE_ROW_COUNT, panels };
}

export const designShapes = {
  triangle: {
    label: '3D Peyote Triangle',
    panelSize: PANEL_SIZE,
    panelCount: PANEL_COUNT,
    blank: () => ({
      shape: 'triangle',
      rounds: TRIANGLE_ROW_COUNT,
      panels: Array.from({ length: PANEL_COUNT }, () =>
        Array(triangleBeadCount(TRIANGLE_ROW_COUNT)).fill('DB141'),
      ),
    }),
  },
};

export function shapeFor(data) {
  return typeof data?.shape === 'string' &&
    Object.hasOwn(designShapes, data.shape)
    ? designShapes[data.shape]
    : null;
}

export function validDesign(data) {
  const shape = shapeFor(data);
  return (
    !!shape &&
    Array.isArray(data.panels) &&
    data.panels.length === shape.panelCount &&
    data.panels.every(
      (panel) =>
        Array.isArray(panel) &&
        panel.length >= triangleBeadCount(triangleRounds(data)) &&
        panel.length <= triangleBeadCount(MAX_TRIANGLE_ROUNDS) &&
        panel.every(
          (code) =>
            typeof code === 'string' && /^DB\d+[A-Z]*(?:-\d+)?$/.test(code),
        ),
    )
  );
}

export function triangleRounds(data) {
  return Number.isInteger(data.rounds)
    ? Math.min(MAX_TRIANGLE_ROUNDS, Math.max(1, data.rounds))
    : TRIANGLE_ROW_COUNT;
}

export function designMatrix(data) {
  return Array.from({ length: triangleRounds(data) }, (_, row) =>
    data.panels.flatMap((panel) => {
      const cells = triangleRow(panel, row);
      const pad = Math.floor((triangleRounds(data) - cells.length) / 2);
      return [
        ...Array(pad).fill(null),
        ...cells,
        ...Array(triangleRounds(data) - pad - cells.length).fill(null),
      ];
    }),
  );
}
