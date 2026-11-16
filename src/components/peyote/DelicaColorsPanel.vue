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
        <div class="colors-panel__filters">
          <select
            v-for="group in filterGroups"
            :key="group.key"
            v-model="filters[group.key]"
            class="colors-panel__search colors-panel__filter"
            :class="{ 'is-active': filters[group.key] }"
            :aria-label="`Filter by ${group.label.toLowerCase()}`"
          >
            <option value="">{{ group.all }}</option>
            <option
              v-for="option in group.options"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }} ({{ option.count }})
            </option>
          </select>
        </div>
        <button
          v-if="hasFilters"
          type="button"
          class="colors-panel__link colors-panel__clear"
          @click="clearFilters"
        >
          Clear filters
        </button>
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
import { computed, reactive, ref, watch } from 'vue';
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
const imageSearch = ref('');

// Catalog filters, built from the categories stored on each bead record.
const allBeads = Object.values(delicaCatalog);
const titleCase = (text) =>
  String(text).replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());

// Each group reads one or more values from a bead. A bead matches when the chosen value is among them.
const filterDefinitions = [
  {
    key: 'material',
    label: 'Material',
    all: 'All materials',
    values: (bead) => (bead.glassType ? [bead.glassType] : []),
  },
  {
    key: 'finish',
    label: 'Finish',
    all: 'All finishes',
    // Lining and silk tags are covered by the Lining and Material filters.
    values: (bead) =>
      bead.finishTags.filter((tag) => !/-lined$|^silk$/.test(tag)),
  },
  {
    key: 'lining',
    label: 'Lining',
    all: 'Any lining',
    values: (bead) => [bead.liningType ?? 'none'],
    labels: { color: 'Colour lined', none: 'No lining' },
  },
  {
    key: 'status',
    label: 'Availability',
    all: 'All beads',
    values: (bead) => [bead.discontinued ? 'discontinued' : 'available'],
    labels: { available: 'In production', discontinued: 'Discontinued' },
  },
];

const filterGroups = filterDefinitions.map((group) => {
  const counts = new Map();
  for (const bead of allBeads)
    for (const value of group.values(bead))
      counts.set(value, (counts.get(value) ?? 0) + 1);
  return {
    ...group,
    options: [...counts]
      .map(([value, count]) => ({
        value,
        count,
        label: group.labels?.[value] ?? titleCase(value),
      }))
      .sort((a, b) => b.count - a.count),
  };
});

const filters = reactive(
  Object.fromEntries(filterDefinitions.map((group) => [group.key, ''])),
);
const hasFilters = computed(() => Object.values(filters).some(Boolean));
function clearFilters() {
  for (const key in filters) filters[key] = '';
}

const currentEntry = computed(() => delicaEntry(color.value));
const currentThumbnail = computed(() => delicaThumbnail(color.value));
const pageSize = 96;
const visibleCount = ref(pageSize);
watch([colorSearch, filters], () => {
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
  const entries = allBeads.filter((bead) =>
    filterGroups.every(
      (group) =>
        !filters[group.key] || group.values(bead).includes(filters[group.key]),
    ),
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

.colors-panel__filters {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6px;
}

.colors-panel__filter {
  min-width: 0;
  padding: 0 6px;
  font-size: 12.5px;
}

.colors-panel__filter.is-active {
  border-color: var(--accent);
  color: var(--accent-text);
  font-weight: 600;
}

.colors-panel__clear {
  align-self: flex-start;
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
