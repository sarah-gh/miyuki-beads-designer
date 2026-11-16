<template>
  <main class="image-pattern">
    <h1>Photo to bracelet</h1>
    <p>Turn a photo into a Loom weaving pattern using Miyuki Delica beads.</p>
    <div class="workspace">
      <section>
        <h2>1. Choose a photo</h2>
        <input
          aria-label="Photo"
          type="file"
          accept="image/*"
          @change="loadPhoto"
        />
        <template v-if="photo">
          <p>Drag the four corners to crop and straighten the image.</p>
          <div class="crop">
            <img
              :src="photo.src"
              alt="Photo to crop"
              draggable="false"
            />
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon
                :points="
                  points.map(([x, y]) => [x * 100, y * 100].join(',')).join(' ')
                "
              />
            </svg>
            <button
              v-for="([x, y], index) in points"
              :key="index"
              type="button"
              :aria-label="
                'Crop corner ' + (index + 1) + '. Use arrow keys to move.'
              "
              :style="{ left: x * 100 + '%', top: y * 100 + '%' }"
              @pointerdown="
                $event.currentTarget.setPointerCapture($event.pointerId)
              "
              @pointermove="moveCorner($event, index)"
              @keydown="nudgeCorner($event, index)"
            ></button>
          </div>
          <BaseButton @click="points = fullCrop()">Reset crop</BaseButton>
        </template>
      </section>
      <section>
        <h2>2. Set pattern size</h2>
        <label
          >Image type
          <select v-model="imageType">
            <option value="photo">General photo</option>
            <option value="bracelet">Existing loom bracelet</option>
          </select>
        </label>
        <p v-if="imageType === 'bracelet'">
          Align the crop with the outer edges of the beads. Enter the number of
          visible bead rows and columns for best results.
        </p>
        <div class="fields">
          <label
            >Rows
            <input
              v-model.number="rows"
              type="number"
              min="1"
              max="80"
          /></label>
          <label
            >Columns
            <input
              v-model.number="cols"
              type="number"
              min="1"
              max="240"
          /></label>
          <label
            >Maximum colours
            <input
              v-model.number="colours"
              type="number"
              min="1"
              max="24"
          /></label>
        </div>
        <p>
          {{
            key
              ? provider + ' is configured.'
              : 'Add a Groq or xAI API key to use AI.'
          }}
          <RouterLink
            class="settings-link"
            :to="{ name: 'settings' }"
            >AI settings</RouterLink
          >
        </p>
        <p v-if="key">
          AI generation sends the cropped photo to {{ provider }} and may incur
          API charges.
        </p>
        <div class="actions">
          <BaseButton
            :disabled="!photo || busy"
            variant="primary"
            @click="generate(false)"
            >Generate locally</BaseButton
          >
          <BaseButton
            :disabled="!photo || !key.trim() || !model || busy"
            @click="generate(true)"
            >Generate with {{ provider }}</BaseButton
          >
          <BaseButton
            v-if="busy"
            @click="request?.abort()"
            >Cancel</BaseButton
          >
        </div>
        <p
          v-if="busy"
          role="status"
        >
          Generating pattern…
        </p>
      </section>
    </div>
    <p
      v-if="error"
      class="error"
      role="alert"
    >
      {{ error }}
    </p>
    <p
      v-if="result && notice"
      role="status"
    >
      {{ notice }}
    </p>
    <section v-if="result">
      <h2>3. Review your pattern</h2>
      <p>
        {{ result.rows }} × {{ result.cols }} ·
        {{ result.palette.length }} colours
      </p>
      <canvas
        ref="preview"
        aria-label="Generated bracelet pattern"
        class="preview"
      ></canvas>
      <ul class="palette">
        <li
          v-for="entry in result.palette"
          :key="entry.code"
        >
          <span :style="{ background: entry.color }"></span>{{ entry.code }} ·
          {{ entry.name }}
        </li>
      </ul>
      <BaseButton
        variant="primary"
        @click="openProject"
        >Create Loom project</BaseButton
      >
    </section>
  </main>
