<template>
  <div class="home-container">
    <header class="app-header flex items-start justify-between mb-3!">
      <div class="header-content">
        <div class="header-actions mt-3! flex items-center gap-2">
          <button
            class="rounded-md bg-cyan-950 px-4! py-1! text-[14px] text-white"
            @click="toggleGridEditor"
          >
            ویرایشگر شبکه
          </button>
          <button
            class="rounded-md bg-blue-900 px-4! py-1! text-[14px] text-white"
            @click="toggleMiyukiBeads"
          >
            نمایش مهره‌ها
          </button>
          <button
            class="rounded-md bg-emerald-900 px-4! py-1! text-[14px] text-white"
            @click="toggleBraceletPreview"
          >
            پیش‌نمایش دستبند
          </button>
          <button
            class="rounded-md bg-emerald-900 px-4! py-1! text-[14px] text-white"
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
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-width: 100px;
}

.stat-number {
  font-size: .8rem;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
}

.stat-label {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

/* Content Container */
.content-container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
}

.content-component {
  min-height: 500px;
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
}
</style>
