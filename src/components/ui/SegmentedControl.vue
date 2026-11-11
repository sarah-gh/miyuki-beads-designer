<template>
  <div
    class="segmented"
    :class="[
      `segmented--${variant}`,
      `segmented--${size}`,
      { 'is-block': block },
    ]"
    role="tablist"
  >
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      role="tab"
      class="segmented__item"
      :class="{ 'is-active': option.value === modelValue }"
      :aria-selected="option.value === modelValue"
      :title="option.title || option.label"
      :disabled="option.disabled"
      @click="$emit('update:modelValue', option.value)"
    >
      <BaseIcon
        v-if="option.icon"
        :name="option.icon"
        :size="size === 'sm' ? 15 : 17"
      />
      <span
        v-if="option.label"
        class="segmented__label"
        :class="{ 'segmented__label--collapsible': collapseLabels }"
        >{{ option.label }}</span
      >
    </button>
  </div>
</template>

<script setup>
import BaseIcon from './BaseIcon.vue';

/**
 * A row of mutually exclusive options.
 * variant "pill": compact toggle (e.g. Color / Bead image).
 * variant "tabs": panel tabs (e.g. Colors / Properties / Reference).
 * options: [{ value, label, icon?, title?, disabled? }]
 */
defineProps({
  modelValue: { type: [String, Number, Boolean], default: null },
  options: { type: Array, required: true },
  variant: { type: String, default: 'pill' },
  size: { type: String, default: 'md' },
  block: { type: Boolean, default: false },
  collapseLabels: { type: Boolean, default: false },
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
.segmented {
  display: inline-flex;
  gap: 4px;
  padding: 3px;
  border-radius: var(--radius);
  background: var(--surface-sunken);
  border: 1px solid var(--border);
}

.segmented.is-block {
  display: flex;
  width: 100%;
}

.segmented.is-block .segmented__item {
  flex: 1;
}

.segmented__item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 1px solid transparent;
  background: transparent;
  color: var(--text-muted);
  font-weight: 600;
  border-radius: calc(var(--radius) - 3px);
  white-space: nowrap;
  transition:
    background-color 0.15s ease,
    color 0.15s ease,
    box-shadow 0.15s ease;
}

.segmented--md .segmented__item {
  height: 32px;
  padding: 0 12px;
  font-size: 13.5px;
}

.segmented--sm .segmented__item {
  height: 26px;
  padding: 0 10px;
  font-size: 12.5px;
}

.segmented__item:hover:not(.is-active):not(:disabled) {
  color: var(--text);
  background: rgba(255, 255, 255, 0.6);
}

.segmented__item.is-active {
  background: var(--surface);
  color: var(--text);
  border-color: var(--border);
  box-shadow: var(--shadow-sm);
}

.segmented__item:disabled {
  opacity: 0.45;
}

/* Tabs variant — active tab gets the soft olive treatment from the design */
.segmented--tabs {
  background: transparent;
  border: none;
  padding: 0;
  gap: 6px;
}

.segmented--tabs .segmented__item {
  border: 1px solid transparent;
}

.segmented--tabs .segmented__item.is-active {
  background: var(--primary-soft);
  color: var(--primary-text);
  border-color: var(--primary-soft-hover);
  box-shadow: none;
}

@media (max-width: 640px) {
  .segmented__label--collapsible {
    display: none;
  }
}
</style>
