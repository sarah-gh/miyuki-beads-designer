<template>
  <div class="app-toolbar">
    <EditorNav class="app-toolbar__tabs" />
    <div
      id="app-slot-toolbar-center"
      class="app-toolbar__center"
    ></div>
    <div
      id="app-slot-toolbar-end"
      class="app-toolbar__end"
    ></div>
  </div>
</template>

<script setup>
import EditorNav from './EditorNav.vue';
</script>

<style scoped>
.app-toolbar {
  position: relative;
  z-index: 40;
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: var(--toolbar-h);
  padding: 8px max(16px, env(safe-area-inset-right)) 8px
    max(16px, env(safe-area-inset-left));
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
}

.app-toolbar__tabs {
  flex-shrink: 0;
}

.app-toolbar__center {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
}

.app-toolbar__end {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.app-toolbar__center:empty {
  flex: 1;
}

@media (max-width: 640px) {
  .app-toolbar {
    gap: 6px;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: max(10px, env(safe-area-inset-left));
    padding-right: max(10px, env(safe-area-inset-right));
  }

  .app-toolbar__end {
    gap: 6px;
  }
}
</style>
