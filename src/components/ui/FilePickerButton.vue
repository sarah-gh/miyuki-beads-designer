<template>
  <BaseButton
    tag="label"
    v-bind="$attrs"
    class="file-picker-btn"
  >
    <slot />
    <input
      ref="input"
      type="file"
      class="sr-only"
      :accept="accept"
      @change="onChange"
    />
  </BaseButton>
</template>

<script setup>
import { ref } from 'vue';
import BaseButton from './BaseButton.vue';

defineProps({
  accept: { type: String, default: '' },
});

const emit = defineEmits(['change']);

/**
 * A BaseButton that opens the native file chooser. Emits `change` with the
 * original input event (so existing `e.target.files[0]` handlers keep working)
 * and resets the input so choosing the same file twice still fires.
 */
defineOptions({ inheritAttrs: false });

const input = ref(null);

function onChange(event) {
  emit('change', event);
  // Let the handler read the file first, then allow re-selecting it.
  setTimeout(() => {
    if (input.value) input.value.value = '';
  });
}

defineExpose({ open: () => input.value?.click() });
</script>
