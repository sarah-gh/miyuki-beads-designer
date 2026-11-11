<template>
  <div class="page">
    <header class="page__head">
      <div>
        <h1 class="page__title">Templates</h1>
        <p class="page__subtitle">
          Ready-made designs. Pick one to start a new project — your copy can be
          edited freely and the template stays as it is.
        </p>
      </div>
    </header>

    <div class="page__filters">
      <SegmentedControl
        :model-value="mode"
        :options="modeOptions"
        variant="tabs"
        @update:model-value="(v) => setFilter({ mode: v })"
      />
    </div>
    <div class="chips">
      <button
        v-for="option in categoryOptions"
        :key="option.value"
        type="button"
        class="chip"
        :class="{ 'is-active': category === option.value }"
        :aria-pressed="category === option.value"
        @click="setFilter({ category: option.value })"
      >
        {{ option.label }}
      </button>
    </div>

    <div
      v-if="filtered.length"
      class="card-grid"
    >
      <TemplateCard
        v-for="template in filtered"
        :key="template.id"
        :template="template"
        show-mode
        action-label="Use template"
        @select="useTemplate(template)"
      />
    </div>
    <div
      v-else
      class="empty"
    >
      <BaseIcon
        name="templates"
        :size="34"
      />
      <p class="empty__title">No templates in this category yet</p>
    </div>

    <NewProjectDialog
      v-model="dialog.open"
      :initial-mode="dialog.mode"
      :initial-template-id="dialog.templateId"
    />
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BaseIcon from '@/components/ui/BaseIcon.vue';
import SegmentedControl from '@/components/ui/SegmentedControl.vue';
import NewProjectDialog from '@/components/projects/NewProjectDialog.vue';
import TemplateCard from '@/components/projects/TemplateCard.vue';
import { getMode, PROJECT_MODES } from '@/lib/projects/modes.js';
import { CATEGORIES, TEMPLATES } from '@/lib/projects/templates.js';

const route = useRoute();
const router = useRouter();

const mode = computed(() =>
  getMode(route.query.mode) ? route.query.mode : '',
);
const category = computed(() =>
  CATEGORIES.includes(route.query.category) ? route.query.category : '',
);

const modeOptions = [
  { value: '', label: 'All types' },
  ...PROJECT_MODES.map((m) => ({ value: m.id, label: m.label, icon: m.icon })),
];
const categoryOptions = [
  { value: '', label: 'All' },
  ...CATEGORIES.map((c) => ({ value: c, label: c })),
];

const filtered = computed(() =>
  TEMPLATES.filter(
    (t) =>
      (!mode.value || t.mode === mode.value) &&
      (!category.value || t.category === category.value),
  ),
);

function setFilter(patch) {
  const next = { mode: mode.value, category: category.value, ...patch };
  router.replace({
    query: Object.fromEntries(Object.entries(next).filter(([, v]) => v)),
  });
}

const dialog = reactive({ open: false, mode: 'flat', templateId: null });

function useTemplate(template) {
  dialog.mode = template.mode;
  dialog.templateId = template.id;
  dialog.open = true;
}
</script>

<style scoped src="./dashboardPage.css"></style>
