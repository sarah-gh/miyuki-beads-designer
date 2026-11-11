<template>
  <div class="flex min-h-screen items-center justify-center bg-white p-6">
    <div
      class="w-full max-w-[1200px] rounded-2xl border border-neutral-300 p-4"
    >
      <h1 class="mb-4 text-xl font-semibold">Bead pattern (SVG + Vue 3)</h1>

      <!-- Settings Panel -->
      <div class="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
        <h2 class="mb-4 text-lg font-medium text-gray-800">Pattern settings</h2>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <!-- Basic Settings -->
          <div class="space-y-3">
            <h3 class="font-medium text-gray-700">Main settings</h3>

            <div>
              <label class="mb-1 block text-sm font-medium text-gray-600"
                >Rows</label
              >
              <input
                v-model.number="settings.rows"
                type="number"
                min="1"
                max="50"
                class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label class="mb-1 block text-sm font-medium text-gray-600"
                >Columns</label
              >
              <input
                v-model.number="settings.cols"
                type="number"
                min="1"
                max="100"
                class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label class="mb-1 block text-sm font-medium text-gray-600"
                >Bead radius</label
              >
              <input
                v-model.number="settings.beadR"
                type="number"
                min="1"
                max="10"
                step="0.1"
                class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <!-- Gap Settings -->
          <div class="space-y-3">
            <h3 class="font-medium text-gray-700">Spacing</h3>

            <div>
              <label class="mb-1 block text-sm font-medium text-gray-600"
                >Horizontal spacing</label
              >
              <input
                v-model.number="settings.gapX"
                type="number"
                min="5"
                max="30"
                step="1"
                class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label class="mb-1 block text-sm font-medium text-gray-600"
                >Vertical spacing</label
              >
              <input
                v-model.number="settings.gapY"
                type="number"
                min="5"
                max="30"
                step="1"
                class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label class="mb-1 block text-sm font-medium text-gray-600"
                >Padding</label
              >
              <input
                v-model.number="settings.padding"
                type="number"
                min="10"
                max="100"
                step="1"
                class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <!-- Fringe Settings -->
          <div class="space-y-3">
            <h3 class="font-medium text-gray-700">Fringe settings</h3>

            <div class="flex items-center space-x-2">
              <input
                id="showFringe"
                v-model="settings.showFringe"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                for="showFringe"
                class="text-sm font-medium text-gray-600"
                >Show fringe</label
              >
            </div>

            <div v-if="settings.showFringe">
              <div>
                <label class="mb-1 block text-sm font-medium text-gray-600"
                  >Fringe base</label
                >
                <input
                  v-model.number="settings.fringeBase"
                  type="number"
                  min="1"
                  max="20"
                  step="1"
                  class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label class="mb-1 block text-sm font-medium text-gray-600"
                  >Fringe amplitude</label
                >
                <input
                  v-model.number="settings.fringeAmp"
                  type="number"
                  min="0"
                  max="20"
                  step="1"
                  class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label class="mb-1 block text-sm font-medium text-gray-600"
                  >Fringe period</label
                >
                <input
                  v-model.number="settings.fringePeriod"
                  type="number"
                  min="1"
                  max="20"
                  step="1"
                  class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <!-- Other Settings -->
          <div class="space-y-3">
            <h3 class="font-medium text-gray-700">Other settings</h3>

            <div class="flex items-center space-x-2">
              <input
                id="stagger"
                v-model="settings.stagger"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                for="stagger"
                class="text-sm font-medium text-gray-600"
                >Staggered rows</label
              >
            </div>

            <div class="flex items-center space-x-2">
              <input
                id="showGridHelpers"
                v-model="settings.showGridHelpers"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                for="showGridHelpers"
                class="text-sm font-medium text-gray-600"
                >Show guides</label
              >
            </div>
          </div>

          <!-- Color Settings -->
          <div class="space-y-3">
            <h3 class="font-medium text-gray-700">Colour settings</h3>

            <div>
              <label class="mb-1 block text-sm font-medium text-gray-600"
                >Bead colour</label
              >
              <div class="flex items-center space-x-2">
                <input
                  v-model="settings.beadFillColor"
                  type="color"
                  class="h-10 w-12 cursor-pointer rounded-md border border-gray-300"
                />
                <input
                  v-model="settings.beadFillColor"
                  type="text"
                  placeholder="#ffffff"
                  class="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <p class="mt-1 text-xs text-gray-500">
                The outline is set automatically
              </p>
            </div>

            <div>
              <label class="mb-1 block text-sm font-medium text-gray-600"
                >Background colour SVG</label
              >
              <div class="flex items-center space-x-2">
                <input
                  v-model="settings.svgBackgroundColor"
                  type="color"
                  class="h-10 w-12 cursor-pointer rounded-md border border-gray-300"
                />
                <input
                  v-model="settings.svgBackgroundColor"
                  type="text"
                  placeholder="#ffffff"
                  class="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Reset Buttons -->
        <div class="mt-4 flex space-x-3 border-t border-gray-200 pt-4">
          <button
            class="rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:outline-none"
            @click="resetSettings"
          >
            Reset settings
          </button>
          <button
            class="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:outline-none"
            @click="clearAllColors"
          >
            Clear all colours
          </button>
        </div>
      </div>

      <BeadPattern
        :rows="settings.rows"
        :cols="settings.cols"
        :bead-r="settings.beadR"
        :gap-x="settings.gapX"
        :gap-y="settings.gapY"
        :stagger="settings.stagger"
        :show-fringe="settings.showFringe"
        :fringe-base="settings.fringeBase"
        :fringe-amp="settings.fringeAmp"
        :fringe-period="settings.fringePeriod"
        :fringe-map="customFringe"
        :padding="settings.padding"
        :show-grid-helpers="settings.showGridHelpers"
        :bead-fill-color="settings.beadFillColor"
        :svg-background-color="settings.svgBackgroundColor"
        :colored-beads="coloredBeads"
        @bead-click="handleBeadClick"
      />

      <div class="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4">
        <h3 class="mb-2 text-sm font-medium text-blue-800">
          How to colour:
        </h3>
        <ul class="space-y-1 text-sm text-blue-700">
          <li>• Choose the bead colour above</li>
          <li>• Click a bead to colour it</li>
          <li>• Click the bead again to remove its colour</li>
          <li>• The outline is set automatically (black for light colours)</li>
          <li>• Use "Clear all colours" to start again</li>
        </ul>
      </div>

      <p class="mt-3 text-sm text-neutral-600">
        Tip: to match the picture exactly, you can set <code>fringeMap</code> by hand
        for each column so every column has exactly the right number of fringe beads.
      </p>
    </div>
  </div>
