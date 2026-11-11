<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    xmlns="http://www.w3.org/2000/svg"
    :style="`display:block; background:${svgBackgroundColor}`"
  >
    <!-- Optional guide lines -->
    <template v-if="showGridHelpers">
      <g opacity="0.15">
        <template
          v-for="r in rows"
          :key="'h' + r"
        >
          <line
            :x1="padding"
            :x2="width - padding"
            :y1="padding + (r - 1) * gapY"
            :y2="padding + (r - 1) * gapY"
            stroke="#000"
            stroke-dasharray="4 4"
            vector-effect="non-scaling-stroke"
          />
        </template>
      </g>
    </template>

    <!-- Beads of the upper grid -->
    <g>
      <BeadDot
        v-for="(p, i) in topBeads"
        :key="i"
        :x="p.x"
        :y="p.y"
        :r="beadR"
        :bead-id="`top-${i}`"
        :fill="coloredBeads.get(`top-${i}`)?.fill || beadFillColor"
        :stroke="
          getBeadStroke(coloredBeads.get(`top-${i}`)?.fill || beadFillColor)
        "
        :stroke-width="
          getBeadStrokeWidth(
            coloredBeads.get(`top-${i}`)?.fill || beadFillColor,
          )
        "
        class="cursor-pointer hover:opacity-80"
        @click="emit('bead-click', `top-${i}`)"
      />
    </g>

    <!-- Fringe -->
    <g v-if="showFringe">
      <BeadDot
        v-for="(p, i) in fringeBeads"
        :key="'f' + i"
        :x="p.x"
        :y="p.y"
        :r="beadR"
        :bead-id="`fringe-${i}`"
        :fill="coloredBeads.get(`fringe-${i}`)?.fill || beadFillColor"
        :stroke="
          getBeadStroke(coloredBeads.get(`fringe-${i}`)?.fill || beadFillColor)
        "
        :stroke-width="
          getBeadStrokeWidth(
            coloredBeads.get(`fringe-${i}`)?.fill || beadFillColor,
          )
        "
        class="cursor-pointer hover:opacity-80"
        @click="emit('bead-click', `fringe-${i}`)"
      />
    </g>
  </svg>
</template>

<script setup>
import { computed } from 'vue';
import BeadDot from './BeadDot.vue';

const props = defineProps({
  // Main (upper) grid size
  rows: { type: Number, default: 15 },
  cols: { type: Number, default: 38 },

  // Bead size and spacing
  beadR: { type: Number, default: 5 },
  gapX: { type: Number, default: 16 }, // horizontal centre-to-centre spacing
  gapY: { type: Number, default: 14 }, // vertical centre-to-centre spacing
  stagger: { type: Boolean, default: true }, // offset even rows

  // Fringe (hanging beads at the bottom)
  showFringe: { type: Boolean, default: true },
  // Base fringe length
  fringeBase: { type: Number, default: 6 },
  // How much the fringe length varies (for a V shape)
  fringeAmp: { type: Number, default: 4 },
  // Pattern period (how many columns make a full V)
  fringePeriod: { type: Number, default: 6 },

  // To set the exact length of each column yourself
  // (an array of length cols, each item is the number of fringe beads in that column)
  fringeMap: { type: Array, default: null },

  // Padding around
  padding: { type: Number, default: 20 },

  // Show guides / connections (optional)
  showGridHelpers: { type: Boolean, default: false },

  // Colours
  beadFillColor: { type: String, default: '#ffffff' },
  svgBackgroundColor: { type: String, default: '#ffffff' },

  // Coloured beads
  coloredBeads: { type: Map, default: () => new Map() },
});

const emit = defineEmits(['bead-click']);

// Helper functions for automatic border logic
const getBeadStroke = (fillColor) => {
  // If fill is white or very light, use black border
  if (
    fillColor === '#ffffff' ||
    fillColor === '#fff' ||
    isLightColor(fillColor)
  ) {
    return '#000000';
  }
  // Otherwise, use the same color as fill (no visible border)
  return fillColor;
};

const getBeadStrokeWidth = (fillColor) => {
  // If fill is white or very light, use thin border
  if (
    fillColor === '#ffffff' ||
    fillColor === '#fff' ||
    isLightColor(fillColor)
  ) {
    return 1.5;
  }
  // Otherwise, no border width
  return 0;
};

const isLightColor = (color) => {
  // Simple check for light colors (white, light grays, etc.)
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  // Calculate brightness and consider light if > 200
  return (r + g + b) / 3 > 200;
};

const width = computed(() => {
  const w =
    (props.cols - 1) * props.gapX + (props.stagger ? props.gapX / 2 : 0);
  return w + props.padding * 2;
});
const height = computed(() => {
  const hTop = (props.rows - 1) * props.gapY;
  const maxFringe = maxFringeLength.value * props.gapY;
  return hTop + maxFringe + props.padding * 2 + props.beadR * 2;
});

// Length of each fringe strand
const computedFringeMap = computed(() => {
  if (Array.isArray(props.fringeMap) && props.fringeMap.length === props.cols) {
    return props.fringeMap;
  }
  const arr = [];
  for (let c = 0; c < props.cols; c++) {
    // V repeating
    const p = props.fringePeriod;
    const pos = ((c % p) + p) % p;
    const distFromCenter = Math.abs(pos - (p - 1) / 2);
    // closer to the centre of the cycle → longer fringe
    const len = props.fringeBase + Math.round(props.fringeAmp - distFromCenter);
    arr.push(Math.max(len, 0));
  }
  return arr;
});
const maxFringeLength = computed(() =>
  computedFringeMap.value.reduce((m, n) => Math.max(m, n), 0),
);

// Main grid points
const topBeads = computed(() => {
  const pts = [];
  for (let r = 0; r < props.rows; r++) {
    const offsetX = props.stagger && r % 2 ? props.gapX / 2 : 0;
    for (let c = 0; c < props.cols; c++) {
      const x = props.padding + offsetX + c * props.gapX;
      const y = props.padding + r * props.gapY;
      pts.push({ x, y });
    }
  }
  return pts;
});

// Fringe points: from the last row downwards
const fringeBeads = computed(() => {
  const rowsBottomY = props.padding + (props.rows - 1) * props.gapY;
  const list = [];
  for (let c = 0; c < props.cols; c++) {
    const bottomX =
      props.padding +
      (props.stagger && (props.rows - 1) % 2 ? props.gapX / 2 : 0) +
      c * props.gapX;
    const len = computedFringeMap.value[c] || 0;
    for (let k = 1; k <= len; k++) {
      const x = bottomX;
      const y = rowsBottomY + k * props.gapY;
      list.push({ x, y });
    }
  }
  return list;
});
</script>
