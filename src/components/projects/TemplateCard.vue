<template>
  <button
    type="button"
    class="template-card"
    :class="{ 'is-selected': selected }"
    :aria-pressed="selectable ? selected : undefined"
    @click="$emit('select', template)"
  >
    <PatternThumb
      class="template-card__thumb"
      :matrix="matrix"
    />
    <span class="template-card__body">
      <span class="template-card__name">{{ template.name }}</span>
      <span class="template-card__meta">
        <template v-if="showMode">{{ mode.label }} · </template>{{ size }}
      </span>
    </span>
    <span
      v-if="actionLabel"
      class="template-card__action"
    >
      {{ actionLabel }}
      <BaseIcon
        name="arrowRight"
        :size="14"
      />
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue';
import BaseIcon from '@/components/ui/BaseIcon.vue';
import PatternThumb from './PatternThumb.vue';
import { getMode } from '@/lib/projects/modes.js';

const props = defineProps({
  template: { type: Object, required: true },
  selected: { type: Boolean, default: false },
  selectable: { type: Boolean, default: false },
  showMode: { type: Boolean, default: false },
  actionLabel: { type: String, default: '' },
});
defineEmits(['select']);

const mode = computed(() => getMode(props.template.mode));
const matrix = computed(() => mode.value.toMatrix(props.template.data));
const size = computed(() => {
  const { width, height } = mode.value.size(props.template.data);
  return `${width} × ${height}`;
});
</script>

<style scoped>
.template-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
  padding: 8px 8px 10px;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
  text-align: left;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}

.template-card:hover {
  border-color: var(--border-strong);
  box-shadow: var(--shadow);
}

.template-card.is-selected {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
}

.template-card__thumb {
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-sm);
}

.template-card__body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0 4px;
  min-width: 0;
}

.template-card__name {
  overflow: hidden;
  font-size: 13.5px;
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.template-card__meta {
  color: var(--text-muted);
  font-size: 12px;
}

.template-card__action {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0 4px;
  color: var(--accent-text);
  font-size: 12.5px;
  font-weight: 700;
}
</style>
