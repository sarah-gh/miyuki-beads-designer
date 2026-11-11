<!-- eslint-disable vue/no-v-html -- markup comes from the static icons.js map, never from user input -->
<template>
  <svg
    class="base-icon"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
    v-html="markup"
  ></svg>
</template>

<script setup>
import { computed } from 'vue';
import { ICONS } from './icons.js';

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 18 },
  strokeWidth: { type: [Number, String], default: 1.9 },
});

const markup = computed(() => ICONS[props.name] ?? '');
</script>

<style scoped>
.base-icon {
  flex-shrink: 0;
  display: inline-block;
  vertical-align: middle;
}
</style>
