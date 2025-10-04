<template>
  <div class="editor-container h-screen overflow-auto">
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
              <span class="dimension-text">ردیف‌ها:</span>
              <input
                v-model.number="rows"
                type="number"
                min="1"
                class="dimension-input"
              />
            </label>
            <label class="dimension-label">
              <span class="dimension-text">ستون‌ها:</span>
              <input
                v-model.number="cols"
                type="number"
                min="1"
                class="dimension-input"
              />
            </label>
          </div>
          
          <!-- اندازه سلول -->
          <div class="cell-size-section !mt-4">
            <h4 class="mb-2 text-sm font-semibold text-gray-700">
              📏 اندازه سلول
            </h4>
            <div class="dimension-inputs">
              <label class="dimension-label">
                <span class="dimension-text">عرض:</span>
                <input
                  v-model.number="cellWidth"
                  type="number"
                  min="5"
                  max="50"
                  class="dimension-input"
                />
              </label>
              <label class="dimension-label">
                <span class="dimension-text">ارتفاع:</span>
                <input
                  v-model.number="cellHeight"
                  type="number"
                  min="5"
                  max="50"
                  class="dimension-input"
                />
              </label>
            </div>
          </div>
        </div>

        <!-- انتخاب جهت -->
        <div class="direction-section">
          <h4 class="mb-2 text-sm font-semibold text-gray-700">
            🔄 جهت
          </h4>
          <div class="direction-toggle">
            <button
              class="direction-btn"
              :class="{ active: isVertical }"
              @click="isVertical = !isVertical"
            >
              {{ isVertical ? 'عمودی' : 'افقی' }}
            </button>
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

        <!-- انتخاب حالت رنگ یا تصویر -->
        <div class="mode-section">
          <h4 class="mb-2 text-sm font-semibold text-gray-700">
            🎨 حالت طراحی
          </h4>
          <div class="mode-toggle">
            <button
              class="mode-btn"
              :class="{ active: paintMode === 'color' }"
              @click="paintMode = 'color'"
            >
              🎨 رنگ
            </button>
            <button
              class="mode-btn"
              :class="{ active: paintMode === 'image' }"
              @click="paintMode = 'image'"
            >
              🖼️ تصویر
            </button>
          </div>
        </div>

        <!-- انتخاب تصویر مهره -->
        <div v-if="paintMode === 'image'" class="image-section">
          <h4 class="mb-2 text-sm font-semibold text-gray-700">
            🖼️ انتخاب تصویر مهره
          </h4>
          <div class="image-picker-container">
            <div class="available-images-grid">
              <div
                v-for="image in availableImages"
                :key="image.name"
                class="image-item"
                :class="{ selected: selectedBeadImage?.url === image.url }"
                @click="selectBeadImage(image)"
              >
                <img
                  :src="image.url"
                  :alt="image.displayName"
                  class="bead-image"
                />
                <span class="image-name">{{ image.displayName }}</span>
              </div>
            </div>
          </div>
          
          <!-- تصاویر اخیر -->
          <div v-if="recentImages.length > 0" class="recent-images-section">
            <div class="recent-images-header">
              <h4 class="text-sm font-semibold text-gray-700">🔄 تصاویر اخیر</h4>
              <button
                class="clear-images-btn"
                title="پاک کردن تمام تصاویر"
                @click="clearRecentImages"
              >
                🗑️ پاک کردن
              </button>
            </div>
            <div class="recent-images-grid">
              <div
                v-for="image in recentImages"
                :key="image.url"
                class="recent-image-item"
                :class="{ selected: selectedBeadImage?.url === image.url }"
                @click="selectBeadImage(image)"
              >
                <img
                  :src="image.url"
                  :alt="image.displayName"
                  class="recent-bead-image"
                />
                <button
                  class="remove-image-btn"
                  @click.stop="removeRecentImage(image)"
                >
                  ×
                </button>
              </div>
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
              :class="{ active: tool === 'select' }"
              @click="setTool('select')"
            >
              📐 Select
            </button>
            <button
              class="tool-btn secondary"
              @click="copySelection"
            >
              📋 Copy
            </button>
            <button
              class="tool-btn secondary"
              @click="cutSelection"
            >
              ✂️ Cut
            </button>
            <button
              class="tool-btn secondary"
              @click="pasteSelection"
            >
              📥 Paste
            </button>
            <button
              class="tool-btn secondary"
              @click="pasteAtCenter"
            >
              📍 Paste at Center
            </button>
            <button
              class="tool-btn secondary"
              :disabled="!hasClipboardContent()"
              @click="enablePasteMode"
            >
              🎯 Select Paste Position
            </button>
            <button
              v-if="isPasteMode"
              class="tool-btn danger"
              @click="cancelPasteMode"
            >
              ❌ Cancel Paste
            </button>
            <button
              class="tool-btn secondary"
              @click="clearSelection"
            >
              🗑️ Clear Selection
            </button>
            <button
              class="tool-btn secondary"
              :disabled="selection.length === 0"
              @click="mirrorSelection"
            >
              🔄 Mirror Selection
            </button>
            <button
              class="tool-btn secondary"
              :disabled="selection.length === 0"
              @click="mirrorSelectionVertical"
            >
              ↕️ Mirror Selection Vertical
            </button>
            <button
              class="tool-btn secondary"
              @click="undo"
            >
              ↩️ Undo
            </button>
            <button
              class="tool-btn secondary"
              @click="redo"
            >
              ↪️ Redo
            </button>
          </div>
          
          <!-- دکمه تغییر رنگ تمام مهره‌ها -->
          <div class="background-color-section !mt-4">
            <h4 class="mb-2 text-sm font-semibold text-gray-700">🎨 پس‌زمینه</h4>
            
            <!-- انتخاب حالت پس‌زمینه -->
            <div class="background-mode-toggle">
              <button
                class="mode-btn"
                :class="{ active: backgroundMode === 'color' }"
                @click="backgroundMode = 'color'"
              >
                🎨 رنگ
              </button>
              <button
                class="mode-btn"
                :class="{ active: backgroundMode === 'image' }"
                @click="backgroundMode = 'image'"
              >
                🖼️ تصویر
              </button>
            </div>
            
            <!-- انتخاب رنگ -->
            <div v-if="backgroundMode === 'color'" class="background-color-controls">
              <input
                v-model="backgroundColor"
                type="color"
                class="color-picker"
                title="انتخاب رنگ پس‌زمینه"
              />
              <button
                class="tool-btn success"
                @click="changeAllBeadsToColor"
              >
                🎨 تغییر تمام مهره‌ها
              </button>
            </div>
            
            <!-- انتخاب تصویر -->
            <div v-if="backgroundMode === 'image'" class="background-image-controls">
              <div class="background-image-picker">
                <div class="background-images-grid">
                  <div
                    v-for="image in availableImages"
                    :key="image.name"
                    class="background-image-item"
                    :class="{ selected: selectedBackgroundImage?.url === image.url }"
                    @click="selectedBackgroundImage = image"
                  >
                    <img
                      :src="image.url"
                      :alt="image.displayName"
                      class="background-bead-image"
                    />
                    <span class="background-image-name">{{ image.displayName }}</span>
                  </div>
                </div>
              </div>
              <button
                class="tool-btn success"
                :disabled="!selectedBackgroundImage"
                @click="changeAllBeadsToColor"
              >
                🖼️ تغییر تمام مهره‌ها
              </button>
            </div>
          </div>
        </div>

        <!-- دکمه‌های خروجی -->
        <div class="export-section">
          <h4 class="mb-2 text-sm font-semibold text-gray-700">📤 خروجی</h4>

          <!-- دکمه‌های ذخیره و بارگذاری -->
          <div class="save-load-buttons mb-3">
            <button
              class="export-btn success"
              @click="saveGridToLocalStorage"
            >
              💾 ذخیره گرید
            </button>
            <button
              class="export-btn info"
              @click="loadGridFromLocalStorage"
            >
              📂 بارگذاری اخرین ذخیره
            </button>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button
            class="export-btn primary"
            @click="$emit('update-grid', getGridMatrix())"
          >
            🚀 ارسال به 3D
          </button>

          <button
            class="export-btn success"
            @click="() => exportGridAsImage()"
          >
            📷 خروجی عکس
          </button>

          <button
            class="export-btn info"
            @click="() => exportGridAsHighQualityImage()"
          >
            🖼️ خروجی HD
          </button>

          <button
            class="export-btn warning"
            @click="exportGridAsTxt"
          >
            📄 خروجی TXT
          </button>
          </div>
          
        </div>
      </div>
    </div>

    <!-- صفحه شطرنجی -->
    <div class="grid-container" :class="{ '!flex-row': isVertical, '!flex-col-reverse': !isVertical }">
      <div class="image-section">
        <div class="upload-section grid grid-cols-2 gap-2">
          <label class="upload-label">
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

      <div class="grid-wrapper">
        <div
          class="grid-item"
          :style="{ 
            gridTemplateColumns: `repeat(${rows}, ${cellWidth}px)`,
            gridAutoRows: `${cellHeight}px`
          }"
          @mousedown="startDrawing"
          @mouseup="stopDrawing"
          @mouseleave="stopDrawing"
          @mousemove="drawMove"
        >
          <div
            v-for="(cell, i) in grid"
            :key="i"
            class="cell"
            :class="{
              '!border-red-200': i == Math.floor((rows * cols) / 2),
            }"
            :style="{
              backgroundColor: cell.startsWith('/miyuki-beads-designer/beads/') ? 'transparent' : cell,
              backgroundImage: cell.startsWith('/miyuki-beads-designer/beads/') ? `url(${cell})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: selection.includes(i)
                ? '2px dashed #ff4757'
                : '1px solid #ddd',
              width: `${cellWidth}px`,
              height: `${cellHeight}px`,
              minWidth: `${cellWidth}px`,
              minHeight: `${cellHeight}px`
            }"
            @click="handleCellClick(i)"
          >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted, nextTick } from 'vue';
import {
  showError,
  showSuccess,
  showConfirm,
  showInfo,
} from '@/lib/utils/sweetalert';

const emit = defineEmits(['update-grid']);

const rows = ref(16);
const cols = ref(80);
const cellWidth = ref(15);
const cellHeight = ref(15);
const selectedColor = ref('#ff0000');
const recentColors = ref([]);
const lastSavedTime = ref(null);
const isVertical = ref(true);

const selectedImage = ref(null);
const paintMode = ref('color'); // 'color' or 'image'
const selectedBeadImage = ref(null);
const recentImages = ref([]);
const availableImages = ref([]);

const grid = ref([]);

// توابع ذخیره و بارگذاری grid در localStorage
function saveGridToLocalStorage() {
  try {
    const gridData = {
      grid: grid.value,
      rows: rows.value,
      cols: cols.value,
      recentColors: recentColors.value,
      recentImages: recentImages.value,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('gridEditorData', JSON.stringify(gridData));
    lastSavedTime.value = gridData.timestamp;
    showSuccess('ذخیره شد', 'گرید با موفقیت ذخیره شد');
  } catch (error) {
    showError('خطا در ذخیره', 'خطا در ذخیره گرید: ' + error.message);
    console.error('Error saving grid:', error);
  }
}

function loadGridFromLocalStorage() {
  try {
    const savedData = localStorage.getItem('gridEditorData');
    if (savedData) {
      const gridData = JSON.parse(savedData);

      // بررسی اعتبار داده‌های ذخیره شده
      if (
        gridData.grid &&
        Array.isArray(gridData.grid) &&
        gridData.rows &&
        gridData.cols &&
        gridData.grid.length === gridData.rows * gridData.cols
      ) {
        // بارگذاری داده‌ها
        rows.value = gridData.rows;
        cols.value = gridData.cols;
        grid.value = [...gridData.grid];

        // بارگذاری رنگ‌های اخیر (اگر موجود باشد)
        if (gridData.recentColors && Array.isArray(gridData.recentColors)) {
          recentColors.value = [...gridData.recentColors];
        }

        // بارگذاری تصاویر اخیر (اگر موجود باشد)
        if (gridData.recentImages && Array.isArray(gridData.recentImages)) {
          recentImages.value = [...gridData.recentImages];
        }

        // تنظیم زمان آخرین ذخیره
        lastSavedTime.value = gridData.timestamp;

        // ریست کردن تاریخچه
        history.stacks = [];
        history.index = -1;
        saveHistory();

        emit('update-grid', getGridMatrix())

        // showSuccess('بارگذاری شد', 'گرید با موفقیت بارگذاری شد');
        return true;
      } else {
        // داده‌های نامعتبر، حذف از localStorage
        localStorage.removeItem('gridEditorData');
        showInfo('اطلاعات', 'داده‌های ذخیره شده نامعتبر بودند و حذف شدند');
        return false;
      }
    }
    return false;
  } catch (error) {
    showError('خطا در بارگذاری', 'خطا در بارگذاری گرید: ' + error.message);
    console.error('Error loading grid:', error);
    // در صورت خطا، حذف داده‌های خراب
    localStorage.removeItem('gridEditorData');
    return false;
  }
}

// بارگذاری خودکار گرید در هنگام شروع
onMounted(() => {
  loadGridFromLocalStorage();
  loadAvailableImages();
});

// بارگذاری تصاویر موجود در پوشه beads
function loadAvailableImages() {
  const imageFiles = [
    '310.jpg', '1130.jpg', '1135.jpg', '2116.jpg', '2131.jpg', '2132.jpg', '725.jpg', '877.jpg',
    'f111.jpg', 'f222.jpg', 'f333.jpg', 'f444.jpg', 'f555.jpg', 'f666.jpg', 'f777.jpg', 'f888.jpg', 'f999.jpg'
  ];
  
  availableImages.value = imageFiles.map(filename => ({
    name: filename,
    url: `/miyuki-beads-designer/beads/${filename}`,
    displayName: filename.replace('.jpg', '')
  }));
}

const selection = ref([]);
const clipboard = ref([]);
const clipboardSize = ref({ width: 0, height: 0 });
const pastePosition = ref({ x: 0, y: 0 });
const isPasteMode = ref(false);

const tool = ref('paint');
let isDrawing = false;
let selectionStart = null;
let isSelecting = false;

// تاریخچه Undo/Redo
const history = reactive({ stacks: [], index: -1 });
function saveHistory() {
  history.stacks = history.stacks.slice(0, history.index + 1);
  history.stacks.push([...grid.value]);
  history.index++;
}
function undo() {
  if (history.index > 0) {
    history.index--;
    grid.value = [...history.stacks[history.index]];
  }
}
function redo() {
  if (history.index < history.stacks.length - 1) {
    history.index++;
    grid.value = [...history.stacks[history.index]];
  }
}
saveHistory();

function handleTxtUpload(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target.result.trim();
        const parsedContent = JSON.parse(content);

        // بررسی فرمت جدید (شامل rows و cols)
        if (parsedContent.grid && parsedContent.rows && parsedContent.cols) {
          // فرمت جدید: شامل ابعاد
          const { grid: colors, rows: fileRows, cols: fileCols } = parsedContent;
          
          // بررسی اعتبار آرایه رنگ‌ها و تصاویر
          if (
            Array.isArray(colors) &&
            colors.every(
              (cell) =>
                typeof cell === 'string' && (
                  cell.match(/^#[0-9A-Fa-f]{6}$/) || // رنگ‌های hex
                  cell.startsWith('/miyuki-beads-designer/beads/') // تصاویر مهره
                ),
            )
          ) {
            // بررسی تطابق تعداد سلول‌ها با ابعاد
            if (colors.length === fileRows * fileCols) {
              // ابتدا ابعاد را تغییر بده
              rows.value = fileRows;
              cols.value = fileCols;
              
              // منتظر بمان تا watcher اجرا شود
              nextTick(() => {
                // حالا گرید را تنظیم کن
                grid.value = [...colors];
                saveHistory();
                showSuccess('بارگذاری شد', `گرید ${fileRows}×${fileCols} با موفقیت بارگذاری شد`);
              });
            } else {
              showError(
                'خطا در ابعاد',
                `تعداد سلول‌ها (${colors.length}) با ابعاد اعلام شده (${fileRows}×${fileCols}) مطابقت ندارد`
              );
            }
          } else {
            showError(
              'خطا در فرمت فایل',
              'فایل باید شامل آرایه‌ای معتبر از رنگ‌ها یا تصاویر باشد'
            );
          }
        } else if (Array.isArray(parsedContent)) {
          // فرمت قدیمی: فقط آرایه رنگ‌ها
          const colors = parsedContent;
          
          // بررسی اعتبار آرایه رنگ‌ها و تصاویر
          if (
            colors.every(
              (cell) =>
                typeof cell === 'string' && (
                  cell.match(/^#[0-9A-Fa-f]{6}$/) || // رنگ‌های hex
                  cell.startsWith('/miyuki-beads-designer/beads/') // تصاویر مهره
                ),
            )
          ) {
            // استفاده از ابعاد فعلی سایت
            if (colors.length === rows.value * cols.value) {
              grid.value = [...colors];
              saveHistory();
              showSuccess('بارگذاری شد', `گرید با ابعاد فعلی (${rows.value}×${cols.value}) بارگذاری شد`);
            } else {
              showError(
                'خطا در ابعاد',
                `تعداد سلول‌ها (${colors.length}) با ابعاد فعلی (${rows.value}×${cols.value}) مطابقت ندارد. لطفاً ابعاد را تنظیم کنید یا از فایل با فرمت جدید استفاده کنید.`
              );
            }
          } else {
            showError(
              'خطا در فرمت فایل',
              'فایل باید شامل آرایه‌ای معتبر از رنگ‌ها یا تصاویر باشد'
            );
          }
        } else {
          showError(
            'خطا در فرمت فایل',
            'فرمت فایل نامعتبر است. فایل باید شامل آرایه‌ای از رنگ‌ها/تصاویر یا آبجکتی با grid، rows و cols باشد.'
          );
        }
      } catch (error) {
        showError('خطا در خواندن فایل', 'خطا در خواندن فایل: ' + error.message);
        console.error('Error parsing text file:', error);
      }
    };
    reader.readAsText(file);
  }
}

watch([rows, cols], () => {
  // فقط اگر تعداد سلول‌ها تغییر کرده باشد، گرید را ریست کن
  const newSize = rows.value * cols.value;
  if (grid.value.length !== newSize) {
    grid.value = Array(newSize).fill('#ffffff');
    // ریست کردن clipboard و selection
    clipboard.value = [];
    clipboardSize.value = { width: 0, height: 0 };
    selection.value = [];
    isPasteMode.value = false;
    saveHistory();
  }
});

// ذخیره خودکار گرید در localStorage هنگام تغییر
watch(
  grid,
  () => {
    // تاخیر کوتاه برای جلوگیری از ذخیره مکرر
    setTimeout(() => {
      try {
        const gridData = {
          grid: grid.value,
          rows: rows.value,
          cols: cols.value,
          recentColors: recentColors.value,
          recentImages: recentImages.value,
          timestamp: new Date().toISOString(),
        };
        localStorage.setItem('gridEditorData', JSON.stringify(gridData));
        lastSavedTime.value = gridData.timestamp;
      } catch (error) {
        console.error('Error auto-saving grid:', error);
      }
    }, 1000); // تاخیر 1 ثانیه
  },
  { deep: true },
);

function setTool(t) {
  tool.value = t;
  selection.value = [];

  // اگر ابزار جدید انتخاب شد، از حالت چسباندن خارج شو
  if (t !== 'paste') {
    isPasteMode.value = false;
  }
}

// تابع کمکی برای بررسی clipboard
function hasClipboardContent() {
  return (
    clipboard.value &&
    clipboard.value.length > 0 &&
    clipboardSize.value.width > 0
  );
}

// رسم با موس
function startDrawing(e) {
  isDrawing = true;
  const index = getCellIndexFromEvent(e);
  if (tool.value === 'paint') {
    paintCell(index);
  } else if (tool.value === 'fill') {
    bucketFill(index, grid.value[index], selectedColor.value);
  } else if (tool.value === 'select') {
    selectionStart = index;
    selection.value = [index];
    isSelecting = true;
  }
}
function stopDrawing() {
  if (isDrawing) saveHistory();
  isDrawing = false;
  selectionStart = null;
}
function drawMove(e) {
  if (!isDrawing) return;
  const index = getCellIndexFromEvent(e);
  if (tool.value === 'paint') {
    paintCell(index);
  } else if (tool.value === 'select' && isSelecting) {
    selection.value = getSelectionRect(selectionStart, index);
  }
}

// ابزار Paint
function paintCell(i) {
  if (paintMode.value === 'color') {
    grid.value[i] = selectedColor.value;
    addToRecentColors(selectedColor.value);
  } else if (paintMode.value === 'image' && selectedBeadImage.value) {
    grid.value[i] = selectedBeadImage.value.url;
    addToRecentImages(selectedBeadImage.value);
  }
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

// اضافه کردن تصویر به لیست تصاویر اخیر
function addToRecentImages(image) {
  // اگر تصویر قبلاً وجود دارد، آن را حذف کن
  const index = recentImages.value.findIndex(img => img.url === image.url);
  if (index > -1) {
    recentImages.value.splice(index, 1);
  }

  // تصویر جدید را در ابتدا اضافه کن
  recentImages.value.unshift(image);

  // حداکثر 10 تصویر نگه دار
  if (recentImages.value.length > 10) {
    recentImages.value = recentImages.value.slice(0, 10);
  }
}

// انتخاب تصویر مهره
function selectBeadImage(image) {
  selectedBeadImage.value = image;
  addToRecentImages(image);
}

// حذف تصویر از لیست تصاویر اخیر
function removeRecentImage(image) {
  const index = recentImages.value.findIndex(img => img.url === image.url);
  if (index > -1) {
    recentImages.value.splice(index, 1);
  }
}

// پاک کردن تمام تصاویر اخیر
async function clearRecentImages() {
  const result = await showConfirm(
    'پاک کردن تصاویر',
    'آیا می‌خواهید تمام تصاویر اخیر پاک شوند؟',
  );
  if (result.isConfirmed) {
    recentImages.value = [];
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
async function clearRecentColors() {
  const result = await showConfirm(
    'پاک کردن رنگ‌ها',
    'آیا می‌خواهید تمام رنگ‌های اخیر پاک شوند؟',
  );
  if (result.isConfirmed) {
    recentColors.value = [];
  }
}

// Fill - در طرح عمودی: rows = تعداد ستون‌ها، cols = تعداد ردیف‌ها
function bucketFill(startIndex, targetColor, newColor) {
  if (targetColor === newColor) return;
  
  const stack = [startIndex];
  const visited = new Set();
  
  while (stack.length) {
    const idx = stack.pop();
    
    if (visited.has(idx) || grid.value[idx] !== targetColor) continue;
    
    visited.add(idx);
    grid.value[idx] = newColor;
    
    // در طرح عمودی: x از rows می‌آید، y از cols می‌آید
    const x = idx % rows.value; // x از rows
    const y = Math.floor(idx / rows.value); // y از rows
    
    // بررسی همسایه‌ها
    // چپ
    if (x > 0) {
      const leftIdx = idx - 1;
      if (!visited.has(leftIdx) && grid.value[leftIdx] === targetColor) {
        stack.push(leftIdx);
      }
    }
    
    // راست
    if (x < rows.value - 1) {
      const rightIdx = idx + 1;
      if (!visited.has(rightIdx) && grid.value[rightIdx] === targetColor) {
        stack.push(rightIdx);
      }
    }
    
    // بالا
    if (y > 0) {
      const upIdx = idx - rows.value;
      if (!visited.has(upIdx) && grid.value[upIdx] === targetColor) {
        stack.push(upIdx);
      }
    }
    
    // پایین
    if (y < cols.value - 1) {
      const downIdx = idx + rows.value;
      if (!visited.has(downIdx) && grid.value[downIdx] === targetColor) {
        stack.push(downIdx);
      }
    }
  }

  // اضافه کردن رنگ جدید به لیست رنگ‌های اخیر
  addToRecentColors(newColor);
}

// انتخاب
function getCellIndexFromEvent(e) {
  const cell = e.target;
  return Array.from(cell.parentNode.children).indexOf(cell);
}

function getSelectionRect(startIdx, endIdx) {
  // در طرح عمودی: rows = تعداد ستون‌ها، cols = تعداد ردیف‌ها
  const sx = startIdx % rows.value; // x از rows می‌آید
  const sy = Math.floor(startIdx / rows.value); // y از rows می‌آید
  const ex = endIdx % rows.value;
  const ey = Math.floor(endIdx / rows.value);

  const minX = Math.min(sx, ex);
  const maxX = Math.max(sx, ex);
  const minY = Math.min(sy, ey);
  const maxY = Math.max(sy, ey);

  const selected = [];
  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= maxX; x++) {
      const idx = y * rows.value + x;
      // بررسی محدوده
      if (idx >= 0 && idx < grid.value.length) {
        selected.push(idx);
      }
    }
  }
  return selected;
}

// کلیک تکی
function handleCellClick(i) {
  if (tool.value === 'paint') {
    paintCell(i);
    saveHistory();
  } else if (tool.value === 'fill') {
    bucketFill(i, grid.value[i], selectedColor.value);
    saveHistory();
  } else if (tool.value === 'paste' && isPasteMode.value) {
    // محاسبه موقعیت کلیک شده
    const clickX = i % rows.value;
    const clickY = Math.floor(i / rows.value);

    // تنظیم موقعیت چسباندن
    pastePosition.value = { x: clickX, y: clickY };

    // چسباندن در موقعیت انتخاب شده
    pasteAtPosition();
  }
}

// Copy / Cut / Paste
function copySelection() {
  if (selection.value.length === 0) {
    showError('خطا', 'ابتدا یک ناحیه انتخاب کنید');
    return;
  }

  // در طرح عمودی: rows = تعداد ستون‌ها، cols = تعداد ردیف‌ها
  const selCols = rows.value; // از rows استفاده می‌کنیم
  const minX = Math.min(...selection.value.map((i) => i % selCols));
  const maxX = Math.max(...selection.value.map((i) => i % selCols));
  const minY = Math.min(...selection.value.map((i) => Math.floor(i / selCols)));
  const maxY = Math.max(...selection.value.map((i) => Math.floor(i / selCols)));

  const width = maxX - minX + 1;
  const height = maxY - minY + 1;

  clipboardSize.value = { width, height };

  clipboard.value = [];
  for (let y = 0; y < height; y++) {
    const row = [];
    for (let x = 0; x < width; x++) {
      const idx = (minY + y) * selCols + (minX + x);
      row.push(grid.value[idx]);
    }
    clipboard.value.push(row);
  }
}

function cutSelection() {
  if (selection.value.length === 0) {
    showError('خطا', 'ابتدا یک ناحیه انتخاب کنید');
    return;
  }

  copySelection();
  selection.value.forEach((idx) => (grid.value[idx] = '#ffffff'));
  saveHistory();
}

function pasteSelection() {
  if (!hasClipboardContent()) {
    showError('خطا', 'هیچ چیزی برای چسباندن وجود ندارد');
    return;
  }

  // اگر ناحیه‌ای انتخاب نشده، در وسط صفحه قرار بده
  let pasteX = 0;
  let pasteY = 0;

  if (selection.value.length > 0) {
    const selCols = rows.value; // از rows استفاده می‌کنیم
    pasteX = Math.min(...selection.value.map((i) => i % selCols));
    pasteY = Math.min(...selection.value.map((i) => Math.floor(i / selCols)));
  } else {
    // در وسط صفحه قرار بده
    pasteX = Math.floor((rows.value - clipboardSize.value.width) / 2); // از rows استفاده می‌کنیم
    pasteY = Math.floor((cols.value - clipboardSize.value.height) / 2); // از cols استفاده می‌کنیم
  }

  // چسباندن
  for (let y = 0; y < clipboardSize.value.height; y++) {
    for (let x = 0; x < clipboardSize.value.width; x++) {
      const targetX = pasteX + x;
      const targetY = pasteY + y;

      // بررسی محدوده
      if (
        targetX >= 0 &&
        targetX < rows.value &&
        targetY >= 0 &&
        targetY < cols.value
      ) {
        // از rows و cols استفاده می‌کنیم
        const targetIdx = targetY * rows.value + targetX; // از rows استفاده می‌کنیم
        if (clipboard.value[y] && clipboard.value[y][x]) {
          grid.value[targetIdx] = clipboard.value[y][x];
        }
      }
    }
  }

  saveHistory();
}

function clearSelection() {
  selection.value = [];
  isSelecting = false;
}

// آینه کردن طرح انتخاب شده
function mirrorSelection() {
  if (selection.value.length === 0) {
    showError('خطا', 'ابتدا یک ناحیه انتخاب کنید');
    return;
  }

  try {
    // محاسبه محدوده انتخاب
    const selCols = rows.value; // از rows استفاده می‌کنیم
    const minX = Math.min(...selection.value.map((i) => i % selCols));
    const maxX = Math.max(...selection.value.map((i) => i % selCols));
    const minY = Math.min(...selection.value.map((i) => Math.floor(i / selCols)));
    const maxY = Math.max(...selection.value.map((i) => Math.floor(i / selCols)));

    const width = maxX - minX + 1;
    const height = maxY - minY + 1;

    // ایجاد کپی موقت از ناحیه انتخاب شده
    const tempSelection = [];
    for (let y = 0; y < height; y++) {
      const row = [];
      for (let x = 0; x < width; x++) {
        const idx = (minY + y) * selCols + (minX + x);
        if (selection.value.includes(idx)) {
          row.push(grid.value[idx]);
        } else {
          row.push('#ffffff'); // رنگ خالی برای سلول‌های غیر انتخاب شده
        }
      }
      tempSelection.push(row);
    }

    // آینه کردن هر ردیف (از چپ به راست)
    const mirroredSelection = tempSelection.map(row => row.reverse());

    // اعمال تغییرات آینه شده به گرید
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (minY + y) * selCols + (minX + x);
        if (selection.value.includes(idx)) {
          grid.value[idx] = mirroredSelection[y][x];
        }
      }
    }

    saveHistory();
    showSuccess('آینه شد', 'طرح انتخاب شده با موفقیت آینه شد');
  } catch (error) {
    showError('خطا در آینه کردن', 'خطا در آینه کردن طرح: ' + error.message);
    console.error('Error mirroring selection:', error);
  }
}

// آینه کردن عمودی طرح انتخاب شده (از بالا به پایین)
function mirrorSelectionVertical() {
  if (selection.value.length === 0) {
    showError('خطا', 'ابتدا یک ناحیه انتخاب کنید');
    return;
  }

  try {
    // محاسبه محدوده انتخاب
    const selCols = rows.value; // از rows استفاده می‌کنیم
    const minX = Math.min(...selection.value.map((i) => i % selCols));
    const maxX = Math.max(...selection.value.map((i) => i % selCols));
    const minY = Math.min(...selection.value.map((i) => Math.floor(i / selCols)));
    const maxY = Math.max(...selection.value.map((i) => Math.floor(i / selCols)));

    const width = maxX - minX + 1;
    const height = maxY - minY + 1;

    // ایجاد کپی موقت از ناحیه انتخاب شده
    const tempSelection = [];
    for (let y = 0; y < height; y++) {
      const row = [];
      for (let x = 0; x < width; x++) {
        const idx = (minY + y) * selCols + (minX + x);
        if (selection.value.includes(idx)) {
          row.push(grid.value[idx]);
        } else {
          row.push('#ffffff'); // رنگ خالی برای سلول‌های غیر انتخاب شده
        }
      }
      tempSelection.push(row);
    }

    // آینه کردن عمودی (از بالا به پایین) - معکوس کردن ترتیب ردیف‌ها
    const mirroredSelection = tempSelection.reverse();

    // اعمال تغییرات آینه شده به گرید
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (minY + y) * selCols + (minX + x);
        if (selection.value.includes(idx)) {
          grid.value[idx] = mirroredSelection[y][x];
        }
      }
    }

    saveHistory();
    showSuccess('آینه عمودی شد', 'طرح انتخاب شده با موفقیت به صورت عمودی آینه شد');
  } catch (error) {
    showError('خطا در آینه عمودی', 'خطا در آینه عمودی کردن طرح: ' + error.message);
    console.error('Error vertical mirroring selection:', error);
  }
}

function pasteAtCenter() {
  if (!hasClipboardContent()) {
    showError('خطا', 'هیچ چیزی برای چسباندن وجود ندارد');
    return;
  }

  // در وسط صفحه قرار بده
  const pasteX = Math.floor((rows.value - clipboardSize.value.width) / 2); // از rows استفاده می‌کنیم
  const pasteY = Math.floor((cols.value - clipboardSize.value.height) / 2); // از cols استفاده می‌کنیم

  // چسباندن
  for (let y = 0; y < clipboardSize.value.height; y++) {
    for (let x = 0; x < clipboardSize.value.width; x++) {
      const targetX = pasteX + x;
      const targetY = pasteY + y;

      // بررسی محدوده
      if (
        targetX >= 0 &&
        targetX < rows.value &&
        targetY >= 0 &&
        targetY < cols.value
      ) {
        // از rows و cols استفاده می‌کنیم
        const targetIdx = targetY * rows.value + targetX; // از rows استفاده می‌کنیم
        if (clipboard.value[y] && clipboard.value[y][x]) {
          grid.value[targetIdx] = clipboard.value[y][x];
        }
      }
    }
  }

  saveHistory();
}

function enablePasteMode() {
  if (!hasClipboardContent()) {
    showError('خطا', 'هیچ چیزی برای چسباندن وجود ندارد');
    return;
  }

  isPasteMode.value = true;
  tool.value = 'paste';
  selection.value = [];
  showInfo(
    'انتخاب موقعیت',
    'حالا روی صفحه کلیک کنید تا موقعیت چسباندن را انتخاب کنید',
  );
}

function pasteAtPosition() {
  if (!hasClipboardContent()) {
    showError('خطا', 'هیچ چیزی برای چسباندن وجود ندارد');
    return;
  }

  // چسباندن در موقعیت انتخاب شده
  for (let y = 0; y < clipboardSize.value.height; y++) {
    for (let x = 0; x < clipboardSize.value.width; x++) {
      const targetX = pastePosition.value.x + x;
      const targetY = pastePosition.value.y + y;

      // بررسی محدوده
      if (
        targetX >= 0 &&
        targetX < rows.value &&
        targetY >= 0 &&
        targetY < cols.value
      ) {
        const targetIdx = targetY * rows.value + targetX;
        if (clipboard.value[y] && clipboard.value[y][x]) {
          grid.value[targetIdx] = clipboard.value[y][x];
        }
      }
    }
  }

  saveHistory();

  // خروج از حالت چسباندن
  isPasteMode.value = false;
  tool.value = 'paint';
}

function cancelPasteMode() {
  isPasteMode.value = false;
  tool.value = 'paint';
  showInfo('لغو شد', 'حالت چسباندن لغو شد');
}

// تابع کمکی برای رسم سلول (رنگ یا تصویر)
async function drawCell(ctx, x, y, cellWidth, cellHeight, cellValue) {
  if (cellValue.startsWith('/miyuki-beads-designer/beads/')) {
    // رسم تصویر
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = cellValue;
      });
      ctx.drawImage(img, x, y, cellWidth, cellHeight);
    } catch (error) {
      // در صورت خطا، یک مستطیل خاکستری رسم کن
      console.warn('Failed to load image:', cellValue, error);
      ctx.fillStyle = '#cccccc';
      ctx.fillRect(x, y, cellWidth, cellHeight);
    }
  } else {
    // رسم رنگ
    ctx.fillStyle = cellValue;
    ctx.fillRect(x, y, cellWidth, cellHeight);
  }
}

// خروجی عکس از شبکه
async function exportGridAsImage() {
  try {
    showInfo('در حال پردازش...', 'لطفاً صبر کنید، در حال ایجاد عکس...');
    
    // ایجاد canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

  // تنظیم اندازه canvas بر اساس شبکه
  const padding = 20; // حاشیه اطراف
  const width = rows.value * cellWidth.value + padding * 2;
  const height = cols.value * cellHeight.value + padding * 2;

  canvas.width = width;
  canvas.height = height;

  // رنگ پس‌زمینه
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  // رسم شبکه
  for (let y = 0; y < cols.value; y++) {
    for (let x = 0; x < rows.value; x++) {
      const index = y * rows.value + x;
      const cellValue = grid.value[index];

      if (cellValue) {
        const cellX = padding + x * cellWidth.value;
        const cellY = padding + y * cellHeight.value;
        
        // رسم سلول (رنگ یا تصویر)
        await drawCell(ctx, cellX, cellY, cellWidth.value, cellHeight.value, cellValue);

        // اضافه کردن خطوط جداکننده
        ctx.strokeStyle = '#e0e0e0';
        ctx.lineWidth = 0.5;
        ctx.strokeRect(cellX, cellY, cellWidth.value, cellHeight.value);
      }
    }
  }

  // اضافه کردن عنوان
  ctx.fillStyle = '#000000';
  ctx.font = '16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(
    `Grid: ${rows.value}×${cols.value}`,
    width / 2,
    padding / 2 + 10,
  );

  // تبدیل به عکس و دانلود
  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `grid_${rows.value}x${cols.value}_${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showSuccess('موفقیت', 'عکس با موفقیت دانلود شد!');
  }, 'image/png');
  } catch (error) {
    showError('خطا در خروجی', 'خطا در ایجاد عکس: ' + error.message);
    console.error('Error exporting grid as image:', error);
  }
}

