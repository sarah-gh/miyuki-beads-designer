<template>
  <div
    ref="container"
    class="bead-container"
  ></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const props = defineProps({
  pattern: { type: Array, required: true },
  rows: { type: Number, default: 10 },
  cols: { type: Number, default: 50 },
});

const container = ref(null);
let scene,
  camera,
  renderer,
  controls,
  beads = [];

// Cache textures for image-based bead colors to avoid reloading
const textureLoader = new THREE.TextureLoader();
const textureCache = new Map(); // url -> THREE.Texture

function isImageColor(value) {
  return typeof value === 'string' && value.startsWith('/miyuki-beads-designer/beads/');
}

function getBeadMaterial(colorLike) {
  // Image texture material
  if (isImageColor(colorLike)) {
    const url = colorLike;
    let texture = textureCache.get(url);
    if (!texture) {
      texture = textureLoader.load(url, (loaded) => {
        // Configure color space and anisotropy after load
        loaded.colorSpace = THREE.SRGBColorSpace;
        if (renderer) {
          loaded.anisotropy = renderer.capabilities.getMaxAnisotropy();
        }
      });
      // Also set immediately for initial instance (will update once loaded)
      texture.colorSpace = THREE.SRGBColorSpace;
      textureCache.set(url, texture);
    }
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      map: texture,
      roughness: 0.1,
      metalness: 0.1,
      clearcoat: 0.5,
      clearcoatRoughness: 0.1,
    });
    return material;
  }

  // Solid color material
  return new THREE.MeshPhysicalMaterial({
    color: colorLike,
    roughness: 0.1,
    metalness: 0.1,
    clearcoat: 0.5,
    clearcoatRoughness: 0.1,
  });
}

function disposeBeads() {
  beads.forEach((mesh) => {
    scene.remove(mesh);
    if (mesh.material) {
      // Do not dispose cached textures; only dispose materials
      mesh.material.dispose();
    }
  });
  beads = [];
}

function createBeads() {
  const beadGeometry = new THREE.CylinderGeometry(0.7, 0.7, 1.1, 32);
  const halfCols = (props.cols - 1) / 2;
  const halfRows = (props.rows - 1) / 2;

  for (let y = 0; y < props.rows; y++) {
    for (let x = 0; x < props.cols; x++) {
      const idx = y * props.cols + x;
      const colorOrUrl = props.pattern[idx] || '#ffffff';
      const beadMaterial = getBeadMaterial(colorOrUrl);
      const bead = new THREE.Mesh(beadGeometry, beadMaterial);
      bead.position.set((x - halfCols) * 1.2, -(y - halfRows) * 1.2, 0);
      scene.add(bead);
      beads.push(bead);
    }
  }
}

onMounted(() => {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0f0f0);

  camera = new THREE.PerspectiveCamera(
    45,
    container.value.clientWidth / container.value.clientHeight,
    0.1,
    1000,
  );
  camera.position.set(50, -50, 50);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  // Initial size fit to container
  function resize() {
    if (!container.value) return;
    const width = container.value.clientWidth;
    const height = container.value.clientHeight;
    if (width === 0 || height === 0) return;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }
  resize();
  container.value.appendChild(renderer.domElement);
  // Also observe element size changes (e.g., when v-show toggles)
  const ro = new ResizeObserver(() => {
    resize();
  });
  ro.observe(container.value);
  renderer.__resizeObserver = ro;

  controls = new OrbitControls(camera, renderer.domElement);
  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  const dirLight = new THREE.DirectionalLight(0xffffff, 3);
  dirLight.position.set(10, 10, 10);
  scene.add(dirLight);

  createBeads();

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  // Handle window resize
  window.addEventListener('resize', resize);
  // Store for cleanup
  renderer.__resizeHandler = resize;
});

watch(
  () => props.pattern,
  () => {
    disposeBeads();
    createBeads();
  },
  { deep: true },
);

onBeforeUnmount(() => {
  if (renderer && renderer.__resizeHandler) {
    window.removeEventListener('resize', renderer.__resizeHandler);
  }
  if (renderer && renderer.__resizeObserver && container.value) {
    renderer.__resizeObserver.disconnect();
  }
  if (controls) controls.dispose();
  if (renderer) renderer.dispose();
  disposeBeads();
});
</script>

<style>
.bead-container {
  width: 100%;
  height: 100vh;
  display: block;
}
.bead-container canvas {
  width: 100%;
  height: 100%;
}
</style>
