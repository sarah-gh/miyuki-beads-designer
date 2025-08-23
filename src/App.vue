<template>
  <div id="app">
    <!-- Header -->
    <header class="app-header">
      <div class="header-content">
        <div class="logo-section">
          <h1 class="app-title">Miyuki Beads Designer</h1>
        </div>
        <div class="header-actions">
          <RouterLink to="/">Flat Grid</RouterLink>
          <RouterLink to="/weaving-grid">Weaving Grid</RouterLink>
        </div>
      </div>
    </header>
    <!-- Main Content -->
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';

console.log('App.vue');

const isDarkMode = ref(false);

onMounted(() => {
  // Load theme preference from localStorage
  const savedTheme = localStorage.getItem('darkMode');
  if (savedTheme === 'true') {
    isDarkMode.value = true;
    document.body.classList.add('dark-mode');
  }
});
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 10px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-section {
  text-align: right;
}

.app-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.app-subtitle {
  font-size: 1rem;
  opacity: 0.9;
  font-weight: 300;
}

.header-actions {
  display: flex;
  gap: 15px;
}

.header-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.header-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.main-content {
  flex: 1;
}

.app-footer {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 20px 0;
  text-align: center;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Dark mode styles */
.dark-mode .app-header {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
}

.dark-mode .app-footer {
  background: linear-gradient(135deg, #1a252f 0%, #2c3e50 100%);
}

/* Responsive design */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }

  .logo-section {
    text-align: center;
  }

  .app-title {
    font-size: 1.5rem;
  }

  .app-subtitle {
    font-size: 0.9rem;
  }
}
</style>
