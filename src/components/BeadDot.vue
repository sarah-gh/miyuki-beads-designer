<template>
  <circle
    :cx="x"
    :cy="y"
    :r="r"
    :stroke="stroke"
    :fill="fill"
    :stroke-width="strokeWidth"
    vector-effect="non-scaling-stroke"
    @click="$emit('click')"
  />
</template>

<script setup>
defineProps({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  r: { type: Number, default: 6 },
  stroke: { type: String, default: '#000' },
  fill: { type: String, default: '#fff' },
  strokeWidth: { type: Number, default: 1.5 },
  beadId: { type: String, default: '' },
});

defineEmits(['click'])
</script>