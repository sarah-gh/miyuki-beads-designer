<template>
  <article class="project-card">
    <button
      type="button"
      class="project-card__open"
      :aria-label="`Open ${project.name}`"
      @click="$emit('open', project)"
    >
      <PatternThumb
        class="project-card__thumb"
        :thumb="project.thumb"
      />
    </button>

    <div class="project-card__body">
      <div class="project-card__text">
        <h3
          class="project-card__name"
          :title="project.name"
        >
          {{ project.name }}
        </h3>
        <p class="project-card__meta">
          <BaseIcon
            :name="mode?.icon ?? 'grid'"
            :size="14"
          />
          <span>{{ mode?.label }}</span>
          <span aria-hidden="true">·</span>
          <span :title="new Date(project.updatedAt).toLocaleString()">{{
            timeAgo(project.updatedAt)
          }}</span>
        </p>
      </div>

      <DropdownMenu :items="menuItems">
        <template #trigger>
          <button
            type="button"
            class="project-card__menu"
            :aria-label="`Actions for ${project.name}`"
          >
            <BaseIcon
              name="moreVertical"
              :size="18"
            />
          </button>
        </template>
      </DropdownMenu>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue';
import BaseIcon from '@/components/ui/BaseIcon.vue';
import DropdownMenu from '@/components/ui/DropdownMenu.vue';
import PatternThumb from './PatternThumb.vue';
import { getMode } from '@/lib/projects/modes.js';
import { timeAgo } from '@/lib/projects/timeAgo.js';

const props = defineProps({
  project: { type: Object, required: true },
  menuItems: { type: Array, default: () => [] },
});
defineEmits(['open']);

const mode = computed(() => getMode(props.project.mode));
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition:
    box-shadow 0.15s ease,
    transform 0.15s ease;
}

.project-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.project-card__open {
  display: block;
  padding: 10px 10px 0;
  border: none;
  background: none;
  text-align: left;
}

.project-card__thumb {
  aspect-ratio: 16 / 9;
  border-radius: var(--radius);
}

.project-card__body {
  display: flex;
  align-items: flex-start;
  gap: 4px;
  padding: 10px 6px 12px 14px;
}

.project-card__text {
  flex: 1;
  min-width: 0;
}

.project-card__name {
  overflow: hidden;
  font-size: 14.5px;
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.project-card__meta {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 3px;
  color: var(--text-muted);
  font-size: 12.5px;
  white-space: nowrap;
}

.project-card__menu {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: var(--radius-sm);
  background: transparent;
  color: var(--text-muted);
}

.project-card__menu:hover {
  background: var(--surface-sunken);
  color: var(--text);
}
</style>
