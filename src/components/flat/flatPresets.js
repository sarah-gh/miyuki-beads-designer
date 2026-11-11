function preset(id, name, columns, rows, colorAt) {
  return {
    id,
    name,
    columns,
    rows,
    pattern: Array.from({ length: rows * columns }, (_, index) =>
      colorAt(index % columns, Math.floor(index / columns)),
    ),
  };
}

const diamonds = [
  'DB463',
  'DB463',
  'DB463',
  'DB656',
  'DB656',
  'DB2130',
  'DB1536',
  'DB1832',
];

export const flatPresets = [
  preset(
    'turquoise-diamonds',
    'Turquoise and gold diamonds',
    100,
    23,
    (x, y) => {
      const distance = (coordinate) => Math.abs(((coordinate + 7) % 14) - 7);
      const d = Math.min(
        distance(x) + distance(y),
        distance(x + 7) + distance(y + 7),
      );
      return diamonds[d];
    },
  ),
  preset('silk-checks', 'Silk checks', 80, 15, (x, y) =>
    x % 6 === 0 || y % 6 === 0
      ? 'DB1832'
      : (Math.floor(x / 6) + Math.floor(y / 6)) % 2
        ? 'DB1806'
        : 'DB2117',
  ),
  preset(
    'glass-stripes',
    'Blue glass stripes',
    90,
    12,
    (x, y) =>
      ['DB41', 'DB239', 'DB2130', 'DB2523'][Math.floor(((x + y) % 12) / 3)],
  ),
];
