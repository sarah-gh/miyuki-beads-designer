<template>
  <div class="home-container">
    <header class="app-header flex items-start justify-between mb-3!">
      <div class="header-content">
        <div class="logo-section">
          <h1 class="app-title text-2xl">🎨 Miyuki Beads Designer - Flat Style</h1>
        </div>
        <div class="header-actions mt-3! flex items-center gap-2">
          <button
            class="rounded-md bg-cyan-950 px-4! py-2! text-[18px] text-white"
            @click="toggleGridEditor"
          >
            ویرایشگر شبکه
          </button>
          <button
            class="rounded-md bg-blue-900 px-4! py-2! text-[18px] text-white"
            @click="toggleMiyukiBeads"
          >
            نمایش مهره‌ها
          </button>
          <button
            class="rounded-md bg-emerald-900 px-4! py-2! text-[18px] text-white"
            @click="toggleBraceletPreview"
          >
            پیش‌نمایش دستبند
          </button>
          <button
            class="rounded-md bg-emerald-900 px-4! py-2! text-[18px] text-white"
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
import WeavingGridEditor from '@/components/flat/WeavingGridEditor.vue';
import MiyukiBeads from '@/components/flat/MiyukiBeads.vue';
import BraceletPreview from '@/components/flat/BraceletPreview.vue';
import WorkingPage from '@/components/flat/WorkingPage.vue';

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
}

function toggleMiyukiBeads() {
  isMiyukiBeadsVisible.value = true;
  isGridEditorVisible.value = false;
  isBraceletPreviewVisible.value = false;
  isWorking.value = false;
}

function toggleBraceletPreview() {
  isBraceletPreviewVisible.value = true;
  isMiyukiBeadsVisible.value = false;
  isGridEditorVisible.value = false;
  isWorking.value = false;
}

function startWorking() {
  isWorking.value = true;
  isGridEditorVisible.value = false;
  isMiyukiBeadsVisible.value = false;
  isBraceletPreviewVisible.value = false;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.app-header {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px;
  margin-bottom: 20px;
}

.app-title {
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.header-actions button {
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.header-actions button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.stats-section {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.stat-item {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-width: 100px;
}

.stat-number {
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
}

.stat-label {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.content-container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
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
