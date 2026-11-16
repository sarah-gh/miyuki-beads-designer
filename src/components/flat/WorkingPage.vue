<template>
  <div class="working-page step-workspace backdrop-filter-none">
    <!-- No navigation breadcrumb needed when embedded in HomeView -->

    <!-- Mobile Top Bar (hamburger for the sections above the pattern) -->
    <div class="mobile-top-bar">
      <button
        class="mobile-hamburger-btn"
        :class="{ active: isSettingsPanelOpen }"
        :aria-expanded="isSettingsPanelOpen"
        aria-label="Show settings and info"
        @click="isSettingsPanelOpen = !isSettingsPanelOpen"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
      <span class="mobile-top-title">🧶 Step-by-step</span>
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
        <h1 class="page-title">
          {{ isPeyote ? 'Peyote Step-by-step' : 'Flat Grid Step-by-step' }}
        </h1>
        <p class="page-subtitle">
          {{
            isPeyote
              ? 'Follow the staggered bead passes in stitching order.'
              : 'Follow the bracelet one line at a time.'
          }}
        </p>
      </div>

      <!-- Controls Panel -->
      <div class="controls-panel">
        <div class="step-settings">
          <div class="control-group">
            <h3>Settings</h3>
            <div class="start-controls">
              <label class="control-label">
                <span>{{
                  isPeyote
                    ? 'Start pass (0-based):'
                    : stepsByRow
                      ? 'Start row (0-based):'
                      : 'Start column (0-based):'
                }}</span>
                <input
                  v-model.number="startRow"
                  type="number"
                  min="0"
                  :max="maxStartIndex"
                  class="control-input"
                />
              </label>
              <label class="control-label">
                <span>Direction:</span>
                <select
                  v-model="direction"
                  class="control-select"
                >
                  <option value="forward">
                    {{ !stepsByRow ? 'Left to right' : 'Top to bottom' }}
                  </option>
                  <option value="backward">
                    {{ !stepsByRow ? 'Right to left' : 'Bottom to top' }}
                  </option>
                </select>
              </label>
            </div>
          </div>

          <div class="control-group desktop-controls">
            <h3>Navigation</h3>
            <div class="navigation-controls">
              <button
                :disabled="currentStepIndex <= 0"
                class="nav-btn prev-btn"
                @click="previousStep"
              >
                ⬅️ Previous step
              </button>
              <button
                :disabled="currentStepIndex >= totalSteps - 1"
                class="nav-btn next-btn"
                @click="nextStep"
              >
                Next step ➡️
              </button>
              <button
                class="nav-btn reset-btn"
                @click="resetToStart"
              >
                🔄 Start over
              </button>
            </div>
          </div>

          <div class="control-group step-progress">
            <h3>Progress</h3>
            <progress
              aria-label="Stitching progress"
              :value="totalSteps ? currentStepIndex + 1 : 0"
              :max="totalSteps || 1"
            ></progress>
          </div>
        </div>
        <div class="control-group step-palette">
          <h3>Pattern colours</h3>
          <div class="color-management">
            <div class="color-list-management">
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
                        : beadSwatch(color),
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
                    :placeholder="`Colour name ${index + 1}`"
                    class="color-name-input"
                    :aria-label="`Colour name ${index + 1}`"
                    @input="updateColorName(color, $event.target.value)"
                  />
                  <span class="color-count-badge"
                    >{{ getTotalColorCount(color) }} beads</span
                  >
                  <span class="color-code">{{
                    catalogLabels.get(color) ?? color
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pattern Display -->
    <div class="pattern-container">
      <div class="instructions-panel">
        <div
          class="step-heading"
          aria-live="polite"
        >
          <h2>
            {{ isPeyote ? 'Pass' : stepsByRow ? 'Row' : 'Column' }}
            {{ totalSteps ? currentRowIndex + 1 : 0 }}
          </h2>
          <span
            >{{ totalSteps ? currentStepIndex + 1 : 0 }} of
            {{ totalSteps }}</span
          >
        </div>
        <div class="row-instructions">
          <div class="color-instructions">
            <h5>Colours needed:</h5>
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
                      : beadSwatch(color),
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
                <span class="color-label" :title="getColorName(color)">{{
                  getColorName(color)
                }}</span>
              </div>
            </div>
          </div>
          <div class="pattern-instructions">
            <h5>Colour order:</h5>
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
                    : beadSwatch(color),
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
      <div class="step-overview">
        <h3>Pattern overview</h3>
        <span>{{ rows }} × {{ cols }} · {{ pattern.length }} beads</span>
      </div>
      <div
        ref="patternViewport"
        class="grid-wrapper"
      >
        <div
          class="pattern-grid"
          :class="{ 'peyote-pattern-grid': isPeyote }"
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
                : beadSwatch(cell.color),
              backgroundImage: cell.color.startsWith(
                '/miyuki-beads-designer/beads/',
              )
                ? `url(${cell.color})`
                : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: getCellOpacity(index),
              left:
                isPeyote && !stepsByRow && cell.row % 2 ? '6.5px' : undefined,
              top: isPeyote && stepsByRow && cell.col % 2 ? '6.5px' : undefined,
            }"
            :title="`Row ${Math.floor(index / cols) + 1}, column ${(index % cols) + 1}: ${cell.color}`"
          ></div>
        </div>
      </div>
    </div>

    <!-- Keyboard Shortcuts Info -->
    <div class="shortcuts-info">
      <h4>⌨️ Keyboard shortcuts</h4>
      <div class="shortcuts-list">
        <div class="shortcut-item">
          <kbd>Enter</kbd> or <kbd>Space</kbd> - next step
        </div>
        <div class="shortcut-item"><kbd>←</kbd> - previous step</div>
        <div class="shortcut-item"><kbd>R</kbd> - start over</div>
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
          ⬅️ Previous
        </button>
        <button
          class="mobile-nav-btn reset-btn"
          @click="resetToStart"
        >
          🔄 Restart
        </button>
        <button
          :disabled="currentStepIndex >= totalSteps - 1"
          class="mobile-nav-btn next-btn"
          @click="nextStep"
        >
          Next ➡️
        </button>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue';

import {
  beadSwatch,
  delicaEntry,
  delicaCatalog,
} from '@/components/peyote/delicaCatalog.js';

// Props
const props = defineProps({
  peyoteOrientation: { type: String, default: null },
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

function rgb(hex) {
  if (!/^#[0-9a-f]{6}$/i.test(hex)) return null;
  const value = Number.parseInt(hex.slice(1), 16);
  return [value >> 16, (value >> 8) & 255, value & 255];
}

const catalogColours = Object.values(delicaCatalog)
  .map((entry) => ({ entry, channels: rgb(entry.color) }))
  .filter(({ channels }) => channels);

function catalogLabel(color) {
  const exact = delicaEntry(color);
  if (exact) return `${exact.code} · ${exact.name}`;
  const hex = /^#[0-9a-f]{3}$/i.test(color)
    ? '#' + [...color.slice(1)].map((digit) => digit.repeat(2)).join('')
    : color;
  const channels = rgb(hex);
  if (!channels) return color;
  const [r, g, b] = channels;
  let closest;
  let bestDistance = Infinity;
  for (const {
    entry,
    channels: [red, green, blue],
  } of catalogColours) {
    const distance =
      2 * (r - red) ** 2 + 4 * (g - green) ** 2 + 3 * (b - blue) ** 2;
    if (distance < bestDistance) {
      closest = entry;
      bestDistance = distance;
    }
  }
  return closest ? `≈ ${closest.code} · ${closest.name}` : color;
}

// Reactive data
const startRow = ref(0); // row to start from
const direction = ref('forward'); // forward: top to bottom, backward: bottom to top
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

const isPeyote = computed(() => props.peyoteOrientation !== null);
const stepsByRow = computed(() =>
  isPeyote.value ? props.peyoteOrientation === 'vertical' : isVertical.value,
);
const acrossCount = computed(() =>
  stepsByRow.value ? props.cols : props.rows,
);
const lineCount = computed(() => {
  const length = stepsByRow.value ? props.rows : props.cols;
  return isPeyote.value && acrossCount.value > 1 ? length * 2 : length;
});
const maxStartIndex = computed(() => Math.max(0, lineCount.value - 1));
const totalSteps = computed(() => {
  if (!isPeyote.value) return lineCount.value;
  return direction.value === 'forward'
    ? Math.max(0, lineCount.value - startRow.value)
    : Math.min(lineCount.value, startRow.value + 1);
});

const currentRowIndex = computed(() => {
  const base =
    direction.value === 'forward'
      ? startRow.value + currentStepIndex.value
      : startRow.value - currentStepIndex.value;
  return Math.max(0, Math.min(lineCount.value - 1, base));
});

const hasStaggeredPasses = computed(
  () => isPeyote.value && acrossCount.value > 1,
);

function passForCell(index) {
  const row = Math.floor(index / props.cols);
  const col = index % props.cols;
  const along = stepsByRow.value ? row : col;
  const across = stepsByRow.value ? col : row;
  return hasStaggeredPasses.value ? along * 2 + (across % 2) : along;
}

const currentRowPattern = computed(() => {
  if (!lineCount.value) return [];
  const pass = currentRowIndex.value;
  const along = hasStaggeredPasses.value ? Math.floor(pass / 2) : pass;
  const stride = hasStaggeredPasses.value ? 2 : 1;
  const first = hasStaggeredPasses.value ? pass % 2 : 0;
  const pattern = [];
  for (let across = first; across < acrossCount.value; across += stride) {
    const index = stepsByRow.value
      ? along * props.cols + across
      : across * props.cols + along;
    pattern.push(props.pattern[index] || '#ffffff');
  }
  return pattern;
});

const patternViewport = ref(null);

watch(
  currentRowIndex,
  async () => {
    await nextTick();
    const viewport = patternViewport.value;
    const bead = viewport?.querySelector('.active-row');
    if (!bead) return;
    const bounds = viewport.getBoundingClientRect();
    const target = bead.getBoundingClientRect();
    if (
      stepsByRow.value &&
      (target.top < bounds.top || target.bottom > bounds.bottom)
    ) {
      viewport.scrollTop += target.top - bounds.top - viewport.clientHeight / 2;
    } else if (
      !stepsByRow.value &&
      (target.left < bounds.left || target.right > bounds.right)
    ) {
      viewport.scrollLeft +=
        target.left - bounds.left - viewport.clientWidth / 2;
    }
  },
  { immediate: true },
);

const currentRowColors = computed(() => [...new Set(currentRowPattern.value)]);

const allUsedColors = computed(() => {
  const colors = new Set();
  for (let i = 0; i < props.pattern.length; i++) {
    if (props.pattern[i]) {
      colors.add(props.pattern[i]);
    }
  }
  return Array.from(colors).sort();
});

const catalogLabels = computed(
  () =>
    new Map(allUsedColors.value.map((color) => [color, catalogLabel(color)])),
);

// Methods
const isInCurrentRow = (index) => passForCell(index) === currentRowIndex.value;

const isInUpcomingRow = (index) => {
  const pass = passForCell(index);
  return direction.value === 'forward'
    ? pass > currentRowIndex.value
    : pass < currentRowIndex.value;
};

const isInCompletedRow = (index) =>
  isPeyote.value
    ? !isInCurrentRow(index) && !isInUpcomingRow(index)
    : isInCurrentRow(index);

const getCellOpacity = (index) => {
  if (isInCurrentRow(index)) {
    return 1; // Active row - full opacity
  } else if (isInCompletedRow(index)) {
    return 0.4; // Completed rows - slightly dimmed
  } else {
    return 0.2; // Upcoming rows - more dimmed
  }
};

const getColorCount = (color) =>
  currentRowPattern.value.filter((value) => value === color).length;

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

// Short label for the current-row legend: the user's own name if set,
// otherwise the Delica catalogue label (exact or nearest match).
const getColorName = (color) => {
  const custom = colorNames.value[color]?.trim();
  if (custom) return custom;
  if (color.startsWith('/miyuki-beads-designer/beads/')) {
    return color.split('/').pop().replace(/\.\w+$/, '');
  }
  return catalogLabels.value.get(color) ?? catalogLabel(color);
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
  if (isPeyote.value) {
    startRow.value = direction.value === 'forward' ? 0 : maxStartIndex.value;
  }
  currentStepIndex.value = 0;
});

// Watch for start row changes to reset step index
watch(startRow, () => {
  if (isPeyote.value) {
    startRow.value = Math.max(
      0,
      Math.min(maxStartIndex.value, Math.trunc(Number(startRow.value) || 0)),
    );
  }
  currentStepIndex.value = 0;
});

// Watch for orientation changes from editor settings
watch([stepsByRow, maxStartIndex], () => {
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
  font-family: var(--font-sans);
  direction: ltr;
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

.pattern-container {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border);
  margin-bottom: 30px;
  overflow: hidden;
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

.peyote-pattern-grid {
  background: var(--surface);
}

.peyote-pattern-grid .grid-cell {
  border-radius: 3px;
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

.color-label {
  font-size: 0.8em;
  color: var(--text);
  opacity: 0.75;
  max-width: 12ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

@media (min-width: 769px) {
  .step-workspace .collapsible-sections,
  .step-workspace .controls-panel {
    display: contents;
  }

  .step-workspace {
    display: grid;
    grid-template-columns: minmax(180px, 1fr) minmax(0, 2.5fr) minmax(
        180px,
        1fr
      );
    align-items: start;
    gap: 16px;
    padding: clamp(16px, 2vw, 28px);
  }

  .step-workspace .step-settings {
    display: block;
    grid-column: 1;
    grid-row: 2;
  }

  .step-workspace .pattern-container {
    grid-column: 2;
    grid-row: 2;
  }

  .step-workspace .step-palette {
    grid-column: 3;
    grid-row: 2;
  }

  .step-workspace .page-header,
  .step-workspace .shortcuts-info {
    grid-column: 1 / -1;
  }
}

.step-workspace {
  background: var(--bg);
}

.step-workspace .page-header {
  margin: 0;
  padding: 22px;
  border: 1px solid var(--border);
  background: var(--surface-muted);
  color: var(--text);
  text-align: start;
  box-shadow: none;
}

.step-workspace .page-title {
  color: var(--text);
  font-size: clamp(1.35rem, 2.2vw, 2rem);
  text-shadow: none;
}

.step-workspace .page-subtitle {
  color: var(--text-muted);
}

.step-workspace
  :is(.step-settings, .step-palette, .pattern-container, .shortcuts-info) {
  min-width: 0;
  margin: 0;
  box-shadow: none;
}

.step-workspace :is(.step-settings, .step-palette, .pattern-container) {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 16px;
}

.step-workspace .step-settings .control-group {
  padding: 0;
  border: 0;
  background: transparent;
  box-shadow: none;
}

.step-workspace .step-settings .control-group + .control-group {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  border-radius: 0;
}

.step-progress progress {
  width: 100%;
  height: 8px;
  accent-color: var(--accent);
}

.step-workspace .instructions-panel {
  padding: 0;
  background: transparent;
  border: 0;
}

.step-heading,
.step-overview {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--text);
}

.step-heading {
  margin-bottom: 12px;
}

.step-heading h2,
.step-overview h3 {
  font-weight: 800;
}

.step-heading span,
.step-overview span {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.step-workspace .row-instructions {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 8px;
}

.step-workspace :is(.color-instructions, .pattern-instructions) {
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface-muted);
}

.step-workspace .pattern-sequence {
  justify-content: flex-start;
  flex-wrap: wrap;
}

.step-workspace .grid-wrapper {
  justify-content: safe center;
  max-height: min(55vh, 460px);
  overflow: auto;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--bg);
}

.step-workspace .pattern-grid {
  flex: none;
  width: max-content;
  margin: 0;
  border: 0;
  box-shadow: none;
  background: transparent;
}

.step-workspace .grid-cell.active-row {
  outline: 1px solid var(--accent);
  outline-offset: -1px;
}

.step-workspace .all-colors-list {
  grid-template-columns: minmax(0, 1fr);
}

.step-workspace .control-label {
  flex-wrap: wrap;
  gap: 6px;
}

.step-workspace .control-select {
  max-width: 100%;
}

.step-workspace .nav-btn {
  flex: 1 1 auto;
  padding: 8px 10px;
}

.step-workspace .reset-btn {
  flex-basis: 100%;
}

.step-workspace .color-management-item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 6px;
  padding: 6px;
}

.step-workspace .color-name-input {
  min-width: 0;
  width: 100%;
  padding: 5px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
}

.step-workspace .color-code {
  grid-column: 2 / -1;
  overflow-wrap: anywhere;
}

.step-workspace .color-count-badge {
  white-space: nowrap;
}

@media (min-width: 769px) and (max-width: 1050px) {
  .step-workspace {
    grid-template-columns: minmax(190px, 1fr) minmax(0, 2fr);
  }

  .step-workspace .step-palette {
    grid-column: 1;
    grid-row: 3;
  }

  .step-workspace .pattern-container {
    grid-row: 2 / 4;
  }
}

@media (max-width: 768px) {
  .step-workspace .step-settings {
    display: block;
  }

  .step-workspace .grid-wrapper {
    max-height: 44dvh;
  }

  .step-workspace .step-palette {
    margin-top: 8px;
  }
}
</style>
