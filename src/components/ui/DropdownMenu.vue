<template>
  <div
    ref="root"
    class="dropdown"
  >
    <div
      class="dropdown__trigger"
      @click="toggle"
    >
      <slot
        name="trigger"
        :open="isOpen"
      />
    </div>
    <Transition name="dropdown">
      <div
        v-if="isOpen"
        class="dropdown__menu"
        :class="`dropdown__menu--${align}`"
        role="menu"
        @keydown.esc="close"
      >
        <template
          v-for="(item, index) in items"
          :key="item.key || index"
        >
          <div
            v-if="item.divider"
            class="dropdown__divider"
            role="separator"
          ></div>
          <div
            v-else-if="item.heading"
            class="dropdown__heading"
          >
            {{ item.heading }}
          </div>
          <button
            v-else
            type="button"
            role="menuitem"
            class="dropdown__item"
            :class="{ 'is-danger': item.danger }"
            :disabled="item.disabled"
            @click="select(item)"
          >
            <BaseIcon
              v-if="item.icon"
              :name="item.icon"
              :size="16"
            />
            <span class="dropdown__item-label">{{ item.label }}</span>
            <kbd
              v-if="item.shortcut"
              class="dropdown__shortcut"
              >{{ item.shortcut }}</kbd
            >
          </button>
        </template>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { onBeforeUnmount, ref, watch } from 'vue';
import BaseIcon from './BaseIcon.vue';

/**
 * Click-to-open menu.
 * items: [{ label, icon?, onSelect, disabled?, danger?, shortcut? } | { divider: true } | { heading }]
 */
defineProps({
  items: { type: Array, required: true },
  align: { type: String, default: 'right' },
});

const root = ref(null);
const isOpen = ref(false);

function toggle() {
  isOpen.value = !isOpen.value;
}

function close() {
  isOpen.value = false;
}

function select(item) {
  close();
  item.onSelect?.();
}

function onDocumentPointer(event) {
  if (root.value && !root.value.contains(event.target)) close();
}

function onKey(event) {
  if (event.key === 'Escape') close();
}

watch(isOpen, (open) => {
  if (open) {
    document.addEventListener('pointerdown', onDocumentPointer, true);
    document.addEventListener('keydown', onKey);
  } else {
    document.removeEventListener('pointerdown', onDocumentPointer, true);
    document.removeEventListener('keydown', onKey);
  }
});

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', onDocumentPointer, true);
  document.removeEventListener('keydown', onKey);
});

defineExpose({ close });
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-flex;
}

.dropdown__menu {
  position: absolute;
  top: calc(100% + 6px);
  z-index: 1200;
  min-width: 220px;
  padding: 6px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
}

.dropdown__menu--right {
  right: 0;
}

.dropdown__menu--left {
  left: 0;
}

.dropdown__item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 9px 10px;
  border: none;
  border-radius: 7px;
  background: transparent;
  color: var(--text);
  font-size: 14px;
  font-weight: 500;
  text-align: left;
}

.dropdown__item:hover:not(:disabled) {
  background: var(--surface-sunken);
}

.dropdown__item:disabled {
  opacity: 0.45;
}

.dropdown__item.is-danger {
  color: var(--danger);
}

.dropdown__item-label {
  flex: 1;
}

.dropdown__shortcut {
  font-family: inherit;
  font-size: 11px;
  color: var(--text-faint);
}

.dropdown__divider {
  height: 1px;
  margin: 5px 4px;
  background: var(--border);
}

.dropdown__heading {
  padding: 8px 10px 4px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-faint);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition:
    opacity 0.12s ease,
    transform 0.12s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
