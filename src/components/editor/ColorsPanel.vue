<template>
  <div class="colors-panel">
    <SegmentedControl
      v-model="paintMode"
      :options="[
        { value: 'color', label: 'Colour', icon: 'palette' },
        { value: 'image', label: 'Bead image', icon: 'image' },
      ]"
      size="sm"
      block
    />

    <!-- Colour mode -->
    <template v-if="paintMode === 'color'">
      <ColorPicker v-model="color" />

      <div class="colors-panel__section">
        <div class="colors-panel__section-head">
          <h4>Recent Colors</h4>
          <button
            v-if="recentColors.length"
            type="button"
            class="colors-panel__link"
            @click="$emit('clear-recent-colors')"
          >
            Clear
          </button>
        </div>
        <SwatchGrid
          :items="recentColorItems"
          :selected-key="color"
          removable
          addable
          add-label="Add the current colour to recent colours"
          @select="color = $event.key"
          @remove="$emit('remove-recent-color', $event.key)"
          @add="$emit('add-recent-color')"
        />
      </div>
    </template>

    <!-- Bead image mode -->
    <template v-else>
      <div
        v-if="recentImages.length"
        class="colors-panel__section"
      >
        <div class="colors-panel__section-head">
          <h4>Recent Beads</h4>
          <button
            type="button"
            class="colors-panel__link"
            @click="$emit('clear-recent-images')"
          >
            Clear
          </button>
        </div>
        <SwatchGrid
          :items="toImageItems(recentImages)"
          :selected-key="selectedImageUrl"
          removable
          @select="$emit('select-image', $event.source)"
          @remove="$emit('remove-recent-image', $event.source)"
        />
      </div>

      <div class="colors-panel__section">
        <div class="colors-panel__section-head">
          <h4>Bead Library</h4>
          <span class="colors-panel__count">{{ beadImages.length }}</span>
        </div>
        <input
          v-model="search"
          type="search"
          class="colors-panel__search"
          placeholder="Search bead code…"
          aria-label="Search bead code"
        />
        <div class="colors-panel__library">
          <SwatchGrid
            :items="toImageItems(filteredImages)"
            :selected-key="selectedImageUrl"
            show-labels
            size="lg"
            empty-text="No beads match your search."
            @select="$emit('select-image', $event.source)"
          />
        </div>
      </div>
      <p
        v-if="!selectedImageUrl"
        class="colors-panel__hint"
      >
        Pick a bead to start painting with it.
      </p>
    </template>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import ColorPicker from '@/components/ui/ColorPicker.vue';
import SegmentedControl from '@/components/ui/SegmentedControl.vue';
import SwatchGrid from '@/components/ui/SwatchGrid.vue';

const props = defineProps({
  recentColors: { type: Array, default: () => [] },
  beadImages: { type: Array, default: () => [] },
  recentImages: { type: Array, default: () => [] },
  selectedImageUrl: { type: String, default: null },
});
defineEmits([
  'select-image',
  'remove-recent-color',
  'clear-recent-colors',
  'add-recent-color',
  'remove-recent-image',
  'clear-recent-images',
]);
/** "Colors" tab: paint mode, colour picker, recent colours, bead image library. */
const paintMode = defineModel('paintMode', { type: String, default: 'color' });
const color = defineModel('color', { type: String, default: '#ff0000' });

const search = ref('');

const recentColorItems = computed(() =>
  props.recentColors.map((c) => ({ key: c, color: c, title: c.toUpperCase() })),
);

const filteredImages = computed(() => {
  const q = search.value.trim().toLowerCase();
  if (!q) return props.beadImages;
  return props.beadImages.filter((img) =>
    img.displayName.toLowerCase().includes(q),
  );
});

function toImageItems(images) {
  return images.map((img) => ({
    key: img.url,
    image: img.url,
    title: img.displayName,
    label: img.displayName,
    source: img,
  }));
}
</script>

<style scoped>
.colors-panel {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.colors-panel__section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.colors-panel__section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.colors-panel__section-head h4 {
  font-size: 13.5px;
  font-weight: 700;
}

.colors-panel__link {
  border: none;
  background: none;
  color: var(--accent-text);
  font-size: 12.5px;
  font-weight: 600;
}

.colors-panel__link:hover {
  text-decoration: underline;
}

.colors-panel__count {
  font-size: 12px;
  color: var(--text-faint);
}

.colors-panel__search {
  height: 32px;
  padding: 0 10px;
  border: 1px solid var(--border-strong);
  border-radius: 8px;
  background: #fff;
  font-size: 13px;
}

.colors-panel__search:focus {
  border-color: var(--accent);
}

.colors-panel__library {
  max-height: 260px;
  overflow-y: auto;
  padding: 6px 2px 2px;
}

.colors-panel__hint {
  font-size: 12.5px;
  color: var(--text-muted);
}
</style>
