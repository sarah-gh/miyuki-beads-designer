<template>
  <nav
    class="app-sidebar"
    aria-label="Main"
  >
    <RouterLink
      v-for="item in items"
      :key="item.name"
      :to="{ name: item.name }"
      class="app-sidebar__link"
      :class="{ 'is-active': route.name === item.name }"
      :aria-current="route.name === item.name ? 'page' : undefined"
    >
      <BaseIcon
        :name="item.icon"
        :size="20"
      />
      <span class="app-sidebar__label">{{ item.label }}</span>
      <span
        v-if="item.count"
        class="app-sidebar__count"
        >{{ item.count }}</span
      >
    </RouterLink>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import BaseIcon from '@/components/ui/BaseIcon.vue';
import { projectState } from '@/lib/projects/projectStore.js';

const route = useRoute();

const items = computed(() => [
  { name: 'home', label: 'Home', icon: 'home' },
  {
    name: 'projects',
    label: 'My Projects',
    icon: 'folder',
    count: projectState.projects.length,
  },
  { name: 'templates', label: 'Templates', icon: 'templates' },
]);
</script>

<style scoped>
.app-sidebar {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 220px;
  flex-shrink: 0;
  padding: 16px 12px;
  border-right: 1px solid var(--border);
  background: var(--surface-muted);
}

.app-sidebar__link {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 44px;
  padding: 0 14px;
  border-radius: var(--radius);
  color: var(--text);
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.15s ease;
}

.app-sidebar__link:hover {
  background: var(--surface-sunken);
}

.app-sidebar__link.is-active {
  background: var(--accent-soft);
  color: var(--accent-text);
  font-weight: 700;
}

.app-sidebar__count {
  margin-left: auto;
  min-width: 22px;
  padding: 1px 7px;
  border-radius: 999px;
  background: var(--surface-sunken);
  color: var(--text-muted);
  font-size: 12px;
  font-weight: 700;
  text-align: center;
}

.app-sidebar__link.is-active .app-sidebar__count {
  background: var(--surface);
  color: var(--accent-text);
}

/* Phones: becomes a bottom tab bar. */
@media (max-width: 760px) {
  .app-sidebar {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 60;
    flex-direction: row;
    justify-content: space-around;
    width: auto;
    padding: 6px 8px calc(6px + env(safe-area-inset-bottom));
    border-top: 1px solid var(--border);
    border-right: none;
    background: var(--surface);
    box-shadow: 0 -2px 10px rgba(61, 46, 41, 0.06);
  }

  .app-sidebar__link {
    flex: 1;
    flex-direction: column;
    justify-content: center;
    gap: 2px;
    height: 52px;
    padding: 0 6px;
    font-size: 11.5px;
  }

  .app-sidebar__count {
    display: none;
  }
}
</style>
