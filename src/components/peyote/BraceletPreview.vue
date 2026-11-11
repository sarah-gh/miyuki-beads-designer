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
          max="315"
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
let renderer, scene, camera, controls, observer, geometry, environment, model;
let disposed = false;

function fitModel() {
  const sphere = model.bounds.getBoundingSphere(new THREE.Sphere());
  const radius = Math.max(sphere.radius, 0.001);
  const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
  const fit = Math.min(halfFov, Math.atan(Math.tan(halfFov) * camera.aspect));
  const direction = new THREE.Vector3(
    0.25,
    props.curved ? 0.8 : 0.22,
    1,
  ).normalize();
  controls.target.copy(sphere.center);
  camera.position
    .copy(sphere.center)
    .addScaledVector(direction, (1.12 * radius) / Math.sin(fit));
  controls.minDistance = radius * 0.2;
  controls.maxDistance = radius * 30;
  controls.update();
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
  scene.add(model.group);
  if (refit) fitModel();
  else {
    const center = model.bounds.getCenter(new THREE.Vector3());
    camera.position.add(center.clone().sub(controls.target));
    controls.target.copy(center);
    controls.update();
  }
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
    container.value.append(renderer.domElement);
    camera.up.set(
      props.orientation === 'vertical' ? -1 : 0,
      props.orientation === 'vertical' ? 0 : 1,
      0,
    );
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const room = new RoomEnvironment();
    const pmrem = new THREE.PMREMGenerator(renderer);
    environment = pmrem.fromScene(room);
    room.dispose();
    pmrem.dispose();
    scene.environment = environment.texture;
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
    renderer.setAnimationLoop(() => {
      controls.update();
      renderer.render(scene, camera);
    });
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

onBeforeUnmount(() => {
  disposed = true;
  observer?.disconnect();
  renderer?.setAnimationLoop(null);
  controls?.dispose();
  model?.dispose();
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
.viewport :deep(canvas) {
  display: block;
  width: 100%;
  height: 100%;
  touch-action: none;
}
</style>
