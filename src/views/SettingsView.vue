<template>
  <main class="settings-page">
    <h1>Settings</h1>
    <form
      class="settings-card"
      @submit.prevent="save"
    >
      <h2>AI provider</h2>
      <p>
        Use your own Groq or xAI API key for AI features such as Photo to
        bracelet.
      </p>
      <label>
        API key
        <input
          v-model.trim="key"
          type="password"
          autocomplete="off"
        />
      </label>
      <label>
        Vision model (optional)
        <input
          v-model.trim="model"
          type="text"
        />
      </label>
      <p>
        Groq keys use Groq automatically. Leave the model blank to use the
        provider default. The key is stored for this tab session. The model
        preference is saved in this browser.
      </p>
      <div class="actions">
        <BaseButton
          type="submit"
          variant="primary"
          >Save settings</BaseButton
        >
        <BaseButton
          type="button"
          @click="removeKey"
          >Remove key</BaseButton
        >
      </div>
      <p
        v-if="status"
        role="status"
      >
        {{ status }}
      </p>
    </form>
    <RouterLink
      class="photo-link"
      :to="{ name: 'image-pattern' }"
    >
      Photo to bracelet
    </RouterLink>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import {
  DEFAULT_GROK_MODEL,
  readAiKey,
  readAiModel,
  saveAiKey,
  saveAiModel,
} from '@/lib/imagePattern/grok.js';

const key = ref('');
const model = ref(DEFAULT_GROK_MODEL);
const status = ref('');
try {
  model.value = readAiModel();
  key.value = readAiKey();
} catch {
  status.value = 'Browser storage is unavailable.';
}

function save() {
  try {
    saveAiModel(model.value);
    saveAiKey(key.value);
    status.value = 'Settings saved.';
  } catch {
    status.value = 'Could not save settings in this browser.';
  }
}

function removeKey() {
  try {
    saveAiKey('');
    key.value = '';
    status.value = 'Key removed.';
  } catch {
    status.value = 'Could not remove the saved key.';
  }
}
</script>

<style scoped>
.settings-page {
  max-width: 760px;
  margin: auto;
  padding: clamp(16px, 3vw, 32px);
}
h1 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 16px;
}
h2 {
  font-size: 1.2rem;
  font-weight: 800;
}
.settings-card {
  display: grid;
  gap: 14px;
  padding: 20px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
}
p {
  color: var(--text-muted);
}
label {
  display: grid;
  gap: 6px;
  font-weight: 700;
}
input {
  width: 100%;
  min-width: 0;
  padding: 10px;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  background: var(--surface-muted);
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.photo-link {
  display: inline-block;
  margin-top: 16px;
  color: var(--accent-text);
  text-decoration: underline;
}
</style>
