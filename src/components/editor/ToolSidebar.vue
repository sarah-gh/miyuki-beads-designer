<template>
  <nav
    ref="root"
    class="tool-sidebar"
    :class="{ 'is-phone': isPhone }"
    aria-label="Tools"
  >
    <template
      v-for="(item, index) in barItems"
      :key="item.id || `divider-${index}`"
    >
      <div
        v-if="item.divider"
        class="tool-sidebar__divider"
        role="separator"
      ></div>
      <button
        v-else
        type="button"
        class="tool-sidebar__item"
        :class="{ 'is-active': item.active, 'is-danger': item.danger }"
        :disabled="item.disabled"
        :aria-pressed="item.toggle ? String(!!item.active) : undefined"
        :title="item.shortcut ? `${item.label} (${item.shortcut})` : item.label"
        @click="run(item)"
      >
        <BaseIcon
          :name="item.icon"
          :size="19"
        />
        <span class="tool-sidebar__label">{{ item.label }}</span>
      </button>
    </template>

    <!-- Phone only: the less frequent tools live behind "More" -->
    <template v-if="isPhone && overflowItems.length">
      <div
        class="tool-sidebar__divider"
        role="separator"
      ></div>
      <button
        type="button"
        class="tool-sidebar__item tool-sidebar__more"
        :class="{ 'is-active': moreOpen || overflowActive }"
        :aria-expanded="String(moreOpen)"
        aria-label="More tools"
        title="More tools"
        @click="moreOpen = !moreOpen"
      >
        <BaseIcon
          :name="moreOpen ? 'x' : 'moreVertical'"
          :size="19"
        />
        <span class="tool-sidebar__label">More</span>
      </button>

      <Transition name="tool-more">
        <div
          v-if="moreOpen"
          class="tool-sidebar__overflow"
          role="menu"
        >
          <button
            v-for="item in overflowItems"
            :key="item.id"
            type="button"
            role="menuitem"
            class="tool-sidebar__overflow-item"
            :class="{ 'is-active': item.active }"
            :disabled="item.disabled"
            @click="run(item, true)"
          >
            <BaseIcon
              :name="item.icon"
              :size="20"
            />
            <span>{{ item.label }}</span>
          </button>
        </div>
      </Transition>
    </template>
  </nav>
</template>

<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import { useMediaQuery } from '@vueuse/core';
import BaseIcon from '@/components/ui/BaseIcon.vue';

/**
 * Editor tools: vertical list on desktop, icon rail on tablet and a bottom
 * bar on phones. On phones only items marked `primary` stay in the bar; the
 * rest open from a "More" panel so nothing is cut off.
 * items: [{ id, label, icon, onClick, primary?, active?, disabled?, toggle?, danger?, shortcut? } | { divider: true }]
 */
const props = defineProps({
  items: { type: Array, required: true },
});

const isPhone = useMediaQuery('(max-width: 640px)');
const moreOpen = ref(false);
const root = ref(null);

const barItems = computed(() =>
  isPhone.value
    ? props.items.filter((item) => !item.divider && item.primary)
    : props.items,
);

const overflowItems = computed(() =>
  props.items.filter((item) => !item.divider && !item.primary),
);

const overflowActive = computed(() =>
  overflowItems.value.some((item) => item.active),
);

function run(item, fromOverflow = false) {
  item.onClick?.();
  if (fromOverflow) moreOpen.value = false;
}

function onOutside(event) {
  if (root.value && !root.value.contains(event.target)) moreOpen.value = false;
}

watch(moreOpen, (open) => {
  if (open) document.addEventListener('pointerdown', onOutside, true);
  else document.removeEventListener('pointerdown', onOutside, true);
});

watch(isPhone, (phone) => {
  if (!phone) moreOpen.value = false;
});

onBeforeUnmount(() =>
  document.removeEventListener('pointerdown', onOutside, true),
);
</script>

<style scoped>
.tool-sidebar {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 132px;
  padding: 10px 8px;
  background: var(--surface);
  border-right: 1px solid var(--border);
  overflow-y: auto;
  scrollbar-width: thin;
}

.tool-sidebar__item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 36px;
  padding: 0 10px;
  border: 1px solid transparent;
  border-radius: var(--radius);
  background: transparent;
  color: var(--text);
  font-size: 13.5px;
  font-weight: 600;
  text-align: left;
  white-space: nowrap;
  transition:
    background-color 0.15s ease,
    color 0.15s ease;
}

.tool-sidebar__item:hover:not(:disabled):not(.is-active) {
  background: var(--surface-sunken);
}

.tool-sidebar__item.is-active {
  background: var(--primary-soft);
  border-color: var(--primary-soft-hover);
  color: var(--primary-text);
}

.tool-sidebar__item.is-danger {
  color: var(--danger);
}

.tool-sidebar__item:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.tool-sidebar__divider {
  height: 1px;
  margin: 6px 6px;
  background: var(--border);
  flex-shrink: 0;
}

/* Tablet: icon-only rail */
@media (max-width: 1100px) {
  .tool-sidebar {
    width: 56px;
    padding: 8px 6px;
    align-items: center;
  }

  .tool-sidebar__item {
    justify-content: center;
    width: 42px;
    padding: 0;
  }

  .tool-sidebar__label {
    display: none;
  }

  .tool-sidebar__divider {
    width: 28px;
  }
}

/* Phone: bottom bar that always fits the screen width */
.tool-sidebar.is-phone {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
  width: 100%;
  padding: 6px max(8px, env(safe-area-inset-left)) 6px
    max(8px, env(safe-area-inset-right));
  border-right: none;
  border-top: 1px solid var(--border);
  overflow: visible;
}

.tool-sidebar.is-phone .tool-sidebar__item {
  flex: 1 1 0;
  min-width: 0;
  max-width: 56px;
  width: auto;
  min-height: 44px;
  justify-content: center;
  padding: 0;
}

.tool-sidebar.is-phone .tool-sidebar__divider {
  width: 1px;
  height: 26px;
  margin: 0 2px;
}

/* "More" panel above the bar */
.tool-sidebar__overflow {
  position: absolute;
  right: 8px;
  bottom: calc(100% + 8px);
  left: 8px;
  z-index: 30;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  padding: 10px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

.tool-sidebar__overflow-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px 4px;
  border: 1px solid transparent;
  border-radius: var(--radius);
  background: transparent;
  color: var(--text);
  font-size: 11.5px;
  font-weight: 600;
  text-align: center;
  line-height: 1.2;
}

.tool-sidebar__overflow-item:active:not(:disabled) {
  background: var(--surface-sunken);
}

.tool-sidebar__overflow-item.is-active {
  background: var(--primary-soft);
  border-color: var(--primary-soft-hover);
  color: var(--primary-text);
}

.tool-sidebar__overflow-item:disabled {
  opacity: 0.4;
}

.tool-more-enter-active,
.tool-more-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}

.tool-more-enter-from,
.tool-more-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
</style>
