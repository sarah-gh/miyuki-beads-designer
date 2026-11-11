<template>
  <div class="zoom-controls">
    <BaseButton
      size="sm"
      icon="minus"
      icon-only
      aria-label="Zoom out"
      title="Zoom out (−)"
      :disabled="modelValue <= min + 1e-6"
      @click="step(-1)"
    />
    <DropdownMenu
      :items="presetItems"
      align="left"
    >
      <template #trigger>
        <button
          type="button"
          class="zoom-controls__value"
          title="Zoom level"
        >
          {{ Math.round(modelValue * 100) }}%
          <BaseIcon
            name="chevronDown"
            :size="14"
          />
        </button>
      </template>
    </DropdownMenu>
    <BaseButton
      size="sm"
      icon="plus"
      icon-only
      aria-label="Zoom in"
      title="Zoom in (+)"
      :disabled="modelValue >= max - 1e-6"
      @click="step(1)"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseIcon from '@/components/ui/BaseIcon.vue';
import DropdownMenu from '@/components/ui/DropdownMenu.vue';

/** − 300% ▾ + zoom widget. v-model is the zoom factor (1 = 100%). */
const props = defineProps({
  modelValue: { type: Number, required: true },
  min: { type: Number, default: 0.1 },
  max: { type: Number, default: 8 },
  presets: {
    type: Array,
    default: () => [0.5, 1, 1.5, 2, 3, 4, 6, 8],
  },
});

const emit = defineEmits(['update:modelValue', 'fit', 'fit-width']);

const STEPS = [0.1, 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 5, 6, 8];

function step(direction) {
  const current = props.modelValue;
  const next =
    direction > 0
      ? STEPS.find((s) => s > current + 1e-6)
      : [...STEPS].reverse().find((s) => s < current - 1e-6);
  emit(
    'update:modelValue',
    Math.min(props.max, Math.max(props.min, next ?? current)),
  );
}

const presetItems = computed(() => [
  { label: 'Fit to screen', icon: 'maximize', onSelect: () => emit('fit') },
  {
    label: 'Fit width',
    icon: 'arrowsHorizontal',
    onSelect: () => emit('fit-width'),
  },
  { divider: true },
  ...props.presets.map((p) => ({
    label: `${Math.round(p * 100)}%`,
    onSelect: () => emit('update:modelValue', p),
  })),
]);

defineExpose({ step });
</script>

<style scoped>
.zoom-controls {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.zoom-controls__value {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 76px;
  height: 30px;
  padding: 0 8px;
  border: 1px solid var(--border-strong);
  border-radius: 8px;
  background: var(--surface);
  font-size: 13px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.zoom-controls__value:hover {
  background: var(--surface-sunken);
}
</style>
