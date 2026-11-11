<template>
  <nav
    class="editor-nav"
    aria-label="Project"
  >
    <RouterLink
      :to="backTo"
      class="editor-nav__back"
      title="Back to my projects"
    >
      <BaseIcon
        name="arrowLeft"
        :size="18"
      />
      <span class="editor-nav__back-label">Projects</span>
    </RouterLink>
    <span
      v-if="label"
      class="editor-nav__mode"
    >
      <BaseIcon
        :name="icon"
        :size="16"
      />
      <span class="editor-nav__mode-label">{{ label }}</span>
    </span>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import BaseIcon from '@/components/ui/BaseIcon.vue';
import { EXTRA_MODES, getMode } from '@/lib/projects/modes.js';

/** Toolbar start inside an editor: back to the project list + current mode. */
const route = useRoute();

const mode = computed(() => {
  const id = route.meta.mode;
  return getMode(id) ?? EXTRA_MODES.find((m) => m.id === id) ?? null;
});
const label = computed(() => mode.value?.label ?? '');
const icon = computed(() => mode.value?.icon ?? 'grid');
const backTo = computed(() =>
  getMode(route.meta.mode)
    ? { name: 'projects', query: { mode: route.meta.mode } }
    : { name: 'home' },
);
</script>

<style scoped>
.editor-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.editor-nav__back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 12px 0 8px;
  border-radius: var(--radius);
  color: var(--text);
  font-size: 13.5px;
  font-weight: 700;
  text-decoration: none;
}

.editor-nav__back:hover {
  background: var(--surface-sunken);
}

.editor-nav__mode {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding: 0 12px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent-text);
  font-size: 12.5px;
  font-weight: 700;
  white-space: nowrap;
}

@media (max-width: 1100px) {
  .editor-nav__mode-label,
  .editor-nav__back-label {
    display: none;
  }

  .editor-nav__mode {
    width: 30px;
    padding: 0;
    justify-content: center;
  }
}
</style>
