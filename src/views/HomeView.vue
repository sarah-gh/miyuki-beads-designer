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

    <!-- Quick Stats -->

    <!-- Content Area -->
    <div class="content-container">
      <GridEditor
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

/* Hero Section */
.hero-section {
  text-align: center;
  padding: 60px 20px;
  margin-bottom: 40px;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-icon {
  font-size: 4rem;
  margin-bottom: 20px;
  animation: bounce 2s infinite;
}

.hero-title {
  font-size: 1rem;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 30px;
  line-height: 1.6;
}

.hero-description {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.hero-description p {
  color: white;
  font-size: 1.1rem;
  margin-bottom: 15px;
  font-weight: 500;
}

.hero-description ul {
  list-style: none;
  padding: 0;
  text-align: right;
}

.hero-description li {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  margin-bottom: 8px;
  padding: 8px 0;
}

/* Navigation Section */
.navigation-section {
  margin-bottom: 40px;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 30px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.nav-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.nav-card:hover::before {
  opacity: 0.05;
}

.nav-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: #667eea;
}

.nav-card.active {
  border-color: #667eea;
  background: linear-gradient(135deg, #f0f4ff 0%, #e8f0ff 100%);
  transform: translateY(-5px);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 15px;
  position: relative;
  z-index: 2;
}

.card-description {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}

.card-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.feature {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Stats Section */
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

/* Content Container */
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
