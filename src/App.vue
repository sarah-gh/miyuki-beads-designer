<template>
  <div class="app-shell">
    <AppHeader />

    <!-- Home / projects / templates: sidebar navigation -->
    <div
      v-if="isDashboard"
      class="app-body"
    >
      <AppSidebar />
      <main class="app-main app-main--dashboard">
        <RouterView />
      </main>
    </div>

    <!-- Editors: toolbar with back link, zoom and view modes -->
    <template v-else>
      <AppToolbar />
      <main class="app-main">
        <RouterView v-slot="{ Component }">
          <!-- Keyed by path so switching projects remounts the editor -->
          <component
            :is="Component"
            :key="route.path"
          />
        </RouterView>
      </main>
    </template>

    <!-- Offers "add to home screen" the first time the browser says it's installable -->
    <InstallPrompt />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import AppHeader from './components/layout/AppHeader.vue';
import AppSidebar from './components/layout/AppSidebar.vue';
import AppToolbar from './components/layout/AppToolbar.vue';
import InstallPrompt from './components/InstallPrompt.vue';

const route = useRoute();
const isDashboard = computed(() => route.meta.layout === 'dashboard');
</script>

<style scoped>
.app-shell {
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  background: var(--bg);
}

.app-body {
  display: flex;
  flex: 1;
  min-height: 0;
}

.app-main {
  position: relative;
  flex: 1;
  min-width: 0;
  min-height: 0;
  overflow: auto;
}

@media (max-width: 760px) {
  /* Room for the bottom tab bar. */
  .app-main--dashboard {
    padding-bottom: calc(66px + env(safe-area-inset-bottom));
  }
}
</style>
