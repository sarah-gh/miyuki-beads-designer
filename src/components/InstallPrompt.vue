<template>
  <Transition name="install-slide">
    <div
      v-if="isVisible"
      class="install-prompt"
      dir="ltr"
      role="dialog"
      aria-labelledby="install-prompt-title"
    >
      <img
        class="install-icon"
        :src="iconUrl"
        alt=""
        width="56"
        height="56"
      />

      <div class="install-copy">
        <p
          id="install-prompt-title"
          class="install-title"
        >
          Install Miyuki Beads
        </p>
        <p
          v-if="!needsIosInstructions"
          class="install-text"
        >
          Add it to your home screen to run it full screen, even
          without an internet connection.
        </p>
        <p
          v-else
          class="install-text"
        >
          In Safari, tap <span class="ios-key">Share</span> and then choose
          <span class="ios-key">Add to Home Screen</span>.
        </p>
      </div>

      <div class="install-actions">
        <button
          v-if="!needsIosInstructions"
          class="install-btn install-btn--primary"
          @click="install"
        >
          Install
        </button>
        <button
          class="install-btn install-btn--ghost"
          @click="dismiss"
        >
          {{ needsIosInstructions ? 'Got it' : 'Not now' }}
        </button>
      </div>

      <button
        class="install-close"
        aria-label="Close"
        @click="dismiss"
      >
        &times;
      </button>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const DISMISS_KEY = 'pwaInstallDismissedAt';
// Don't nag: once dismissed, stay quiet for two weeks.
const DISMISS_TTL = 14 * 24 * 60 * 60 * 1000;
// Let the user see the app before asking.
const SHOW_DELAY = 3000;

const iconUrl = `${import.meta.env.BASE_URL}pwa-192x192.png`;

const isVisible = ref(false);
const needsIosInstructions = ref(false);
const deferredPrompt = ref(null);
let showTimer = null;

/** True once the app is running from the home screen — nothing left to install. */
function isStandalone() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true
  );
}

function isIos() {
  return (
    /iphone|ipad|ipod/i.test(window.navigator.userAgent) ||
    // iPadOS 13+ reports itself as a Mac, but it has a touch screen.
    (window.navigator.platform === 'MacIntel' &&
      window.navigator.maxTouchPoints > 1)
  );
}

function wasRecentlyDismissed() {
  const at = Number(localStorage.getItem(DISMISS_KEY));
  return Boolean(at) && Date.now() - at < DISMISS_TTL;
}

function reveal() {
  showTimer = setTimeout(() => {
    isVisible.value = true;
  }, SHOW_DELAY);
}

function onBeforeInstallPrompt(event) {
  // Suppress the browser's own mini-infobar so we can ask in our own words.
  event.preventDefault();
  deferredPrompt.value = event;
  if (!wasRecentlyDismissed()) reveal();
}

function onAppInstalled() {
  isVisible.value = false;
  deferredPrompt.value = null;
  localStorage.removeItem(DISMISS_KEY);
}

async function install() {
  const prompt = deferredPrompt.value;
  if (!prompt) return;
  isVisible.value = false;
  prompt.prompt();
  const { outcome } = await prompt.userChoice;
  // The event can only be used once; Chrome fires a fresh one if they decline.
  deferredPrompt.value = null;
  if (outcome === 'dismissed')
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
}

function dismiss() {
  isVisible.value = false;
  localStorage.setItem(DISMISS_KEY, String(Date.now()));
}

onMounted(() => {
  if (isStandalone() || wasRecentlyDismissed()) return;

  window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
  window.addEventListener('appinstalled', onAppInstalled);

  // Safari on iOS never fires beforeinstallprompt, so the only thing we can do
  // is explain the manual Share ▸ Add to Home Screen route.
  if (isIos()) {
    needsIosInstructions.value = true;
    reveal();
  }
});

onBeforeUnmount(() => {
  clearTimeout(showTimer);
  window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
  window.removeEventListener('appinstalled', onAppInstalled);
});
</script>

<style scoped>
.install-prompt {
  position: fixed;
  z-index: 2000;
  left: 50%;
  bottom: calc(16px + env(safe-area-inset-bottom));
  transform: translateX(-50%);
  width: min(560px, calc(100vw - 24px));
  display: flex;
  align-items: center;
  gap: 14px;
  /* logical padding so the close button's gutter follows the RTL direction */
  padding: 14px 16px;
  padding-inline-end: 44px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  box-shadow: 0 12px 32px rgba(41, 37, 36, 0.18);
}

.install-icon {
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 12px;
}

.install-copy {
  flex: 1;
  min-width: 0;
}

.install-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text);
}

.install-text {
  font-size: 0.8rem;
  line-height: 1.4;
  color: var(--text-muted);
  margin-top: 2px;
}

.ios-key {
  font-weight: 600;
  color: var(--text);
}

.install-actions {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

.install-btn {
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.install-btn--primary {
  background: var(--accent);
  color: #fff;
}

.install-btn--primary:hover {
  background: var(--accent-hover);
}

.install-btn--ghost {
  background: transparent;
  color: var(--text-muted);
  border-color: var(--border-strong);
}

.install-btn--ghost:hover {
  background: var(--surface-sunken);
  color: var(--text);
}

.install-close {
  position: absolute;
  top: 8px;
  inset-inline-end: 10px;
  background: none;
  border: none;
  font-size: 1.25rem;
  line-height: 1;
  color: var(--text-faint);
  cursor: pointer;
}

.install-close:hover {
  color: var(--text);
}

.install-slide-enter-active,
.install-slide-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.install-slide-enter-from,
.install-slide-leave-to {
  opacity: 0;
  transform: translate(-50%, 16px);
}

@media (max-width: 600px) {
  .install-prompt {
    flex-wrap: wrap;
    padding-inline-end: 16px;
  }

  .install-actions {
    width: 100%;
  }

  .install-btn {
    flex: 1;
  }
}
</style>
