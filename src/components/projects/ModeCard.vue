<template>
  <component
    :is="tag"
    v-bind="linkAttrs"
    class="mode-card"
    :class="{ 'is-disabled': mode.disabled }"
    :aria-disabled="mode.disabled || undefined"
    @click="onClick"
  >
    <span class="mode-card__text">
      <span class="mode-card__icon">
        <BaseIcon
          :name="mode.icon"
          :size="24"
          :stroke-width="1.7"
        />
      </span>
      <span class="mode-card__label">{{ mode.label }}</span>
      <span class="mode-card__desc">{{ mode.description }}</span>
      <span
        v-if="count !== null"
        class="mode-card__count"
        >{{ count }} project{{ count === 1 ? '' : 's' }}</span
      >
    </span>

    <span
      v-if="artMatrix"
      class="mode-card__art"
      aria-hidden="true"
    >
      <PatternThumb
        class="mode-card__strip"
        :matrix="artMatrix"
      />
    </span>

    <span
      v-if="mode.badge"
      class="mode-card__badge"
      >{{ mode.badge }}</span
    >
  </component>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import BaseIcon from '@/components/ui/BaseIcon.vue';
import PatternThumb from './PatternThumb.vue';
import { getMode } from '@/lib/projects/modes.js';

/**
 * Big "start a project in this mode" tile. Project modes emit `select`;
 * extra modes with a `to` route are plain links; disabled ones do nothing.
 */
const props = defineProps({
  mode: { type: Object, required: true },
  art: { type: Object, default: null }, // a template used as decoration
  count: { type: Number, default: null },
});
const emit = defineEmits(['select']);

const tag = computed(() =>
  props.mode.to && !props.mode.disabled ? RouterLink : 'button',
);
const linkAttrs = computed(() =>
  tag.value === 'button'
    ? { type: 'button', disabled: props.mode.disabled }
    : { to: props.mode.to },
);
const artMatrix = computed(() =>
  props.art ? getMode(props.art.mode).toMatrix(props.art.data) : null,
);

function onClick() {
  if (!props.mode.disabled && !props.mode.to) emit('select', props.mode);
}
</script>

<style scoped>
.mode-card {
  position: relative;
  display: flex;
  min-height: 150px;
  overflow: hidden;
  padding: 18px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--surface) 30%, var(--surface-muted));
  box-shadow: var(--shadow-sm);
  color: var(--text);
  text-align: left;
  text-decoration: none;
  transition:
    box-shadow 0.15s ease,
    transform 0.15s ease,
    border-color 0.15s ease;
}

.mode-card:not(.is-disabled):hover {
  border-color: color-mix(in srgb, var(--accent) 40%, var(--border));
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.mode-card.is-disabled {
  cursor: default;
  opacity: 0.75;
}

.mode-card__text {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 64%;
}

.mode-card__icon {
  margin-bottom: 8px;
  color: var(--accent-text);
}

.mode-card__label {
  font-size: 17px;
  font-weight: 800;
}

.mode-card__desc {
  color: var(--text-muted);
  font-size: 13px;
  line-height: 1.35;
}

.mode-card__count {
  margin-top: auto;
  padding-top: 8px;
  color: var(--accent-text);
  font-size: 12px;
  font-weight: 700;
}

/* A bead strip laid diagonally across the right edge, like a bracelet. */
.mode-card__art {
  position: absolute;
  top: 50%;
  right: -120px;
  width: 300px;
  height: 64px;
  transform: translateY(-50%) rotate(-62deg);
  pointer-events: none;
}

.mode-card__strip {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: -6px 6px 16px rgba(61, 46, 41, 0.2);
}

.mode-card__badge {
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 1;
  padding: 3px 10px;
  border-radius: 999px;
  background: var(--accent);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
}
@media (max-width: 640px) {
  .mode-card {
    flex-direction: column;
    min-height: 0;
    padding: 14px;
  }

  .mode-card__text {
    max-width: 100%;
  }

  .mode-card__art {
    display: none;
  }

  .mode-card__badge {
    position: static;
    align-self: flex-start;
    margin-top: 8px;
  }
}
</style>
