<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    xmlns="http://www.w3.org/2000/svg"
    :style="`display:block; background:${svgBackgroundColor}`"
  >
    <!-- خطوط کمکی اختیاری -->
    <template v-if="showGridHelpers">
      <g opacity="0.15">
        <template v-for="r in rows" :key="'h'+r">
          <line
            :x1="padding" :x2="width - padding"
            :y1="padding + (r-1)*gapY" :y2="padding + (r-1)*gapY"
            stroke="#000" stroke-dasharray="4 4" vector-effect="non-scaling-stroke"
          />
        </template>
      </g>
    </template>

    <!-- مهره‌های شبکه‌ی بالایی -->
    <g>
             <BeadDot
         v-for="(p,i) in topBeads"
         :key="i"
         :x="p.x"
         :y="p.y"
         :r="beadR"
         :bead-id="`top-${i}`"
         :fill="coloredBeads.get(`top-${i}`)?.fill || beadFillColor"
         :stroke="getBeadStroke(coloredBeads.get(`top-${i}`)?.fill || beadFillColor)"
         :stroke-width="getBeadStrokeWidth(coloredBeads.get(`top-${i}`)?.fill || beadFillColor)"
         class="cursor-pointer hover:opacity-80"
         @click="emit('bead-click', `top-${i}`)"
       />
    </g>

    <!-- آویزها -->
    <g v-if="showFringe">
             <BeadDot
         v-for="(p,i) in fringeBeads"
         :key="'f'+i"
         :x="p.x"
         :y="p.y"
         :r="beadR"
         :bead-id="`fringe-${i}`"
         :fill="coloredBeads.get(`fringe-${i}`)?.fill || beadFillColor"
         :stroke="getBeadStroke(coloredBeads.get(`fringe-${i}`)?.fill || beadFillColor)"
         :stroke-width="getBeadStrokeWidth(coloredBeads.get(`fringe-${i}`)?.fill || beadFillColor)"
         class="cursor-pointer hover:opacity-80"
         @click="emit('bead-click', `fringe-${i}`)"
       />
    </g>
  </svg>
</template>

<script setup>
import { computed } from 'vue'
import BeadDot from './BeadDot.vue'

const props = defineProps({
  // ابعاد شبکه‌ی اصلی (بالایی)
  rows: { type: Number, default: 15 },
  cols: { type: Number, default: 38 },

  // ابعاد مهره و فاصله‌ها
  beadR:   { type: Number, default: 5 },
  gapX:    { type: Number, default: 16 }, // فاصله افقی مرکز تا مرکز
  gapY:    { type: Number, default: 14 }, // فاصله عمودی مرکز تا مرکز
  stagger: { type: Boolean, default: true }, // آفست ردیف‌های زوج

  // فرینج (آویزهای پایین)
  showFringe: { type: Boolean, default: true },
  // طول پایه‌ی آویز
  fringeBase: { type: Number, default: 6 },
  // دامنه‌ی تغییر طول آویز (برای V شکل)
  fringeAmp:  { type: Number, default: 4 },
  // تناوب الگو (هر چند ستون یک سیکل کامل V)
  fringePeriod: { type: Number, default: 6 },

  // اگر بخواهی دقیقاً طول هر ستون را خودت بدهی
  // (آرایه‌ای به طول cols، هر آیتم تعداد مهره‌ی آویزِ آن ستون)
  fringeMap: { type: Array, default: null },

  // پدینگ اطراف
  padding: { type: Number, default: 20 },

  // نمایش راهنما/اتصالات (اختیاری)
  showGridHelpers: { type: Boolean, default: false },

  // رنگ‌ها
  beadFillColor: { type: String, default: '#ffffff' },
  svgBackgroundColor: { type: String, default: '#ffffff' },

  // مهره‌های رنگی شده
  coloredBeads: { type: Map, default: () => new Map() },
})

const emit = defineEmits(['bead-click'])

// Helper functions for automatic border logic
const getBeadStroke = (fillColor) => {
  // If fill is white or very light, use black border
  if (fillColor === '#ffffff' || fillColor === '#fff' || isLightColor(fillColor)) {
    return '#000000'
  }
  // Otherwise, use the same color as fill (no visible border)
  return fillColor
}

const getBeadStrokeWidth = (fillColor) => {
  // If fill is white or very light, use thin border
  if (fillColor === '#ffffff' || fillColor === '#fff' || isLightColor(fillColor)) {
    return 1.5
  }
  // Otherwise, no border width
  return 0
}

const isLightColor = (color) => {
  // Simple check for light colors (white, light grays, etc.)
  const hex = color.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  // Calculate brightness and consider light if > 200
  return (r + g + b) / 3 > 200
}

const width = computed(() => {
  const w = (props.cols - 1) * props.gapX + (props.stagger ? props.gapX / 2 : 0)
  return w + props.padding * 2
})
const height = computed(() => {
  const hTop = (props.rows - 1) * props.gapY
  const maxFringe = maxFringeLength.value * props.gapY
  return hTop + maxFringe + props.padding * 2 + props.beadR * 2
})

// محاسبه‌ی طول هر آویز
const computedFringeMap = computed(() => {
  if (Array.isArray(props.fringeMap) && props.fringeMap.length === props.cols) {
    return props.fringeMap
  }
  const arr = []
  for (let c = 0; c < props.cols; c++) {
    // V تکرارشونده
    const p = props.fringePeriod
    const pos = ((c % p) + p) % p
    const distFromCenter = Math.abs(pos - (p - 1) / 2)
    // هرچه به مرکز سیکل نزدیک‌تر → آویز بلندتر
    const len = props.fringeBase + Math.round(props.fringeAmp - distFromCenter)
    arr.push(Math.max(len, 0))
  }
  return arr
})
const maxFringeLength = computed(() =>
  computedFringeMap.value.reduce((m, n) => Math.max(m, n), 0)
)

// نقاط شبکه‌ی اصلی
const topBeads = computed(() => {
  const pts = []
  for (let r = 0; r < props.rows; r++) {
    const offsetX = props.stagger && r % 2 ? props.gapX / 2 : 0
    for (let c = 0; c < props.cols; c++) {
      const x = props.padding + offsetX + c * props.gapX
      const y = props.padding + r * props.gapY
      pts.push({ x, y })
    }
  }
  return pts
})

// نقاط آویزها: از آخرین ردیف رو به پایین
const fringeBeads = computed(() => {
  const rowsBottomY = props.padding + (props.rows - 1) * props.gapY
  const list = []
  for (let c = 0; c < props.cols; c++) {
    const bottomX = props.padding + (props.stagger && (props.rows - 1) % 2 ? props.gapX / 2 : 0) + c * props.gapX
    const len = computedFringeMap.value[c] || 0
    for (let k = 1; k <= len; k++) {
      const x = bottomX
      const y = rowsBottomY + k * props.gapY
      list.push({ x, y })
    }
  }
  return list
})
</script>
