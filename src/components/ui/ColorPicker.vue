<template>
  <div class="color-picker">
    <div class="color-picker__surfaces">
      <!-- Saturation / value area -->
      <div
        ref="svArea"
        class="color-picker__sv"
        :style="{ backgroundColor: hueColor }"
        role="slider"
        aria-label="Saturation and brightness"
        :aria-valuetext="hex"
        tabindex="0"
        @pointerdown="startDrag($event, 'sv')"
        @keydown="onSvKey"
      >
        <div class="color-picker__sv-white"></div>
        <div class="color-picker__sv-black"></div>
        <div
          class="color-picker__sv-thumb"
          :style="{
            left: `${hsv.s * 100}%`,
            top: `${(1 - hsv.v) * 100}%`,
            backgroundColor: hex,
          }"
        ></div>
      </div>

      <!-- Hue strip -->
      <div
        ref="hueStrip"
        class="color-picker__hue"
        role="slider"
        aria-label="Hue"
        :aria-valuenow="Math.round(hsv.h)"
        aria-valuemin="0"
        aria-valuemax="360"
        tabindex="0"
        @pointerdown="startDrag($event, 'hue')"
        @keydown="onHueKey"
      >
        <div
          class="color-picker__hue-thumb"
          :style="{ top: `${(hsv.h / 360) * 100}%` }"
        ></div>
      </div>
    </div>

    <div class="color-picker__row">
      <span
        class="color-picker__preview"
        :style="{ backgroundColor: hex }"
      ></span>
      <input
        v-model="hexDraft"
        class="color-picker__hex"
        spellcheck="false"
        maxlength="7"
        aria-label="Hex colour"
        @change="commitHex"
        @keydown.enter="commitHex"
      />
      <button
        type="button"
        class="color-picker__eyedropper"
        title="Pick a colour from the screen"
        aria-label="Pick a colour from the screen"
        @click="pickFromScreen"
      >
        <BaseIcon
          name="pipette"
          :size="18"
        />
      </button>
      <!-- Fallback for browsers without the EyeDropper API -->
      <input
        ref="nativeInput"
        type="color"
        class="sr-only"
        tabindex="-1"
        :value="hex"
        @input="setFromHex($event.target.value)"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import BaseIcon from './BaseIcon.vue';
import { clamp, hexToHsv, hsvToHex, normalizeHex } from './colorUtils.js';

/**
 * HSV colour picker (saturation/brightness square + hue strip + hex field +
 * eyedropper). v-model is a "#rrggbb" string.
 */
const props = defineProps({
  modelValue: { type: String, default: '#ff0000' },
});
const emit = defineEmits(['update:modelValue']);

const hsv = ref(hexToHsv(props.modelValue));
const hex = computed(() => hsvToHex(hsv.value));
const hexDraft = ref(normalizeHex(props.modelValue) ?? '#ff0000');
const hueColor = computed(() => hsvToHex({ h: hsv.value.h, s: 1, v: 1 }));

const svArea = ref(null);
const hueStrip = ref(null);
const nativeInput = ref(null);

// Keep the internal HSV in sync with outside changes, but don't clobber the
// hue when the new colour is a grey (hue is undefined there).
watch(
  () => props.modelValue,
  (value) => {
    const n = normalizeHex(value);
    if (!n || n === hex.value) {
      if (n) hexDraft.value = n;
      return;
    }
    const next = hexToHsv(n);
    if (next.s === 0 || next.v === 0) next.h = hsv.value.h;
    hsv.value = next;
    hexDraft.value = n;
  },
);

function emitColor() {
  hexDraft.value = hex.value;
  emit('update:modelValue', hex.value);
}

function setFromHex(value) {
  const n = normalizeHex(value);
  if (!n) return;
  const next = hexToHsv(n);
  if (next.s === 0 || next.v === 0) next.h = hsv.value.h;
  hsv.value = next;
  hexDraft.value = n;
  emit('update:modelValue', n);
}

function commitHex() {
  const n = normalizeHex(hexDraft.value);
  if (n) setFromHex(n);
  else hexDraft.value = hex.value;
}

// ---- Dragging --------------------------------------------------------------
let dragTarget = null;

