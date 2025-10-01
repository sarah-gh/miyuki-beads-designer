<template>
  <div class="editor-container">
    <!-- ابزارها - Fixed on the right side -->
    <div class="controls-panel">
      <div class="controls-header">
        <h3 class="mb-4 text-lg font-bold text-gray-800">🎨 ابزارهای طراحی</h3>
      </div>

      <div class="controls-content">
        <!-- تنظیمات ابعاد -->
        <div class="dimensions-section">
          <h4 class="mb-2 text-sm font-semibold text-gray-700">
            📐 ابعاد شبکه
          </h4>
          <div class="dimension-inputs">
            <label class="dimension-label">
              <span class="dimension-text">ستون‌ها (عرض):</span>
              <input
                v-model.number="cols"
                type="range"
                min="8"
                max="160"
                class="dimension-range"
              />
              <span class="dimension-value">{{ cols }}</span>
            </label>
            <label class="dimension-label">
              <span class="dimension-text">ردیف‌ها (طول):</span>
              <input
                v-model.number="rows"
                type="range"
                min="8"
                max="400"
                class="dimension-range"
              />
              <span class="dimension-value">{{ rows }}</span>
            </label>
            <label class="dimension-label">
              <span class="dimension-text">اندازه مهره:</span>
              <input
                v-model.number="beadSize"
                type="range"
                min="6"
                max="28"
                class="dimension-range"
              />
              <span class="dimension-value">{{ beadSize }}px</span>
            </label>
          </div>
        </div>

        <!-- انتخاب رنگ -->
        <div class="color-section">
          <h4 class="mb-2 text-sm font-semibold text-gray-700">
            🎨 انتخاب رنگ
          </h4>
          <div class="color-picker-container">
            <input
              v-model="selectedColor"
              type="color"
              class="color-picker"
            />
            <span class="color-value">{{ selectedColor }}</span>
          </div>
          <div class="recent-colors-header mt-3!">
            <h4 class="text-sm font-semibold text-gray-700">🔄 رنگ‌های اخیر</h4>
            <button
              v-if="recentColors.length > 0"
              class="clear-colors-btn"
              title="پاک کردن تمام رنگ‌ها"
              @click="clearRecentColors"
            >
              🗑️ پاک کردن
            </button>
          </div>
          <div class="recent-colors-grid">
            <div
              v-for="color in recentColors"
              :key="color"
              class="color-swatch"
              :style="{ backgroundColor: color }"
              :title="color"
              @click="selectedColor = color"
            >
              <button
                class="remove-color-btn"
                @click.stop="removeRecentColor(color)"
              >
                ×
              </button>
            </div>
          </div>
        </div>

        <!-- ابزارهای اصلی -->
        <div class="tools-section">
          <h4 class="mb-2 text-sm font-semibold text-gray-700">🛠️ ابزارها</h4>
          <div class="tools-grid">
            <button
              class="tool-btn primary"
              :class="{ active: tool === 'paint' }"
              @click="setTool('paint')"
            >
              🖌️ Paint
            </button>
            <button
              class="tool-btn primary"
              :class="{ active: tool === 'fill' }"
              @click="setTool('fill')"
            >
              🪣 Fill
            </button>
            <button
              class="tool-btn secondary"
              @click="undo"
            >
              ↩️ Undo
            </button>
            <button
              class="tool-btn secondary"
              @click="clearAll"
            >
              🗑️ Clear All
            </button>
          </div>
        </div>

        <!-- دکمه‌های خروجی -->
        <div class="export-section">
          <h4 class="mb-2 text-sm font-semibold text-gray-700">📤 خروجی</h4>
          <button
            class="export-btn primary"
            @click="$emit('update-grid', getGridMatrix())"
          >
            🚀 ارسال به 3D
          </button>
          <button
            class="export-btn success"
            @click="exportGridAsImage"
          >
            📷 خروجی عکس
          </button>
        </div>
      </div>
    </div>

    <!-- صفحه شطرنجی -->
    <div class="grid-container">
      <div class="image-section">
        <div class="upload-section">
          <label class="upload-label mb-2!">
            <span class="upload-text">📁 آپلود فایل txt grid</span>
            <input
              type="file"
              accept=".txt"
              class="upload-input"
              @change="handleTxtUpload"
            />
          </label>
          <label class="upload-label">
            <span class="upload-text">📁 آپلود تصویر</span>
            <input
              type="file"
              accept="image/*"
              class="upload-input"
              @change="handleImageUpload"
            />
          </label>
        </div>
        <div
          v-if="selectedImage"
          class="image-preview"
        >
          <img
            :src="selectedImage"
            alt="تصویر انتخاب شده"
            class="preview-image"
          />
        </div>
      </div>

      <div class="canvas-wrapper">
        <div class="canvas-header">
          <div class="text-sm font-medium">نمایش عمودی (90° چرخش فرض شده)</div>
          <div class="text-xs text-gray-500">
            | ستون‌ها: {{ cols }} × ردیف‌ها: {{ rows }}
          </div>
        </div>
        
        <div class="canvas-container">
          <canvas
            ref="canvas"
            class="mx-auto block"
            @pointerdown="onPointerDown"
            @pointermove="onPointerMove"
            @pointerup="onPointerUp"
            @pointerleave="onPointerUp"
          ></canvas>
        </div>

        <div class="canvas-info">
          <div class="mb-2 flex items-center gap-2">
            <label class="flex items-center gap-2 text-sm">
              <input
                v-model="brickMode"
                type="checkbox"
              />
              <span>حالت اجرچینی (Brick)</span>
            </label>
          </div>
          <div class="text-xs text-gray-600">
            نکته: "حالت اجرچینی" هر ردیف زوج یا فرد را نیم مهره جابه‌جا می‌کند تا
            ظاهر بافت Brick Stitch شبیه‌سازی شود.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted, onBeforeUnmount } from 'vue';

