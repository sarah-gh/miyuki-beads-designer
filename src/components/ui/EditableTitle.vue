<template>
  <div
    class="editable-title"
    :class="{ 'is-editing': editing }"
  >
    <input
      v-if="editing"
      ref="input"
      v-model="draft"
      class="editable-title__input"
      maxlength="60"
      aria-label="Project name"
      @blur="commit"
      @keydown.enter="commit"
      @keydown.esc="cancel"
    />
    <button
      v-else
      type="button"
      class="editable-title__display"
      title="Rename project"
      @click="startEditing"
    >
      <span class="editable-title__text">{{ modelValue || placeholder }}</span>
      <BaseIcon
        name="pencil"
        :size="14"
      />
    </button>
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue';
import BaseIcon from './BaseIcon.vue';

/** Inline-editable name chip (project / file name). */
const props = defineProps({
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: 'Untitled' },
});
const emit = defineEmits(['update:modelValue']);

const editing = ref(false);
const draft = ref('');
const input = ref(null);

async function startEditing() {
  draft.value = props.modelValue;
  editing.value = true;
  await nextTick();
  input.value?.focus();
  input.value?.select();
}

function commit() {
  if (!editing.value) return;
  editing.value = false;
  const value = draft.value.trim();
  if (value && value !== props.modelValue) emit('update:modelValue', value);
}

function cancel() {
  editing.value = false;
}
</script>

<style scoped>
.editable-title {
  display: inline-flex;
  min-width: 0;
}

.editable-title__display,
.editable-title__input {
  height: 32px;
  max-width: 240px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.92);
  color: var(--text);
  font-size: 14px;
  font-weight: 700;
}

.editable-title__display {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.editable-title__display:hover {
  background: #fff;
}

.editable-title__text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.editable-title__input {
  width: 200px;
}

@media (max-width: 640px) {
  .editable-title__display,
  .editable-title__input {
    max-width: 150px;
    height: 30px;
    padding: 0 10px;
    font-size: 13px;
  }
}
</style>
