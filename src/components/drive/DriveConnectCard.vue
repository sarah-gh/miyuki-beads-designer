<template>
  <section
    v-if="drive.configured"
    class="drive-card"
    :class="{ 'is-connected': drive.user }"
  >
    <GoogleLogo
      kind="drive"
      :size="drive.user ? 34 : 44"
      class="drive-card__logo"
    />

    <!-- Signed out: what you get by signing in -->
    <div
      v-if="!drive.user"
      class="drive-card__body"
    >
      <h2 class="drive-card__title">
        Sign in to save your projects to Google Drive
      </h2>
      <ul class="drive-card__list">
        <li
          v-for="point in points"
          :key="point"
        >
          <BaseIcon
            name="check"
            :size="17"
          />
          {{ point }}
        </li>
      </ul>
      <button
        type="button"
        class="drive-card__signin"
        :disabled="drive.status === 'connecting'"
        @click="connect"
      >
        <GoogleLogo :size="20" />
        {{
          drive.status === 'connecting' ? 'Connecting…' : 'Sign in with Google'
        }}
      </button>
      <p class="drive-card__note">
        The app can only see the files it creates in your Drive.
      </p>
    </div>

    <!-- Signed in: account and sync status -->
    <div
      v-else
      class="drive-card__body drive-card__body--row"
    >
      <div class="drive-card__status">
        <p class="drive-card__account">
          Google Drive · <strong>{{ drive.user.email }}</strong>
        </p>
        <p
          class="drive-card__state"
          :class="`is-${drive.status}`"
        >
          {{ statusText() }}
        </p>
      </div>
      <div class="drive-card__actions">
        <BaseButton
          v-if="drive.status === 'expired'"
          variant="primary"
          icon="rotate"
          @click="connect"
          >Reconnect</BaseButton
        >
        <BaseButton
          v-else
          icon="rotate"
          :disabled="drive.status === 'syncing'"
          @click="sync"
          >Sync now</BaseButton
        >
        <BaseButton
          v-if="drive.folderUrl"
          tag="a"
          :href="drive.folderUrl"
          target="_blank"
          rel="noopener"
          style="text-decoration: none"
          icon="folderOpen"
          >Open folder</BaseButton
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseIcon from '@/components/ui/BaseIcon.vue';
import GoogleLogo from './GoogleLogo.vue';
import { drive, statusText } from '@/lib/drive/driveSync.js';
import { useDriveActions } from '@/composables/useDriveActions.js';

const { connect, sync } = useDriveActions();

const points = [
  'Save projects to Google Drive automatically',
  'Open them on any device',
  'Keep your work backed up',
];
</script>

<style scoped>
.drive-card {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: linear-gradient(120deg, var(--accent-soft), var(--surface) 70%);
}

.drive-card.is-connected {
  align-items: center;
  padding: 16px 20px;
  background: var(--surface);
}

.drive-card__logo {
  flex-shrink: 0;
}

.drive-card__body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  min-width: 0;
}

.drive-card__body--row {
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.drive-card__title {
  font-size: 19px;
  font-weight: 800;
  line-height: 1.3;
}

.drive-card__list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  list-style: none;
}

.drive-card__list li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14.5px;
}

.drive-card__list li :deep(svg) {
  color: var(--success);
}

.drive-card__signin {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 44px;
  margin-top: 6px;
  padding: 0 22px 0 16px;
  border: 1px solid var(--border-strong);
  border-radius: 999px;
  background: #fff;
  color: #3c4043;
  font-size: 15px;
  font-weight: 700;
  box-shadow: var(--shadow-sm);
}

.drive-card__signin:hover:not(:disabled) {
  box-shadow: var(--shadow);
}

.drive-card__note {
  color: var(--text-muted);
  font-size: 12.5px;
}

.drive-card__account {
  overflow: hidden;
  font-size: 14.5px;
  text-overflow: ellipsis;
}

.drive-card__state {
  margin-top: 2px;
  color: var(--text-muted);
  font-size: 13px;
}

.drive-card__state.is-synced {
  color: var(--success);
}

.drive-card__state.is-expired,
.drive-card__state.is-offline {
  color: var(--warning);
}

.drive-card__state.is-error {
  color: var(--danger);
}

.drive-card__status {
  min-width: 0;
}

.drive-card__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 640px) {
  .drive-card {
    flex-direction: column;
    padding: 18px;
  }

  .drive-card.is-connected {
    align-items: flex-start;
  }
}
</style>