defineEmits(['update-grid']);

// 기본 تنظیمات
const cols = ref(80); // ستون‌ها — در حالت عمودی این عرض الگو است
const rows = ref(10); // ردیف‌ها — طول الگو (بلندی)
const beadSize = ref(20);
const brickMode = ref(true);
const tool = ref('paint');

// تقریبی رنگ‌های Miyuki از تصویر (می‌تونی hex دلخواه بذاری)
const palette = [
  '#8B2D2B', // DB-2183 (قرمز تیره)
  '#D36B43', // DB-2172 (نارنجی/سُرخ)
  '#E9C76A', // DB-2177 (زرد طلایی)
  '#172B4A', // DB-0301 (سرمه‌ای)
  '#FFFFFF', // سفید برای حذف/فضای خالی
];
const selectedColor = ref(palette[3]);
const recentColors = ref([]);
const selectedImage = ref(null);

const canvas = ref(null);
let ctx = null;

// مدل داده: آرایه دوبعدی نگهدارنده رنگ هر سل
const grid = reactive({ data: [] });
function resetGrid() {
  grid.data = Array.from({ length: rows.value }, () =>
    Array.from({ length: cols.value }, () => null),
  );
}

// تاریخچه ساده برای واگرد
const history = ref([]);
function pushHistory(snapshot) {
  history.value.push(snapshot);
  if (history.value.length > 50) history.value.shift();
}
function undo() {
  const s = history.value.pop();
  if (s) {
    grid.data = s;
    render();
  }
}

