<template>
  <div class="home-container">
    <!-- Desktop Header -->
    <header class="app-header max-md:hidden flex items-start justify-between mb-3!">
      <div class="header-content">
        <div class="header-actions mt-3! flex items-center gap-2">
          <button
            class="theme-btn px-4! py-1! text-[14px]"
            @click="toggleGridEditor"
          >
            ویرایشگر شبکه
          </button>
          <button
            class="theme-btn px-4! py-1! text-[14px]"
            @click="toggleMiyukiBeads"
          >
            نمایش مهره‌ها
          </button>
          <button
            class="theme-btn px-4! py-1! text-[14px]"
            @click="toggleBraceletPreview"
          >
            پیش‌نمایش دستبند
          </button>
          <button
            class="theme-btn-primary px-4! py-1! text-[14px]"
            @click="startWorking"
          >
            مراحل اجرا
          </button>
        </div>
      </div>
      <div class="stats-section">
        <div class="stat-item">
          <div class="stat-number">{{ rows }}</div>
          <div class="stat-label">ردیف</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{{ cols }}</div>
          <div class="stat-label">ستون</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{{ pattern.length }}</div>
          <div class="stat-label">مهره</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{{ (pattern.length / 190).toFixed(2) }}</div>
          <div class="stat-label">گرم</div>
        </div>
      </div>
    </header>

    <!-- Mobile Header Panel -->
    <div 
      class="mobile-header-panel md:hidden"
      :class="{ 'open': props.isMobileHeaderOpen }"
    >
      <div class="mobile-header-content">
        <!-- Mobile Action Buttons -->
        <div class="mobile-actions">
          <button
            class="mobile-action-btn"
            @click="toggleGridEditor"
          >
            ویرایشگر شبکه
          </button>
          <button
            class="mobile-action-btn"
            @click="toggleMiyukiBeads"
          >
            نمایش مهره‌ها
          </button>
          <button
            class="mobile-action-btn"
            @click="toggleBraceletPreview"
          >
            پیش‌نمایش دستبند
          </button>
          <button
            class="mobile-action-btn mobile-action-btn-primary"
            @click="startWorking"
          >
            مراحل اجرا
          </button>
        </div>
        
        <!-- Mobile Stats -->
        <div class="mobile-stats">
          <div class="mobile-stat-item">
            <div class="mobile-stat-number">{{ rows }}</div>
            <div class="mobile-stat-label">ردیف</div>
          </div>
          <div class="mobile-stat-item">
            <div class="mobile-stat-number">{{ cols }}</div>
            <div class="mobile-stat-label">ستون</div>
          </div>
          <div class="mobile-stat-item">
            <div class="mobile-stat-number">{{ pattern.length }}</div>
            <div class="mobile-stat-label">مهره</div>
          </div>
          <div class="mobile-stat-item">
            <div class="mobile-stat-number">{{ (pattern.length / 190).toFixed(2) }}</div>
            <div class="mobile-stat-label">گرم</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Stats -->

    <!-- Content Area -->
    <div class="content-container">
      <GridEditor
        v-if="isGridEditorVisible"
        class="content-component"
        @update-grid="handleUpdateGrid"
      />
      <MiyukiBeads
        v-if="isMiyukiBeadsVisible"
        :pattern="pattern"
        :rows="rows"
        :cols="cols"
        class="content-component"
      />
      <BraceletPreview
        v-if="isBraceletPreviewVisible"
        :pattern="pattern"
        :rows="rows"
        :cols="cols"
        class="content-component"
      />
      <WorkingPage
        v-if="isWorking"
        :pattern="pattern"
        :rows="rows"
        :cols="cols"
        class="content-component"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import GridEditor from '@/components/flat/GridEditor.vue';
import MiyukiBeads from '@/components/flat/MiyukiBeads.vue';
import BraceletPreview from '@/components/flat/BraceletPreview.vue';
import WorkingPage from '@/components/flat/WorkingPage.vue';

// Props
const props = defineProps({
  isMobileHeaderOpen: {
    type: Boolean,
    default: false
  }
});

// The hamburger state lives in App.vue, so ask it to close the panel after
// an action runs. On desktop the panel is already closed and this is a no-op.
const emit = defineEmits(['close-mobile-header']);

