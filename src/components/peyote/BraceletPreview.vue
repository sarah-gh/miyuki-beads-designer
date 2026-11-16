<template>
  <section class="peyote-preview">
    <header>
      <h2>
        {{
          curved
            ? staggered
              ? 'Peyote bracelet preview'
              : 'Square-stitch bracelet preview'
            : '3D bead view'
        }}
      </h2>
      <label v-if="curved">
        Bend
        <input
          v-model.number="bend"
          type="range"
          min="0"
          max="360"
          step="5"
        />
        <span dir="ltr">{{ bend }}°</span>
      </label>
      <button
        class="theme-btn"
        :disabled="status !== 'ready'"
        @click="downloadImage"
      >
        Download image
      </button>
    </header>
    <details class="lighting">
      <summary>Lighting</summary>
      <div class="lighting__controls">
        <label
          v-for="control in lightControls"
          :key="control.key"
        >
          {{ control.label }}
          <input
            v-model.number="lighting[control.key]"
            type="range"
            :min="control.min"
            :max="control.max"
            :step="control.step"
          />
          <output>{{ lighting[control.key] }}{{ control.unit }}</output>
        </label>
        <button
          type="button"
          class="theme-btn"
          @click="resetLighting"
        >
          Reset lighting
        </button>
      </div>
    </details>
    <div
      ref="container"
      class="viewport"
      :aria-label="
        staggered
          ? '3D view of the Peyote pattern'
          : '3D view of the square-stitch pattern'
      "
    ></div>
    <p
      v-if="status === 'loading'"
      role="status"
    >
      Loading the Delica model…
    </p>
    <p
      v-else-if="status === 'error'"
      role="alert"
    >
      The 3D view could not be loaded.
    </p>
    <p
      v-else-if="!pattern.some(Boolean)"
      role="status"
    >
      The pattern is empty.
    </p>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import beadUrl from './Delica-DB11.glb?url&inline';
import { createPeyoteModel } from './peyoteModel.js';

const props = defineProps({
  pattern: { type: Array, required: true },
  rows: { type: Number, required: true },
  cols: { type: Number, required: true },
  orientation: { type: String, default: 'vertical' },
  curved: { type: Boolean, default: true },
  staggered: { type: Boolean, default: true },
  modelUrl: { type: String, default: beadUrl },
});

const container = ref(null);
const status = ref('loading');
const bend = ref(270);
const defaultLighting = { direction: -60, elevation: 51, intensity: 2.1 };
const lighting = ref({ ...defaultLighting });
const lightControls = [
  {
    key: 'direction',
    label: 'Direction',
    min: -180,
    max: 180,
    step: 1,
    unit: '°',
  },
  {
    key: 'elevation',
    label: 'Elevation',
    min: 15,
    max: 90,
    step: 1,
    unit: '°',
  },
  { key: 'intensity', label: 'Intensity', min: 0, max: 5, step: 0.1, unit: '' },
];

function resetLighting() {
  lighting.value = { ...defaultLighting };
}
let renderer, scene, camera, controls, observer, geometry, environment, model;
let pivot, floor, sun;
let disposed = false;
let radius = 0.01;

// Fixed camera direction in world space: slightly above, so the floor and shadow are visible.
const viewDirection = new THREE.Vector3(0.18, 0.5, 1).normalize();
const worldUp = new THREE.Vector3(0, 1, 0);
// Gap between the bracelet's bounding sphere and the floor, as a share of the radius.
const floorGap = 0.06;

function frameBasis(back, up) {
  const x = new THREE.Vector3().crossVectors(up, back).normalize();
  const y = new THREE.Vector3().crossVectors(back, x);
  return new THREE.Matrix4().makeBasis(x, y, back);
}

// Turns the bracelet so it looks the same as the previous orbiting camera's start view.
function initialOrientation() {
  const legacyView = new THREE.Vector3(
    0.25,
    props.curved ? 0.8 : 0.22,
    1,
  ).normalize();
  const legacyUp =
    props.orientation === 'vertical'
      ? new THREE.Vector3(-1, 0, 0)
      : new THREE.Vector3(0, 1, 0);
  const from = frameBasis(legacyView, legacyUp);
  const to = frameBasis(viewDirection, worldUp);
  return new THREE.Quaternion().setFromRotationMatrix(
    to.multiply(from.transpose()),
  );
}

function fitModel() {
  const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
  const fit = Math.min(halfFov, Math.atan(Math.tan(halfFov) * camera.aspect));
  controls.target.set(0, 0, 0);
  camera.position
    .copy(viewDirection)
    .multiplyScalar((1.2 * radius) / Math.sin(fit));
  controls.minDistance = radius * 0.2;
  controls.maxDistance = radius * 12;
  controls.update();
}

