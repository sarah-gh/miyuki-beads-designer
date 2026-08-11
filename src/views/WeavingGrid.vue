<template>
  <div class="home-container">
    <header class="app-header mb-3! flex items-start justify-between">
      <div class="header-content">
        <div class="logo-section">
          <h1 class="app-title text-2xl">
            🎨 Miyuki Beads Designer - Flat Style
          </h1>
        </div>
        <div class="header-actions mt-3! flex items-center gap-2">
          <button
            class="theme-btn px-4! py-2! text-[18px]"
            @click="toggleGridEditor"
          >
            ویرایشگر شبکه
          </button>
          <button
            class="theme-btn px-4! py-2! text-[18px]"
            @click="togglePeyoteGridEditor"
          >
            ویرایشگر شبکه پیچ
          </button>
          <button
            class="theme-btn px-4! py-2! text-[18px]"
            @click="toggleMiyukiBeads"
          >
            نمایش مهره‌ها
          </button>
          <button
            class="theme-btn px-4! py-2! text-[18px]"
            @click="toggleBraceletPreview"
          >
            پیش‌نمایش دستبند
          </button>
          <button
            class="theme-btn-primary px-4! py-2! text-[18px]"
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

    <!-- Content Area -->
    <div class="content-container">
      <PeyoteGridEditor
        v-show="isPeyoteGridEditorVisible"
        class="content-component"
        @update-grid="handleUpdateGrid"
      />
      <WeavingGridEditor
        v-show="isGridEditorVisible"
        class="content-component"
        @update-grid="handleUpdateGrid"
      />
      <MiyukiBeads
        v-show="isMiyukiBeadsVisible"
        :pattern="pattern"
        :rows="rows"
        :cols="cols"
        class="content-component"
      />
      <BraceletPreview
        v-show="isBraceletPreviewVisible"
        :pattern="pattern"
        :rows="rows"
        :cols="cols"
        class="content-component"
      />
      <WorkingPage
        v-show="isWorking"
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
import WeavingGridEditor from '@/components/weaving/WeavingGridEditor.vue';
import MiyukiBeads from '@/components/flat/MiyukiBeads.vue';
import BraceletPreview from '@/components/flat/BraceletPreview.vue';
import WorkingPage from '@/components/flat/WorkingPage.vue';
import PeyoteGridEditor from '@/components/peyote/PeyoteGridEditor.vue';

const rows = ref(16);
const cols = ref(80);
const pattern = ref(Array(16 * 80).fill('#ffffff'));
const isGridEditorVisible = ref(true);
const isMiyukiBeadsVisible = ref(false);
const isBraceletPreviewVisible = ref(false);
const isWorking = ref(false);
const isPeyoteGridEditorVisible = ref(false);

function toggleGridEditor() {
  isGridEditorVisible.value = true;
  isMiyukiBeadsVisible.value = false;
  isBraceletPreviewVisible.value = false;
  isWorking.value = false;
  isPeyoteGridEditorVisible.value = false;
}

function togglePeyoteGridEditor() {
  isPeyoteGridEditorVisible.value = true;
  isGridEditorVisible.value = false;
  isMiyukiBeadsVisible.value = false;
  isBraceletPreviewVisible.value = false;
  isWorking.value = false;
}

function toggleMiyukiBeads() {
  isMiyukiBeadsVisible.value = true;
  isGridEditorVisible.value = false;
  isBraceletPreviewVisible.value = false;
  isWorking.value = false;
  isPeyoteGridEditorVisible.value = false;
}

function toggleBraceletPreview() {
  isBraceletPreviewVisible.value = true;
  isMiyukiBeadsVisible.value = false;
  isGridEditorVisible.value = false;
  isWorking.value = false;
  isPeyoteGridEditorVisible.value = false;
}

function startWorking() {
  isWorking.value = true;
  isGridEditorVisible.value = false;
  isMiyukiBeadsVisible.value = false;
  isBraceletPreviewVisible.value = false;
  isPeyoteGridEditorVisible.value = false;
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
  min-height: 100vh;
  background: var(--bg);
  padding: 20px;
}

.app-header {
  background: var(--surface);
  border-radius: 20px;
  border: 1px solid var(--border);
  padding: 20px;
  margin-bottom: 20px;
}

.app-title {
  color: var(--text);
}

.header-actions button {
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px rgba(41, 37, 36, 0.06);
}

.header-actions button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(41, 37, 36, 0.12);
}

.stats-section {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.stat-item {
  text-align: center;
  background: var(--surface);
  border-radius: 12px;
  padding: 10px;
  border: 1px solid var(--border);
  min-width: 100px;
}

.stat-number {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--text);
  margin-bottom: 5px;
}

.stat-label {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.content-container {
  background: var(--surface);
  /* Load-bearing, not decorative: backdrop-filter makes this element the
     containing block for the position:fixed panels the editors render
     inside it. Removing it lets those panels escape to the viewport. */
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid var(--border);
  overflow: hidden;
}

.content-component {
  min-height: 600px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .stats-section {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .header-actions {
    flex-direction: column;
    gap: 10px;
  }

  .header-actions button {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .home-container {
    padding: 10px;
  }

  .app-title {
    font-size: 1.5rem;
  }
}
</style>