function updateFromPointer(event) {
  if (dragTarget === 'sv' && svArea.value) {
    const rect = svArea.value.getBoundingClientRect();
    const s = clamp((event.clientX - rect.left) / rect.width, 0, 1);
    const v = 1 - clamp((event.clientY - rect.top) / rect.height, 0, 1);
    hsv.value = { ...hsv.value, s, v };
  } else if (dragTarget === 'hue' && hueStrip.value) {
    const rect = hueStrip.value.getBoundingClientRect();
    const h = clamp((event.clientY - rect.top) / rect.height, 0, 0.9999) * 360;
    hsv.value = { ...hsv.value, h };
  }
  emitColor();
}

function startDrag(event, target) {
  event.preventDefault();
  dragTarget = target;
  event.currentTarget.focus?.();
  updateFromPointer(event);
  window.addEventListener('pointermove', updateFromPointer);
  window.addEventListener('pointerup', stopDrag);
  window.addEventListener('pointercancel', stopDrag);
}

function stopDrag() {
  dragTarget = null;
  window.removeEventListener('pointermove', updateFromPointer);
  window.removeEventListener('pointerup', stopDrag);
  window.removeEventListener('pointercancel', stopDrag);
}

onBeforeUnmount(stopDrag);

// ---- Keyboard --------------------------------------------------------------
function onSvKey(event) {
  const step = event.shiftKey ? 0.1 : 0.02;
  const { s, v } = hsv.value;
  const map = {
    ArrowLeft: [s - step, v],
    ArrowRight: [s + step, v],
    ArrowUp: [s, v + step],
    ArrowDown: [s, v - step],
  };
  if (!map[event.key]) return;
  event.preventDefault();
  const [ns, nv] = map[event.key];
  hsv.value = { ...hsv.value, s: clamp(ns, 0, 1), v: clamp(nv, 0, 1) };
  emitColor();
}

function onHueKey(event) {
  const step = event.shiftKey ? 15 : 3;
  let delta = 0;
  if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') delta = -step;
  if (event.key === 'ArrowDown' || event.key === 'ArrowRight') delta = step;
  if (!delta) return;
  event.preventDefault();
  hsv.value = { ...hsv.value, h: (hsv.value.h + delta + 360) % 360 };
  emitColor();
}

// ---- Eyedropper ------------------------------------------------------------
async function pickFromScreen() {
  if (typeof window !== 'undefined' && 'EyeDropper' in window) {
    try {
      const result = await new window.EyeDropper().open();
      setFromHex(result.sRGBHex);
    } catch {
      // User cancelled.
    }
    return;
  }
  nativeInput.value?.click();
}
</script>

<style scoped>
.color-picker {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.color-picker__surfaces {
  display: flex;
  gap: 10px;
  height: 150px;
}

.color-picker__sv {
  position: relative;
  flex: 1;
  border-radius: 8px;
  cursor: crosshair;
  touch-action: none;
  overflow: hidden;
}

.color-picker__sv-white,
.color-picker__sv-black {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.color-picker__sv-white {
  background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
}

.color-picker__sv-black {
  background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
}

.color-picker__sv-thumb {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.25),
    0 1px 4px rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.color-picker__hue {
  position: relative;
  width: 16px;
  border-radius: 8px;
  cursor: ns-resize;
  touch-action: none;
  background: linear-gradient(
    to bottom,
    #f00 0%,
    #ff0 17%,
    #0f0 33%,
    #0ff 50%,
    #00f 67%,
    #f0f 83%,
    #f00 100%
  );
}

.color-picker__hue-thumb {
  position: absolute;
  left: -3px;
  right: -3px;
  height: 8px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
  transform: translateY(-50%);
  pointer-events: none;
}

.color-picker__row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.color-picker__preview {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid var(--border-strong);
  flex-shrink: 0;
}

.color-picker__hex {
  flex: 1;
  min-width: 0;
  height: 34px;
  padding: 0 10px;
  border: 1px solid var(--border-strong);
  border-radius: 8px;
  background: #fff;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  font-variant-numeric: tabular-nums;
}

.color-picker__hex:focus {
  border-color: var(--accent);
}

.color-picker__eyedropper {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border: 1px solid var(--border-strong);
  border-radius: 8px;
  background: var(--surface);
  color: var(--text);
}

.color-picker__eyedropper:hover {
  background: var(--surface-sunken);
}
</style>
