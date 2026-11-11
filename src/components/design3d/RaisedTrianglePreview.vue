<template>
  <section
    class="triangle-preview"
    aria-label="Interactive 3D preview"
  >
    <div
      ref="viewport"
      class="triangle-preview__viewport"
    ></div>
    <p
      v-if="status === 'loading'"
      role="status"
    >
      Loading the Blender model…
    </p>
    <p
      v-else-if="status === 'error'"
      role="alert"
    >
      The 3D preview could not be loaded.
    </p>
    <BaseButton
      v-else
      size="sm"
      @click="downloadImage"
      >Download image</BaseButton
    >
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import BaseButton from '@/components/ui/BaseButton.vue';
import { delicaEntry } from '@/components/peyote/delicaCatalog.js';
import triangleUrl from '@/components/peyote/Delica-DB11.glb?url';
import {
  triangleCell,
  trianglePlacement,
} from '@/lib/projects/designShapes.js';

const props = defineProps({ design: { type: Object, required: true } });
const viewport = ref(null);
const status = ref('loading');
const beads = [];
const materials = new Map();
const linerGeometry = new THREE.CylinderGeometry(
  0.000398,
  0.000398,
  0.0012,
  48,
  1,
  true,
);
let renderer, scene, camera, controls, environment, observer, model, geometry;
let closed = false;

function materialsFor(code) {
  if (!materials.has(code)) {
    const entry = delicaEntry(code);
    materials.set(code, {
      body: new THREE.MeshPhysicalMaterial(
        entry?.surface ?? { color: '#a5a29f', roughness: 0.4 },
      ),
      liner:
        entry?.lining &&
        new THREE.MeshPhysicalMaterial({
          ...entry.lining,
          side: THREE.DoubleSide,
        }),
    });
  }
  return materials.get(code);
}

function fitModel() {
  if (!model?.children.length) return;
  const sphere = new THREE.Box3()
    .setFromObject(model)
    .getBoundingSphere(new THREE.Sphere());
  const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
  const fit = Math.min(halfFov, Math.atan(Math.tan(halfFov) * camera.aspect));
  const direction = new THREE.Vector3(0.24, 1, 0.72).normalize();
  controls.target.copy(sphere.center);
  camera.position
    .copy(sphere.center)
    .addScaledVector(direction, (1.15 * sphere.radius) / Math.sin(fit));
  controls.minDistance = sphere.radius * 0.35;
  controls.maxDistance = sphere.radius * 12;
  controls.update();
}

function rebuild() {
  model.clear();
  beads.length = 0;
  const outer = triangleCell(props.design.panels[0].length - 1).radius;
  const hinge = triangleCell(0).radius;
  // Fold each sector around an axis parallel to its outer edge.
  const span = Math.max(1, outer - hinge);
  const referenceEdge = triangleCell(54); // Last bead of the 10-round design.
  const referenceSpan = referenceEdge.radius - hinge;
  let tilt = Math.min(0.29, Math.atan2(2.6, span));
  if (outer > referenceEdge.radius) {
    const edge = triangleCell(props.design.panels[0].length - 1);
    const cornerGrowth = (edge.offset - referenceEdge.offset) / Math.sqrt(3);
    const referenceInset = referenceSpan * (1 - Math.cos(0.29));
    const inset = referenceInset + outer - referenceEdge.radius - cornerGrowth;
    tilt = Math.acos(1 - inset / span);
  }
  const cosine = Math.cos(tilt);
  const sine = Math.sin(tilt);
  props.design.panels.forEach((panel, side) =>
    panel.forEach((code, index) => {
      const cell = trianglePlacement(side, index);
      const radius = triangleCell(index).radius;
      const inset = (radius - hinge) * (1 - cosine);
      const rise = (outer - radius) * sine;
      const mesh = new THREE.Mesh(geometry, materialsFor(code).body);
      mesh.rotation.set(0, cell.angle, -Math.PI / 2, 'YXZ');
      mesh.position.set(
        (cell.x + Math.sin(cell.angle) * inset) * 0.001,
        rise * 0.001,
        (-cell.y + Math.cos(cell.angle) * inset) * 0.001,
      );
      model.add(mesh);
      beads.push({ mesh, panel: side, index });
    }),
  );
  applyDesign();
  fitModel();
}