</template>

<script setup>
import BeadPattern from '@/components/BeadPattern.vue';
import { reactive } from 'vue';

// Default settings
const defaultSettings = {
  rows: 15,
  cols: 58,
  beadR: 4.8,
  gapX: 20,
  gapY: 14,
  stagger: true,
  showFringe: true,
  fringeBase: 2,
  fringeAmp: 6,
  fringePeriod: 11,
  padding: 24,
  showGridHelpers: false,
  beadFillColor: '#ffffff',
  svgBackgroundColor: '#ffffff',
};

// Reactive settings object
const settings = reactive({ ...defaultSettings });

// State for colored beads
const coloredBeads = reactive(new Map());

// Reset function
const resetSettings = () => {
  Object.assign(settings, defaultSettings);
  coloredBeads.clear();
};

// Handle bead click
const handleBeadClick = (beadId) => {
  if (coloredBeads.has(beadId)) {
    coloredBeads.delete(beadId);
  } else {
    coloredBeads.set(beadId, {
      fill: settings.beadFillColor,
    });
  }
};

// Clear all colors
const clearAllColors = () => {
  coloredBeads.clear();
};

// To set the exact length of each column yourself, fill this array (length = number of columns)
const customFringe = null;
// More precise example: V deeper repeating V every 6 columns
// const customFringe = Array.from({length: 38}, (_, c) => {
//   const p = 6, base = 6, amp = 5
//   const pos = ((c % p) + p) % p
//   const dist = Math.abs(pos - (p - 1) / 2)
//   return base + Math.max(0, Math.round(amp - dist))
// })
</script>
