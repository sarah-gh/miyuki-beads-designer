<template>
  <PanelCard
    title="Grid Dimensions"
    icon="grid"
    collapsible
  >
    <div class="grid-dimensions">
      <NumberStepper
        v-model="columns"
        label="Columns"
        :min="1"
        :max="maxColumns"
      />
      <NumberStepper
        v-model="rowCount"
        label="Rows"
        :min="1"
        :max="maxRows"
      />
    </div>
    <p
      v-if="hint"
      class="grid-dimensions__hint"
    >
      {{ hint }}
    </p>
  </PanelCard>
</template>

<script setup>
import NumberStepper from '@/components/ui/NumberStepper.vue';
import PanelCard from '@/components/ui/PanelCard.vue';

defineProps({
  maxColumns: { type: Number, default: 200 },
  maxRows: { type: Number, default: 1000 },
  hint: {
    type: String,
    default: 'Changing the size starts a new blank grid.',
  },
});
/** Columns (beads across) × Rows (beads along the bracelet). */
const columns = defineModel('columns', { type: Number, required: true });
const rowCount = defineModel('rows', { type: Number, required: true });
</script>

<style scoped>
.grid-dimensions {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px 16px;
}

.grid-dimensions__hint {
  margin-top: 8px;
  font-size: 11.5px;
  color: var(--text-faint);
}
</style>
