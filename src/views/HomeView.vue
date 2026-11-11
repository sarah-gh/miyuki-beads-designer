<template>
  <div class="home">
    <!-- ===== Hero ===== -->
    <section class="hero">
      <div class="hero__text">
        <h1 class="hero__title">Miyuki Beads Designer</h1>
        <p class="hero__subtitle">
          Design, plan, and bring your bead ideas to life
        </p>
        <ul class="hero__features">
          <li
            v-for="feature in features"
            :key="feature.label"
          >
            <BaseIcon
              :name="feature.icon"
              :size="17"
            />
            {{ feature.label }}
          </li>
        </ul>
        <BaseButton
          variant="primary"
          size="lg"
          icon="plus"
          class="hero__cta"
          @click="openDialog()"
          >New project</BaseButton
        >
      </div>
      <div
        class="hero__art"
        aria-hidden="true"
      >
        <PatternThumb
          class="hero__bracelet"
          :matrix="heroMatrix"
        />
      </div>
    </section>

    <!-- ===== Start a new project ===== -->
    <section class="home__section">
      <header class="section-head">
        <h2 class="section-head__title">
          <BaseIcon
            name="sparkles"
            :size="22"
          />
          Start a New Project
        </h2>
        <RouterLink
          :to="{ name: 'templates' }"
          class="section-head__link"
          >Browse templates
          <BaseIcon
            name="arrowRight"
            :size="16"
        /></RouterLink>
      </header>
      <div class="modes">
        <ModeCard
          v-for="mode in PROJECT_MODES"
          :key="mode.id"
          :mode="mode"
          :art="templatesFor(mode.id)[0]"
          :count="countFor(mode.id)"
          @select="openDialog(mode.id)"
        />
        <ModeCard
          v-for="mode in EXTRA_MODES"
          :key="mode.id"
          :mode="mode"
        />
      </div>
    </section>

    <!-- ===== Google Drive ===== -->
    <DriveConnectCard />

    <!-- ===== Recent projects ===== -->
    <section class="home__section">
      <header class="section-head">
        <h2 class="section-head__title">
          <BaseIcon
            name="folder"
            :size="22"
          />
          Recent Projects
        </h2>
        <RouterLink
          v-if="recent.length"
          :to="{ name: 'projects' }"
          class="section-head__link"
          >View all
          <BaseIcon
            name="arrowRight"
            :size="16"
        /></RouterLink>
      </header>

      <div
        v-if="recent.length"
        class="card-grid"
      >
        <ProjectCard
          v-for="project in recent"
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
          :size="32"
        />
        <p class="empty__title">No projects yet</p>
        <p class="empty__text">
          Pick a type above, or start from one of the templates below. Your
          projects are saved automatically in this browser.
        </p>
      </div>
    </section>

    <!-- ===== Get inspired ===== -->
    <section class="home__section">
      <header class="section-head">
        <h2 class="section-head__title">
          <BaseIcon
            name="flower"
            :size="22"
          />
          Get Inspired
        </h2>
        <RouterLink
          :to="{ name: 'templates' }"
          class="section-head__link"
          >All templates
          <BaseIcon
            name="arrowRight"
            :size="16"
        /></RouterLink>
      </header>
      <div class="chips">
        <RouterLink
          v-for="category in CATEGORIES"
          :key="category"
          :to="{ name: 'templates', query: { category } }"
          class="chip"
          >{{ category }}</RouterLink
        >
      </div>
      <div class="card-grid">
        <TemplateCard
          v-for="template in featured"
          :key="template.id"
          :template="template"
          show-mode
          action-label="Use template"
          @select="openDialog(template.mode, template.id)"
        />
      </div>
    </section>

    <NewProjectDialog
      v-model="dialog.open"
      :initial-mode="dialog.mode"
      :initial-template-id="dialog.templateId"
    />
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import { RouterLink } from 'vue-router';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseIcon from '@/components/ui/BaseIcon.vue';
import DriveConnectCard from '@/components/drive/DriveConnectCard.vue';
import ModeCard from '@/components/projects/ModeCard.vue';
import NewProjectDialog from '@/components/projects/NewProjectDialog.vue';
import PatternThumb from '@/components/projects/PatternThumb.vue';
import ProjectCard from '@/components/projects/ProjectCard.vue';
import TemplateCard from '@/components/projects/TemplateCard.vue';
import { EXTRA_MODES, getMode, PROJECT_MODES } from '@/lib/projects/modes.js';
import { projectState, sortedProjects } from '@/lib/projects/projectStore.js';
import {
  CATEGORIES,
  getTemplate,
  templatesFor,
} from '@/lib/projects/templates.js';
import { useProjectActions } from '@/composables/useProjectActions.js';