// اندازه واقعی canvas را تنظیم کن با توجه به DPR
function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const w = (cols.value + (brickMode.value ? 0.5 : 0)) * beadSize.value;
  const h = rows.value * beadSize.value;
  const el = canvas.value;
  el.width = Math.round(w * dpr);
  el.height = Math.round(h * dpr);
  el.style.width = `${Math.round(w)}px`;
  el.style.height = `${Math.round(h)}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

// رسم مهره به صورت دایره/مستطیل گرد برای جلوه‌ی واقعی‌تر
function drawBead(x, y, size, color) {
  const r = size * 0.18;
  ctx.fillStyle = color || '#f3f4f6';
  // سایه ملایم
  ctx.beginPath();
  roundRect(ctx, x, y, size, size, r);
  ctx.fill();
  // حاشیه
  ctx.lineWidth = Math.max(0.6, size * 0.06);
  ctx.strokeStyle = 'rgba(0,0,0,0.06)';
  ctx.stroke();
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function render() {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
  const s = beadSize.value;
  for (let r = 0; r < rows.value; r++) {
    for (let c = 0; c < cols.value; c++) {
      const offset = brickMode.value && r % 2 === 1 ? s / 2 : 0;
      const x = c * s + offset;
      const y = r * s;
      const color = grid.data[r] && grid.data[r][c];
      drawBead(x, y, s, color);
    }
  }
}

// تبدیل مختصات pointer به اندیس سطر/ستون
function pointToCell(clientX, clientY) {
  const rect = canvas.value.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  const s = beadSize.value;
  // تشخیص ردیف
  const r = Math.floor(y / s);
  // برای ستون باید در نظر بگیریم که ردیف‌های جابه‌جا شده اند
  const offset = brickMode.value && r % 2 === 1 ? s / 2 : 0;
  const c = Math.floor((x - offset) / s);
  if (r < 0 || r >= rows.value || c < 0 || c >= cols.value) return null;
  return { r, c };
}

let painting = false;
function onPointerDown(e) {
  e.preventDefault();
  canvas.value.setPointerCapture(e.pointerId);
  painting = true;
  // save snapshot
  pushHistory(JSON.parse(JSON.stringify(grid.data)));
  paintAtEvent(e);
}
function onPointerMove(e) {
  if (!painting) return;
  paintAtEvent(e);
}
function onPointerUp(e) {
  painting = false;
  try {
    canvas.value.releasePointerCapture(e.pointerId);
  } catch {
    //
  }
}

function paintAtEvent(e) {
  const cell = pointToCell(e.clientX, e.clientY);
  if (!cell) return;
  const { r, c } = cell;
  grid.data[r][c] =
    selectedColor.value === '#FFFFFF' ? null : selectedColor.value;
  addToRecentColors(selectedColor.value);
  render();
}

function setTool(t) {
  tool.value = t;
}

// function selectColor(c) {
//   selectedColor.value = c;
// }

// function fillBackground() {
//   pushHistory(JSON.parse(JSON.stringify(grid.data)));
//   for (let r = 0; r < rows.value; r++)
//     for (let c = 0; c < cols.value; c++)
//       grid.data[r][c] =
//         selectedColor.value === '#FFFFFF' ? null : selectedColor.value;
//   render();
// }

function clearAll() {
  pushHistory(JSON.parse(JSON.stringify(grid.data)));
  resetGrid();
  render();
}

// اضافه کردن رنگ به لیست رنگ‌های اخیر
function addToRecentColors(color) {
  // اگر رنگ قبلاً وجود دارد، آن را حذف کن
  const index = recentColors.value.indexOf(color);
  if (index > -1) {
    recentColors.value.splice(index, 1);
  }

  // رنگ جدید را در ابتدا اضافه کن
  recentColors.value.unshift(color);

  // حداکثر 10 رنگ نگه دار
  if (recentColors.value.length > 10) {
    recentColors.value = recentColors.value.slice(0, 10);
  }
}

// حذف رنگ از لیست رنگ‌های اخیر
function removeRecentColor(color) {
  const index = recentColors.value.indexOf(color);
  if (index > -1) {
    recentColors.value.splice(index, 1);
  }
}

// پاک کردن تمام رنگ‌های اخیر
function clearRecentColors() {
  recentColors.value = [];
}

// خروجی عکس از شبکه
function exportGridAsImage() {
  // ایجاد canvas
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // تنظیم اندازه canvas بر اساس شبکه
  const cellSize = beadSize.value;
  const padding = 20;
  const width = cols.value * cellSize + padding * 2;
  const height = rows.value * cellSize + padding * 2;

  canvas.width = width;
  canvas.height = height;

  // رنگ پس‌زمینه
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  // رسم شبکه
  for (let r = 0; r < rows.value; r++) {
    for (let c = 0; c < cols.value; c++) {
      const color = grid.data[r] && grid.data[r][c];
      if (color) {
        ctx.fillStyle = color;
        const offset = brickMode.value && r % 2 === 1 ? cellSize / 2 : 0;
        const x = padding + c * cellSize + offset;
        const y = padding + r * cellSize;
        ctx.fillRect(x, y, cellSize, cellSize);
      }
    }
  }

  // تبدیل به عکس و دانلود
  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `weaving_grid_${cols.value}x${rows.value}_${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 'image/png');
}

