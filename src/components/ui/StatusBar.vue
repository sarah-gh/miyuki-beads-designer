<template>
  <footer class="status-bar">
    <BaseIcon
      name="info"
      :size="15"
      class="status-bar__icon"
    />
    <template
      v-for="(item, index) in visibleItems"
      :key="item.key || index"
    >
      <span
        class="status-bar__item"
        :class="{ 'hide-on-mobile': item.hideOnMobile }"
        :title="item.title"
      >
        <span
          v-if="item.label"
          class="status-bar__label"
          >{{ item.label }}</span
        >
        <span class="status-bar__value">{{ item.value }}</span>
      </span>
    </template>
    <div class="status-bar__end">
      <slot name="end" />
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import BaseIcon from './BaseIcon.vue';

/** Thin bar at the bottom of a workspace. items: [{ label?, value, title?, hideOnMobile? }] */
const props = defineProps({
  items: { type: Array, default: () => [] },
});

const visibleItems = computed(() =>
  props.items.filter((item) => item && item.value !== undefined),
);
</script>

<style scoped>
.status-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  height: var(--statusbar-h);
  padding: 0 14px;
  background: var(--surface);
  border-top: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 12.5px;
  white-space: nowrap;
  overflow: hidden;
}

.status-bar__icon {
  color: var(--text-muted);
}

.status-bar__item + .status-bar__item::before {
  content: '';
  align-self: center;
  width: 1px;
  height: 14px;
  margin-right: 6px;
  background: var(--border-strong);
}

.status-bar__item {
  display: inline-flex;
  gap: 4px;
}

.status-bar__label {
  color: var(--text-faint);
}

.status-bar__value {
  color: var(--text);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.status-bar__end {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 10px;
}

@media (max-width: 640px) {
  .status-bar__item.hide-on-mobile {
    display: none;
  }
}
</style>
