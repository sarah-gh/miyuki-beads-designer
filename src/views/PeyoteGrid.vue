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
      @preview-grid="setMode('preview')"
      @update-grid="handleUpdateGrid"
    />

    <template v-if="mode !== 'editor'">
      <div class="pattern-page__view">
        <MiyukiBeads
          v-if="mode === 'beads'"
          :pattern="pattern"
          :orientation="orientation"
          :rows="rows"
          :cols="cols"
          class="content-component"
        />
        <BraceletPreview
          v-if="mode === 'preview'"
          :pattern="pattern"
          :orientation="orientation"
          :rows="rows"
          :cols="cols"
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
import { beadSwatch } from '@/components/peyote/delicaCatalog.js';
import GridEditor from '@/components/peyote/PeyoteGridEditor.vue';
import MiyukiBeads from '@/components/peyote/MiyukiBeads.vue';
import BraceletPreview from '@/components/peyote/BraceletPreview.vue';
import WorkingPage from '@/components/flat/WorkingPage.vue';

defineProps({
  /** Project id from the route (/peyote/:id). */
  id: { type: String, required: true },
});

// Filled in from the editor once it has loaded the project.
const orientation = ref('vertical');
const gridEditor = ref(null);
const rows = ref(0);
const cols = ref(0);
const pattern = ref([]);
const workingPattern = computed(() => pattern.value.map(beadSwatch));
const mode = ref('editor'); // editor | beads | preview | steps

function setMode(next) {
  // Pull the latest pattern out of the editor before showing another view.
  if (mode.value === 'editor' && next !== 'editor' && gridEditor.value) {
    handleUpdateGrid(...gridEditor.value.snapshot());
  }
  mode.value = next;
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

function handleUpdateGrid(matrix, nextOrientation) {
  orientation.value = nextOrientation;
  if (!Array.isArray(matrix) || matrix.length === 0) {
    pattern.value = [];
    rows.value = 0;
    cols.value = 0;
    return;
  }
  rows.value = matrix.length;
  cols.value = Array.isArray(matrix[0]) ? matrix[0].length : 0;
  // flatten 2D matrix to 1D array expected by MiyukiBeads
  pattern.value = matrix.flat();
}
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
  min-height: 500px;
}
</style>
