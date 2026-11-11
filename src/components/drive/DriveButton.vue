<template>
  <div
    v-if="drive.configured"
    class="drive-button"
  >
    <!-- Signed out -->
    <button
      v-if="!drive.user"
      type="button"
      class="drive-button__signin"
      :class="{ 'is-compact': compact }"
      :disabled="drive.status === 'connecting'"
      :title="compact ? 'Sign in with Google to save to Drive' : undefined"
      @click="connect"
    >
      <GoogleLogo :size="18" />
      <span
        v-if="!compact"
        class="drive-button__label"
        >{{
          drive.status === 'connecting' ? 'Connecting…' : 'Sign in with Google'
        }}</span
      >
    </button>

    <!-- Signed in -->
    <template v-else>
      <button
        v-if="drive.status === 'expired'"
        type="button"
        class="drive-button__reconnect"
        title="Google sign-in expired"
        @click="connect"
      >
        <BaseIcon
          name="rotate"
          :size="15"
        />
        <span class="drive-button__label">Reconnect</span>
      </button>

      <DropdownMenu :items="menuItems">
        <template #trigger>
          <button
            type="button"
            class="drive-button__avatar"
            :aria-label="`Google account: ${drive.user.email}. ${statusText()}`"
            :title="statusText()"
          >
            <img
              v-if="drive.user.picture && !pictureFailed"
              :src="drive.user.picture"
              alt=""
              referrerpolicy="no-referrer"
              @error="pictureFailed = true"
            />
            <span v-else>{{ initial }}</span>
            <span
              class="drive-button__dot"
              :class="`is-${drive.status}`"
            ></span>
          </button>
        </template>
      </DropdownMenu>
    </template>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import BaseIcon from '@/components/ui/BaseIcon.vue';
import DropdownMenu from '@/components/ui/DropdownMenu.vue';
import GoogleLogo from './GoogleLogo.vue';
import { drive, statusText } from '@/lib/drive/driveSync.js';
import { useDriveActions } from '@/composables/useDriveActions.js';

/** Header control: "Sign in with Google", or the account avatar + sync menu. */
defineProps({
  compact: { type: Boolean, default: false },
});

const { connect, disconnect, sync } = useDriveActions();
const pictureFailed = ref(false);

const initial = computed(() =>
  (drive.user?.name || drive.user?.email || '?').charAt(0).toUpperCase(),
);

const menuItems = computed(() => [
  { heading: drive.user?.name || drive.user?.email },
  { heading: statusText() },
  { divider: true },
  drive.status === 'expired'
    ? { label: 'Reconnect', icon: 'rotate', onSelect: connect }
    : {
        label: 'Sync now',
        icon: 'rotate',
        disabled: drive.status === 'syncing',
        onSelect: sync,
      },
  {
    label: 'Open in Google Drive',
    icon: 'folderOpen',
    disabled: !drive.folderUrl,
    onSelect: () => window.open(drive.folderUrl, '_blank', 'noopener'),
  },
  { divider: true },
  { label: 'Sign out', icon: 'x', onSelect: disconnect },
]);
</script>

<style scoped>
.drive-button {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.drive-button__signin {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 38px;
  padding: 0 16px 0 12px;
  border: 1px solid rgba(61, 46, 41, 0.12);
  border-radius: 999px;
  background: #fff;
  color: #3c4043;
  font-size: 14px;
  font-weight: 700;
  box-shadow: var(--shadow-sm);
  white-space: nowrap;
}

.drive-button__signin:hover:not(:disabled) {
  box-shadow: var(--shadow);
}

.drive-button__signin.is-compact {
  width: 38px;
  padding: 0;
  justify-content: center;
}

.drive-button__reconnect {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 12px;
  border: none;
  border-radius: 999px;
  background: var(--warning);
  color: #fff;
  font-size: 13px;
  font-weight: 700;
}

.drive-button__avatar {
  position: relative;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  padding: 0;
  border: 2px solid #fff;
  border-radius: 50%;
  background: var(--accent);
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  box-shadow: var(--shadow-sm);
}

.drive-button__avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.drive-button__dot {
  position: absolute;
  right: -2px;
  bottom: -2px;
  width: 13px;
  height: 13px;
  border: 2px solid #fff;
  border-radius: 50%;
  background: var(--text-faint);
}

.drive-button__dot.is-synced {
  background: var(--success);
}

.drive-button__dot.is-syncing,
.drive-button__dot.is-connecting {
  background: var(--info);
  animation: drive-pulse 1s ease-in-out infinite alternate;
}

.drive-button__dot.is-expired,
.drive-button__dot.is-offline {
  background: var(--warning);
}

.drive-button__dot.is-error {
  background: var(--danger);
}

@keyframes drive-pulse {
  to {
    opacity: 0.35;
  }
}

@media (max-width: 640px) {
  .drive-button__signin {
    width: 38px;
    padding: 0;
    justify-content: center;
  }

  .drive-button__signin .drive-button__label,
  .drive-button__reconnect .drive-button__label {
    display: none;
  }

  .drive-button__reconnect {
    width: 32px;
    padding: 0;
    justify-content: center;
  }
}
</style>
