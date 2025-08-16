<template>
  <div class="working-page">
    <!-- No navigation breadcrumb needed when embedded in HomeView -->

    <!-- Header Section -->
    <div class="page-header">
      <h1 class="page-title">🧶 مراحل اجرای دستبند میوکی</h1>
      <p class="page-subtitle">
        مراحل بافت دستبند را ردیف به ردیف (از بالا به پایین) مشاهده کنید
      </p>
    </div>

    <!-- Controls Panel -->
    <div class="controls-panel">
      <div class="control-group">
        <h3>🎯 تنظیمات شروع</h3>
        <div class="start-controls">
          <label class="control-label">
            <span>شروع از ردیف:</span>
            <input
              v-model.number="startRow"
              type="number"
              min="0"
              :max="rows - 1"
              class="control-input"
            />
          </label>
          <label class="control-label">
            <span>جهت اجرا:</span>
            <select
              v-model="direction"
              class="control-select"
            >
              <option value="forward">⬇️ از بالا به پایین</option>
              <option value="backward">⬆️ از پایین به بالا</option>
            </select>
          </label>
        </div>
      </div>

      <div class="control-group">
        <h3>🎮 کنترل‌ها</h3>
        <div class="navigation-controls">
          <button
            :disabled="currentStepIndex <= 0"
            class="nav-btn prev-btn"
            @click="previousStep"
          >
            ⬅️ مرحله قبل
          </button>
          <button
            :disabled="currentStepIndex >= totalSteps - 1"
            class="nav-btn next-btn"
            @click="nextStep"
          >
            مرحله بعد ➡️
          </button>
          <button
            class="nav-btn reset-btn"
            @click="resetToStart"
          >
            🔄 شروع مجدد
          </button>
        </div>
      </div>

      <div class="control-group">
        <h3>📊 اطلاعات</h3>
        <div class="info-display">
          <div class="info-item">
            <span class="info-label">مرحله فعلی:</span>
            <span class="info-value"
              >{{ currentStepIndex + 1 }} از {{ totalSteps }}</span
            >
          </div>
          <div class="info-item">
            <span class="info-label">ردیف فعلی:</span>
            <span class="info-value"
              >{{ currentRowIndex + 1 }} از {{ rows }}</span
            >
          </div>
          <div class="info-item">
            <span class="info-label">رنگ‌های مورد نیاز:</span>
            <span class="info-value">{{ currentRowColors.length }} رنگ</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Pattern Display -->
    <div class="pattern-container">
      <div class="pattern-header">
        <h3>🎨 الگوی دستبند</h3>
        <div class="pattern-info">
          <span>ابعاد: {{ rows }} × {{ cols }}</span>
        </div>
      </div>
      <!-- Current Row Instructions -->
      <div class="instructions-panel">
        <h4>📋 دستورالعمل ردیف {{ currentRowIndex + 1 }}</h4>
        <div class="row-instructions">
          <div class="color-instructions">
            <h5>رنگ‌های مورد نیاز:</h5>
            <div class="color-list">
              <div
                v-for="(color, index) in currentRowColors"
                :key="index"
                class="color-item"
              >
                <div
                  class="color-swatch"
                  :style="{ backgroundColor: color }"
                ></div>
                <span class="color-count">{{ getColorCount(color) }}</span>
              </div>
            </div>
          </div>
          <div class="pattern-instructions">
            <h5>ترتیب رنگ‌ها:</h5>
            <div class="pattern-sequence">
              <div
                v-for="(color, index) in currentRowPattern"
                :key="index"
                class="sequence-item"
                :style="{ backgroundColor: color }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Grid Display -->
      <div class="grid-wrapper">
        <div
          class="pattern-grid"
          :style="{ gridTemplateColumns: `repeat(${cols}, 12px)` }"
        >
          <div
            v-for="(cell, index) in gridCells"
            :key="index"
            class="grid-cell"
            :class="{
              'active-row': isInCurrentRow(index),
              'completed-row': isInCompletedRow(index),
              'upcoming-row': isInUpcomingRow(index),
            }"
            :style="{
              backgroundColor: cell.color,
              opacity: getCellOpacity(index),
            }"
            :title="`ردیف ${Math.floor(index / cols) + 1}, ستون ${(index % cols) + 1}: ${cell.color}`"
          ></div>
        </div>
      </div>
    </div>

    <!-- Keyboard Shortcuts Info -->
    <div class="shortcuts-info">
      <h4>⌨️ کلیدهای میانبر</h4>
      <div class="shortcuts-list">
        <div class="shortcut-item">
          <kbd>Enter</kbd> یا <kbd>Space</kbd> - مرحله بعد
        </div>
        <div class="shortcut-item"><kbd>←</kbd> - مرحله قبل</div>
        <div class="shortcut-item"><kbd>R</kbd> - شروع مجدد</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';

