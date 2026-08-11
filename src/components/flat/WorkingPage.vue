<template>
  <div class="working-page backdrop-filter-none">
    <!-- No navigation breadcrumb needed when embedded in HomeView -->

    <!-- Mobile Top Bar (hamburger for the sections above the pattern) -->
    <div class="mobile-top-bar">
      <button
        class="mobile-hamburger-btn"
        :class="{ active: isSettingsPanelOpen }"
        :aria-expanded="isSettingsPanelOpen"
        aria-label="نمایش تنظیمات و اطلاعات"
        @click="isSettingsPanelOpen = !isSettingsPanelOpen"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
      <span class="mobile-top-title">🧶 مراحل اجرا</span>
      <span class="mobile-step-badge">
        {{ currentStepIndex + 1 }}/{{ totalSteps }}
      </span>
    </div>

    <!-- Everything above the pattern collapses behind the mobile hamburger.
         On desktop this wrapper is inert and the layout is unchanged. -->
    <div
      class="collapsible-sections"
      :class="{ open: isSettingsPanelOpen }"
    >
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
                :max="maxStartIndex"
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

        <div class="control-group desktop-controls">
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
                >{{ currentRowIndex + 1 }} از {{ lineCount }}</span
              >
            </div>
            <div class="info-item">
              <span class="info-label">رنگ‌های مورد نیاز:</span>
              <span class="info-value">{{ currentRowColors.length }} رنگ</span>
            </div>
          </div>
        </div>

        <div class="control-group">
          <h3>🎨 مدیریت رنگ‌ها</h3>
          <div class="color-management">
            <div class="color-list-management">
              <h4>رنگ‌های استفاده شده در طرح:</h4>
              <div class="all-colors-list">
                <div
                  v-for="(color, index) in allUsedColors"
                  :key="color"
                  class="color-management-item"
                >
                  <div
                    class="color-swatch-large"
                    :style="{
                      backgroundColor: color.startsWith(
                        '/miyuki-beads-designer/beads/',
                      )
                        ? 'transparent'
                        : color,
                      backgroundImage: color.startsWith(
                        '/miyuki-beads-designer/beads/',
                      )
                        ? `url(${color})`
                        : 'none',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }"
                  ></div>
                  <input
                    v-model="colorNames[color]"
                    type="text"
                    :placeholder="`نام رنگ ${index + 1}`"
                    class="color-name-input"
                    @input="updateColorName(color, $event.target.value)"
                  />
                  <span class="color-count-badge"
                    >{{ getTotalColorCount(color) }} مهره</span
                  >
                  <span class="color-code">{{ color }}</span>
                </div>
              </div>
            </div>
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
                  :style="{
                    backgroundColor: color.startsWith(
                      '/miyuki-beads-designer/beads/',
                    )
                      ? 'transparent'
                      : color,
                    backgroundImage: color.startsWith(
                      '/miyuki-beads-designer/beads/',
                    )
                      ? `url(${color})`
                      : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }"
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
                :style="{
                  backgroundColor: color.startsWith(
                    '/miyuki-beads-designer/beads/',
                  )
                    ? 'transparent'
                    : color,
                  backgroundImage: color.startsWith(
                    '/miyuki-beads-designer/beads/',
                  )
                    ? `url(${color})`
                    : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }"
                :title="getColorDisplayName(color)"
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
              backgroundColor: cell.color.startsWith(
                '/miyuki-beads-designer/beads/',
              )
                ? 'transparent'
                : cell.color,
              backgroundImage: cell.color.startsWith(
                '/miyuki-beads-designer/beads/',
              )
                ? `url(${cell.color})`
                : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
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

    <!-- Mobile Fixed Navigation Controls -->
    <!-- Teleported to <body> so that position: fixed is resolved against the
         viewport. Any ancestor with backdrop-filter (e.g. .content-container)
         becomes a containing block for fixed descendants and would trap it. -->
    <Teleport to="body">
      <div class="mobile-navigation-fixed">
        <button
          :disabled="currentStepIndex <= 0"
          class="mobile-nav-btn prev-btn"
          @click="previousStep"
        >
          ⬅️ قبلی
        </button>
        <button
          class="mobile-nav-btn reset-btn"
          @click="resetToStart"
        >
          🔄 شروع
        </button>
        <button
          :disabled="currentStepIndex >= totalSteps - 1"
          class="mobile-nav-btn next-btn"
          @click="nextStep"
        >
          بعدی ➡️
        </button>
      </div>
    </Teleport>
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
const colorNames = ref({}); // Store color names
const isSettingsPanelOpen = ref(false); // Mobile-only: collapses the sections above the pattern

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