// Floor and shadow follow the bracelet's size. The bracelet spins around the centre of its
// bounding sphere, so a floor just below that sphere can never be crossed in any rotation.
function updateLighting() {
  if (!sun) return;
  const { direction, elevation, intensity } = lighting.value;
  const azimuth = THREE.MathUtils.degToRad(direction);
  const altitude = THREE.MathUtils.degToRad(elevation);
  const distance = radius * 6.4;
  const horizontal = distance * Math.cos(altitude);
  sun.position.set(
    horizontal * Math.sin(azimuth),
    distance * Math.sin(altitude),
    horizontal * Math.cos(azimuth),
  );
  sun.intensity = intensity;
}

function placeStage() {
  floor.position.y = -radius * (1 + floorGap);
  floor.scale.setScalar(radius * 14);
  updateLighting();
  const shadow = sun.shadow.camera;
  shadow.left = shadow.bottom = -radius * 2.5;
  shadow.right = shadow.top = radius * 2.5;
  shadow.near = radius * 0.5;
  shadow.far = radius * 14;
  shadow.updateProjectionMatrix();
  sun.shadow.normalBias = radius * 0.004;
}

function rebuild(refit) {
  if (!geometry) return;
  model?.dispose();
  model = createPeyoteModel(
    geometry,
    props.pattern,
    props.rows,
    props.cols,
    props.orientation,
    props.curved ? THREE.MathUtils.degToRad(bend.value) : 0,
    props.staggered,
  );
  const sphere = model.bounds.getBoundingSphere(new THREE.Sphere());
  radius = Math.max(sphere.radius, 0.001);
  model.group.position.copy(sphere.center).negate();
  model.group.traverse((object) => {
    if (object.isMesh) object.castShadow = true;
  });
  pivot.add(model.group);
  placeStage();
  if (refit) {
    pivot.quaternion.copy(initialOrientation());
    spin.set(0, 0);
    fitModel();
  }
}

// --- Rotating the bracelet (camera, floor and light stay fixed) ---
const pointers = new Set();
const spin = new THREE.Vector2();
const turnX = new THREE.Quaternion();
const turnY = new THREE.Quaternion();
const cameraRight = new THREE.Vector3();
let drag = null;

function turnModel(dx, dy) {
  cameraRight.set(1, 0, 0).applyQuaternion(camera.quaternion);
  turnY.setFromAxisAngle(worldUp, dx);
  turnX.setFromAxisAngle(cameraRight, dy);
  pivot.quaternion.premultiply(turnY).premultiply(turnX).normalize();
}

function onPointerDown(event) {
  pointers.add(event.pointerId);
  spin.set(0, 0);
  drag =
    pointers.size === 1
      ? { x: event.clientX, y: event.clientY, time: performance.now() }
      : null;
}

function onPointerMove(event) {
  if (!drag || !pointers.has(event.pointerId)) return;
  const scale = (2 * Math.PI) / Math.max(container.value.clientHeight, 1);
  const dx = (event.clientX - drag.x) * scale;
  const dy = (event.clientY - drag.y) * scale;
  turnModel(dx, dy);
  spin.set(dx, dy);
  drag = { x: event.clientX, y: event.clientY, time: performance.now() };
}

function onPointerUp(event) {
  pointers.delete(event.pointerId);
  if (drag && performance.now() - drag.time > 80) spin.set(0, 0);
  drag = null;
}

function animate() {
  if (!drag && spin.lengthSq() > 1e-8) {
    turnModel(spin.x, spin.y);
    spin.multiplyScalar(0.92);
  }
  controls.update();
  renderer.render(scene, camera);
}

function createStage() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 256;
  const context = canvas.getContext('2d');
  const fade = context.createRadialGradient(128, 128, 0, 128, 128, 128);
  fade.addColorStop(0, '#fff');
  fade.addColorStop(0.45, '#fff');
  fade.addColorStop(1, '#000');
  context.fillStyle = fade;
  context.fillRect(0, 0, 256, 256);
  floor = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshStandardMaterial({
      color: '#ddd5ce',
      roughness: 0.95,
      alphaMap: new THREE.CanvasTexture(canvas),
      transparent: true,
      depthWrite: false,
    }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  sun = new THREE.DirectionalLight('#ffffff', defaultLighting.intensity);
  sun.castShadow = true;
  // Low resolution plus a wide blur keeps the shadow soft. Lower intensity keeps it light.
  sun.shadow.mapSize.set(512, 512);
  sun.shadow.radius = 16;
  sun.shadow.blurSamples = 20;
  sun.shadow.intensity = 0.65;
  sun.shadow.bias = -0.0004;
  scene.add(sun);
}

