<template>
  <div class="pattern-page">
    <AppPortal to="toolbar-end">
      <ViewModeActions
        :model-value="mode"
        @update:model-value="setMode"
      />
    </AppPortal>

    <PeyoteGridEditor
      v-show="mode === 'editor' && activeDesign === 'peyote'"
      ref="peyoteEditor"
      class="pattern-page__editor"
      :project-id="id"
      :active="mode === 'editor' && activeDesign === 'peyote'"
      @preview-grid="setMode('preview')"
      @update-grid="handlePeyoteUpdate"
    />

    <template v-if="mode !== 'editor'">
      <div class="pattern-page__view">
        <component
          :is="activeDesign === 'peyote' ? PeyoteBeads : MiyukiBeads"
          v-if="mode === 'beads'"
          v-bind="previewProps"
          class="content-component"
        />
        <component
          :is="activeDesign === 'peyote' ? PeyoteBracelet : BraceletPreview"
          v-if="mode === 'preview'"
          v-bind="previewProps"
          class="content-component"
        />
        <WorkingPage
          v-if="mode === 'steps'"
          :pattern="workingPattern"
          :rows="rows"
          :cols="cols"
          class="content-component"
        />
      </div>
      <StatusBar :items="statusItems" />
    </template>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import AppPortal from '@/components/layout/AppPortal.vue';
import StatusBar from '@/components/ui/StatusBar.vue';
import ViewModeActions from '@/components/editor/ViewModeActions.vue';
import PeyoteBeads from '@/components/peyote/MiyukiBeads.vue';
import PeyoteBracelet from '@/components/peyote/BraceletPreview.vue';
import { beadSwatch } from '@/components/peyote/delicaCatalog.js';
import MiyukiBeads from '@/components/flat/MiyukiBeads.vue';
import BraceletPreview from '@/components/flat/BraceletPreview.vue';
import WorkingPage from '@/components/flat/WorkingPage.vue';
import PeyoteGridEditor from '@/components/peyote/PeyoteGridEditor.vue';

defineProps({
  /** Project id from the route (/weaving/:id). */
  id: { type: String, required: true },
});

const mode = ref('editor'); // editor | beads | preview | steps
const activeDesign = ref('peyote');
const peyoteEditor = ref(null);
const weaving = ref({
  rows: 16,
  cols: 80,
  pattern: Array(16 * 80).fill('#ffffff'),
});
const peyote = ref({ rows: 0, cols: 0, pattern: [], orientation: 'vertical' });
const previewProps = computed(() =>
  activeDesign.value === 'peyote' ? peyote.value : weaving.value,
);
const rows = computed(() => previewProps.value.rows);
const cols = computed(() => previewProps.value.cols);
const pattern = computed(() => previewProps.value.pattern);
const workingPattern = computed(() => pattern.value.map(beadSwatch));


function setMode(next) {
  syncPeyote();
  mode.value = next;
}

function readMatrix(matrix) {
  return {
    rows: matrix.length,
    cols: matrix[0]?.length ?? 0,
    pattern: matrix.flat(),
  };
}


function handlePeyoteUpdate(matrix, orientation) {
  peyote.value = { ...readMatrix(matrix), orientation };
}

function syncPeyote() {
  if (activeDesign.value === 'peyote' && peyoteEditor.value) {
    handlePeyoteUpdate(...peyoteEditor.value.snapshot());
  }
}

const statusItems = computed(() => [
  {
    key: 'size',
    value: `${cols.value} x ${rows.value}`,
    title: 'Columns x rows',
  },
  { key: 'beads', value: `${pattern.value.length} beads` },
  {
    key: 'grams',
    label: 'grams:',
    value: (pattern.value.length / 190).toFixed(2),
  },
]);
</script>

<style scoped>
.pattern-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
}

.pattern-page__editor {
  flex: 1;
  min-height: 0;
}

.pattern-page__view {
  position: relative;
  flex: 1;
  min-height: 0;
  overflow: auto;
  background: var(--surface);
  /* Load-bearing, not decorative: backdrop-filter makes this element the
     containing block for the position:fixed panels the previews render
     inside it. Removing it lets those panels escape to the viewport. */
  backdrop-filter: blur(10px);
}

.content-component {
  min-height: 600px;
}
</style>
