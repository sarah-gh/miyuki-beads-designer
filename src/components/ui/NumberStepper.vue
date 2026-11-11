<template>
  <label class="stepper">
    <span
      v-if="label"
      class="stepper__label"
      >{{ label }}</span
    >
    <span class="stepper__control">
      <input
        class="stepper__input"
        type="number"
        inputmode="numeric"
        :min="min"
        :max="max"
        :step="step"
        :value="modelValue"
        @change="onInput($event.target.value)"
        @keydown.enter="$event.target.blur()"
      />
      <span class="stepper__arrows">
        <button
          type="button"
          tabindex="-1"
          :aria-label="`Increase ${label}`"
          :disabled="max !== undefined && modelValue >= max"
          @click="nudge(step)"
        >
          <BaseIcon
            name="chevronUp"
            :size="13"
            :stroke-width="2.4"
          />
        </button>
        <button
          type="button"
          tabindex="-1"
          :aria-label="`Decrease ${label}`"
          :disabled="min !== undefined && modelValue <= min"
          @click="nudge(-step)"
        >
          <BaseIcon
            name="chevronDown"
            :size="13"
            :stroke-width="2.4"
          />
        </button>
      </span>
    </span>
  </label>
</template>

<script setup>
import BaseIcon from './BaseIcon.vue';

/**
 * Compact numeric input with up/down arrows. Commits on change/enter (not on
 * every keystroke) so typing "12" doesn't briefly resize a grid to 1.
 */
const props = defineProps({
  modelValue: { type: Number, default: 0 },
  label: { type: String, default: '' },
  min: { type: Number, default: undefined },
  max: { type: Number, default: undefined },
  step: { type: Number, default: 1 },
});

const emit = defineEmits(['update:modelValue']);

function clamp(value) {
  let v = value;
  if (props.min !== undefined) v = Math.max(props.min, v);
  if (props.max !== undefined) v = Math.min(props.max, v);
  return v;
}

function onInput(raw) {
  const parsed = Number(raw);
  if (!Number.isFinite(parsed) || raw === '') {
    // Revert the field to the current value.
    emit('update:modelValue', props.modelValue);
    return;
  }
  emit('update:modelValue', clamp(Math.round(parsed)));
}

function nudge(delta) {
  emit('update:modelValue', clamp((props.modelValue || 0) + delta));
}
</script>

<style scoped>
.stepper {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.stepper__label {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  white-space: nowrap;
}

.stepper__control {
  display: inline-flex;
  align-items: stretch;
  height: 34px;
  border: 1px solid var(--border-strong);
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
  transition: border-color 0.15s ease;
}

.stepper__control:focus-within {
  border-color: var(--accent);
}

.stepper__input {
  width: 52px;
  border: none;
  background: transparent;
  padding: 0 4px 0 10px;
  font-size: 14px;
  font-weight: 600;
  -moz-appearance: textfield;
  appearance: textfield;
}

.stepper__input::-webkit-outer-spin-button,
.stepper__input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.stepper__arrows {
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--border);
}

.stepper__arrows button {
  flex: 1;
  display: grid;
  place-items: center;
  width: 22px;
  border: none;
  background: transparent;
  color: var(--text-muted);
}

.stepper__arrows button:hover:not(:disabled) {
  background: var(--surface-sunken);
  color: var(--text);
}

.stepper__arrows button:disabled {
  opacity: 0.35;
}
</style>