function resize() {
  const { clientWidth, clientHeight } = container.value;
  if (!clientWidth || !clientHeight) return;
  renderer.setSize(clientWidth, clientHeight, false);
  camera.aspect = clientWidth / clientHeight;
  camera.updateProjectionMatrix();
  if (model) fitModel();
}

function downloadImage() {
  renderer.render(scene, camera);
  const link = document.createElement('a');
  link.href = renderer.domElement.toDataURL('image/png');
  link.download = props.staggered
    ? 'peyote-delica.png'
    : 'square-stitch-delica.png';
  link.click();
}

onMounted(async () => {
  try {
    scene = new THREE.Scene();
    scene.background = new THREE.Color('#eae5e1');
    camera = new THREE.PerspectiveCamera(34, 1, 0.00005, 20);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.shadowMap.enabled = true;
    // VSM can blur the shadow map, which gives the soft, diffuse shadow under the bracelet.
    renderer.shadowMap.type = THREE.VSMShadowMap;
    container.value.append(renderer.domElement);
    pivot = new THREE.Group();
    scene.add(pivot);
    createStage();
    // OrbitControls only zooms; dragging turns the bracelet instead of the camera.
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableRotate = false;
    controls.enablePan = false;
    const canvas = renderer.domElement;
    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('pointercancel', onPointerUp);

    const room = new RoomEnvironment();
    const pmrem = new THREE.PMREMGenerator(renderer);
    environment = pmrem.fromScene(room);
    room.dispose();
    pmrem.dispose();
    scene.environment = environment.texture;
    // Retain studio reflections on glass and metal without letting the
    // omnidirectional environment wash out the fixed key light.
    scene.environmentIntensity = 0.38;
    observer = new ResizeObserver(resize);
    observer.observe(container.value);
    resize();

    const asset = await new GLTFLoader().loadAsync(props.modelUrl);
    asset.scene.traverse((object) => {
      if (!object.isMesh) return;
      object.material.dispose();
      if (disposed || geometry) object.geometry.dispose();
      else geometry = object.geometry;
    });
    if (disposed) return;
    if (!geometry) throw new Error('Delica geometry missing from GLB');
    rebuild(true);
    renderer.setAnimationLoop(animate);
    status.value = 'ready';
  } catch (error) {
    if (!disposed) {
      console.error(error);
      status.value = 'error';
    }
  }
});

watch(
  () => [props.rows, props.cols, props.orientation, props.curved],
  () => rebuild(true),
);
watch(
  () => props.pattern,
  () => rebuild(false),
);
watch(bend, () => rebuild(false));
watch(lighting, updateLighting, { deep: true });

onBeforeUnmount(() => {
  disposed = true;
  observer?.disconnect();
  renderer?.setAnimationLoop(null);
  controls?.dispose();
  if (renderer) {
    const canvas = renderer.domElement;
    canvas.removeEventListener('pointerdown', onPointerDown);
    canvas.removeEventListener('pointermove', onPointerMove);
    canvas.removeEventListener('pointerup', onPointerUp);
    canvas.removeEventListener('pointercancel', onPointerUp);
  }
  model?.dispose();
  floor?.geometry.dispose();
  floor?.material.alphaMap?.dispose();
  floor?.material.dispose();
  sun?.shadow.dispose();
  geometry?.dispose();
  environment?.dispose();
  renderer?.dispose();
});
</script>

<style scoped>
.peyote-preview {
  display: grid;
  gap: 12px;
  padding: 16px;
}
header {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
h2 {
  font-weight: 600;
  margin-inline-end: auto;
}
label {
  display: flex;
  gap: 8px;
  align-items: center;
}
.viewport {
  height: clamp(340px, 65vh, 780px);
  overflow: hidden;
  border-radius: 10px;
  background: #eae5e1;
}
.lighting {
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-muted);
}
.lighting summary {
  cursor: pointer;
  font-weight: 600;
}
.lighting__controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 18px;
  padding-top: 8px;
}
.lighting__controls label {
  flex: 1 1 220px;
}
.lighting__controls input {
  flex: 1;
  min-width: 0;
  accent-color: var(--accent);
}
.lighting__controls output {
  min-width: 4ch;
  text-align: end;
  font-variant-numeric: tabular-nums;
}
.viewport :deep(canvas) {
  display: block;
  width: 100%;
  height: 100%;
  touch-action: none;
}
</style>
