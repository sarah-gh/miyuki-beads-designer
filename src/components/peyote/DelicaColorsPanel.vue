<template>
  <div class="colors-panel">
    <SegmentedControl
      v-if="showImageMode"
      v-model="paintMode"
      :options="[
        { value: 'color', label: 'Delica beads', icon: 'palette' },
        { value: 'image', label: 'Bead image', icon: 'image' },
      ]"
      size="sm"
      block
    />

    <!-- Delica colour mode -->
    <template v-if="paintMode === 'color'">
      <div class="colors-panel__current">
        <span
          class="colors-panel__chip"
          :style="
            currentThumbnail
              ? { backgroundImage: `url(${currentThumbnail})` }
              : { backgroundColor: beadSwatch(color) }
          "
        ></span>
        <div class="colors-panel__current-text">
          <strong>{{ currentEntry?.code ?? color }}</strong>
          <span v-if="currentEntry"
            >{{ currentEntry.name }} · {{ currentEntry.label }}</span
          >
          <span v-else>Custom colour</span>
          <span v-if="currentEntry && !currentEntry.swatch"
            >Preview colour unavailable</span
          >
        </div>
      </div>

      <button
        v-if="currentEntry"
        type="button"
        class="colors-panel__link colors-panel__fill"
        @click="$emit('fill-with-bead', currentEntry.code)"
      >
        {{
          showImageMode
            ? 'Fill all with this bead'
            : 'Fill this panel with this bead'
        }}
      </button>

      <div class="colors-panel__section">
        <div class="colors-panel__section-head">
          <h4>Recent Beads</h4>
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
          empty-text="Colours you paint with show up here."
          @select="color = $event.key"
          @remove="$emit('remove-recent-color', $event.key)"
        />
      </div>

      <div class="colors-panel__section">
        <div class="colors-panel__section-head">
          <h4>Delica Catalog</h4>
          <span class="colors-panel__count">{{ matchingBeads.length }}</span>
        </div>
        <input
          v-model="colorSearch"
          type="search"
          class="colors-panel__search"
          placeholder="Search code, name or finish…"
          aria-label="Search Delica beads"
        />
        <select
          v-if="showFinishFilter"
          v-model="finishFilter"
          class="colors-panel__search"
          aria-label="Filter by bead finish"
        >
          <option value="">All finishes</option>
          <option
            v-for="finish in finishes"
            :key="finish"
            :value="finish"
          >
            {{ finish }}
          </option>
        </select>
        <div class="colors-panel__library">
          <SwatchGrid
            :items="catalogItems"
            :selected-key="color"
            show-labels
            size="lg"
            empty-text="No beads match your search."
            @select="color = $event.key"
          />
          <button
            v-if="visibleCount < matchingBeads.length"
            type="button"
            class="colors-panel__link colors-panel__more"
            @click="visibleCount += pageSize"
          >
            Show more beads
          </button>
        </div>
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
          v-model="imageSearch"
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
import { computed, ref, watch } from 'vue';
import SegmentedControl from '@/components/ui/SegmentedControl.vue';
import SwatchGrid from '@/components/ui/SwatchGrid.vue';
import {
  beadSwatch,
  delicaCatalog,
  delicaEntry,
  normalizeDelicaCode,
} from './delicaCatalog.js';
import { delicaThumbnail } from './delicaThumbnail.js';

/** Peyote "Colors" tab: Delica bead codes instead of a free hex picker. */
const props = defineProps({
  showFinishFilter: { type: Boolean, default: false },
  showImageMode: { type: Boolean, default: true },
  recentColors: { type: Array, default: () => [] },
  beadImages: { type: Array, default: () => [] },
  recentImages: { type: Array, default: () => [] },
  selectedImageUrl: { type: String, default: null },
});
defineEmits([
  'select-image',
  'fill-with-bead',
  'remove-recent-color',
  'clear-recent-colors',
  'remove-recent-image',
  'clear-recent-images',
]);
const paintMode = defineModel('paintMode', { type: String, default: 'color' });
const color = defineModel('color', { type: String, required: true });

const colorSearch = ref('');
const finishFilter = ref('');
const finishes = [
  ...new Set(Object.values(delicaCatalog).flatMap((entry) => entry.finishTags)),
].sort();
const imageSearch = ref('');

const currentEntry = computed(() => delicaEntry(color.value));
const currentThumbnail = computed(() => delicaThumbnail(color.value));
const pageSize = 96;
const visibleCount = ref(pageSize);
watch([colorSearch, finishFilter], () => {
  visibleCount.value = pageSize;
});

const recentColorItems = computed(() =>
  props.recentColors.map((c) => {
    const entry = delicaEntry(c);
    return {
      key: c,
      color: beadSwatch(c),
      image: delicaThumbnail(c),
      title: entry ? `${entry.code} · ${entry.name}` : c,
    };
  }),
);

const matchingBeads = computed(() => {
  const q = colorSearch.value.trim().toLowerCase();
  const codeQuery = /^(?:db[ -]?)?\d+[a-z]*(?:-\d*)?$/i.test(q)
    ? normalizeDelicaCode(q.startsWith('db') ? q : 'DB' + q)
    : '';
  const entries = Object.values(delicaCatalog).filter(
    (entry) =>
      !finishFilter.value || entry.finishTags.includes(finishFilter.value),
  );
  if (!q) return entries;
  const matches = entries.filter(
    (bead) =>
      (codeQuery && bead.code.startsWith(codeQuery)) ||
      [bead.code, bead.catalogCode, bead.name, bead.label].some((text) =>
        text?.toLowerCase().includes(q),
      ),
  );
  const exact = matches.findIndex((bead) => bead.code === codeQuery);
  if (exact > 0) matches.unshift(...matches.splice(exact, 1));
  return matches;
});

const catalogItems = computed(() =>
  matchingBeads.value.slice(0, visibleCount.value).map((bead) => ({
    key: bead.code,
    image: delicaThumbnail(bead.code),
    title: [
      bead.code,
      bead.name,
      bead.label,
      !bead.swatch && 'Preview colour unavailable',
    ]
      .filter(Boolean)
      .join(' · '),
    label: bead.code,
  })),
);

const filteredImages = computed(() => {
  const q = imageSearch.value.trim().toLowerCase();
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

.colors-panel__current {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm, 10px);
  background: var(--surface-muted);
}

.colors-panel__chip {
  flex-shrink: 0;
  background-size: cover;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid rgba(61, 46, 41, 0.15);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25);
}

.colors-panel__current-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
  line-height: 1.3;
}

.colors-panel__current-text strong {
  font-size: 14px;
}

.colors-panel__current-text span {
  font-size: 12.5px;
  color: var(--text-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

.colors-panel__fill {
  align-self: flex-start;
}

.colors-panel__more {
  display: block;
  margin: 10px auto 2px;
}

.colors-panel__hint {
  font-size: 12.5px;
  color: var(--text-muted);
}
</style>