// Props
const props = defineProps({
  pattern: {
    type: Array,
    default: () => [],
  },
  rows: {
    type: Number,
    default: 16,
  },
  cols: {
    type: Number,
    default: 80,
  },
});

// Reactive data
const startRow = ref(0); // شروع از ردیف (ارتفاع)
const direction = ref('forward'); // forward: بالا به پایین، backward: پایین به بالا
const currentStepIndex = ref(0);

// Generate grid data from props pattern
const generateGridFromPattern = () => {
  if (!props.pattern || props.pattern.length === 0) {
    // Fallback to sample data if no pattern provided
    const colors = [
      '#ff6b6b',
      '#4ecdc4',
      '#45b7d1',
      '#96ceb4',
      '#feca57',
      '#ff9ff3',
      '#54a0ff',
      '#5f27cd',
    ];
    const grid = [];

    for (let row = 0; row < props.rows; row++) {
      for (let col = 0; col < props.cols; col++) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        grid.push({
          color: randomColor,
          row: row,
          col: col,
        });
      }
    }
    return grid;
  }

  // Convert 1D pattern array to 2D grid structure
  const grid = [];
  for (let row = 0; row < props.rows; row++) {
    for (let col = 0; col < props.cols; col++) {
      const index = row * props.cols + col;
      const color = props.pattern[index] || '#ffffff';
      grid.push({
        color: color,
        row: row,
        col: col,
      });
    }
  }
  return grid;
};

const gridCells = ref(generateGridFromPattern());

// Computed properties
const totalSteps = computed(() => props.rows); // مراحل بر اساس ردیف‌ها (ارتفاع)

const currentRowIndex = computed(() => {
  if (direction.value === 'forward') {
    return startRow.value + currentStepIndex.value;
  } else {
    return startRow.value - currentStepIndex.value;
  }
});

const currentRowColors = computed(() => {
  const colors = [];
  for (let col = 0; col < props.cols; col++) {
    const index = currentRowIndex.value * props.cols + col;
    const color = props.pattern[index] || '#ffffff';
    if (!colors.includes(color)) {
      colors.push(color);
    }
  }
  return colors;
});

const currentRowPattern = computed(() => {
  const pattern = [];
  for (let col = 0; col < props.cols; col++) {
    const index = currentRowIndex.value * props.cols + col;
    const color = props.pattern[index] || '#ffffff';
    pattern.push(color);
  }
  return pattern;
});

// Methods
const isInCurrentRow = (index) => {
  const row = Math.floor(index / props.cols);
  return row === currentRowIndex.value;
};

const isInCompletedRow = (index) => {
  const row = Math.floor(index / props.cols);
  return row == currentRowIndex.value;
};

const isInUpcomingRow = (index) => {
  const row = Math.floor(index / props.cols);
  if (direction.value === 'forward') {
    return row > currentRowIndex.value;
  } else {
    return row < currentRowIndex.value;
  }
};

const getCellOpacity = (index) => {
  if (isInCurrentRow(index)) {
    return 1; // Active row - full opacity
  } else if (isInCompletedRow(index)) {
    return 0.4; // Completed rows - slightly dimmed
  } else {
    return 0.2; // Upcoming rows - more dimmed
  }
};

const getColorCount = (color) => {
  let count = 0;
  for (let col = 0; col < props.cols; col++) {
    const index = currentRowIndex.value * props.cols + col;
    if (props.pattern[index] === color) {
      count++;
    }
  }
  return count;
};

const nextStep = () => {
  if (currentStepIndex.value < totalSteps.value - 1) {
    currentStepIndex.value++;
  }
};

const previousStep = () => {
  if (currentStepIndex.value > 0) {
    currentStepIndex.value--;
  }
};