// خروجی عکس با کیفیت بالا
async function exportGridAsHighQualityImage() {
  try {
    showInfo('در حال پردازش...', 'لطفاً صبر کنید، در حال ایجاد عکس HD...');
    
    // ایجاد canvas با کیفیت بالا
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

  // تنظیم اندازه canvas با کیفیت بالا (2x بزرگتر)
  const cellSizeWidth = cellWidth.value * 2; // عرض سلول (2x بزرگتر)
  const cellSizeHeight = cellHeight.value * 2; // ارتفاع سلول (2x بزرگتر)
  const padding = 40; // حاشیه اطراف (2x بزرگتر)
  const width = rows.value * cellSizeWidth + padding * 2;
  const height = cols.value * cellSizeHeight + padding * 2;

  canvas.width = width;
  canvas.height = height;

  // رنگ پس‌زمینه
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  // رسم شبکه با کیفیت بالا
  for (let y = 0; y < cols.value; y++) {
    for (let x = 0; x < rows.value; x++) {
      const index = y * rows.value + x;
      const cellValue = grid.value[index];

      if (cellValue) {
        const cellX = padding + x * cellSizeWidth;
        const cellY = padding + y * cellSizeHeight;
        
        // رسم سلول (رنگ یا تصویر)
        await drawCell(ctx, cellX, cellY, cellSizeWidth, cellSizeHeight, cellValue);

        // اضافه کردن خطوط جداکننده با کیفیت بالا
        ctx.strokeStyle = '#d0d0d0';
        ctx.lineWidth = 1;
        ctx.strokeRect(cellX, cellY, cellSizeWidth, cellSizeHeight);
      }
    }
  }

  // اضافه کردن عنوان با کیفیت بالا
  ctx.fillStyle = '#000000';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(
    `Grid: ${rows.value}×${cols.value}`,
    width / 2,
    padding / 2 + 20,
  );

  // اضافه کردن تاریخ و زمان
  ctx.font = '16px Arial';
  ctx.fillStyle = '#666666';
  const timestamp = new Date().toLocaleString('fa-IR');
  ctx.fillText(timestamp, width / 2, height - padding / 2);

  // تبدیل به عکس و دانلود
  canvas.toBlob(
    (blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `grid_HD_${rows.value}x${cols.value}_${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      showSuccess('موفقیت', 'عکس HD با موفقیت دانلود شد!');
    },
    'image/png',
    1.0,
  ); // کیفیت 100%
  } catch (error) {
    showError('خطا در خروجی', 'خطا در ایجاد عکس HD: ' + error.message);
    console.error('Error exporting grid as high quality image:', error);
  }
}

// خروجی txt از متغیر grid
function exportGridAsTxt() {
  try {
    // ایجاد آبجکت شامل grid و ابعاد
    const gridData = {
      grid: grid.value,
      rows: rows.value,
      cols: cols.value,
      timestamp: new Date().toISOString()
    };
    
    // تبدیل به رشته JSON
    const gridDataString = JSON.stringify(gridData, null, 2);
    
    // ایجاد Blob از داده‌ها
    const blob = new Blob([gridDataString], { type: 'text/plain;charset=utf-8' });
    
    // ایجاد URL برای دانلود
    const url = URL.createObjectURL(blob);
    
    // ایجاد لینک دانلود
    const a = document.createElement('a');
    a.href = url;
    a.download = `grid_${rows.value}x${cols.value}_${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.txt`;
    
    // اضافه کردن لینک به صفحه و کلیک روی آن
    document.body.appendChild(a);
    a.click();
    
    // پاک کردن لینک و URL
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showSuccess('موفقیت', 'فایل TXT با موفقیت دانلود شد!');
  } catch (error) {
    showError('خطا در خروجی', 'خطا در ایجاد فایل TXT: ' + error.message);
    console.error('Error exporting grid as TXT:', error);
  }
}

// خروجی به صورت ماتریس برای 3D
function getGridMatrix() {
  const matrix = [];
  // چون gridTemplateColumns از rows استفاده می‌کنه،
  // پس شبکه حالا rows ستون و cols ردیف داره
  for (let y = 0; y < cols.value; y++) {
    const row = [];
    for (let x = 0; x < rows.value; x++) {
      row.push(grid.value[y * rows.value + x]);
    }
    matrix.push(row);
  }
  return matrix;
}

function handleImageUpload(e) {
  const file = e.target.files[0];
  selectedImage.value = URL.createObjectURL(file);
}

// تغییر رنگ تمام مهره‌ها
const backgroundColor = ref('#ffffff');
const backgroundMode = ref('color'); // 'color' or 'image'
const selectedBackgroundImage = ref(null);
async function changeAllBeadsToColor() {
  let newValue;
  let confirmMessage;
  
  if (backgroundMode.value === 'color') {
    newValue = backgroundColor.value;
    confirmMessage = `آیا می‌خواهید تمام مهره‌ها به رنگ ${newValue} تغییر یابند؟ این عملیات غیرقابل برگشت است.`;
  } else if (backgroundMode.value === 'image' && selectedBackgroundImage.value) {
    newValue = selectedBackgroundImage.value.url;
    confirmMessage = `آیا می‌خواهید تمام مهره‌ها به تصویر ${selectedBackgroundImage.value.displayName} تغییر یابند؟ این عملیات غیرقابل برگشت است.`;
  } else {
    showError('خطا', 'لطفاً یک رنگ یا تصویر انتخاب کنید');
    return;
  }
  
  const result = await showConfirm(
    'تغییر تمام مهره‌ها',
    confirmMessage
  );
  
  if (result.isConfirmed) {
    const totalCells = rows.value * cols.value;
    for (let i = 0; i < totalCells; i++) {
      grid.value[i] = newValue;
    }
    saveHistory();
    
    if (backgroundMode.value === 'color') {
      addToRecentColors(newValue);
      showSuccess('تغییر رنگ', `تمام مهره‌ها به رنگ ${newValue} تغییر یافتند`);
    } else {
      addToRecentImages(selectedBackgroundImage.value);
      showSuccess('تغییر تصویر', `تمام مهره‌ها به تصویر ${selectedBackgroundImage.value.displayName} تغییر یافتند`);
    }
  }
}

</script>

<style scoped>
.editor-container {
  display: flex;
  gap: 20px;
  padding: 20px;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.controls-panel {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 260px;
  height: 100vh;
  background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
  border-left: 1px solid #dee2e6;
  z-index: 1000;
  overflow-y: auto;
  padding: 12px;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.08);
  scrollbar-width: thin;
  scrollbar-color: #adb5bd #f8f9fa;
}

.controls-panel::-webkit-scrollbar {
  width: 6px;
}

.controls-panel::-webkit-scrollbar-track {
  background: #f8f9fa;
}

.controls-panel::-webkit-scrollbar-thumb {
  background: #adb5bd;
  border-radius: 3px;
}

.controls-panel::-webkit-scrollbar-thumb:hover {
  background: #6c757d;
}

.controls-header {
  text-align: center;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #dee2e6;
}

.controls-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #495057;
}

.controls-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dimensions-section,
.cell-size-section,
.color-section,
.recent-colors-section,
.mode-section,
.image-section,
.tools-section,
.export-section {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
}

.dimensions-section:hover,
.cell-size-section:hover,
.color-section:hover,
.recent-colors-section:hover,
.mode-section:hover,
.image-section:hover,
.tools-section:hover,
.export-section:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.dimensions-section h4,
.cell-size-section h4,
.color-section h4,
.mode-section h4,
.image-section h4,
.tools-section h4,
.export-section h4 {
  margin: 0 0 8px 0;
  font-size: 13px;
  font-weight: 600;
  color: #495057;
}

.dimension-inputs {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 4px;
}

.dimension-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.dimension-text {
  font-size: 12px;
  color: #6c757d;
  font-weight: 500;
}

.dimension-input {
  width: 60px;
  color: #495057;
  padding: 6px 8px;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  font-size: 12px;
  background: #ffffff;
  transition: all 0.2s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.dimension-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
}

.dimension-input:hover {
  border-color: #adb5bd;
}

.color-picker-container {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
}

.color-picker {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #dee2e6;
  cursor: pointer;
  padding: 0;
  transition: all 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.color-picker:hover {
  transform: scale(1.05);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
}

.color-value {
  font-size: 12px;
  color: #495057;
  font-weight: 500;
  background: #f8f9fa;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  min-width: 60px;
  text-align: center;
}

.recent-colors-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.recent-colors-header h4 {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: #495057;
}

.clear-colors-btn {
  background: linear-gradient(135deg, #ff4757 0%, #ff3742 100%);
  color: white;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  box-shadow: 0 2px 6px rgba(255, 71, 87, 0.3);
}

.clear-colors-btn:hover {
  background-color: #d32f2f;
  transform: translateY(-1px);
}

.recent-colors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28px, 1fr));
  gap: 6px;
  margin-top: 8px;
}

.color-swatch {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  border: 1px solid #dee2e6;
  transition: all 0.2s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.color-swatch:hover {
  transform: scale(1.1);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.remove-color-btn {
  position: absolute;
  top: -6px;
  right: -6px;
  background: linear-gradient(135deg, #ff4757 0%, #ff3742 100%);
  color: white;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid white;
  padding: 0;
  line-height: 1;
  opacity: 0;
  transition: all 0.2s ease;
  box-shadow: 0 1px 4px rgba(255, 71, 87, 0.4);
}

.color-swatch:hover .remove-color-btn {
  opacity: 1;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin-top: 8px;
}

.tool-btn {
  padding: 8px 6px;
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.tool-btn:hover {
  background-color: #e0e0e0;
  border-color: #ccc;
  transform: translateY(-1px);
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

.tool-btn.danger {
  background-color: #f44336;
  color: white;
  border-color: #f44336;
}

.tool-btn.danger:hover {
  background-color: #d32f2f;
  border-color: #d32f2f;
}

.tool-btn.success {
  background-color: #4caf50;
  color: white;
  border-color: #4caf50;
}

.tool-btn.success:hover {
  background-color: #388e3c;
  border-color: #388e3c;
}

.tool-btn.info {
  background-color: #2196f3;
  color: white;
  border-color: #2196f3;
}

.tool-btn.info:hover {
  background-color: #1976d2;
  border-color: #1976d2;
}

.export-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}

.export-btn {
  padding: 10px 8px;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.export-btn:hover {
  background-color: #e0e0e0;
  border-color: #ccc;
  transform: translateY(-1px);
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

.export-btn.info {
  background-color: #2196f3;
  color: white;
  border-color: #2196f3;
}

.export-btn.info:hover {
  background-color: #1976d2;
  border-color: #1976d2;
}

.export-btn.warning {
  background-color: #ff9800;
  color: white;
  border-color: #ff9800;
}

.export-btn.warning:hover {
  background-color: #f57c00;
  border-color: #f57c00;
}

.grid-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-right: 250px;
  height: 100%;
  flex: 1;
  user-select: none;
}

/* استایل دکمه‌های ذخیره و بارگذاری */
.save-load-buttons {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.save-load-buttons .export-btn {
  flex: 1;
  min-width: 100px;
}

/* بهبود استایل دکمه‌های export */
.export-section .export-btn {
  margin-bottom: 6px;
  transition: all 0.2s ease;
}

.export-section .export-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

/* استایل نمایش آخرین زمان ذخیره */
.last-saved-info {
  text-align: center;
  padding: 6px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 6px;
  border: 1px solid #dee2e6;
  margin-bottom: 10px;
}

.last-saved-info small {
  font-size: 11px;
  color: #6c757d;
}

/* استایل دکمه‌های رنگ پس‌زمینه */
.background-color-section {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
}

.background-color-section:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.background-color-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}

.background-color-controls .color-picker {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #dee2e6;
  cursor: pointer;
  padding: 0;
  transition: all 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.background-color-controls .color-picker:hover {
  transform: scale(1.05);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
}

.background-color-controls .tool-btn {
  flex: 1;
  min-width: 100px;
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
  height: 100%;
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
}

.upload-label:hover {
  background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}
.upload-text {
  font-size: 14px;
  color: #333;
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
.grid-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 2px solid #dee2e6;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  padding: 20px;
  min-height: 400px;
  height: 100%;
  overflow-y: auto;
}
.grid-item {
  display: grid;
  gap: 0.5px;
  width: fit-content;
  height: fit-content;
  background: #f8f9fa;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}
.cell {
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  position: relative;
}

.cell:hover {
  transform: scale(1.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.cell:active {
  transform: scale(0.95);
}
.center-marker {
  font-size: 16px;
  color: #ff4757;
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* استایل‌های انتخابگر تصویر */
.mode-toggle {
  display: flex;
  gap: 6px;
  margin-top: 8px;
}

.mode-btn {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  background: #ffffff;
  color: #495057;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.mode-btn:hover {
  background: #f8f9fa;
  border-color: #adb5bd;
  transform: translateY(-1px);
}

.mode-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: #667eea;
  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.3);
}

.image-picker-container {
  margin-top: 8px;
}

.available-images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: 8px;
  max-height: 200px;
  overflow-y: auto;
  padding: 4px;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  background: #f8f9fa;
}

.image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px;
  border: 2px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.image-item:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.image-item.selected {
  border-color: #667eea;
  background: linear-gradient(135deg, #f8f9ff 0%, #e6f0ff 100%);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.bead-image {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #dee2e6;
}

.image-name {
  font-size: 10px;
  color: #6c757d;
  margin-top: 4px;
  text-align: center;
  font-weight: 500;
}

.recent-images-section {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #e9ecef;
}

.recent-images-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.recent-images-header h4 {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: #495057;
}

.clear-images-btn {
  background: linear-gradient(135deg, #ff4757 0%, #ff3742 100%);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  box-shadow: 0 1px 4px rgba(255, 71, 87, 0.3);
}

.clear-images-btn:hover {
  background: linear-gradient(135deg, #d32f2f 0%, #c62828 100%);
  transform: translateY(-1px);
}

.recent-images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  gap: 6px;
}

.recent-image-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.recent-image-item:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.recent-image-item.selected {
  border-color: #667eea;
  background: linear-gradient(135deg, #f8f9ff 0%, #e6f0ff 100%);
  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.3);
}

.recent-bead-image {
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 3px;
  border: 1px solid #dee2e6;
}

.remove-image-btn {
  position: absolute;
  top: -4px;
  right: -4px;
  background: linear-gradient(135deg, #ff4757 0%, #ff3742 100%);
  color: white;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid white;
  padding: 0;
  line-height: 1;
  opacity: 0;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(255, 71, 87, 0.4);
}

.recent-image-item:hover .remove-image-btn {
  opacity: 1;
}

/* استایل‌های انتخابگر تصویر پس‌زمینه */
.background-mode-toggle {
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
}

.background-image-controls {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.background-image-picker {
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  background: #f8f9fa;
  padding: 8px;
}

.background-images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  gap: 6px;
}

.background-image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.background-image-item:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.background-image-item.selected {
  border-color: #667eea;
  background: linear-gradient(135deg, #f8f9ff 0%, #e6f0ff 100%);
  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.3);
}

.background-bead-image {
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 3px;
  border: 1px solid #dee2e6;
}

.background-image-name {
  font-size: 9px;
  color: #6c757d;
  margin-top: 2px;
  text-align: center;
  font-weight: 500;
}
</style>