</template>

<script setup>
import {
  computed,
  nextTick,
  onBeforeUnmount,
  ref,
  shallowRef,
  watch,
} from 'vue';
import { useRouter } from 'vue-router';
import BaseButton from '@/components/ui/BaseButton.vue';
import { delicaEntry } from '@/components/peyote/delicaCatalog.js';
import { createProject } from '@/lib/projects/projectStore.js';
import { fullCrop, mapBeads, rectify } from '@/lib/imagePattern/convert.js';
import {
  aiProvider,
  analyzeCrop,
  readAiKey,
  readAiModel,
  DEFAULT_GROK_MODEL,
} from '@/lib/imagePattern/grok.js';

const router = useRouter();
const photo = shallowRef(null);
const points = ref(fullCrop());
const rows = ref(24);
const imageType = ref('photo');
const cols = ref(96);
const colours = ref(8);
const key = ref('');
const model = ref(DEFAULT_GROK_MODEL);
try {
  model.value = readAiModel();
  key.value = readAiKey();
} catch {
  /* Storage is unavailable. */
}
const busy = ref(false);
const error = ref('');
const notice = ref('');
const result = shallowRef(null);
const preview = ref(null);
let request;
let photoVersion = 0;

const provider = computed(() => aiProvider(key.value));

watch(
  [points, rows, cols, colours, imageType],
  () => {
    request?.abort();
    result.value = null;
  },
  { flush: 'sync' },
);

onBeforeUnmount(() => {
  photoVersion++;
  request?.abort();
  if (photo.value) URL.revokeObjectURL(photo.value.src);
});

async function loadPhoto(event) {
  const file = event.target.files[0];
  if (!file) return;
  const version = ++photoVersion;
  request?.abort();
  error.value = '';
  if (file.size > 20 * 1024 * 1024) {
    error.value = 'Choose an image smaller than 20 MB.';
    return;
  }
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  try {
    await image.decode();
    if (version !== photoVersion) {
      URL.revokeObjectURL(url);
      return;
    }
    if (photo.value) URL.revokeObjectURL(photo.value.src);
    photo.value = image;
    points.value = fullCrop();
  } catch {
    URL.revokeObjectURL(url);
    if (version === photoVersion)
      error.value = 'This image could not be opened.';
  }
}

function setCorner(index, x, y) {
  const clamp = (n) => Math.max(0, Math.min(1, n));
  points.value = points.value.map((point, i) =>
    i === index ? [clamp(x), clamp(y)] : point,
  );
}

function moveCorner(event, index) {
  if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
  const box = event.currentTarget.parentElement.getBoundingClientRect();
  setCorner(
    index,
    (event.clientX - box.left) / box.width,
    (event.clientY - box.top) / box.height,
  );
}

function nudgeCorner(event, index) {
  const delta = {
    ArrowUp: [0, -1],
    ArrowDown: [0, 1],
    ArrowLeft: [-1, 0],
    ArrowRight: [1, 0],
  }[event.key];
  if (!delta) return;
  event.preventDefault();
  const [x, y] = points.value[index];
  setCorner(index, x + delta[0] * 0.01, y + delta[1] * 0.01);
}