const resetToStart = () => {
  currentStepIndex.value = 0;
};

// No need for goHome function in this context

// Keyboard event handlers
const handleKeydown = (event) => {
  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault();
      nextStep();
      break;
    case 'ArrowLeft':
      event.preventDefault();
      previousStep();
      break;
    case 'r':
    case 'R':
      event.preventDefault();
      resetToStart();
      break;
  }
};

// Lifecycle hooks
onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});

// Watch for direction changes to reset step index
watch(direction, () => {
  currentStepIndex.value = 0;
});

// Watch for start row changes to reset step index
watch(startRow, () => {
  currentStepIndex.value = 0;
});

// Watch for pattern changes to update grid
watch(
  () => props.pattern,
  () => {
    gridCells.value = generateGridFromPattern();
  },
  { deep: true },
);
</script>

<style scoped>
.working-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Vazirmatn', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  direction: rtl;
}

/* Navigation breadcrumb removed - not needed when embedded */

.page-header {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.page-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.page-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.controls-panel {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.control-group {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
}

.control-group h3 {
  margin: 0 0 15px 0;
  color: #333;
  font-size: 1.1rem;
  border-bottom: 2px solid #667eea;
  padding-bottom: 8px;
}

.start-controls {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.control-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
}

.control-input,
.control-select {
  padding: 8px 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  width: 120px;
  transition: border-color 0.3s ease;
}

.control-input:focus,
.control-select:focus {
  outline: none;
  border-color: #667eea;
}

.navigation-controls {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.nav-btn {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  min-width: 120px;
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.prev-btn {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  color: white;
}

.prev-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
}

.next-btn {
  background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
  color: white;
}

.next-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(78, 205, 196, 0.4);
}

.reset-btn {
  background: linear-gradient(135deg, #feca57 0%, #ff9ff3 100%);
  color: #333;
}

.reset-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(254, 202, 87, 0.4);
}

.info-display {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: #f8f9fa;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.info-label {
  font-weight: 500;
  color: #666;
}

.info-value {
  font-weight: bold;
  color: #333;
}

.pattern-container {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  margin-bottom: 30px;
  overflow: hidden;
}

.pattern-header {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 20px;
  border-bottom: 1px solid #dee2e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pattern-header h3 {
  margin: 0;
  color: #333;
  font-size: 1.3rem;
}

.pattern-info {
  background: #667eea;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.grid-wrapper {
  padding: 20px;
  display: flex;
  justify-content: center;
  background: #f8f9fa;
}

.pattern-grid {
  display: grid;
  gap: 1px;
  background: #dee2e6;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.grid-cell {
  width: 12px;
  height: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
}

.grid-cell:hover {
  transform: scale(1.2);
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.current-marker {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 8px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.instructions-panel {
  padding: 20px;
  background: white;
  border-top: 1px solid #dee2e6;
}

.instructions-panel h4 {
  margin: 0 0 15px 0;
  color: #333;
  font-size: 1.1rem;
  border-bottom: 1px solid #667eea;
  padding-bottom: 8px;
}

.row-instructions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.color-instructions h5,
.pattern-instructions h5 {
  margin: 0 0 10px 0;
  color: #666;
  font-size: 0.9rem;
}

.color-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.color-item {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f8f9fa;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.color-swatch {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.color-count {
  font-weight: bold;
  color: #333;
}

.pattern-sequence {
  display: flex;
  gap: 2px;
  flex-wrap: wrap;
  background: #f8f9fa;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.sequence-item {
  width: 16px;
  height: 16px;
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.shortcuts-info {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
}

.shortcuts-info h4 {
  margin: 0 0 15px 0;
  color: #333;
  font-size: 1.1rem;
  border-bottom: 1px solid #667eea;
  padding-bottom: 8px;
}

.shortcuts-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.shortcut-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: #f8f9fa;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

kbd {
  background: #333;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-family: monospace;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Responsive design */
@media (max-width: 768px) {
  .controls-panel {
    grid-template-columns: 1fr;
  }

  .row-instructions {
    grid-template-columns: 1fr;
  }

  .navigation-controls {
    flex-direction: column;
  }

  .nav-btn {
    min-width: auto;
  }

  .pattern-grid {
    max-width: 100%;
    overflow-x: auto;
  }
}
</style>
