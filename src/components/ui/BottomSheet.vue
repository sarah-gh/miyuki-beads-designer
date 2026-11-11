<template>
  <Transition name="sheet">
    <section
      v-if="modelValue"
      class="bottom-sheet"
      :class="{ 'is-expanded': expanded }"
      role="dialog"
      :aria-label="title"
    >
      <header class="bottom-sheet__header">
        <button
          type="button"
          class="bottom-sheet__handle"
          :aria-label="expanded ? 'Shrink panel' : 'Expand panel'"
          @click="expanded = !expanded"
        >
          <span></span>
        </button>
        <div class="bottom-sheet__title-row">
          <slot name="header">
            <h3 class="bottom-sheet__title">{{ title }}</h3>
          </slot>
          <button
            type="button"
            class="bottom-sheet__close"
            aria-label="Close panel"
            @click="$emit('update:modelValue', false)"
          >
            <BaseIcon
              name="x"
              :size="18"
            />
          </button>
        </div>
      </header>
      <div class="bottom-sheet__body">
        <slot />
      </div>
    </section>
  </Transition>
</template>

<script setup>
import { ref } from 'vue';
import BaseIcon from './BaseIcon.vue';

/**
 * Non-modal bottom sheet for small screens. It doesn't block the content
 * behind it, so the user can keep painting with the panel open (this replaces
 * the old "pin section" feature on mobile).
 */
defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, default: '' },
});

defineEmits(['update:modelValue']);

const expanded = ref(false);
</script>

<style scoped>
.bottom-sheet {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1100;
  display: flex;
  flex-direction: column;
  max-height: 46vh;
  background: var(--surface);
  border-top: 1px solid var(--border);
  border-radius: 18px 18px 0 0;
  box-shadow: 0 -10px 30px rgba(61, 46, 41, 0.14);
  padding-bottom: env(safe-area-inset-bottom);
  transition: max-height 0.25s ease;
}

.bottom-sheet.is-expanded {
  max-height: 82vh;
}

.bottom-sheet__header {
  flex-shrink: 0;
  padding: 0 12px 8px;
  border-bottom: 1px solid var(--border);
}

.bottom-sheet__handle {
  display: grid;
  place-items: center;
  width: 100%;
  height: 20px;
  border: none;
  background: transparent;
}

.bottom-sheet__handle span {
  width: 40px;
  height: 4px;
  border-radius: 4px;
  background: var(--border-strong);
}

.bottom-sheet__title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.bottom-sheet__title {
  font-size: 15px;
  font-weight: 700;
}

.bottom-sheet__close {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border: none;
  border-radius: 8px;
  background: var(--surface-sunken);
  color: var(--text);
}

.bottom-sheet__body {
  flex: 1;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 12px;
}

.sheet-enter-active,
.sheet-leave-active {
  transition: transform 0.25s ease;
}

.sheet-enter-from,
.sheet-leave-to {
  transform: translateY(100%);
}
</style>
