import {
  Box3,
  CylinderGeometry,
  DoubleSide,
  Group,
  InstancedMesh,
  MeshPhysicalMaterial,
  Object3D,
  SRGBColorSpace,
  TextureLoader,
} from 'three';
import { delicaEntry } from './delicaCatalog.js';

// The short cylinder points across the band. The outer diameter sets the pitch along it.
const alongPitch = 0.00162;
const acrossPitch = 0.00132;

export function peyoteOffset(index) {
  return (index % 2) / 2;
}

export function peyotePosition(
  row,
  col,
  rows,
  cols,
  orientation,
  arc,
  staggered = true,
) {
  const horizontal = orientation === 'horizontal';
  const length = horizontal ? cols : rows;
  const width = horizontal ? rows : cols;
  const across = horizontal ? row : col;
  const along = horizontal ? col : row;
  const span = length + (staggered && width > 1 ? 0.5 : 0);
  const x =
    (along + (staggered ? peyoteOffset(across) : 0) - (span - 1) / 2) *
    alongPitch;
  const y = (across - (width - 1) / 2) * acrossPitch * (horizontal ? -1 : 1);
  if (!arc) return { x, y, z: 0, angle: 0 };
  const radius = alongPitch / (2 * Math.sin(arc / (2 * span)));
  const angle = (x / alongPitch) * (arc / span);
  return {
    x: radius * Math.sin(angle),
    y,
    z: -2 * radius * Math.sin(angle / 2) ** 2,
    angle,
  };
}

export function createPeyoteModel(
  geometry,
  pattern,
  rows,
  cols,
  orientation,
  arc,
  staggered = true,
) {
  const group = new Group();
  const entries = new Map();
  const pose = new Object3D();
  // The exported glTF bore already points along Y, across the band and along the bend axis.
  const textures = new TextureLoader();
  let liningGeometry;
  pattern.forEach((value, index) => {
    if (!value || !cols || index >= rows * cols) return;
    if (!entries.has(value)) entries.set(value, []);
    entries.get(value).push(index);
  });
  for (const [value, indices] of entries) {
    const entry = delicaEntry(value);
    const material = new MeshPhysicalMaterial(
      entry?.surface ?? {
        color: /^#[0-9a-f]{6}$/i.test(value) ? value : '#ffffff',
        roughness: 0.32,
      },
    );
    if (
      value.startsWith('data:image/') ||
      value.startsWith('/miyuki-beads-designer/beads/')
    ) {
      material.map = textures.load(value);
      material.map.colorSpace = SRGBColorSpace;
      material.map.flipY = false;
    }
    const batch = new InstancedMesh(geometry, material, indices.length);
    batch.name = value;
    const batches = [batch];
    if (entry?.lining) {
      // Open sleeve recessed between the bevels of the Blender model's 0.8 mm bore.
      liningGeometry ??= new CylinderGeometry(
        0.000398,
        0.000398,
        0.0012,
        48,
        1,
        true,
      );
      const liner = new InstancedMesh(
        liningGeometry,
        new MeshPhysicalMaterial({ ...entry.lining, side: DoubleSide }),
        indices.length,
      );
      liner.name = `${value} lining`;
      batches.push(liner);
    }
    indices.forEach((index, instance) => {
      const { x, y, z, angle } = peyotePosition(
        Math.floor(index / cols),
        index % cols,
        rows,
        cols,
        orientation,
        arc,
        staggered,
      );
      pose.position.set(x, y, z);
      pose.rotation.y = angle;
      pose.updateMatrix();
      for (const mesh of batches) mesh.setMatrixAt(instance, pose.matrix);
    });
    for (const mesh of batches) {
      mesh.instanceMatrix.needsUpdate = true;
      mesh.computeBoundingBox();
      mesh.computeBoundingSphere();
      group.add(mesh);
    }
  }
  const bounds = new Box3().setFromObject(group);
  return {
    group,
    bounds,
    dispose() {
      group.removeFromParent();
      for (const batch of group.children) {
        batch.material.map?.dispose();
        batch.material.dispose();
        batch.dispose();
      }
      liningGeometry?.dispose();
      group.clear();
    },
  };
}
