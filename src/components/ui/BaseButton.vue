<template>
  <component
    :is="tag"
    class="base-btn"
    :class="[
      `base-btn--${variant}`,
      `base-btn--${size}`,
      {
        'is-active': active,
        'is-block': block,
        'is-icon-only': iconOnly,
        'is-disabled': disabled,
      },
    ]"
    :type="tag === 'button' ? type : undefined"
    :disabled="tag === 'button' ? disabled : undefined"
    :aria-pressed="pressed === null ? undefined : String(pressed)"
  >
    <BaseIcon
      v-if="icon"
      :name="icon"
      :size="iconSize"
    />
    <span
      v-if="$slots.default"
      class="base-btn__label"
      :class="{ 'base-btn__label--collapsible': collapseLabel }"
    >
      <slot />
    </span>
    <BaseIcon
      v-if="iconRight"
      :name="iconRight"
      :size="iconSize - 2"
      class="base-btn__icon-right"
    />
  </component>
</template>

<script setup>
import { computed } from 'vue';
import BaseIcon from './BaseIcon.vue';

/**
 * General purpose button.
 * variant: default | primary (olive) | accent (rose) | soft | ghost | danger | header
 * size:    sm | md | lg
 * Set `tag="label"` to wrap a hidden file input (see FilePickerButton).
 * `collapseLabel` hides the text on small screens and keeps only the icon.
 */
const props = defineProps({
  variant: { type: String, default: 'default' },
  size: { type: String, default: 'md' },
  icon: { type: String, default: '' },
  iconRight: { type: String, default: '' },
  active: { type: Boolean, default: false },
  pressed: { type: Boolean, default: null },
  block: { type: Boolean, default: false },
  iconOnly: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  collapseLabel: { type: Boolean, default: false },
  tag: { type: String, default: 'button' },
  type: { type: String, default: 'button' },
});

const iconSize = computed(() =>
  props.size === 'sm' ? 16 : props.size === 'lg' ? 20 : 18,
);
</script>

<style scoped>
.base-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid var(--border-strong);
  background: var(--surface);
  color: var(--text);
  font-weight: 600;
  line-height: 1;
  border-radius: var(--radius);
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease,
    box-shadow 0.15s ease;
}

.base-btn--sm {
  height: 30px;
  padding: 0 10px;
  font-size: 13px;
  gap: 6px;
}

.base-btn--md {
  height: 36px;
  padding: 0 14px;
  font-size: 14px;
}

.base-btn--lg {
  height: 42px;
  padding: 0 18px;
  font-size: 15px;
}

.base-btn.is-icon-only.base-btn--sm {
  width: 30px;
  padding: 0;
}

.base-btn.is-icon-only.base-btn--md {
  width: 36px;
  padding: 0;
}

.base-btn.is-icon-only.base-btn--lg {
  width: 42px;
  padding: 0;
}

.base-btn.is-block {
  display: flex;
  width: 100%;
}

.base-btn:hover:not(:disabled):not(.is-disabled) {
  background: var(--surface-sunken);
}

.base-btn:disabled,
.base-btn.is-disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

/* default */
.base-btn--default {
  box-shadow: var(--shadow-sm);
}

.base-btn--default.is-active {
  background: var(--primary-soft);
  border-color: var(--primary-soft-hover);
  color: var(--primary-text);
}

/* primary — olive */
.base-btn--primary {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
  box-shadow: var(--shadow-sm);
}

.base-btn--primary:hover:not(:disabled):not(.is-disabled) {
  background: var(--primary-hover);
  border-color: var(--primary-hover);
}

/* accent — dusty rose */
.base-btn--accent {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
  box-shadow: var(--shadow-sm);
}

.base-btn--accent:hover:not(:disabled):not(.is-disabled) {
  background: var(--accent-hover);
  border-color: var(--accent-hover);
}

/* soft — light olive, used for "on" states */
.base-btn--soft {
  background: var(--primary-soft);
  border-color: transparent;
  color: var(--primary-text);
}

.base-btn--soft:hover:not(:disabled):not(.is-disabled) {
  background: var(--primary-soft-hover);
}

/* ghost */
.base-btn--ghost {
  background: transparent;
  border-color: transparent;
  color: var(--text);
}

.base-btn--ghost:hover:not(:disabled):not(.is-disabled) {
  background: var(--surface-sunken);
}

.base-btn--ghost.is-active {
  background: var(--primary-soft);
  color: var(--primary-text);
}

/* danger */
.base-btn--danger {
  background: var(--surface);
  border-color: color-mix(in srgb, var(--danger) 35%, transparent);
  color: var(--danger);
}

.base-btn--danger:hover:not(:disabled):not(.is-disabled) {
  background: color-mix(in srgb, var(--danger) 8%, var(--surface));
}

/* header — white pill on the gradient header */
.base-btn--header {
  background: rgba(255, 255, 255, 0.92);
  border-color: rgba(255, 255, 255, 0.6);
  color: var(--text);
  box-shadow: var(--shadow-sm);
}

.base-btn--header:hover:not(:disabled):not(.is-disabled) {
  background: #fff;
}

.base-btn__icon-right {
  margin-left: -2px;
  opacity: 0.85;
}

@media (max-width: 640px) {
  .base-btn__label--collapsible {
    display: none;
  }

  .base-btn:has(.base-btn__label--collapsible).base-btn--md {
    width: 36px;
    padding: 0;
  }

  .base-btn:has(.base-btn__label--collapsible).base-btn--sm {
    width: 30px;
    padding: 0;
  }

  .base-btn:has(.base-btn__label--collapsible) .base-btn__icon-right {
    display: none;
  }
}
</style>