function applyDesign() {
  for (const bead of beads) {
    const { body, liner } = materialsFor(
      props.design.panels[bead.panel][bead.index],
    );
    bead.mesh.material = body;
    if (liner && !bead.liner) {
      bead.liner = new THREE.Mesh(linerGeometry, liner);
      bead.mesh.add(bead.liner);
    }
    if (bead.liner) {
      bead.liner.visible = !!liner;
      if (liner) bead.liner.material = liner;
    }
  }
}

function render() {
  if (status.value === 'ready') renderer.render(scene, camera);
}

function resize() {
  const { clientWidth, clientHeight } = viewport.value;
  if (!clientWidth || !clientHeight) return;
  renderer.setSize(clientWidth, clientHeight, false);
  camera.aspect = clientWidth / clientHeight;
  camera.updateProjectionMatrix();
  fitModel();
  render();
}

function downloadImage() {
  renderer.render(scene, camera);
  const link = document.createElement('a');
  link.href = renderer.domElement.toDataURL('image/png');
  link.download = 'raised-triangle.png';
  link.click();
}

function disposeAsset(root) {
  const geometries = new Set();
  const originalMaterials = new Set();
  root.traverse((object) => {
    if (!object.isMesh) return;
    geometries.add(object.geometry);
    originalMaterials.add(object.material);
  });
  for (const geometry of geometries) geometry.dispose();
  for (const material of originalMaterials) material.dispose();
}

onMounted(async () => {
  try {
    scene = new THREE.Scene();
    scene.background = new THREE.Color('#eee8df');
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    viewport.value.append(renderer.domElement);
    camera = new THREE.PerspectiveCamera(33, 1, 0.0001, 1);
    camera.up.set(0, 0, -1);
    camera.position.set(0.026, 0.105, 0.043);
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.002, 0);
    controls.minDistance = 0.025;
    controls.maxDistance = 0.3;
    controls.addEventListener('change', render);
    controls.update();

    const room = new RoomEnvironment();
    const pmrem = new THREE.PMREMGenerator(renderer);
    environment = pmrem.fromScene(room);
    room.dispose();
    pmrem.dispose();
    scene.environment = environment.texture;
    observer = new ResizeObserver(resize);
    observer.observe(viewport.value);
    resize();

    const asset = await new GLTFLoader().loadAsync(triangleUrl);
    if (closed) {
      disposeAsset(asset.scene);
      return;
    }
    const mesh = asset.scene.getObjectByProperty('isMesh', true);
    if (!mesh) throw new Error('Blender bead geometry is missing.');
    geometry = mesh.geometry;
    mesh.material.dispose();
    model = new THREE.Group();
    scene.add(model);
    rebuild();
    status.value = 'ready';
    render();
  } catch (error) {
    if (!closed) {
      console.error(error);
      status.value = 'error';
    }
  }
});

watch(
  () => props.design.panels,
  () => {
    if (!geometry) return;
    if (beads.length !== props.design.panels.flat().length) rebuild();
    else applyDesign();
    render();
  },
  { deep: true },
);

onBeforeUnmount(() => {
  closed = true;
  observer?.disconnect();
  controls?.dispose();
  geometry?.dispose();
  for (const { body, liner } of materials.values()) {
    body.dispose();
    liner?.dispose();
  }
  linerGeometry.dispose();
  environment?.dispose();
  renderer?.dispose();
});
</script>

<style scoped>
.triangle-preview {
  display: grid;
  gap: 10px;
  align-content: start;
  min-width: 0;
}
.triangle-preview__viewport {
  background: #eee8df;
  height: clamp(320px, 65vh, 700px);
  border-radius: var(--radius-lg);
  overflow: hidden;
}
.triangle-preview__viewport :deep(canvas) {
  display: block;
  width: 100%;
  height: 100%;
  touch-action: none;
}
.triangle-preview :deep(button) {
  justify-self: start;
}
</style>