const { openProject, menuItems } = useProjectActions();

const features = [
  { icon: 'palette', label: 'Design patterns' },
  { icon: 'cube', label: 'Preview in 3D' },
  { icon: 'steps', label: 'Step-by-step' },
  { icon: 'save', label: 'Auto-saved projects' },
];

const heroTemplate = getTemplate('flat-floral-band');
const heroMatrix = getMode('flat').toMatrix(heroTemplate.data);

const recent = computed(() => sortedProjects().slice(0, 8));

// One or two templates of each mode, so all modes are represented.
const featured = PROJECT_MODES.flatMap((mode) =>
  templatesFor(mode.id).slice(0, 2),
).slice(0, 6);

function countFor(mode) {
  return projectState.projects.filter((p) => p.mode === mode).length;
}

const dialog = reactive({ open: false, mode: 'flat', templateId: null });

function openDialog(mode = 'flat', templateId = null) {
  dialog.mode = mode;
  dialog.templateId = templateId;
  dialog.open = true;
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 1320px;
  margin: 0 auto;
  padding: 24px;
}

/* ---- Hero ---------------------------------------------------------------------- */
.hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 240px;
  overflow: hidden;
  padding: 32px 36px;
  border: 1px solid var(--border);
  border-radius: 20px;
  background:
    radial-gradient(
      circle at 85% 20%,
      rgba(255, 255, 255, 0.7),
      transparent 45%
    ),
    linear-gradient(115deg, var(--accent-soft) 0%, #f9e9e2 45%, #f1ddd3 100%);
}

.hero__text {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  max-width: 560px;
}

.hero__title {
  color: var(--dark);
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 800;
  line-height: 1.1;
}

.hero__subtitle {
  color: var(--text);
  font-size: clamp(15px, 1.6vw, 19px);
}

.hero__features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0 6px;
  list-style: none;
}

.hero__features li {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 36px;
  padding: 0 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: var(--shadow-sm);
  font-size: 13.5px;
  font-weight: 600;
}

.hero__features li :deep(svg) {
  color: var(--accent-text);
}

.hero__art {
  position: absolute;
  top: 50%;
  right: -40px;
  width: 46%;
  height: 120px;
  transform: translateY(-50%) perspective(700px) rotateY(-24deg) rotate(-8deg);
}

.hero__bracelet {
  width: 100%;
  height: 100%;
  border-radius: 60px;
  border: 6px solid #e2b866;
  box-shadow:
    0 20px 40px rgba(61, 46, 41, 0.25),
    inset 0 0 0 1px rgba(255, 255, 255, 0.3);
}

/* ---- Sections ------------------------------------------------------------------- */
.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.section-head__title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 21px;
  font-weight: 800;
}

.section-head__title :deep(svg) {
  color: var(--accent);
}

.section-head__link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--text);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}

.section-head__link:hover {
  color: var(--accent-text);
}

.modes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 14px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 14px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 14px;
}

.chip {
  display: inline-flex;
  align-items: center;
  height: 36px;
  padding: 0 16px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  color: var(--text);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}

.chip:hover {
  border-color: var(--accent);
  color: var(--accent-text);
}

.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 36px 20px;
  border: 1.5px dashed var(--border-strong);
  border-radius: var(--radius-lg);
  color: var(--text-muted);
  text-align: center;
}

.empty__title {
  color: var(--text);
  font-size: 16px;
  font-weight: 700;
}

.empty__text {
  max-width: 420px;
  font-size: 14px;
}

@media (max-width: 900px) {
  .hero__art {
    opacity: 0.35;
  }
}

@media (max-width: 640px) {
  .home {
    gap: 26px;
    padding: 16px;
  }

  .hero {
    padding: 24px 20px;
  }

  .hero__art {
    display: none;
  }

  .section-head__title {
    font-size: 18px;
  }

  .hero__features li {
    height: 32px;
    padding: 0 12px;
    font-size: 12.5px;
  }

  .modes,
  .card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }
}
</style>
