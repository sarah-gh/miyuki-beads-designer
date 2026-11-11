<template>
  <div class="page">
    <header class="page__head">
      <div>
        <h1 class="page__title">My Projects</h1>
        <p class="page__subtitle">
          {{
            drive.user
              ? 'Saved automatically in this browser and backed up to your Google Drive.'
              : 'Saved automatically in this browser. Open any project to keep editing.'
          }}
        </p>
      </div>
      <BaseButton
        variant="primary"
        icon="plus"
        @click="dialogOpen = true"
        >New project</BaseButton
      >
    </header>

    <div class="page__filters">
      <SegmentedControl
        :model-value="mode"
        :options="modeOptions"
        variant="tabs"
        @update:model-value="setMode"
      />
      <label class="search">
        <BaseIcon
          name="search"
          :size="17"
        />
        <input
          v-model="query"
          type="search"
          placeholder="Search projects"
          aria-label="Search projects"
        />
      </label>
    </div>

    <div
      v-if="filtered.length"
      class="card-grid"
    >
      <ProjectCard
        v-for="project in filtered"
        :key="project.id"
        :project="project"
        :menu-items="menuItems(project)"
        @open="openProject"
      />
    </div>

    <div
      v-else
      class="empty"
    >
      <BaseIcon
        name="folderOpen"
        :size="34"
      />
      <template v-if="query">
        <p class="empty__title">No projects match “{{ query }}”</p>
      </template>
      <template v-else>
        <p class="empty__title">
          No {{ currentMode ? currentMode.label + ' ' : '' }}projects yet
        </p>
        <p class="empty__text">
          Start from a blank grid or one of the ready-made templates.
        </p>
        <BaseButton
          variant="primary"
          icon="plus"
          @click="dialogOpen = true"
          >New {{ currentMode?.label ?? '' }} project</BaseButton
        >
      </template>
    </div>

    <NewProjectDialog
      v-model="dialogOpen"
      :initial-mode="mode || 'flat'"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseIcon from '@/components/ui/BaseIcon.vue';
import SegmentedControl from '@/components/ui/SegmentedControl.vue';
import NewProjectDialog from '@/components/projects/NewProjectDialog.vue';
import ProjectCard from '@/components/projects/ProjectCard.vue';
import { getMode, PROJECT_MODES } from '@/lib/projects/modes.js';
import { projectState, sortedProjects } from '@/lib/projects/projectStore.js';
import { useProjectActions } from '@/composables/useProjectActions.js';
import { drive } from '@/lib/drive/driveSync.js';

const route = useRoute();
const router = useRouter();
const { openProject, menuItems } = useProjectActions();

const query = ref('');
const dialogOpen = ref(false);

const mode = computed(() =>
  getMode(route.query.mode) ? route.query.mode : '',
);
const currentMode = computed(() => getMode(mode.value));

const modeOptions = computed(() => [
  { value: '', label: `All (${projectState.projects.length})` },
  ...PROJECT_MODES.map((m) => ({
    value: m.id,
    label: `${m.label} (${projectState.projects.filter((p) => p.mode === m.id).length})`,
    icon: m.icon,
  })),
]);

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase();
  return sortedProjects(mode.value || null).filter(
    (p) => !q || p.name.toLowerCase().includes(q),
  );
});

function setMode(value) {
  router.replace({ query: value ? { mode: value } : {} });
}
</script>

<style scoped src="./dashboardPage.css"></style>
