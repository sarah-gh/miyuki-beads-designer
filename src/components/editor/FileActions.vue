<template>
  <div class="file-actions">
    <!-- Desktop / tablet: full buttons -->
    <template v-if="!compact">
      <BaseButton
        variant="header"
        icon="plus"
        @click="$emit('new')"
        >New</BaseButton
      >
      <BaseButton
        variant="header"
        icon="folderOpen"
        title="Open another saved project"
        @click="$emit('open')"
        >Open</BaseButton
      >
      <FilePickerButton
        variant="header"
        icon="upload"
        accept=".txt"
        title="Import a pattern from a .txt file"
        @change="$emit('import', $event)"
        >Import TXT</FilePickerButton
      >
    </template>

    <DropdownMenu :items="exportItems">
      <template #trigger="{ open }">
        <BaseButton
          variant="primary"
          icon="download"
          :icon-right="open ? 'chevronUp' : 'chevronDown'"
          collapse-label
          aria-label="Export"
          >Export</BaseButton
        >
      </template>
    </DropdownMenu>

    <DropdownMenu :items="overflowItems">
      <template #trigger>
        <button
          type="button"
          class="file-actions__more"
          aria-label="More actions"
          title="More actions"
        >
          <BaseIcon
            name="moreVertical"
            :size="20"
          />
        </button>
      </template>
    </DropdownMenu>

    <!-- Hidden picker opened from the overflow menu on phones -->
    <FilePickerButton
      ref="importPicker"
      class="sr-only"
      accept=".txt"
      tabindex="-1"
      aria-hidden="true"
      @change="$emit('import', $event)"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useMediaQuery } from '@vueuse/core';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseIcon from '@/components/ui/BaseIcon.vue';
import DropdownMenu from '@/components/ui/DropdownMenu.vue';
import FilePickerButton from '@/components/ui/FilePickerButton.vue';

/**
 * Header file actions: New · Open (project list) · Import TXT · Export ▾ · ⋮
 * On phones New/Open/Import move into the ⋮ menu.
 * `exportItems` / `moreItems` are DropdownMenu item lists supplied by the editor.
 */
const props = defineProps({
  exportItems: { type: Array, default: () => [] },
  moreItems: { type: Array, default: () => [] },
});

const emit = defineEmits(['new', 'open', 'import']);

const compact = useMediaQuery('(max-width: 760px)');
const importPicker = ref(null);

const overflowItems = computed(() => {
  const fileItems = compact.value
    ? [
        { label: 'New pattern', icon: 'plus', onSelect: () => emit('new') },
        {
          label: 'Open project',
          icon: 'folderOpen',
          onSelect: () => emit('open'),
        },
        {
          label: 'Import TXT',
          icon: 'upload',
          onSelect: () => importPicker.value?.open(),
        },
        ...(props.moreItems.length ? [{ divider: true }] : []),
      ]
    : [];
  return [...fileItems, ...props.moreItems];
});
</script>

<style scoped>
.file-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.file-actions__more {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: var(--radius);
  background: transparent;
  color: var(--text);
}

.file-actions__more:hover {
  background: rgba(255, 255, 255, 0.55);
}
</style>
