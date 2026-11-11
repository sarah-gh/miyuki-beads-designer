<template>
  <div class="bracelet-wrapper">
    <div class="header">
      <h2 class="title">Bracelet Preview</h2>
      <p class="subtitle">3D view of your current pattern</p>
    </div>

    <div class="canvas-container">
      <div
        ref="container"
        class="bracelet-canvas"
      ></div>

      <div class="canvas-overlay">
        <div class="controls-hint">
          <div class="hint-item">
            <span class="hint-icon">🖱️</span>
            <span>Click and drag to rotate</span>
          </div>
          <div class="hint-item">
            <span class="hint-icon">🔍</span>
            <span>Scroll to zoom</span>
          </div>
        </div>
      </div>
    </div>

    <div class="toolbar">
      <button
        class="btn btn-primary"
        @click="downloadImage"
      >
        <span class="btn-icon">📥</span>
        <span>Download image</span>
      </button>

      <div class="controls-panel">
        <div class="control-group">
          <label class="control-label">Bead image rotation:</label>
          <div class="slider-container">
            <input
              v-model="localTextureRotation"
              type="range"
              min="0"
              max="360"
              step="15"
              class="rotation-slider"
            />
            <span class="slider-value">{{ localTextureRotation }}°</span>
          </div>
        </div>
      </div>

      <div class="info-panel">
        <div class="info-item">
          <span class="info-label">Size:</span>
          <span class="info-value">{{ cols }} × {{ rows }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Beads:</span>
          <span class="info-value">{{ cols * rows }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const props = defineProps({
  pattern: { type: Array, required: true },
  rows: { type: Number, required: true },
  cols: { type: Number, required: true },
  // Width / height of the rendered output
  width: { type: Number, default: 900 },
  height: { type: Number, default: 600 },
  // Texture rotation (degrees)
  textureRotation: { type: Number, default: 90 },
});

const container = ref(null);
let scene, camera, renderer, controls;
let beads = [];

// Texture rotation control
const localTextureRotation = ref(props.textureRotation);

// Cache textures for image-based bead colors to avoid reloading
const textureLoader = new THREE.TextureLoader();
const textureCache = new Map(); // url -> THREE.Texture

function isImageColor(value) {
  return (
    typeof value === 'string' &&
    value.startsWith('/miyuki-beads-designer/beads/')
  );
}

function getBeadMaterial(colorLike, textureRotation = 0) {
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

    // Clone texture to avoid affecting cached version
    const clonedTexture = texture.clone();
    clonedTexture.rotation = textureRotation; // texture rotation in radians

    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      map: clonedTexture,
      roughness: 0.25,
      metalness: 0.15,
      clearcoat: 0.4,
      clearcoatRoughness: 0.1,
    });
    return material;
  }

  // Solid color material
  return new THREE.MeshPhysicalMaterial({
    color: colorLike,
    roughness: 0.25,
    metalness: 0.15,
    clearcoat: 0.4,
    clearcoatRoughness: 0.1,
  });
}

function clearBeads() {
  beads.forEach((mesh) => {
    scene.remove(mesh);
    if (mesh.material) {
      // Do not dispose cached textures; only dispose materials
      mesh.material.dispose();
    }
  });
  beads = [];
}

function createCurvedBracelet() {
  if (!scene) return;
  clearBeads();

  // Bracelet geometry
  const radius = 20; // bend radius of the bracelet
  const arcAngle = Math.PI * 1.55; // about 243 degrees
  const startAngle = -arcAngle / 2;

  // Bead size so the beads sit correctly on the curve
  // The vertical pattern (16x80) is laid horizontally around the bracelet
  // Curve along the length (rows = 80), width from cols (16)
  const dTheta = arcAngle / props.rows; // angle step along the length
  const beadWidthTangential = radius * dTheta * 0.98; // arc length per cell, with a small gap
  const beadHeight = 0.95; // bead height, with a small gap
  const verticalSpacing = 1.0; // vertical spacing between beads

  // Rounded cylinder geometry for a seed-bead look
  // CylinderGeometry with more segments for roundness
  const beadGeometry = new THREE.CylinderGeometry(
    beadHeight * 0.7, // top radius
    beadHeight * 0.7, // bottom radius
    beadWidthTangential, // height (arc length)
    16, // radial segments
  );

  for (let y = 0; y < props.rows; y++) {
    // rows = bracelet length (80)
    for (let x = 0; x < props.cols; x++) {
      // cols = bracelet width (16)
      let colorHex = '#ffffff';

      // Read the colour from the pattern
      if (Array.isArray(props.pattern[0])) {
        // pattern is a matrix
        colorHex =
          props.pattern[y] && props.pattern[y][x]
            ? props.pattern[y][x]
            : '#ffffff';
      } else {
        // pattern is a flat array
        const idx = y * props.cols + x; // index uses cols
        colorHex = props.pattern[idx] || '#ffffff';
      }

      // Validate the colour
      if (!colorHex || colorHex === '#' || colorHex.length < 3) {
        colorHex = '#ffffff';
        console.warn(
          'Invalid color detected:',
          colorHex,
          'using default white',
        );
      }

      // Texture rotation
      const textureRotationRadians =
        (localTextureRotation.value * Math.PI) / 180; // degrees to radians

      const beadMaterial = getBeadMaterial(colorHex, textureRotationRadians);

      // Centre each bead in its slot so there is no gap across
      // y = length (curve), x = width (vertical)
      const theta = startAngle + (y + 0.5) * dTheta; // curve along y
      const posY = (props.cols / 2 - 0.5 - x) * verticalSpacing; // bracelet width (x)
      const posX = radius * Math.sin(theta);
      const posZ = radius * Math.cos(theta);

      const bead = new THREE.Mesh(beadGeometry, beadMaterial);
      bead.position.set(posX, posY, posZ);

      // Orient beads tangent to the curve
      // First rotate 90 degrees around Z so they lie horizontally
      bead.rotation.z = Math.PI / 2;
      // Then rotate around Y to follow the curve
      bead.rotation.y = theta;

      scene.add(bead);
      beads.push(bead);
    }
  }
}