// خروجی به صورت ماتریس برای 3D
function getGridMatrix() {
  return grid.data;
}

function handleTxtUpload(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target.result.trim();
        const colors = JSON.parse(content);
        if (Array.isArray(colors) && colors.every(color => typeof color === 'string' && color.match(/^#[0-9A-Fa-f]{6}$/))) {
          // Convert 1D array to 2D grid
          const gridData = [];
          for (let r = 0; r < rows.value; r++) {
            const row = [];
            for (let c = 0; c < cols.value; c++) {
              const index = r * cols.value + c;
              row.push(colors[index] || null);
            }
            gridData.push(row);
          }
          grid.data = gridData;
          render();
        }
      } catch (error) {
        console.error('Error parsing text file:', error);
      }
    };
    reader.readAsText(file);
  }
}

function handleImageUpload(e) {
  const file = e.target.files[0];
  if (file) {
    selectedImage.value = URL.createObjectURL(file);
  }
}

// watch param changes
watch([cols, rows], () => {
  resetGrid();
  renderLater();
});

watch([beadSize, brickMode], () => {
  renderLater();
});

function renderLater() {
  requestAnimationFrame(() => {
    resizeCanvas();
    render();
  });
}

onMounted(() => {
  const el = canvas.value;
  ctx = el.getContext('2d');
  resetGrid();
  resizeCanvas();
  render();
  window.addEventListener('resize', renderLater);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', renderLater);
});
</script>

<style scoped>
.editor-container {
  display: flex;
  gap: 20px;
  padding: 20px;
  padding-top: 0px;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.controls-panel {
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 200px;
  background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
  border-left: 2px solid #dee2e6;
  z-index: 1000;
  overflow-y: auto;
  padding: 20px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  scrollbar-width: thin;
  scrollbar-color: #adb5bd #f8f9fa;
}

.controls-panel::-webkit-scrollbar {
  width: 8px;
}

.controls-panel::-webkit-scrollbar-track {
  background: #f8f9fa;
}

.controls-panel::-webkit-scrollbar-thumb {
  background: #adb5bd;
  border-radius: 4px;
}

.controls-panel::-webkit-scrollbar-thumb:hover {
  background: #6c757d;
}

.controls-header {
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid #dee2e6;
}

.controls-content {
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 20px;
}

.dimensions-section {
  display: flex;
}

.dimension-inputs {
  display: flex;
  flex-direction: row;
}

.dimensions-section,
.color-section,
.tools-section,
.export-section {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 2px solid #dee2e6;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.dimensions-section:hover,
.color-section:hover,
.tools-section:hover,
.export-section:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.dimension-inputs {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
}

.dimension-label {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.dimension-text {
  font-size: 14px;
  color: #555;
  font-weight: 500;
}

.dimension-range {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #dee2e6;
  outline: none;
}

.dimension-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #667eea;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.dimension-range::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #667eea;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.dimension-value {
  font-size: 12px;
  color: #667eea;
  font-weight: 600;
  text-align: center;
  background: #f8f9fa;
  padding: 4px 8px;
  border-radius: 6px;
  border: 1px solid #dee2e6;
}

.color-picker-container {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
}

.color-picker {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid #dee2e6;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.color-picker:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.color-value {
  font-size: 14px;
  color: #333;
  font-weight: 500;
  background: #f8f9fa;
  padding: 5px 10px;
  border-radius: 6px;
  border: 1px solid #dee2e6;
  min-width: 80px;
  text-align: center;
}

.recent-colors-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.clear-colors-btn {
  background: linear-gradient(135deg, #ff4757 0%, #ff3742 100%);
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 2px 8px rgba(255, 71, 87, 0.3);
}

.clear-colors-btn:hover {
  background-color: #d32f2f;
}

.recent-colors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35px, 1fr));
  gap: 8px;
  margin-top: 10px;
}

