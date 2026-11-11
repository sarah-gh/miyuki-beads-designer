<template>
  <div class="pattern-page">
    <AppPortal to="toolbar-end">
      <ViewModeActions
        :model-value="mode"
        @update:model-value="setMode"
      />
    </AppPortal>

    <GridEditor
      v-show="mode === 'editor'"
      ref="gridEditor"
      class="pattern-page__editor"
      :project-id="id"
      :active="mode === 'editor'"
      @update-grid="handleUpdateGrid"
    />

    <template v-if="mode !== 'editor'">
      <div class="pattern-page__view">
        <BraceletPreview
          v-if="mode === 'beads' || mode === 'preview'"
          :pattern="pattern"
          :rows="rows"
          :cols="cols"
          :orientation="braceletOrientation"
          :curved="mode === 'preview'"
          :staggered="false"
          :model-url="squareStitchBeadUrl"
        />
        <WorkingPage
          v-else-if="mode === 'steps'"
          :pattern="workingPattern"
          :rows="rows"
          :cols="cols"
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
import GridEditor from '@/components/flat/GridEditor.vue';
import squareStitchBeadUrl from '@/components/flat/Square-Stitch-Delica.glb?url&inline';
import BraceletPreview from '@/components/peyote/BraceletPreview.vue';
import { beadSwatch } from '@/components/peyote/delicaCatalog.js';
import WorkingPage from '@/components/flat/WorkingPage.vue';

defineProps({
  /** Project id from the route (/flat/:id). */
  id: { type: String, required: true },
});

const gridEditor = ref(null);
const mode = ref('editor'); // editor | beads | preview | steps

// Matrix dimensions follow the displayed canvas. Bend along the longer side.
const rows = ref(16);
const cols = ref(80);
const pattern = ref(Array(16 * 80).fill('#ffffff'));
const braceletOrientation = computed(() =>
  rows.value > cols.value ? 'vertical' : 'horizontal',
);
const workingPattern = computed(() => pattern.value.map(beadSwatch));

function setMode(next) {
  // Make sure the other views get the latest pattern.
  if (gridEditor.value && mode.value === 'editor') {
    handleUpdateGrid(gridEditor.value.getGridMatrix());
  }
  mode.value = next;
}

function handleUpdateGrid(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) {
    pattern.value = [];
    rows.value = 0;
    cols.value = 0;
    return;
  }
  rows.value = matrix.length;
  cols.value = Array.isArray(matrix[0]) ? matrix[0].length : 0;
  // Flatten the 2D matrix to the 1D array the other views expect.
  pattern.value = matrix.flat();
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
  /* Load-bearing: makes this the containing block for any position:fixed
     panels the preview components render, so they stay inside the page. */
  transform: translateZ(0);
}
</style>
