<template>
  <span
    v-if="timestamp"
    class="saved-badge"
    :title="exact"
  >
    <BaseIcon
      name="check"
      :size="14"
      :stroke-width="2.6"
    />
    <span>Saved {{ relative }}</span>
  </span>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import BaseIcon from './BaseIcon.vue';

/** Shows "Saved just now / 2 min ago" from an ISO timestamp. */
const props = defineProps({
  timestamp: { type: [String, Number, Date], default: null },
});

const now = ref(Date.now());
let timer = null;

onMounted(() => {
  timer = setInterval(() => (now.value = Date.now()), 20000);
});
onBeforeUnmount(() => clearInterval(timer));

const relative = computed(() => {
  const time = new Date(props.timestamp).getTime();
  if (!Number.isFinite(time)) return '';
  const seconds = Math.max(0, Math.round((now.value - time) / 1000));
  if (seconds < 45) return 'just now';
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} h ago`;
  return new Date(time).toLocaleDateString('en-US');
});

const exact = computed(() =>
  props.timestamp ? new Date(props.timestamp).toLocaleString('en-US') : '',
);
</script>

<style scoped>
.saved-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 26px;
  padding: 0 10px;
  border-radius: 999px;
  background: var(--primary-soft);
  color: var(--primary-text);
  font-size: 12.5px;
  font-weight: 600;
  white-space: nowrap;
}
</style>
