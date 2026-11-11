<template>
  <div class="properties-panel">
    <section class="properties-panel__section">
      <h4>Bead size</h4>
      <div class="properties-panel__row">
        <NumberStepper
          v-model="cellWidth"
          label="Width"
          :min="5"
          :max="50"
        />
        <NumberStepper
          v-model="cellHeight"
          label="Height"
          :min="5"
          :max="50"
        />
      </div>
      <p class="properties-panel__hint">
        Size of one bead in pixels at 100% zoom.
      </p>
    </section>

    <section class="properties-panel__section">
      <h4>Grid orientation</h4>
      <SegmentedControl
        v-model="gridUpright"
        :options="[
          { value: true, label: 'Vertical', icon: 'arrowsVertical' },
          { value: false, label: 'Horizontal', icon: 'arrowsHorizontal' },
        ]"
        size="sm"
        block
      />
    </section>

    <section class="properties-panel__section">
      <h4>Display</h4>
      <label class="properties-panel__switch">
        <input
          v-model="showGridLines"
          type="checkbox"
        />
        <span>Show grid lines</span>
      </label>
      <label class="properties-panel__switch">
        <input
          v-model="showRulers"
          type="checkbox"
        />
        <span>Show row &amp; column numbers</span>
      </label>
    </section>

    <section class="properties-panel__section">
      <h4>Fill all beads</h4>
      <SegmentedControl
        v-model="backgroundMode"
        :options="[
          { value: 'color', label: 'Colour', icon: 'palette' },
          { value: 'image', label: 'Bead image', icon: 'image' },
        ]"
        size="sm"
        block
      />

      <div
        v-if="backgroundMode === 'color'"
        class="properties-panel__bg-color"
      >
        <label
          class="properties-panel__color-chip"
          :style="{ backgroundColor: backgroundColor }"
          title="Choose a background colour"
        >
          <input
            v-model="backgroundColor"
            type="color"
            class="sr-only"
          />
        </label>
        <span class="properties-panel__hex">{{
          backgroundColor.toUpperCase()
        }}</span>
      </div>

      <div
        v-else
        class="properties-panel__bg-images"
      >
        <SwatchGrid
          :items="imageItems"
          :selected-key="backgroundImage?.url ?? null"
          show-labels
          size="md"
          @select="backgroundImage = $event.source"
        />
      </div>

      <BaseButton
        variant="soft"
        icon="bucket"
        block
        :disabled="backgroundMode === 'image' && !backgroundImage"
        @click="$emit('apply-background')"
        >Change all beads</BaseButton
      >
    </section>

    <section class="properties-panel__section">
      <h4>Browser storage</h4>
      <div class="properties-panel__row">
        <BaseButton
          icon="save"
          size="sm"
          @click="$emit('save')"
          >Save now</BaseButton
        >
        <BaseButton
          icon="folderOpen"
          size="sm"
          @click="$emit('load')"
          >Load last save</BaseButton
        >
      </div>
      <p class="properties-panel__hint">
        Your work is also saved automatically.
      </p>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import NumberStepper from '@/components/ui/NumberStepper.vue';
import SegmentedControl from '@/components/ui/SegmentedControl.vue';
import SwatchGrid from '@/components/ui/SwatchGrid.vue';

const props = defineProps({
  beadImages: { type: Array, default: () => [] },
});
defineEmits(['apply-background', 'save', 'load']);
/** "Properties" tab: bead size, orientation, display, fill-all, storage. */
const cellWidth = defineModel('cellWidth', { type: Number, required: true });
const cellHeight = defineModel('cellHeight', { type: Number, required: true });
const gridUpright = defineModel('gridUpright', {
  type: Boolean,
  default: true,
});
const showGridLines = defineModel('showGridLines', {
  type: Boolean,
  default: true,
});
const showRulers = defineModel('showRulers', { type: Boolean, default: true });
const backgroundMode = defineModel('backgroundMode', {
  type: String,
  default: 'color',
});
const backgroundColor = defineModel('backgroundColor', {
  type: String,
  default: '#ffffff',
});
const backgroundImage = defineModel('backgroundImage', {
  type: Object,
  default: null,
});

const imageItems = computed(() =>
  props.beadImages.map((img) => ({
    key: img.url,
    image: img.url,
    title: img.displayName,
    label: img.displayName,
    source: img,
  })),
);
</script>

<style scoped>
.properties-panel {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.properties-panel__section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.properties-panel__section h4 {
  font-size: 13.5px;
  font-weight: 700;
}

.properties-panel__row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 14px;
}

.properties-panel__hint {
  font-size: 11.5px;
  color: var(--text-faint);
}

.properties-panel__switch {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  cursor: pointer;
}

.properties-panel__switch input {
  width: 16px;
  height: 16px;
  accent-color: var(--primary);
}

.properties-panel__bg-color {
  display: flex;
  align-items: center;
  gap: 10px;
}

.properties-panel__color-chip {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid var(--border-strong);
  cursor: pointer;
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.6);
}

.properties-panel__hex {
  font-size: 13px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.properties-panel__bg-images {
  max-height: 180px;
  overflow-y: auto;
  padding: 6px 2px 2px;
}
</style>