.color-swatch {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  border: 2px solid #dee2e6;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.color-swatch:hover {
  transform: scale(1.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.remove-color-btn {
  position: absolute;
  top: -8px;
  right: -8px;
  background: linear-gradient(135deg, #ff4757 0%, #ff3742 100%);
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid white;
  padding: 0;
  line-height: 1;
  opacity: 0;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(255, 71, 87, 0.4);
}

.color-swatch:hover .remove-color-btn {
  opacity: 1;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 10px;
}

.tool-btn {
  padding: 12px 8px;
  border: 2px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.tool-btn:hover {
  background-color: #e0e0e0;
  border-color: #ccc;
}

.tool-btn.active {
  background-color: #4caf50;
  color: white;
  border-color: #4caf50;
}

.tool-btn.primary {
  background-color: #4caf50;
  color: white;
  border-color: #4caf50;
}

.tool-btn.primary:hover {
  background-color: #388e3c;
  border-color: #388e3c;
}

.tool-btn.secondary {
  background-color: #2196f3;
  color: white;
  border-color: #2196f3;
}

.tool-btn.secondary:hover {
  background-color: #1976d2;
  border-color: #1976d2;
}

.export-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
}

.export-btn {
  padding: 15px 12px;
  border: 2px solid transparent;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.export-btn:hover {
  background-color: #e0e0e0;
  border-color: #ccc;
}

.export-btn.primary {
  background-color: #4caf50;
  color: white;
  border-color: #4caf50;
}

.export-btn.primary:hover {
  background-color: #388e3c;
  border-color: #388e3c;
}

.export-btn.success {
  background-color: #4caf50;
  color: white;
  border-color: #4caf50;
}

.export-btn.success:hover {
  background-color: #388e3c;
  border-color: #388e3c;
}

.grid-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: 300px;
  flex: 1;
  user-select: none;
}

.image-section {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 2px solid #dee2e6;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  max-width: 400px;
}

.upload-section {
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
}

.upload-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 25px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: 2px dashed rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  color: white;
  font-weight: 500;
  margin-bottom: 10px;
}

.upload-label:hover {
  background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.upload-text {
  font-size: 14px;
  color: white;
}

.upload-input {
  display: none;
}

.image-preview {
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 12px;
  border: 2px solid #dee2e6;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-top: 15px;
}

.preview-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.canvas-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 2px solid #dee2e6;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  padding: 20px;
  min-height: 400px;
}

.canvas-header {
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dee2e6;
}

.canvas-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  border: 2px dashed #dee2e6;
  border-radius: 8px;
  background: #f8f9fa;
  padding: 20px;
  margin-bottom: 15px;
}

.canvas-info {
  padding-top: 15px;
  border-top: 1px solid #dee2e6;
}

canvas {
  display: block;
  touch-action: none;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .grid-container {
    flex-direction: column;
  }
  
  .image-section {
    max-width: none;
  }
}

@media (max-width: 768px) {
  .controls-panel {
    position: relative;
    width: 100%;
    height: auto;
    order: 2;
  }
  
  .grid-container {
    margin-right: 0;
    order: 1;
  }
  
  .editor-container {
    flex-direction: column;
  }
}
</style>
  