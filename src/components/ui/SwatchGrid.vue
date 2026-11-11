<template>
  <div
    class="swatch-grid"
    :class="`swatch-grid--${size}`"
  >
    <div
      v-for="item in items"
      :key="item.key"
      class="swatch"
      :class="{ 'is-selected': item.key === selectedKey }"
    >
      <button
        type="button"
        class="swatch__face"
        :style="faceStyle(item)"
        :title="item.title || item.key"
        :aria-label="item.title || item.key"
        :aria-pressed="item.key === selectedKey"
        @click="$emit('select', item)"
      ></button>
      <span
        v-if="showLabels && item.label"
        class="swatch__label"
        >{{ item.label }}</span
      >
      <button
        v-if="removable"
        type="button"
        class="swatch__remove"
        :aria-label="`Remove ${item.title || item.key}`"
        @click.stop="$emit('remove', item)"
      >
        <BaseIcon
          name="x"
          :size="10"
          :stroke-width="3"
        />
      </button>
    </div>
    <button
      v-if="addable"
      type="button"
      class="swatch swatch--add"
      :title="addLabel"
      :aria-label="addLabel"
      @click="$emit('add')"
    >
      <BaseIcon
        name="plus"
        :size="18"
      />
    </button>
    <p
      v-if="!items.length && emptyText"
      class="swatch-grid__empty"
    >
      {{ emptyText }}
    </p>
  </div>
</template>

<script setup>
import BaseIcon from './BaseIcon.vue';

/**
 * Grid of colour or image swatches.
 * items: [{ key, color?, image?, title?, label? }]
 */
defineProps({
  items: { type: Array, required: true },
  selectedKey: { type: String, default: null },
  removable: { type: Boolean, default: false },
  addable: { type: Boolean, default: false },
  addLabel: { type: String, default: 'Add current colour' },
  showLabels: { type: Boolean, default: false },
  size: { type: String, default: 'md' },
  emptyText: { type: String, default: '' },
});

defineEmits(['select', 'remove', 'add']);

function faceStyle(item) {
  if (item.image) {
    return {
      backgroundImage: `url(${item.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
  }
  return { backgroundColor: item.color };
}
</script>

<style scoped>
.swatch-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.swatch {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
}

.swatch__face {
  width: var(--swatch-size);
  height: var(--swatch-size);
  border-radius: 8px;
  border: 1px solid rgba(61, 46, 41, 0.15);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25);
  transition:
    transform 0.12s ease,
    box-shadow 0.12s ease;
}

.swatch-grid--md {
  --swatch-size: 32px;
}

.swatch-grid--sm {
  --swatch-size: 26px;
}

.swatch-grid--lg {
  --swatch-size: 44px;
}

.swatch__face:hover {
  transform: translateY(-1px);
}

.swatch.is-selected .swatch__face {
  box-shadow:
    0 0 0 2px var(--surface),
    0 0 0 4px var(--primary);
}

.swatch__label {
  font-size: 10px;
  color: var(--text-muted);
  max-width: calc(var(--swatch-size) + 8px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.swatch__remove {
  position: absolute;
  top: -6px;
  right: -6px;
  display: grid;
  place-items: center;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 1px solid var(--border-strong);
  background: var(--surface);
  color: var(--danger);
  opacity: 0;
  transition: opacity 0.12s ease;
}

.swatch:hover .swatch__remove,
.swatch__remove:focus-visible {
  opacity: 1;
}

@media (hover: none) {
  .swatch__remove {
    opacity: 0.85;
  }
}

.swatch--add {
  width: var(--swatch-size);
  height: var(--swatch-size);
  display: grid;
  place-items: center;
  border-radius: 8px;
  border: 1px dashed var(--border-strong);
  background: var(--surface);
  color: var(--text-muted);
}

.swatch--add:hover {
  color: var(--text);
  border-color: var(--text-faint);
}

.swatch-grid__empty {
  font-size: 12.5px;
  color: var(--text-faint);
}
</style>