const rows = ref(16);
const cols = ref(80);
const pattern = ref(Array(16 * 80).fill('#ffffff'));
const isGridEditorVisible = ref(true);
const isMiyukiBeadsVisible = ref(false);
const isBraceletPreviewVisible = ref(false);
const isWorking = ref(false);

function toggleGridEditor() {
  isGridEditorVisible.value = true;
  isMiyukiBeadsVisible.value = false;
  isBraceletPreviewVisible.value = false;
  isWorking.value = false;
  emit('close-mobile-header');
}

function toggleMiyukiBeads() {
  isMiyukiBeadsVisible.value = true;
  isGridEditorVisible.value = false;
  isBraceletPreviewVisible.value = false;
  isWorking.value = false;
  emit('close-mobile-header');
}

function toggleBraceletPreview() {
  isBraceletPreviewVisible.value = true;
  isMiyukiBeadsVisible.value = false;
  isGridEditorVisible.value = false;
  isWorking.value = false;
  emit('close-mobile-header');
}

function startWorking() {
  isWorking.value = true;
  isGridEditorVisible.value = false;
  isMiyukiBeadsVisible.value = false;
  isBraceletPreviewVisible.value = false;
  emit('close-mobile-header');
}

function handleUpdateGrid(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) {
    pattern.value = [];
    rows.value = 0;
    cols.value = 0;
    return;
  }
  rows.value = matrix.length;
  cols.value = Array.isArray(matrix[0]) ? matrix[0].length : 0;
  // flatten 2D matrix to 1D array expected by MiyukiBeads
  pattern.value = matrix.flat();
}
</script>

<style scoped>
.home-container {
  min-height: calc(100vh - 78px);
  background: var(--bg);
  padding: 20px;
}

@media (max-width: 768px) {
  .home-container {
    min-height: auto;
    max-height: calc(100vh - 58px);
    overflow-y: auto;
  }
}

/* Stats Section */
.stats-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background: var(--surface);
  border-radius: 12px;
  padding: 10px;
  border: 1px solid var(--border);
  min-width: 100px;
}

.stat-number {
  font-size: .8rem;
  font-weight: bold;
  color: var(--text);
  margin-bottom: 5px;
}

.stat-label {
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* Content Container */
.content-container {
  background: var(--surface);
  /* Load-bearing, not decorative: backdrop-filter makes this element the
     containing block for the position:fixed panels the editors render
     inside it. Removing it lets those panels escape to the viewport and
     cover the app header. */
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid var(--border);
  overflow: hidden;
  min-height: calc(100vh - 160px);
}

.content-component {
  min-height: 500px;
}

@media (max-width: 768px) {
  .content-container {
    min-height: calc(100vh - 110px);
    max-height: auto;
    overflow-y: auto;
  }
}

/* Animations */
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 1rem;
  }

  .hero-subtitle {
    font-size: 0.8rem;
  }

  .cards-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .stats-section {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .hero-section {
    padding: 20px 10px;
  }
}

/* Mobile Header Panel */
.mobile-header-panel {
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  box-shadow: 0 6px 16px rgba(41, 37, 36, 0.08);
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 999;
  max-height: 0;
  overflow: hidden;
}

.mobile-header-panel.open {
  transform: translateY(0);
  max-height: 300px;
}

.mobile-header-content {
  padding: 15px 20px;
}

.mobile-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 15px;
}

.mobile-action-btn {
  padding: 10px 15px;
  border-radius: 8px;
  background: var(--surface-muted);
  color: var(--text);
  font-size: 14px;
  font-weight: 500;
  border: 1px solid var(--border-strong);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.mobile-action-btn-primary {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}

.mobile-action-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(41, 37, 36, 0.15);
}

.mobile-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.mobile-stat-item {
  background: var(--surface-muted);
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  border: 1px solid var(--border);
}

.mobile-stat-number {
  font-size: 16px;
  font-weight: bold;
  color: var(--text);
  margin-bottom: 4px;
}

.mobile-stat-label {
  color: var(--text-muted);
  font-size: 12px;
}

@media (max-width: 480px) {
  .home-container {
    padding: 10px;
  }

  .nav-card {
    padding: 20px;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .mobile-header-panel {
    top: 52px;
  }

  .mobile-stats {
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }

  .mobile-stat-item {
    padding: 8px;
  }

  .mobile-stat-number {
    font-size: 14px;
  }

  .mobile-stat-label {
    font-size: 10px;
  }
}
</style>