function initScene() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf3f3f3);

  camera = new THREE.PerspectiveCamera(
    42,
    props.width / props.height,
    0.1,
    2000,
  );
  camera.position.set(0, 3, 95);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    preserveDrawingBuffer: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(props.width, props.height, false);
  container.value.appendChild(renderer.domElement);

  // Soft lighting
  scene.add(new THREE.AmbientLight(0xffffff, 0.7));
  const dir1 = new THREE.DirectionalLight(0xffffff, 1.1);
  dir1.position.set(8, 10, 12);
  scene.add(dir1);
  const dir2 = new THREE.DirectionalLight(0xffffff, 0.6);
  dir2.position.set(-8, -3, 8);
  scene.add(dir2);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.target.set(0, 0, 0);

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}

function renderOnce() {
  if (!renderer) return;
  controls.update();
  renderer.render(scene, camera);
}

function downloadImage() {
  renderOnce();
  const data = renderer.domElement.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = data;
  a.download = 'bracelet.png';
  a.click();
}

onMounted(() => {
  initScene();
  createCurvedBracelet();
  renderOnce();
});

watch(
  () => [props.pattern, props.rows, props.cols, props.textureRotation],
  () => {
    createCurvedBracelet();
    renderOnce();
  },
  { deep: true },
);

// Watch for local texture rotation changes
watch(localTextureRotation, () => {
  createCurvedBracelet();
  renderOnce();
});

onBeforeUnmount(() => {
  if (controls) controls.dispose();
  if (renderer) renderer.dispose();
  clearBeads();
  // Clear texture cache
  textureCache.forEach((texture) => texture.dispose());
  textureCache.clear();
});

defineExpose({ downloadImage });
</script>

<style scoped>
.bracelet-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
  background: var(--surface-muted);
  min-height: 100vh;
  font-family: var(--font-sans);
}

.header {
  text-align: center;
  margin-bottom: 16px;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dark);
  margin: 0 0 8px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin: 0;
  font-weight: 400;
}

.canvas-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.bracelet-canvas {
  width: 100%;
  aspect-ratio: 3 / 2;
  position: relative;
}

.bracelet-canvas canvas {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 20px;
}

.canvas-overlay {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
}

.controls-hint {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 12px 16px;
  color: white;
  font-size: 0.9rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.hint-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.hint-item:last-child {
  margin-bottom: 0;
}

.hint-icon {
  font-size: 1.1rem;
}

.toolbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
}

.btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  font-family: inherit;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: var(--info);
  color: white;
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(59, 130, 246, 0.4);
  background: var(--info-hover);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 6px 15px rgba(59, 130, 246, 0.3);
}

.btn-icon {
  font-size: 1.2rem;
}

.controls-panel {
  background: white;
  padding: 20px 32px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 400px;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.control-label {
  font-size: 1rem;
  color: var(--dark);
  font-weight: 600;
  text-align: center;
}

.slider-container {
  display: flex;
  align-items: center;
  gap: 16px;
}

.rotation-slider {
  flex: 1;
  height: 8px;
  border-radius: 4px;
  background: var(--border-strong);
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}

.rotation-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--info);
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(59, 130, 246, 0.3);
  transition: all 0.2s ease;
}

.rotation-slider::-webkit-slider-thumb:hover {
  background: var(--info);
  box-shadow: 0 4px 8px rgba(59, 130, 246, 0.4);
  transform: scale(1.1);
}

.rotation-slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--info);
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 6px rgba(59, 130, 246, 0.3);
}

.slider-value {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--info);
  min-width: 50px;
  text-align: center;
}

.info-panel {
  display: flex;
  gap: 32px;
  background: white;
  padding: 20px 32px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.info-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.info-label {
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 500;
}

.info-value {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--dark);
}

/* Responsive Design */
@media (max-width: 768px) {
  .bracelet-wrapper {
    padding: 16px;
    gap: 20px;
  }

  .title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .toolbar {
    gap: 16px;
  }

  .btn {
    padding: 14px 28px;
    font-size: 1rem;
  }

  .info-panel {
    flex-direction: column;
    gap: 16px;
    padding: 16px 24px;
  }

  .controls-panel {
    padding: 16px 24px;
    max-width: 100%;
  }

  .controls-hint {
    font-size: 0.8rem;
    padding: 10px 14px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.8rem;
  }

  .btn {
    padding: 12px 24px;
    font-size: 0.95rem;
  }

  .info-panel {
    padding: 14px 20px;
  }

  .controls-panel {
    padding: 14px 20px;
  }

  .control-label {
    font-size: 0.9rem;
  }

  .slider-value {
    font-size: 1rem;
  }
}

/* Animation for smooth transitions */
.bracelet-wrapper * {
  transition: all 0.3s ease;
}

/* Custom scrollbar for webkit browsers */
.bracelet-wrapper::-webkit-scrollbar {
  width: 8px;
}

.bracelet-wrapper::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.bracelet-wrapper::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}

.bracelet-wrapper::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.5);
}
</style>
