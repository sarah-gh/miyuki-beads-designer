<template>
  <div class="reference-panel">
    <p class="reference-panel__intro">
      Add a photo or sketch to copy from. It's shown next to your grid while you
      design and is never saved.
    </p>

    <div
      v-if="image"
      class="reference-panel__preview"
    >
      <img
        :src="image"
        alt="Reference image"
      />
    </div>

    <div class="reference-panel__row">
      <FilePickerButton
        accept="image/*"
        icon="upload"
        :variant="image ? 'default' : 'soft'"
        size="sm"
        @change="$emit('upload', $event)"
        >{{ image ? 'Replace image' : 'Upload image' }}</FilePickerButton
      >
      <BaseButton
        v-if="image"
        icon="trash"
        variant="danger"
        size="sm"
        @click="$emit('remove')"
        >Remove</BaseButton
      >
    </div>

    <template v-if="image">
      <label class="reference-panel__switch">
        <input
          v-model="visible"
          type="checkbox"
        />
        <span>Show next to the grid</span>
      </label>

      <div class="reference-panel__section">
        <h4>Layout</h4>
        <SegmentedControl
          v-model="sideBySide"
          :options="[
            { value: true, label: 'Side by side', icon: 'layoutSide' },
            { value: false, label: 'Below', icon: 'layoutStack' },
          ]"
          size="sm"
          block
        />
      </div>
    </template>
  </div>
</template>

<script setup>
import BaseButton from '@/components/ui/BaseButton.vue';
import FilePickerButton from '@/components/ui/FilePickerButton.vue';
import SegmentedControl from '@/components/ui/SegmentedControl.vue';

defineProps({
  image: { type: String, default: null },
});
defineEmits(['upload', 'remove']);
/** "Reference" tab: upload / remove / position the reference image. */
const visible = defineModel('visible', { type: Boolean, default: true });
const sideBySide = defineModel('sideBySide', { type: Boolean, default: true });
</script>

<style scoped>
.reference-panel {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.reference-panel__intro {
  font-size: 12.5px;
  color: var(--text-muted);
  line-height: 1.5;
}

.reference-panel__preview {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-muted);
  overflow: hidden;
}

.reference-panel__preview img {
  display: block;
  width: 100%;
  max-height: 220px;
  object-fit: contain;
}

.reference-panel__row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.reference-panel__section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.reference-panel__section h4 {
  font-size: 13.5px;
  font-weight: 700;
}

.reference-panel__switch {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  cursor: pointer;
}

.reference-panel__switch input {
  width: 16px;
  height: 16px;
  accent-color: var(--primary);
}
</style>
