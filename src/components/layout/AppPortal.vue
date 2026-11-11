<template>
  <Teleport
    defer
    :to="selector"
    :disabled="disabled"
  >
    <slot />
  </Teleport>
</template>

<script setup>
import { computed } from 'vue';

/**
 * Renders its slot into one of the app-shell slots, so each page can put its
 * own actions in the shared header / toolbar.
 *   header          -> right side of the top header (file actions)
 *   header-start    -> next to the logo (project name, saved badge)
 *   toolbar-center  -> middle of the toolbar (zoom etc.)
 *   toolbar-end     -> right side of the toolbar (preview / steps)
 */
const props = defineProps({
  to: {
    type: String,
    required: true,
    validator: (v) =>
      ['header', 'header-start', 'toolbar-center', 'toolbar-end'].includes(v),
  },
  disabled: { type: Boolean, default: false },
});

const selector = computed(() => `#app-slot-${props.to}`);
</script>