async function generate(useAi) {
  if (busy.value || !photo.value) return;
  error.value = '';
  notice.value = '';
  result.value = null;
  const dimensions = [rows.value, cols.value, colours.value];
  if (
    !dimensions.every(
      (n, i) => Number.isInteger(n) && n >= 1 && n <= [80, 240, 24][i],
    )
  ) {
    error.value = 'Enter 1–80 rows, 1–240 columns, and 1–24 colours.';
    return;
  }
  const [height, width, limit] = dimensions;
  busy.value = true;
  request = new AbortController();
  const { signal } = request;
  const timeout = setTimeout(() => request.abort('timeout'), 45000);
  try {
    // Rectify at a higher resolution so downsampling averages bead-sized areas.
    const bracelet = imageType.value === 'bracelet';
    const sampling = bracelet ? 8 : 4;
    const crop = rectify(
      photo.value,
      points.value,
      width * sampling,
      height * sampling,
    );
    const focus = useAi
      ? await analyzeCrop(crop, key.value.trim(), model.value, signal)
      : null;
    if (signal.aborted) return;
    if (useAi && !focus) {
      notice.value =
        focus === null
          ? 'No single subject was detected. The full crop was used.'
          : 'AI returned an unreadable subject area. The pattern was generated locally from the full crop.';
    }
    const grid = mapBeads(crop, height, width, limit, focus, bracelet);
    const palette = [...new Set(grid)].map(delicaEntry);
    result.value = { rows: height, cols: width, grid, palette };
    await nextTick();
    const canvas = preview.value;
    if (!canvas) return;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    const swatches = new Map(palette.map(({ code, color }) => [code, color]));
    grid.forEach((code, i) => {
      ctx.fillStyle = swatches.get(code);
      ctx.fillRect(i % width, Math.floor(i / width), 1, 1);
    });
  } catch (failure) {
    if (signal.reason === 'timeout')
      error.value = 'AI request timed out. Try again or generate locally.';
    else if (!signal.aborted)
      error.value =
        failure instanceof TypeError
          ? 'Could not reach the AI provider. Check your connection or generate locally.'
          : failure.message;
  } finally {
    clearTimeout(timeout);
    busy.value = false;
    request = null;
  }
}

function openProject() {
  if (!result.value) return;
  try {
    const { rows: height, cols: width, grid } = result.value;
    const project = createProject({
      mode: 'flat',
      name: 'Photo bracelet',
      data: {
        rows: width,
        cols: height,
        grid,
        cellWidth: 15,
        cellHeight: 17,
        isVerticalGrid: true,
      },
    });
    router.push({ name: 'flat-editor', params: { id: project.id } });
  } catch {
    error.value = 'Could not save the project in this browser.';
  }
}
</script>

<style scoped>
.image-pattern {
  max-width: 1100px;
  margin: auto;
  padding: clamp(16px, 3vw, 32px);
}
h1 {
  font-size: 2rem;
  font-weight: 800;
}
h2 {
  font-size: 1.1rem;
  font-weight: 800;
}
p {
  margin-block: 8px;
  color: var(--text-muted);
}
.workspace {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-block: 16px;
}
section {
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
  min-width: 0;
}
input {
  max-width: 100%;
}
label {
  display: grid;
  gap: 4px;
}
label input,
label select {
  width: 100%;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  padding: 8px;
  background: var(--surface-muted);
}
.fields,
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-block: 12px;
}
.fields label {
  flex: 1 1 100px;
}
.settings-link {
  color: var(--accent-text);
  text-decoration: underline;
}
.crop {
  position: relative;
  width: fit-content;
  max-width: 100%;
  margin: 16px auto;
}
.crop img {
  display: block;
  max-width: 100%;
  max-height: 360px;
}
.crop svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.crop polygon {
  fill: #fff2;
  stroke: white;
  stroke-width: 2px;
  vector-effect: non-scaling-stroke;
}
.crop button {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 26px;
  height: 26px;
  border: 2px solid white;
  border-radius: 50%;
  background: var(--accent);
  touch-action: none;
  cursor: grab;
}
.preview {
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  image-rendering: pixelated;
}
.palette {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  margin-block: 12px;
}
.palette li {
  display: flex;
  align-items: center;
  gap: 6px;
}
.palette span {
  width: 16px;
  height: 16px;
  border: 1px solid var(--border-strong);
  border-radius: 4px;
}
.error {
  color: var(--danger);
}
@media (max-width: 720px) {
  .workspace {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
