<template>
  <section
    class="panel-card"
    :class="{ 'is-flush': flush, 'is-open': isOpen }"
  >
    <header
      v-if="title || $slots.header"
      class="panel-card__header"
    >
      <component
        :is="collapsible ? 'button' : 'div'"
        :type="collapsible ? 'button' : undefined"
        class="panel-card__title"
        :aria-expanded="collapsible ? String(isOpen) : undefined"
        @click="collapsible && toggle()"
      >
        <BaseIcon
          v-if="icon"
          :name="icon"
          :size="17"
        />
        <slot name="header">{{ title }}</slot>
      </component>
      <div class="panel-card__actions">
        <slot name="actions" />
        <button
          v-if="collapsible"
          type="button"
          class="panel-card__chevron"
          :aria-label="isOpen ? 'Collapse' : 'Expand'"
          @click="toggle"
        >
          <BaseIcon
            :name="isOpen ? 'chevronUp' : 'chevronDown'"
            :size="18"
          />
        </button>
      </div>
    </header>
    <div
      v-show="isOpen"
      class="panel-card__body"
    >
      <slot />
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue';
import BaseIcon from './BaseIcon.vue';

/**
 * Card used for every settings group. Optionally collapsible
 * (v-model:open, or uncontrolled via `defaultOpen`).
 */
const props = defineProps({
  title: { type: String, default: '' },
  icon: { type: String, default: '' },
  collapsible: { type: Boolean, default: false },
  open: { type: Boolean, default: undefined },
  defaultOpen: { type: Boolean, default: true },
  flush: { type: Boolean, default: false },
});

const emit = defineEmits(['update:open']);

const isOpen = ref(props.open ?? props.defaultOpen);
watch(
  () => props.open,
  (value) => {
    if (value !== undefined) isOpen.value = value;
  },
);

function toggle() {
  isOpen.value = !isOpen.value;
  emit('update:open', isOpen.value);
}
</script>

<style scoped>
.panel-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.panel-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 12px 10px 14px;
}

.panel-card.is-open .panel-card__header {
  border-bottom: 1px solid var(--border);
}

.panel-card__title {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 700;
  color: var(--text);
  background: none;
  border: none;
  padding: 0;
  text-align: left;
  min-width: 0;
}

.panel-card__actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.panel-card__chevron {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text-muted);
}

.panel-card__chevron:hover {
  background: var(--surface-sunken);
  color: var(--text);
}

.panel-card__body {
  padding: 12px 14px 14px;
}

.panel-card.is-flush .panel-card__body {
  padding: 0;
}
</style>
