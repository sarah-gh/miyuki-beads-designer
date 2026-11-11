<template>
  <header class="app-header">
    <RouterLink
      to="/"
      class="app-header__brand"
      aria-label="Miyuki Beads Designer — home"
    >
      <span class="app-header__logo">
        <BaseIcon
          name="flower"
          :size="26"
          :stroke-width="1.6"
        />
      </span>
      <span class="app-header__title">Miyuki Beads Designer</span>
    </RouterLink>

    <div
      id="app-slot-header-start"
      class="app-header__start"
    ></div>

    <div
      id="app-slot-header"
      class="app-header__actions"
    ></div>

    <!-- Google sign-in / Drive sync status (hidden if not configured) -->
    <DriveButton :compact="route.meta.layout === 'editor'" />
  </header>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';
import BaseIcon from '@/components/ui/BaseIcon.vue';
import DriveButton from '@/components/drive/DriveButton.vue';

const route = useRoute();
</script>

<style scoped>
.app-header {
  position: relative;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 16px;
  height: calc(var(--header-h) + env(safe-area-inset-top));
  padding: env(safe-area-inset-top) max(16px, env(safe-area-inset-right)) 0
    max(16px, env(safe-area-inset-left));
  background: linear-gradient(
    100deg,
    var(--header-from) 0%,
    var(--header-via) 45%,
    var(--header-to) 100%
  );
  color: var(--header-text);
}

.app-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: inherit;
  text-decoration: none;
  flex-shrink: 0;
}

.app-header__logo {
  display: grid;
  place-items: center;
}

.app-header__title {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.01em;
  text-shadow: 0 1px 2px rgba(61, 46, 41, 0.25);
  white-space: nowrap;
}

.app-header__start {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  margin-left: 16px;
}

.app-header__actions {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}

@media (max-width: 1100px) {
  .app-header__start {
    margin-left: 0;
  }
}

@media (max-width: 900px) {
  .app-header__title {
    display: none;
  }
}

@media (max-width: 640px) {
  .app-header {
    gap: 10px;
    --header-h: 52px;
  }

  .app-header__actions {
    gap: 6px;
  }
}
</style>
