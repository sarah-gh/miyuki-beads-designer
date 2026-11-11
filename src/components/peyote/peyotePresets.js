const referenceColors = ['DB2117', 'DB753', 'DB10', 'DB1831'];

function referencePreset(id, name, lines) {
  return {
    id,
    name,
    rows: lines.length,
    cols: lines[0].length,
    orientation: 'vertical',
    cellWidth: 20,
    cellHeight: 16,
    pattern: lines.flatMap((line) =>
      Array.from(line, (digit) => referenceColors[Number(digit)]),
    ),
  };
}

function stripePreset(id, name, rows, cols, orientation, colors, bandAt) {
  const horizontal = orientation === 'horizontal';
  return {
    id,
    name,
    rows,
    cols,
    orientation,
    cellWidth: horizontal ? 16 : 20,
    cellHeight: horizontal ? 20 : 16,
    pattern: Array.from({ length: rows * cols }, (_, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;
      const [along, across] = horizontal ? [col, row] : [row, col];
      return colors[bandAt(along, across)];
    }),
  };
}

export const peyotePresets = [
  referencePreset('reference-7', 'Pink and red diamond · narrow', [
    '0000000',
    '0000000',
    '0002000',
    '0220220',
    '0201020',
    '2013102',
    '0113110',
    '0133310',
    '0133310',
    '0013100',
    '2211122',
    '0200020',
    '1022201',
    '1102011',
    '3102013',
    '3102013',
    '1002001',
    '1220221',
    '0201020',
    '2013102',
    '0113110',
    '0133310',
    '0133310',
    '0013100',
    '2211122',
    '0200020',
    '1022201',
    '1102011',
    '3102013',
    '3102013',
    '1002001',
    '1220221',
    '0200020',
    '2000002',
    '0000000',
    '0000000',
    '0000000',
    '0000000',
    '0000000',
  ]),
  referencePreset('reference-9', 'Pink and red diamond · rose-gold border', [
    '300000003',
    '300000003',
    '300222003',
    '302000203',
    '322111223',
    '300131003',
    '301333103',
    '301333103',
    '301131103',
    '320131023',
    '302010203',
    '312202213',
    '310020013',
    '331020133',
    '331020133',
    '311020113',
    '310222013',
    '302000203',
    '322111223',
    '300131003',
    '301333103',
    '301333103',
    '301131103',
    '320131023',
    '302010203',
    '312202213',
    '310020013',
    '331020133',
    '331020133',
    '311020113',
    '310222013',
    '302000203',
    '322000223',
    '300000003',
    '300000003',
    '300000003',
    '300000003',
    '300000003',
    '300000003',
  ]),
  stripePreset(
    'chevron',
    'Silk and gold zigzag',
    64,
    13,
    'vertical',
    ['DB1806', 'DB141', 'DB2521', 'DB2117'],
    (along, across) => Math.floor(((along + Math.abs(across - 6)) % 16) / 4),
  ),
  stripePreset(
    'wave',
    'Blue and green glass wave',
    11,
    72,
    'horizontal',
    ['DB41', 'DB239', 'DB2523', 'DB141'],
    (along, across) => {
      const wave = 5 + 3 * Math.sin((along * Math.PI) / 12);
      const distance = Math.abs(across - wave);
      return distance < 1 ? 2 : distance < 2.5 ? 1 : distance < 3.6 ? 0 : 3;
    },
  ),
];