// Orientation from editor settings (vertical=true means step by rows; false => step by columns)
const isVertical = ref(true);

// Computed properties
const lineCount = computed(() => (isVertical.value ? props.rows : props.cols));
const maxStartIndex = computed(() => lineCount.value - 1);
const totalSteps = computed(() => lineCount.value); // مراحل بر اساس جهت فعال

const currentRowIndex = computed(() => {
  const base =
    direction.value === 'forward'
      ? startRow.value + currentStepIndex.value
      : startRow.value - currentStepIndex.value;
  return Math.max(0, Math.min(lineCount.value - 1, base));
});

const currentRowColors = computed(() => {
  const colors = [];
  if (isVertical.value) {
    for (let col = 0; col < props.cols; col++) {
      const index = currentRowIndex.value * props.cols + col;
      const color = props.pattern[index] || '#ffffff';
      if (!colors.includes(color)) {
        colors.push(color);
      }
    }
  } else {
    for (let row = 0; row < props.rows; row++) {
      const index = row * props.cols + currentRowIndex.value;
      const color = props.pattern[index] || '#ffffff';
      if (!colors.includes(color)) {
        colors.push(color);
      }
    }
  }
  return colors;
});

const currentRowPattern = computed(() => {
  const pattern = [];
  if (isVertical.value) {
    for (let col = 0; col < props.cols; col++) {
      const index = currentRowIndex.value * props.cols + col;
      const color = props.pattern[index] || '#ffffff';
      pattern.push(color);
    }
  } else {
    for (let row = 0; row < props.rows; row++) {
      const index = row * props.cols + currentRowIndex.value;
      const color = props.pattern[index] || '#ffffff';
      pattern.push(color);
    }
  }
  return pattern;
});

const allUsedColors = computed(() => {
  const colors = new Set();
  for (let i = 0; i < props.pattern.length; i++) {
    if (props.pattern[i]) {
      colors.add(props.pattern[i]);
    }
  }
  return Array.from(colors).sort();
});

// Methods
const isInCurrentRow = (index) => {
  const row = Math.floor(index / props.cols);
  const col = index % props.cols;
  return isVertical.value
    ? row === currentRowIndex.value
    : col === currentRowIndex.value;
};

const isInCompletedRow = (index) => {
  const row = Math.floor(index / props.cols);
  const col = index % props.cols;
  return isVertical.value
    ? row == currentRowIndex.value
    : col == currentRowIndex.value;
};

