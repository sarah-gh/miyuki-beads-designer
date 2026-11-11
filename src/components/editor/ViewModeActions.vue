<template>
  <div class="view-mode-actions">
    <BaseButton
      v-if="modelValue !== 'editor'"
      icon="edit"
      collapse-label
      title="Back to the editor"
      @click="select('editor')"
      >Editor</BaseButton
    >
    <BaseButton
      v-if="showBeads"
      icon="beads"
      :active="modelValue === 'beads'"
      collapse-label
      title="Show the beads"
      @click="select('beads')"
      >Beads</BaseButton
    >
    <BaseButton
      variant="primary"
      icon="cube"
      :class="{ 'is-current': modelValue === 'preview' }"
      collapse-label
      title="3D bracelet preview"
      @click="select('preview')"
      >Preview 3D</BaseButton
    >
    <BaseButton
      variant="accent"
      icon="steps"
      :class="{ 'is-current': modelValue === 'steps' }"
      collapse-label
      title="Step-by-step instructions"
      @click="select('steps')"
      >Step-by-step</BaseButton
    >
  </div>
</template>

<script setup>
import BaseButton from '@/components/ui/BaseButton.vue';

/**
 * Switches a pattern page between: editor · beads · preview (3D) · steps.
 * Shared by the Flat, Weaving and Peyote pages.
 */
defineProps({
  modelValue: { type: String, default: 'editor' },
  showBeads: { type: Boolean, default: true },
});

const emit = defineEmits(['update:modelValue']);

function select(mode) {
  emit('update:modelValue', mode);
}
</script>

<style scoped>
.view-mode-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.view-mode-actions :deep(.base-btn--primary.is-current) {
  box-shadow:
    0 0 0 2px var(--surface),
    0 0 0 4px var(--primary);
}

@media (max-width: 1100px) {
  .view-mode-actions :deep(.base-btn__label) {
    display: none;
  }

  .view-mode-actions :deep(.base-btn) {
    width: 36px;
    padding: 0;
  }
}

.view-mode-actions :deep(.base-btn--accent.is-current) {
  box-shadow:
    0 0 0 2px var(--surface),
    0 0 0 4px var(--accent);
}
</style>
