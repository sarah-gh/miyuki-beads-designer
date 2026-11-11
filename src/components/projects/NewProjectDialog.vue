<template>
  <Teleport to="body">
    <Transition name="npd-fade">
      <div
        v-if="modelValue"
        class="npd-backdrop"
        @pointerdown.self="close"
      >
        <form
          class="npd"
          role="dialog"
          aria-modal="true"
          aria-labelledby="npd-title"
          @submit.prevent="submit"
          @keydown.esc="close"
        >
          <header class="npd__header">
            <h2
              id="npd-title"
              class="npd__title"
            >
              New project
            </h2>
            <button
              type="button"
              class="npd__close"
              aria-label="Close"
              @click="close"
            >
              <BaseIcon name="x" />
            </button>
          </header>

          <div class="npd__body">
            <section>
              <h3 class="npd__label">Type</h3>
              <div class="npd__modes">
                <button
                  v-for="m in PROJECT_MODES"
                  :key="m.id"
                  type="button"
                  class="npd__mode"
                  :class="{ 'is-active': m.id === mode }"
                  :aria-pressed="m.id === mode"
                  @click="selectMode(m.id)"
                >
                  <BaseIcon
                    :name="m.icon"
                    :size="18"
                  />
                  {{ m.label }}
                </button>
              </div>
            </section>

            <section>
              <label
                class="npd__label"
                for="npd-name"
                >Name</label
              >
              <input
                id="npd-name"
                ref="nameInput"
                v-model="name"
                class="npd__input"
                type="text"
                maxlength="80"
                :placeholder="placeholderName"
              />
            </section>

            <section>
              <h3 class="npd__label">Start from</h3>
              <div class="npd__templates">
                <button
                  type="button"
                  class="npd__blank"
                  :class="{ 'is-selected': !templateId }"
                  :aria-pressed="!templateId"
                  @click="templateId = null"
                >
                  <span class="npd__blank-art">
                    <BaseIcon
                      name="plus"
                      :size="26"
                    />
                  </span>
                  <span class="npd__blank-name">Blank</span>
                  <span class="npd__blank-meta">{{ blankSize }}</span>
                </button>
                <TemplateCard
                  v-for="t in modeTemplates"
                  :key="t.id"
                  :template="t"
                  selectable
                  :selected="t.id === templateId"
                  @select="templateId = t.id"
                />
              </div>
            </section>
          </div>

          <footer class="npd__footer">
            <BaseButton @click="close">Cancel</BaseButton>
            <BaseButton
              type="submit"
              variant="primary"
              icon="plus"
              >Create project</BaseButton
            >
          </footer>
        </form>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, nextTick, ref, watch } from 'vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseIcon from '@/components/ui/BaseIcon.vue';
import TemplateCard from './TemplateCard.vue';
import { getMode, PROJECT_MODES } from '@/lib/projects/modes.js';
import { getTemplate, templatesFor } from '@/lib/projects/templates.js';
import { useProjectActions } from '@/composables/useProjectActions.js';

/** Pick a type, a name and blank / template, then create and open the project. */
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  initialMode: { type: String, default: 'flat' },
  initialTemplateId: { type: String, default: null },
});
const emit = defineEmits(['update:modelValue']);

const { create } = useProjectActions();

const mode = ref(props.initialMode);
const templateId = ref(null);
const name = ref('');
const nameInput = ref(null);

const modeTemplates = computed(() => templatesFor(mode.value));
const template = computed(() => getTemplate(templateId.value));
const placeholderName = computed(
  () => template.value?.name ?? getMode(mode.value).defaultName,
);
const blankSize = computed(() => {
  const def = getMode(mode.value);
  const { width, height } = def.size(def.blank());
  return `${width} × ${height}`;
});

function selectMode(id) {
  if (id === mode.value) return;
  mode.value = id;
  templateId.value = null;
}

watch(
  () => props.modelValue,
  async (open) => {
    if (!open) return;
    mode.value = getMode(props.initialMode) ? props.initialMode : 'flat';
    templateId.value = props.initialTemplateId;
    name.value = '';
    await nextTick();
    nameInput.value?.focus();
  },
  { immediate: true },
);

function close() {
  emit('update:modelValue', false);
}

function submit() {
  const project = create({
    mode: mode.value,
    name: name.value.trim() || placeholderName.value,
    template: template.value,
  });
  if (project) close();
}
</script>

<style scoped>
.npd-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 16px;
  background: rgba(42, 32, 28, 0.42);
}

.npd {
  display: flex;
  flex-direction: column;
  width: min(760px, 100%);
  max-height: min(88dvh, 820px);
  overflow: hidden;
  border-radius: 18px;
  background: var(--surface);
  box-shadow: var(--shadow-lg);
}

.npd__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px 6px;
}

.npd__title {
  font-size: 20px;
  font-weight: 800;
}

.npd__close {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: var(--radius);
  background: transparent;
  color: var(--text-muted);
}

.npd__close:hover {
  background: var(--surface-sunken);
  color: var(--text);
}

.npd__body {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 10px 20px 20px;
  overflow-y: auto;
}

.npd__label {
  display: block;
  margin-bottom: 8px;
  color: var(--text-muted);
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.npd__modes {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.npd__mode {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 14px;
  border: 1.5px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  font-size: 14px;
  font-weight: 700;
}

.npd__mode:hover {
  border-color: var(--border-strong);
}

.npd__mode.is-active {
  border-color: var(--accent);
  background: var(--accent-soft);
  color: var(--accent-text);
}

.npd__input {
  width: 100%;
  height: 44px;
  padding: 0 14px;
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-muted);
  font-size: 15px;
}

.npd__input:focus {
  border-color: var(--accent);
  background: var(--surface);
}

.npd__templates {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 12px;
}

.npd__blank {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 8px 10px;
  border: 1.5px dashed var(--border-strong);
  border-radius: var(--radius-lg);
  background: var(--surface);
  text-align: left;
}

.npd__blank.is-selected {
  border-style: solid;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
}

.npd__blank-art {
  display: grid;
  place-items: center;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-sm);
  background: var(--surface-muted);
  color: var(--text-muted);
}

.npd__blank-name {
  padding: 0 4px;
  font-size: 13.5px;
  font-weight: 700;
}

.npd__blank-meta {
  margin-top: -6px;
  padding: 0 4px;
  color: var(--text-muted);
  font-size: 12px;
}

.npd__footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 14px 20px;
  border-top: 1px solid var(--border);
  background: var(--surface-muted);
}

.npd-fade-enter-active,
.npd-fade-leave-active {
  transition: opacity 0.15s ease;
}

.npd-fade-enter-from,
.npd-fade-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .npd-backdrop {
    place-items: end stretch;
    padding: 0;
  }

  .npd {
    width: 100%;
    max-height: 92dvh;
    border-radius: 18px 18px 0 0;
  }

  .npd__templates {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
