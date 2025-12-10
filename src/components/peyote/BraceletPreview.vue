<template>
  <div class="bracelet-wrapper">
    <div class="header">
      <h2 class="title">پیش‌نمایش دستبند</h2>
      <p class="subtitle">نمایش سه‌بعدی طرح انتخاب شده</p>
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
            <span>برای چرخاندن کلیک و درگ کنید</span>
          </div>
          <div class="hint-item">
            <span class="hint-icon">🔍</span>
            <span>برای زوم اسکرول کنید</span>
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
        <span>دانلود تصویر</span>
      </button>

      <div class="info-panel">
        <div class="info-item">
          <span class="info-label">ابعاد:</span>
          <span class="info-value">{{ cols }} × {{ rows }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">تعداد مهره:</span>
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
  // عرض/ارتفاع خروچی رندر
  width: { type: Number, default: 900 },
  height: { type: Number, default: 600 },
  // چرخش texture (بر حسب درجه)
  textureRotation: { type: Number, default: 90 },
});

const container = ref(null);
let scene, camera, renderer, controls;
let beads = [];

// Cache textures for image-based bead colors to avoid reloading
const textureLoader = new THREE.TextureLoader();
const textureCache = new Map(); // url -> THREE.Texture

function isImageColor(value) {
  return (
    typeof value === 'string' &&
    (value.startsWith('/miyuki-beads-designer/beads/') ||
      value.startsWith('/beads/') ||
      value.startsWith('data:image/'))
  );
}

function getBeadMaterial(colorLike, textureRotation = 0) {
  // Image texture material
  if (isImageColor(colorLike)) {
    const url = colorLike;
    let texture = textureCache.get(url);
    if (!texture) {
      texture = textureLoader.load(
        url,
        (loaded) => {
          // Configure color space and anisotropy after load
          loaded.colorSpace = THREE.SRGBColorSpace;
          if (renderer) {
            loaded.anisotropy = renderer.capabilities.getMaxAnisotropy();
          }
        },
        undefined,
        (error) => {
          console.error('Error loading texture:', url, error);
        }
      );
      // Also set immediately for initial instance (will update once loaded)
      texture.colorSpace = THREE.SRGBColorSpace;
      textureCache.set(url, texture);
    }

    // Clone texture to avoid affecting cached version
    const clonedTexture = texture.clone();
    clonedTexture.rotation = textureRotation; // چرخش texture بر حسب رادیان

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
  const isEdge = false; // You can add edge detection logic here if needed
  const edgeColor = new THREE.Color('#b58a3a');
  const matColor = isEdge ? edgeColor : new THREE.Color(colorLike);
  
  return new THREE.MeshPhysicalMaterial({
    color: matColor,
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
      // Dispose material and its map if it exists
      if (mesh.material.map) {
        mesh.material.map.dispose();
      }
      mesh.material.dispose();
    }
  });
  beads = [];
}

function createCurvedBracelet() {
  if (!scene) return;
  clearBeads();


  // پارامترهای هندسی دستبند
  const radius = 20; // شعاع خمیدگی دستبند
  const arcAngle = Math.PI * 1.55; // حدود 243 درجه (مشابه عکس)
  const startAngle = -arcAngle / 2;


  // ابعاد مهره‌ها را برای قرارگیری صحیح روی انحنا محاسبه می‌کنیم
  // طرح عمودی (16×80) رو افقی روی دستبند نشون می‌دیم
  // انحنا روی طول (rows = 80) و عرض دستبند از cols (16)
  const dTheta = arcAngle / props.rows; // گام زاویه‌ای روی طول (80)
  const beadWidthTangential = radius * dTheta * 0.98; // طول قوس هر سلول با کمی فاصله
  const beadHeight = 0.95; // ارتفاع عمودی هر مهره با کمی فاصله
  const verticalSpacing = 1.0; // فاصله عمودی بین مهره‌ها

  // هندسه استوانه‌ای با گوشه‌های گرد برای حالت منجوق
  // از CylinderGeometry با تعداد وجه‌های بیشتر برای گردی
  const beadGeometry = new THREE.CylinderGeometry(
    beadHeight * 0.7, // شعاع بالا
    beadHeight * 0.7, // شعاع پایین
    beadWidthTangential, // ارتفاع (طول قوس)
    16, // تعداد وجه‌های استوانه برای گردی بیشتر
  );

  for (let y = 0; y < props.rows; y++) {
    // rows = طول دستبند (80)
    for (let x = 0; x < props.cols; x++) {
      // cols = عرض دستبند (16)
      let colorHex = '#ffffff';

      // بررسی نوع pattern و استخراج رنگ
      if (Array.isArray(props.pattern[0])) {
        // pattern یک matrix است
        colorHex =
          props.pattern[y] && props.pattern[y][x]
            ? props.pattern[y][x]
            : '#ffffff';
      } else {
        // pattern یک آرایه ساده است
        const idx = y * props.cols + x; // از cols برای محاسبه index استفاده می‌کنیم
        colorHex = props.pattern[idx] || '#ffffff';
      }


      // بررسی اعتبار رنگ
      if (!colorHex || colorHex === '#' || colorHex.length < 3) {
        colorHex = '#ffffff';
        console.warn(
          'Invalid color detected:',
          colorHex,
          'using default white',
        );
      }

      // محاسبه چرخش texture
      const textureRotationRadians = (props.textureRotation * Math.PI) / 55; // تبدیل درجه به رادیان

      // استفاده از getBeadMaterial برای پشتیبانی از عکس‌ها
      const beadMaterial = getBeadMaterial(colorHex, textureRotationRadians);

      // مرکز هر مهره در وسط بازه‌اش قرار می‌گیرد تا فاصله عرضی صفر شود
      // y = طول (انحنا)، x = عرض (عمودی)
      
      // Apply peyote brick pattern: odd columns are shifted by half a row step
      const isOddColumn = (x % 2) === 1;
      const peyoteOffset = isOddColumn ? 0.5 : 0; // Half of a row step
      
      const theta = startAngle + (y + 0.5 + peyoteOffset) * dTheta; // انحنا روی طول (y) with peyote offset
      const posY = (props.cols / 2 - 0.5 - x) * verticalSpacing; // عرض دستبند (x)
      const posX = radius * Math.sin(theta);
      const posZ = radius * Math.cos(theta);

      const bead = new THREE.Mesh(beadGeometry, beadMaterial);
      bead.position.set(posX, posY, posZ);

      // مهره‌ها را مماس بر انحنا قرار می‌دهیم
      // ابتدا 90 درجه حول محور Z می‌چرخانیم تا افقی شوند
      bead.rotation.z = Math.PI / 2;
      // سپس حول محور Y می‌چرخانیم تا مماس بر انحنا باشند
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

  // نورپردازی ملایم شبیه عکس نمونه
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

onBeforeUnmount(() => {
  // Dispose all beads and their materials
  clearBeads();
  
  // Dispose cached textures
  textureCache.forEach((texture) => {
    texture.dispose();
  });
  textureCache.clear();
  
  if (controls) controls.dispose();
  if (renderer) renderer.dispose();
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
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
  font-family: 'Vazirmatn', 'Tahoma', sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 16px;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 8px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.subtitle {
  font-size: 1.1rem;
  color: #64748b;
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
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(59, 130, 246, 0.4);
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 6px 15px rgba(59, 130, 246, 0.3);
}

.btn-icon {
  font-size: 1.2rem;
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
  color: #64748b;
  font-weight: 500;
}

.info-value {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e293b;
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