const isInUpcomingRow = (index) => {
  const row = Math.floor(index / props.cols);
  const col = index % props.cols;
  if (direction.value === 'forward') {
    return isVertical.value
      ? row > currentRowIndex.value
      : col > currentRowIndex.value;
  } else {
    return isVertical.value
      ? row < currentRowIndex.value
      : col < currentRowIndex.value;
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
  if (isVertical.value) {
    for (let col = 0; col < props.cols; col++) {
      const index = currentRowIndex.value * props.cols + col;
      if (props.pattern[index] === color) {
        count++;
      }
    }
  } else {
    for (let row = 0; row < props.rows; row++) {
      const index = row * props.cols + currentRowIndex.value;
      if (props.pattern[index] === color) {
        count++;
      }
    }
  }
  return count;
};

const getTotalColorCount = (color) => {
  let count = 0;
  for (let i = 0; i < props.pattern.length; i++) {
    if (props.pattern[i] === color) {
      count++;
    }
  }
  return count;
};

const updateColorName = (color, name) => {
  colorNames.value[color] = name;
};

const getColorDisplayName = (color) => {
  const name = colorNames.value[color];
  if (color.startsWith('/miyuki-beads-designer/beads/')) {
    const imageName = color.split('/').pop().replace('.jpg', '');
    return name ? `${name} (${imageName})` : imageName;
  }
  return name ? `${name} (${color})` : color;
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
  try {
    const saved = localStorage.getItem('gridEditor_isVertical');
    isVertical.value = saved !== null ? JSON.parse(saved) : true;
  } catch (error) {
    console.error(
      'Failed to read gridEditor_isVertical from localStorage',
      error,
    );
    isVertical.value = true;
  }
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

// Watch for orientation changes from editor settings
watch(isVertical, () => {
  currentStepIndex.value = 0;
  if (startRow.value > maxStartIndex.value) {
    startRow.value = 0;
  }
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

/* Mobile hamburger bar — hidden on desktop, where .collapsible-sections is
   a plain unstyled wrapper and the original layout is untouched. */
.mobile-top-bar {
  display: none;
}

.page-header {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
  background: var(--accent);
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
  border: 1px solid var(--border);
}

.control-group h3 {
  margin: 0 0 15px 0;
  color: var(--text);
  font-size: 1.1rem;
  border-bottom: 2px solid var(--accent);
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
  border: 2px solid var(--border-strong);
  border-radius: 8px;
  font-size: 14px;
  width: 120px;
  transition: border-color 0.3s ease;
}

.control-input:focus,
.control-select:focus {
  outline: none;
  border-color: var(--accent);
}

.navigation-controls {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

/* Stepping through rows is not destructive, so only "next" — the action the
   user repeats — carries the accent. Back and restart stay neutral. */
.nav-btn {
  padding: 12px 20px;
  border: 1px solid var(--border-strong);
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

.prev-btn,
.reset-btn {
  background: var(--surface-muted);
  color: var(--text);
}

.prev-btn:hover:not(:disabled),
.reset-btn:hover:not(:disabled) {
  background: var(--surface-sunken);
  border-color: var(--accent);
  color: var(--accent);
}

.next-btn {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}

.next-btn:hover:not(:disabled) {
  background: var(--accent-hover);
  border-color: var(--accent-hover);
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
  background: var(--surface-muted);
  border-radius: 6px;
  border: 1px solid var(--border);
}

.info-label {
  font-weight: 500;
  color: var(--text-muted);
}

.info-value {
  font-weight: bold;
  color: var(--text);
}

.pattern-container {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border);
  margin-bottom: 30px;
  overflow: hidden;
}

.pattern-header {
  background: var(--surface-muted);
  padding: 20px;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pattern-header h3 {
  margin: 0;
  color: var(--text);
  font-size: 1.3rem;
}

.pattern-info {
  background: var(--accent);
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
  background: var(--surface-muted);
}

.pattern-grid {
  display: grid;
  gap: 1px;
  background: var(--border);
  border: 2px solid var(--border);
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
  border-top: 1px solid var(--border);
}

.instructions-panel h4 {
  margin: 0 0 15px 0;
  color: var(--text);
  font-size: 1.1rem;
  border-bottom: 1px solid var(--accent);
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
  color: var(--text-muted);
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
  background: var(--surface-muted);
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid var(--border);
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
  color: var(--text);
}

.pattern-sequence {
  display: flex;
  gap: 2px;
  flex-wrap: wrap;
  background: var(--surface-muted);
  padding: 10px;
  border-radius: 6px;
  border: 1px solid var(--border);
}

.sequence-item {
  width: 16px;
  height: 16px;
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.sequence-item:hover {
  transform: scale(1.1);
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* Color Management Styles */
.color-management {
  margin-top: 10px;
}

.color-list-management h4 {
  margin: 0 0 15px 0;
  color: var(--text);
  font-size: 1rem;
  border-bottom: 1px solid var(--accent);
  padding-bottom: 8px;
}

.all-colors-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 300px;
  overflow-y: auto;
  padding: 5px;
}

.color-management-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--surface-muted);
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.color-management-item:hover {
  background: var(--border);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.color-swatch-large {
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: 2px solid #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}

.color-name-input {
  flex: 1;
  padding: 8px 12px;
  border: 2px solid var(--border-strong);
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.3s ease;
  background: white;
}

.color-name-input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.color-count-badge {
  font-weight: bold;
  font-size: 14px;
  color: var(--accent);
  background: var(--accent-soft);
  padding: 6px 12px;
  border-radius: 6px;
  flex-shrink: 0;
  white-space: nowrap;
  border: 1px solid var(--accent);
}

.color-code {
  font-family: monospace;
  font-size: 12px;
  color: var(--text-muted);
  background: var(--border);
  padding: 4px 8px;
  border-radius: 4px;
  flex-shrink: 0;
}

.shortcuts-info {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border);
}

.shortcuts-info h4 {
  margin: 0 0 15px 0;
  color: var(--text);
  font-size: 1.1rem;
  border-bottom: 1px solid var(--accent);
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
  background: var(--surface-muted);
  border-radius: 6px;
  border: 1px solid var(--border);
}

kbd {
  background: var(--text);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-family: monospace;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.mobile-navigation-fixed {
  display: none;
}

/* Responsive design */
@media (max-width: 768px) {
  .control-group.desktop-controls {
    display: none;
  }

  /* --- Mobile hamburger bar --- */
  .mobile-top-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    margin-bottom: 12px;
    border-radius: 10px;
    background: var(--accent);
    color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .mobile-hamburger-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    padding: 0;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .mobile-hamburger-btn.active {
    background: rgba(255, 255, 255, 0.4);
  }

  .hamburger-line {
    width: 16px;
    height: 2px;
    border-radius: 1px;
    background: white;
    transition: all 0.3s ease;
  }

  .mobile-hamburger-btn.active .hamburger-line:nth-child(1) {
    transform: rotate(45deg) translate(4px, 4px);
  }

  .mobile-hamburger-btn.active .hamburger-line:nth-child(2) {
    opacity: 0;
  }

  .mobile-hamburger-btn.active .hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(4px, -4px);
  }

  .mobile-top-title {
    flex: 1;
    font-size: 0.95rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mobile-step-badge {
    flex-shrink: 0;
    padding: 4px 10px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.25);
    font-size: 0.8rem;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }

  /* --- Collapsible sections above the pattern --- */
  .collapsible-sections {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }

  .collapsible-sections.open {
    /* Large enough for the tallest content; the inner color list scrolls. */
    max-height: 1200px;
  }

  /* --- Compacted content inside the panel --- */
  .page-header {
    margin-bottom: 12px;
    padding: 12px;
    border-radius: 10px;
  }

  .page-title {
    font-size: 1.15rem;
    margin-bottom: 6px;
  }

  .page-subtitle {
    font-size: 0.8rem;
    line-height: 1.5;
  }

  .controls-panel {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-bottom: 12px;
  }

  .control-group {
    padding: 12px;
    border-radius: 10px;
  }

  .control-group h3 {
    margin-bottom: 10px;
    font-size: 1rem;
  }

  /* Stack label above field so long Persian labels don't squeeze the input */
  .control-label {
    flex-direction: column;
    align-items: stretch;
    gap: 6px;
  }

  .control-input,
  .control-select {
    width: 100%;
    /* 16px keeps iOS Safari from zooming in on focus */
    font-size: 16px;
  }

  .info-item {
    font-size: 0.85rem;
  }

  .all-colors-list {
    max-height: 220px;
  }

  /* Swatch + name on the first line, badge + code wrap to the second */
  .color-management-item {
    flex-wrap: wrap;
    gap: 8px;
    padding: 10px;
  }

  .color-name-input {
    flex: 1 1 120px;
    min-width: 0;
    font-size: 16px;
  }

  .color-count-badge {
    font-size: 12px;
    padding: 4px 8px;
  }

  .color-code {
    flex: 1 1 auto;
    min-width: 0;
    font-size: 11px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* No physical keyboard on mobile, so the shortcut legend is dead weight */
  .shortcuts-info {
    display: none;
  }

  .mobile-navigation-fixed {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--surface);
    border-top: 1px solid var(--border);
    padding: 12px 16px;
    padding-bottom: calc(12px + env(safe-area-inset-bottom));
    z-index: 9999;
    justify-content: space-between;
    gap: 8px;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  }

  .mobile-nav-btn {
    flex: 1;
    padding: 8px 12px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    white-space: nowrap;
  }

  .mobile-nav-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .mobile-nav-btn.prev-btn,
  .mobile-nav-btn.reset-btn {
    background: var(--surface-muted);
    border: 1px solid var(--border-strong);
    color: var(--text);
  }

  .mobile-nav-btn.next-btn {
    background: var(--accent);
    border: 1px solid var(--accent);
    color: #fff;
  }

  .working-page {
    padding: 10px;
    padding-bottom: 80px; /* Space for fixed bottom bar */
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
