import { BufferGeometry, Color, Float32BufferAttribute } from 'three';

export function createSilkGeometry(source) {
  source.computeBoundingBox();
  const { min, max } = source.boundingBox;
  const half = (max.y - min.y) / 2;
  const centerY = (min.y + max.y) / 2;
  const radius = Math.min(max.x - min.x, max.z - min.z) / 2;
  const bore = radius * 0.5;
  const bevel = radius * 0.09;
  const rings = [
    [bore, -half + bevel], [bore + bevel, -half],
    [radius - bevel, -half], [radius, -half + bevel],
    [radius, half - bevel], [radius - bevel, half],
    [bore + bevel, half], [bore, half - bevel],
  ];
  const sides = 14;
  const positions = [];
  const vertex = ([r, y], side) => {
    const angle = 2 * Math.PI * (side + 0.5) / sides;
    return [
      (min.x + max.x) / 2 + r * Math.cos(angle),
      centerY + y,
      (min.z + max.z) / 2 + r * Math.sin(angle),
    ];
  };
  rings.forEach((ring, i) => {
    const next = rings[(i + 1) % rings.length];
    for (let side = 0; side < sides; side++) {
      const a = vertex(ring, side);
      const b = vertex(next, side);
      const c = vertex(next, side + 1);
      const d = vertex(ring, side + 1);
      positions.push(...a, ...b, ...c, ...a, ...c, ...d);
    }
  });
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.computeVertexNormals();
  return geometry;
}

export function applySilkFinish(material, entry) {
  if (!entry?.silk) return;
  material.roughness = 0.17;
  material.anisotropy = 0;
  material.clearcoat = 0.45;
  material.clearcoatRoughness = 0.12;
  material.transmission = entry.liningType === 'color' ? 0.58 : 0.78;
  material.color.lerp(new Color('#ffffff'), 0.22);
  material.attenuationColor.set(entry.color);
  material.attenuationDistance = 0.0012;
}
