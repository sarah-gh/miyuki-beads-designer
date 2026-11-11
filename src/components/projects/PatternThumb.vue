<template>
  <div
    class="pattern-thumb"
    :class="{ 'is-empty': !hasThumb }"
  >
    <canvas
      v-show="hasThumb"
      ref="canvas"
      class="pattern-thumb__canvas"
      :style="{ objectFit: fit }"
    ></canvas>
    <BaseIcon
      v-if="!hasThumb"
      name="image"
      :size="28"
    />
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import BaseIcon from '@/components/ui/BaseIcon.vue';
import { drawThumb, makeThumb } from '@/lib/projects/thumbnail.js';

/**
 * Bead-style preview of a pattern. Pass a stored `thumb`, or a raw `matrix`
 * of cell values (templates) and the thumbnail is built on the fly.
 */
const props = defineProps({
  thumb: { type: Object, default: null },
  matrix: { type: Array, default: null },
  fit: { type: String, default: 'cover' }, // cover | contain
});

const canvas = ref(null);
const resolved = computed(() => props.thumb ?? makeThumb(props.matrix));
const hasThumb = computed(() => !!resolved.value?.w);

function draw() {
  if (canvas.value && hasThumb.value) drawThumb(canvas.value, resolved.value);
}

onMounted(draw);
watch(resolved, draw);
</script>

<style scoped>
.pattern-thumb {
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: var(--surface-sunken);
  color: var(--text-faint);
}

.pattern-thumb__canvas {
  display: block;
  width: 100%;
  height: 100%;
  image-rendering: auto;
}
</style>
