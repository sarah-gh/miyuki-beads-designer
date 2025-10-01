<template>
  <div class="peyote-editor-container">
    <!-- Main content area -->
    <div class="grid-container">
        <div class="image-section">
          <div class="upload-section grid grid-cols-2 gap-2">
            <label class="upload-label">
              <span class="upload-text">📁 آپلود فایل txt grid</span>
              <input
                type="file"
                accept=".txt"
                class="upload-input"
                @change="handleTxtUpload"
              />
            </label>
            <label class="upload-label">
              <span class="upload-text">📁 آپلود تصویر</span>
              <input
                type="file"
                accept="image/*"
                class="upload-input"
                @change="handleImageUpload"
              />
            </label>
          </div>
          <div
            v-if="selectedImage"
            class="image-preview"
          >
            <img
              :src="selectedImage"
              alt="تصویر انتخاب شده"
              class="preview-image"
            />
        </div>
        </div>
        <div class="main-content">
        <div class="p-4">
            <h2 class="text-lg font-semibold mb-3">Peyote عمودی — ویرایشگر طرح</h2>
  
  
      <!-- Grid wrapper: flex row so columns sit side-by-side -->
      <div
        ref="gridWrapper"
        class="overflow-auto border rounded p-2 bg-white"
        :style="{ height: gridHeight + 'px', minWidth: gridMinWidth + 'px' }"
      >
            <div v-if="isGridReady" class="flex items-start" :style="{ gap: '0px' }">
          <!-- each column -->
          <div
            v-for="c in colsArr"
            :key="c"
            class="flex-shrink-0"
            :style="{ width: cellWidth + 'px' }"
          >
            <!-- column content (stack of cells). we apply translateY to create peyote offset -->
            <div
              class="flex flex-col"
              :style="colOffsetStyle(c)"
            >
              <div
                v-for="r in rowsArr"
                :key="`${r}-${c}`"
                class="cell cursor-pointer border-[1px] border-gray-200"
                :style="cellStyle(r, c)"
                     @mousedown="handleCellClick(r, c)"
                     @mouseenter="handleCellMouseEnter(r, c)"
              ></div>
            </div>
          </div>
        </div>
            <div v-else class="flex items-center justify-center h-full text-gray-500">
                Loading grid...
        </div>
      </div>
  
      <p class="mt-2 text-xs text-gray-500">راست‌کلیک = پاک کردن. می‌توانی تعداد ردیف/ستون را در متغیرها تغییر بدهی.</p>
        </div>
        </div>
    </div>

    <!-- ابزارها - Fixed on the right side -->
    <div class="controls-panel">
      <div class="controls-header">
        <h3 class="mb-4 text-lg font-bold text-gray-800">🎨 ابزارهای طراحی</h3>
      </div>

      <div class="controls-content">
        <!-- تنظیمات ابعاد -->
        <div class="dimensions-section">
          <h4 class="mb-2 text-sm font-semibold text-gray-700">
            📐 ابعاد شبکه
          </h4>
          <div class="dimension-inputs">
            <label class="dimension-label">
              <span class="dimension-text">ردیف‌ها: {{ rows }}</span>
              <input
                v-model.number="rows"
                type="number"
                min="1"
                max="200"
                class="dimension-input"
              />
            </label>
            <label class="dimension-label">
              <span class="dimension-text">ستون‌ها: {{ cols }}</span>
              <input
                v-model.number="cols"
                type="number"
                min="1"
                max="200"
                class="dimension-input"
              />
            </label>
            <label class="dimension-label">
              <span class="dimension-text">عرض سل: {{ cellWidth }}px</span>
              <input
                v-model.number="cellWidth"
                type="number"
                min="5"
                max="50"
                class="dimension-input"
              />
            </label>
            <label class="dimension-label">
              <span class="dimension-text">ارتفاع سل: {{ cellHeight }}px</span>
              <input
                v-model.number="cellHeight"
                type="number"
                min="5"
                max="50"
                class="dimension-input"
              />
            </label>

          </div>
        </div>

        <!-- انتخاب رنگ -->
        <div class="color-section">
          <h4 class="mb-2 text-sm font-semibold text-gray-700">
            🎨 انتخاب رنگ
          </h4>
          <div class="selection-mode-indicator">
            <span class="mode-text">حالت فعلی: {{ selectionMode === 'color' ? 'رنگ' : 'تصویر' }}</span>
          </div>
          <div class="color-picker-container">
            <input
              v-model="selectedColor"
              type="color"
              class="color-picker"
              @change="setColorMode"
            />
            <span class="color-value">{{ selectedColor }}</span>
          </div>
          <div class="mode-switch-buttons">
            <button
              class="mode-btn"
              :class="{ active: selectionMode === 'color' }"
              @click="setColorMode"
            >
              🎨 رنگ
            </button>
            <button
              class="mode-btn"
              :class="{ active: selectionMode === 'image' }"
              :disabled="!selectedImage"
              @click="setImageMode"
            >
              🖼️ تصویر
            </button>
          </div>
          <div class="recent-colors-header mt-3!">
            <h4 class="text-sm font-semibold text-gray-700">🔄 رنگ‌های اخیر</h4>
            <button
              v-if="recentColors.length > 0"
              class="clear-colors-btn"
              title="پاک کردن تمام رنگ‌ها"
              @click="clearRecentColors"
            >
              🗑️ پاک کردن
            </button>
          </div>
          <div class="recent-colors-grid">
            <div
              v-for="color in recentColors"
              :key="color"
              class="color-swatch"
              :style="{ backgroundColor: color }"
              :title="color"
              @click="selectedColor = color"
            >
              <button
                class="remove-color-btn"
                @click.stop="removeRecentColor(color)"
              >
                ×
              </button>
            </div>
          </div>
        </div>

        <!-- انتخاب تصویر -->
        <div class="image-section">
          <h4 class="mb-2 text-sm font-semibold text-gray-700">
            🖼️ انتخاب تصویر
          </h4>
          <div class="image-upload-container">
            <label class="image-upload-label">
              <span class="image-upload-text">📁 آپلود تصویر</span>
              <input
                type="file"
                accept="image/*"
                class="image-upload-input"
                @change="handleImageUpload"
              />
            </label>
          </div>
          <div v-if="selectedImage" class="selected-image-preview">
            <img
              :src="selectedImage"
              alt="تصویر انتخاب شده"
              class="preview-image-small"
            />
            <button
              title="حذف تصویر"
              class="remove-image-btn"
              @click="clearSelectedImage"
            >
              ×
            </button>
          </div>
          <div v-if="recentImages.length > 0" class="recent-images-header mt-3!">
            <h4 class="text-sm font-semibold text-gray-700">🔄 تصاویر اخیر</h4>
            <button
              class="clear-images-btn"
              title="پاک کردن تمام تصاویر"
              @click="clearRecentImages"
            >
              🗑️ پاک کردن
            </button>
          </div>
          <div v-if="recentImages.length > 0" class="recent-images-grid">
            <div
              v-for="image in recentImages"
              :key="image"
              class="image-swatch"
              :class="{ active: selectedImage === image }"
              @click="selectedImage = image; setImageMode()"
            >
              <img
                :src="image"
                alt="تصویر اخیر"
                class="image-swatch-img"
              />
              <button
                class="remove-image-btn-small"
                @click.stop="removeRecentImage(image)"
              >
                ×
              </button>
            </div>
          </div>
        </div>

        <!-- ابزارهای اصلی -->
        <div class="tools-section">
          <h4 class="mb-2 text-sm font-semibold text-gray-700">🛠️ ابزارها</h4>
          <div class="tools-grid">
            <button
              class="tool-btn primary"
              :class="{ active: tool === 'paint' }"
              @click="setTool('paint')"
            >
              🖌️ Paint
            </button>
            <button
              class="tool-btn primary"
              :class="{ active: tool === 'fill' }"
              @click="setTool('fill')"
            >
              🪣 Fill
            </button>
            <button
              class="tool-btn secondary"
              :class="{ active: tool === 'select' }"
              @click="setTool('select')"
            >
              📐 Select
            </button>
            <button
              class="tool-btn secondary"
              @click="copySelection"
            >
              📋 Copy
            </button>
            <button
              class="tool-btn secondary"
              @click="cutSelection"
            >
              ✂️ Cut
            </button>
            <button
              class="tool-btn secondary"
              @click="pasteAtCenter"
            >
              📍 Paste at Center
            </button>
            <button
              class="tool-btn secondary"
              :disabled="!hasClipboardContent()"
              @click="enablePasteMode"
            >
              🎯 Enable Click-to-Paste
            </button>
            <button
              v-if="isPasteMode"
              class="tool-btn danger"
              @click="cancelPasteMode"
            >
              ❌ Cancel Click-to-Paste
            </button>
            <button
              class="tool-btn secondary"
              @click="clearSelection"
            >
              🗑️ Clear Selection
            </button>
            <button
              class="tool-btn secondary"
              :disabled="selection.length === 0"
              @click="mirrorSelection"
            >
              🔄 Mirror Selection
            </button>
            <button
              class="tool-btn secondary"
              :disabled="selection.length === 0"
              @click="mirrorSelectionVertical"
            >
              ↕️ Mirror Selection Vertical
            </button>
            <button
              class="tool-btn secondary"
              @click="undo"
            >
              ↩️ Undo
            </button>
            <button
              class="tool-btn secondary"
              @click="redo"
            >
              ↪️ Redo
            </button>
          </div>
          
          <!-- دکمه تغییر رنگ تمام مهره‌ها -->
          <div class="background-color-section !mt-4">
            <h4 class="mb-2 text-sm font-semibold text-gray-700">🎨 رنگ پس‌زمینه</h4>
            <div class="background-color-controls">
              <input
                v-model="backgroundColor"
                type="color"
                class="color-picker"
                title="انتخاب رنگ پس‌زمینه"
              />
              <button
                class="tool-btn success"
                @click="changeAllBeadsToColor"
              >
                🎨 تغییر تمام مهره‌ها
              </button>
            </div>
          </div>
        </div>

        <!-- دکمه‌های خروجی -->
        <div class="export-section">
          <h4 class="mb-2 text-sm font-semibold text-gray-700">📤 خروجی</h4>

          <!-- دکمه‌های ذخیره و بارگذاری -->
          <div class="save-load-buttons mb-3">
            <button
              class="export-btn success"
              @click="saveGridToLocalStorage"
            >
              💾 ذخیره گرید
            </button>
            <button
              class="export-btn info"
              @click="loadGridFromLocalStorage"
            >
              📂 بارگذاری اخرین ذخیره
            </button>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button
            class="export-btn primary"
            @click="emit('update-grid', getGridMatrix())"
          >
            🚀 ارسال به 3D
          </button>

          <button
            class="export-btn success"
            @click="exportGridAsImage"
          >
            📷 خروجی عکس
          </button>

          <button
            class="export-btn info"
            @click="exportGridAsHighQualityImage"
          >
            🖼️ خروجی HD
          </button>

          <button
            class="export-btn warning"
            @click="exportGridAsTxt"
          >
            📄 خروجی TXT
          </button>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, computed, onMounted, onUnmounted, watch, nextTick } from 'vue';
  
  const emit = defineEmits(['update-grid']);
  
  // File upload state
  const selectedImage = ref(null);
  const recentImages = ref([]);
  const selectionMode = ref('color'); // 'color' or 'image'
  
  // تنظیمات — این مقادیر را مطابق نیازت تغییر بده
  const cols = ref(12);     // طول (تعداد ستون‌ها)
  const rows = ref(50);     // عرض (تعداد سطرها در هر ستون)
  const cellWidth = ref(15); // عرض هر خانه (پیکسل)
  const cellHeight = ref(17); // ارتفاع هر خانه (پیکسل)
  
  // پالت رنگ‌ها
  const palette = [
    { key: 'DB-1510', hex: '#efe9df' },
    { key: 'DB-1503', hex: '#efbfc7' },
    { key: 'DB-0914', hex: '#d92e5b' },
    { key: 'DB-1832', hex: '#d39c2a' }
  ];
  
  const selectedColor = ref(palette[2].hex);
  const backgroundColor = ref('#ffffff');
  
  // آرایه‌های کمکی برای v-for (0-based indices)
  const colsArr = computed(() => Array.from({ length: cols.value }, (_, i) => i));
  const rowsArr = computed(() => Array.from({ length: rows.value }, (_, i) => i));
  
  // ماتریس grid[r][c] (rows x cols)
  const grid = reactive([]);
  
  // Initialize grid based on current dimensions
  function initializeGrid() {
    const newGrid = Array.from({ length: rows.value }, () => Array.from({ length: cols.value }, () => backgroundColor.value));
    grid.splice(0, grid.length, ...newGrid);
    gridInitialized.value = true;
    console.info('Grid initialized:', { rows: rows.value, cols: cols.value, gridLength: grid.length });
    
    // Initialize history with the initial grid state
    history.value = [JSON.parse(JSON.stringify(grid))];
    historyIndex.value = 0;
  }
  
  const gridHeight = computed(() => rows.value * cellHeight.value + cellHeight.value);
  const gridMinWidth = computed(() => cols.value * cellWidth.value + cellWidth.value);
  
  // Check if grid is properly initialized
  const isGridReady = computed(() => {
    const ready = gridInitialized.value && grid.length === rows.value && grid.length > 0 && grid[0]?.length === cols.value;
    console.info('Grid ready check:', { 
      gridInitialized: gridInitialized.value,
      gridLength: grid.length, 
      rows: rows.value, 
      cols: cols.value, 
      firstRowLength: grid[0]?.length,
      ready 
    });
    return ready;
  });
  
  // Tool system
  const tool = ref('paint');
  const selection = ref([]);
  const clipboard = ref(null);
  const isPasteMode = ref(false);
  const recentColors = ref([]);
  
  // Mouse drag state
  const isMouseDown = ref(false);
  const isDragging = ref(false);
  const lastPaintedCell = ref(null);
  
  // Grid state
  const gridInitialized = ref(false);
  
  // History for undo/redo
  const history = ref([]);
  const historyIndex = ref(-1);
  const isUndoRedoOperation = ref(false);
  const pendingHistorySave = ref(false);
  
  // Function to save current state to history
  function saveToHistory() {
    if (isUndoRedoOperation.value) return; // Don't save during undo/redo operations
    
    const currentState = JSON.parse(JSON.stringify(grid));
    
    // If we're not at the end of history, remove future states
    if (historyIndex.value < history.value.length - 1) {
      history.value = history.value.slice(0, historyIndex.value + 1);
    }
    
    // Add current state to history
    history.value.push(currentState);
    historyIndex.value = history.value.length - 1;
    
    // Limit history size to 10 actions as requested
    if (history.value.length > 10) {
      history.value.shift();
      historyIndex.value--;
    }
    
    console.info('Saved to history:', { historyLength: history.value.length, historyIndex: historyIndex.value });
  }
  
  // Function to mark the start of an operation (for batching)
  function startOperation() {
    pendingHistorySave.value = true;
  }
  
  // Function to mark the end of an operation
  function endOperation() {
    if (pendingHistorySave.value) {
      saveToHistory();
      pendingHistorySave.value = false;
    }
  }
  
  // Watch for dimension changes
  watch([rows, cols], ([newRows, newCols], [oldRows, oldCols]) => {
    // Don't resize if grid is not initialized yet
    if (!gridInitialized.value) {
      console.info('Grid not initialized yet, skipping resize');
      return;
    }
    
    // Validate the new dimensions
    const validRows = Math.max(1, Math.min(200, newRows || 1));
    const validCols = Math.max(1, Math.min(200, newCols || 1));
    
    // Update the refs if they were invalid
    if (validRows !== newRows) rows.value = validRows;
    if (validCols !== newCols) cols.value = validCols;
    
    if (validRows !== oldRows || validCols !== oldCols) {
      console.info('Dimensions changed:', { oldRows, oldCols, newRows: validRows, newCols: validCols });
      resizeGrid(validRows, validCols);
    }
  });
  
  // Watch for color selection changes
  watch(selectedColor, (newColor, oldColor) => {
    // Add to recent colors when user manually selects a color
    if (newColor && newColor !== oldColor && newColor !== backgroundColor.value) {
      addToRecentColors(newColor);
    }
  });
  
  function resizeGrid(newRows, newCols) {
    const oldRows = rows.value;
    const oldCols = cols.value;
    console.info('Resizing grid:', { oldRows, oldCols, newRows, newCols });
    
    startOperation();
    
    const newGrid = Array.from({ length: newRows }, () => Array.from({ length: newCols }, () => backgroundColor.value));
    
    // Copy existing data - only if grid is properly initialized
    if (grid.length > 0 && grid[0] !== undefined) {
      for (let r = 0; r < Math.min(oldRows, newRows); r++) {
        for (let c = 0; c < Math.min(oldCols, newCols); c++) {
          if (grid[r] && grid[r][c] !== undefined) {
            newGrid[r][c] = grid[r][c];
          }
        }
      }
    }
    
    // Clear and repopulate grid
    grid.splice(0, grid.length, ...newGrid);
    gridInitialized.value = true;
    console.info('Grid resized successfully. New grid dimensions:', { 
      rows: newRows, 
      cols: newCols,
      actualGridLength: grid.length,
      actualFirstRowLength: grid[0]?.length
    });
    
    endOperation();
  }
  
  // توابع
  function addToRecentColors(color) {
    // Don't add background color to recent colors
    if (color === backgroundColor.value) return;
    
    // Remove color if it already exists to avoid duplicates
    const index = recentColors.value.indexOf(color);
    if (index > -1) {
      recentColors.value.splice(index, 1);
    }
    
    // Add color to the beginning of the array
    recentColors.value.unshift(color);
    
    // Limit to maximum 20 recent colors
    if (recentColors.value.length > 20) {
      recentColors.value = recentColors.value.slice(0, 20);
    }
  }
  
  function removeRecentColor(color) {
    const index = recentColors.value.indexOf(color);
    if (index > -1) {
      recentColors.value.splice(index, 1);
    }
  }
  
  function clearRecentColors() {
    recentColors.value = [];
  }

  // Image management functions
  function addToRecentImages(imageDataUrl) {
    // Remove image if it already exists to avoid duplicates
    const index = recentImages.value.indexOf(imageDataUrl);
    if (index > -1) {
      recentImages.value.splice(index, 1);
    }
    
    // Add image to the beginning of the array
    recentImages.value.unshift(imageDataUrl);
    
    // Limit to maximum 10 recent images
    if (recentImages.value.length > 10) {
      recentImages.value = recentImages.value.slice(0, 10);
    }
  }

  function removeRecentImage(imageDataUrl) {
    const index = recentImages.value.indexOf(imageDataUrl);
    if (index > -1) {
      recentImages.value.splice(index, 1);
    }
  }

  function clearRecentImages() {
    recentImages.value = [];
  }

  function clearSelectedImage() {
    selectedImage.value = null;
    selectionMode.value = 'color'; // Switch back to color mode when image is cleared
  }

  function setColorMode() {
    selectionMode.value = 'color';
  }

  function setImageMode() {
    if (selectedImage.value) {
      selectionMode.value = 'image';
    }
  }
  
  function setTool(newTool) {
    tool.value = newTool;
    clearSelection();
    cancelPasteMode();
  }
  
  function handleCellClick(r, c) {
    if (isPasteMode.value) {
      pasteAtPosition(r, c);
      return;
    }
    
    isMouseDown.value = true;
    lastPaintedCell.value = `${r},${c}`;
    
    switch (tool.value) {
      case 'paint':
        startOperation(); // Start operation for paint tool
        toggleCell(r, c);
        // Don't end operation here - let handleMouseUp do it for drag operations
        break;
      case 'fill':
        startOperation();
        fillArea(r, c);
        endOperation();
        break;
      case 'select':
        toggleSelection(r, c);
        break;
    }
  }
  
  function handleCellMouseEnter(r, c) {
    if (!isMouseDown.value) return;
    
    const currentCell = `${r},${c}`;
    if (currentCell === lastPaintedCell.value) return;
    
    lastPaintedCell.value = currentCell;
    
    switch (tool.value) {
      case 'paint':
        paintCell(r, c);
        break;
      case 'select':
        toggleSelection(r, c);
        break;
    }
  }
  
  function handleMouseUp() {
    // End any pending operation when mouse is released
    endOperation();
    isMouseDown.value = false;
    isDragging.value = false;
    lastPaintedCell.value = null;
  }
  
  function toggleCell(r, c) {
    if (grid[r] && grid[r][c] !== undefined) {
      const currentValue = grid[r][c];
      const newValue = selectionMode.value === 'image' ? selectedImage.value : selectedColor.value;
      
      // Toggle between current value and selected value (color or image)
      grid[r][c] = currentValue === newValue ? backgroundColor.value : newValue;
      
      // Add to recent colors/images when painting
      if (grid[r][c] === selectedColor.value) {
        addToRecentColors(selectedColor.value);
      } else if (grid[r][c] === selectedImage.value) {
        addToRecentImages(selectedImage.value);
      }
    }
  }
  
  function paintCell(r, c) {
    if (grid[r] && grid[r][c] !== undefined) {
      const newValue = selectionMode.value === 'image' ? selectedImage.value : selectedColor.value;
      grid[r][c] = newValue;
      
      // Add to recent colors/images when painting
      if (newValue === selectedColor.value) {
        addToRecentColors(selectedColor.value);
      } else if (newValue === selectedImage.value) {
        addToRecentImages(selectedImage.value);
      }
    }
  }
  

  function fillArea(startR, startC) {
    if (!grid[startR] || grid[startR][startC] === undefined) return;
    
    const targetValue = grid[startR][startC];
    const fillValue = selectionMode.value === 'image' ? selectedImage.value : selectedColor.value;
    
    if (targetValue === fillValue) return;
    
    const visited = new Set();
    const stack = [[startR, startC]];
    
    while (stack.length > 0) {
      const [r, c] = stack.pop();
      const key = `${r},${c}`;
      
      if (visited.has(key) || r < 0 || r >= rows.value || c < 0 || c >= cols.value) {
        continue;
      }
      
      if (!grid[r] || grid[r][c] !== targetValue) {
        continue;
      }
      
      visited.add(key);
      grid[r][c] = fillValue;
      
      // Add neighbors
      stack.push([r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1]);
    }
    
    // Add to recent colors/images when filling
    if (fillValue === selectedColor.value) {
      addToRecentColors(fillValue);
    } else if (fillValue === selectedImage.value) {
      addToRecentImages(fillValue);
    }
  }
  
  function toggleSelection(r, c) {
    const key = `${r},${c}`;
    const index = selection.value.indexOf(key);
    if (index > -1) {
      selection.value.splice(index, 1);
    } else {
      selection.value.push(key);
    }
  }
  
  function clearSelection() {
    selection.value = [];
  }
  
  function copySelection() {
    if (selection.value.length === 0) {
      console.warn('No cells selected for copying');
      return;
    }
    
    const selectedCells = selection.value.map(key => {
      const [r, c] = key.split(',').map(Number);
      return { r, c, color: grid[r]?.[c] || backgroundColor.value };
    });
    
    clipboard.value = selectedCells;
    console.info(`Copied ${selectedCells.length} cells to clipboard`);
    
    // Clear current selection and enable paste mode
    clearSelection();
    enablePasteMode();
  }
  
  function cutSelection() {
    if (selection.value.length === 0) {
      console.warn('No cells selected for cutting');
      return;
    }
    
    startOperation();
    
    const selectedCells = selection.value.map(key => {
      const [r, c] = key.split(',').map(Number);
      return { r, c, color: grid[r]?.[c] || backgroundColor.value };
    });
    
    clipboard.value = selectedCells;
    console.info(`Cut ${selectedCells.length} cells to clipboard`);
    
    // Clear the selected cells
    selection.value.forEach(key => {
      const [r, c] = key.split(',').map(Number);
      if (grid[r] && grid[r][c] !== undefined) {
        grid[r][c] = backgroundColor.value;
      }
    });
    
    // Clear current selection and enable paste mode
    clearSelection();
    enablePasteMode();
    
    endOperation();
  }
  
  function pasteAtCenter() {
    if (!clipboard.value) {
      console.warn('No content in clipboard to paste');
      return;
    }
    
    startOperation();
    
    // Clear any current selection
    clearSelection();
    
    // Calculate the bounds of the copied selection
    const minR = Math.min(...clipboard.value.map(cell => cell.r));
    const minC = Math.min(...clipboard.value.map(cell => cell.c));
    const maxR = Math.max(...clipboard.value.map(cell => cell.r));
    const maxC = Math.max(...clipboard.value.map(cell => cell.c));
    
    // Calculate the center of the copied selection
    const selectionCenterR = (minR + maxR) / 2;
    const selectionCenterC = (minC + maxC) / 2;
    
    // Calculate the center of the current grid
    const gridCenterR = Math.floor(rows.value / 2);
    const gridCenterC = Math.floor(cols.value / 2);
    
    // Calculate the offset to center the selection
    const offsetR = gridCenterR - selectionCenterR;
    const offsetC = gridCenterC - selectionCenterC;
    
    // Calculate peyote row adjustment based on column offset difference
    // Note: peyoteAdjustment is now calculated per-cell in the loop below
    
    let pastedCount = 0;
    clipboard.value.forEach(({ r, c, color }) => {
      // Calculate the target column for this cell
      const targetCol = c + offsetC;
      
      // Apply peyote adjustment based on source vs target column relationship
      let cellAdjustment = 0;
      const sourceIsOdd = minC % 2 === 1;
      const targetIsOdd = targetCol % 2 === 1;
      
      if (sourceIsOdd && !targetIsOdd) {
        // Case 3: Odd → Even: shift even columns one row higher
        cellAdjustment = -1;
        console.info(`Odd→Even: sourceCol=${minC}, targetCol=${targetCol}, cellAdjustment=${cellAdjustment}`);
      } else if (!sourceIsOdd && targetIsOdd) {
        // Case 2: Even → Odd: shift odd columns one row higher  
        cellAdjustment = -1;
        console.info(`Even→Odd: sourceCol=${minC}, targetCol=${targetCol}, cellAdjustment=${cellAdjustment}`);
      } else {
        // Case 1: Same column type (even→even, odd→odd): no adjustment needed
        console.info(`Same type: sourceCol=${minC}, targetCol=${targetCol}, cellAdjustment=${cellAdjustment}`);
      }
      
      const newR = r + offsetR + cellAdjustment;
      const newC = targetCol;
      
      if (newR >= 0 && newR < rows.value && newC >= 0 && newC < cols.value) {
        if (grid[newR] && grid[newR][newC] !== undefined) {
          grid[newR][newC] = color;
          pastedCount++;
        }
      }
    });
    
    console.info(`Pasted ${pastedCount} cells at center with peyote adjustment`);
    endOperation();
  }
  
  function pasteAtPosition(r, c) {
    if (!clipboard.value) return;
    
    startOperation();
    
    // Clear any current selection
    clearSelection();
    
    // Calculate the bounds of the copied selection
    const minR = Math.min(...clipboard.value.map(cell => cell.r));
    const minC = Math.min(...clipboard.value.map(cell => cell.c));
    
    console.info('minC', minC, 'c', c);
    
    let pastedCount = 0;
    clipboard.value.forEach(({ r: origR, c: origC, color }) => {
      // Calculate offset from the top-left corner of the selection
      const offsetR = origR - minR;
      const offsetC = origC - minC;
      
      // Calculate the target column for this cell
      const targetCol = c + offsetC;
      
      // Apply peyote adjustment based on source vs target column relationship
      let cellAdjustment = 0;
      const sourceIsOdd = minC % 2 === 1;
      const targetIsOdd = targetCol % 2 === 1;
      
      console.info('sourceIsOdd', sourceIsOdd, 'targetIsOdd', targetIsOdd);
      
      if (sourceIsOdd && !targetIsOdd) {
        // Case 3: Odd → Even: shift even columns one row higher
        if(origC % 2 === 1) {
          cellAdjustment = 0;
        } else {
          cellAdjustment = -1;
        }
        console.info(`Odd→Even: sourceCol=${minC}, targetCol=${targetCol}, cellAdjustment=${cellAdjustment}`);
      } else if (!sourceIsOdd && targetIsOdd) {
        // Case 2: Even → Odd: shift odd columns one row higher  
        console.info(`Even→Odd: sourceCol=${minC}, targetCol=${targetCol}, cellAdjustment=${cellAdjustment}`);
        if(origC % 2 === 1) {
          cellAdjustment = -1;
        } else {
          cellAdjustment = -2;
        }
      } else {
        // Case 1: Same column type (even→even, odd→odd): no adjustment needed
        console.info(`Same type: sourceCol=${minC}, targetCol=${targetCol}, cellAdjustment=${cellAdjustment}`);
        cellAdjustment = -1;
      }

      console.info('cellAdjustment', cellAdjustment);
      
      const newR = r + offsetR + cellAdjustment;
      const newC = targetCol;
      
      console.info(`Pasting cell: orig(${origR},${origC}) -> new(${newR},${newC}) offset(${offsetR},${offsetC}) cellAdjustment=${cellAdjustment}`);
      
      if (newR >= 0 && newR < rows.value && newC >= 0 && newC < cols.value) {
        if (grid[newR] && grid[newR][newC] !== undefined) {
          grid[newR][newC] = color;
          pastedCount++;
        }
      }
    });
    
    console.info(`Pasted ${pastedCount} cells at position (${r}, ${c}) with per-cell peyote adjustment`);
    endOperation();
    // Note: We don't cancel paste mode here to allow multiple pastes
  }
  
  function enablePasteMode() {
    if (clipboard.value) {
      isPasteMode.value = true;
    }
  }
  
  function cancelPasteMode() {
    isPasteMode.value = false;
  }
  
  function hasClipboardContent() {
    return clipboard.value && clipboard.value.length > 0;
  }
  
  function mirrorSelection() {
    if (selection.value.length === 0) return;
    
    startOperation();
    
    const cells = selection.value.map(key => {
      const [r, c] = key.split(',').map(Number);
      return { r, c, color: grid[r]?.[c] || backgroundColor.value };
    });
    
    const maxC = Math.max(...cells.map(cell => cell.c));
    
    cells.forEach(({ r, c, color }) => {
      const newC = maxC - c;
      if (newC >= 0 && newC < cols.value) {
        if (grid[r] && grid[r][newC] !== undefined) {
          grid[r][newC] = color;
        }
      }
    });
    
    endOperation();
  }
  
  function mirrorSelectionVertical() {
    if (selection.value.length === 0) return;
    
    startOperation();
    
    const cells = selection.value.map(key => {
      const [r, c] = key.split(',').map(Number);
      return { r, c, color: grid[r]?.[c] || backgroundColor.value };
    });
    
    const maxR = Math.max(...cells.map(cell => cell.r));
    
    cells.forEach(({ r, c, color }) => {
      const newR = maxR - r;
      if (newR >= 0 && newR < rows.value) {
        if (grid[newR] && grid[newR][c] !== undefined) {
          grid[newR][c] = color;
        }
      }
    });
    
    endOperation();
  }
  
  function undo() {
    if (historyIndex.value > 0) {
      isUndoRedoOperation.value = true;
      historyIndex.value--;
      const previousState = history.value[historyIndex.value];
      grid.splice(0, grid.length, ...previousState);
      isUndoRedoOperation.value = false;
      console.info('Undo performed:', { historyIndex: historyIndex.value, historyLength: history.value.length });
    } else {
      console.warn('No more undo history available');
    }
  }
  
  function redo() {
    if (historyIndex.value < history.value.length - 1) {
      isUndoRedoOperation.value = true;
      historyIndex.value++;
      const nextState = history.value[historyIndex.value];
      grid.splice(0, grid.length, ...nextState);
      isUndoRedoOperation.value = false;
      console.info('Redo performed:', { historyIndex: historyIndex.value, historyLength: history.value.length });
    } else {
      console.warn('No more redo history available');
    }
  }
  
  function changeAllBeadsToColor() {
    startOperation();
    
    for (let r = 0; r < rows.value; r++) {
      for (let c = 0; c < cols.value; c++) {
        if (grid[r] && grid[r][c] !== undefined) {
          grid[r][c] = backgroundColor.value;
        }
      }
    }
    
    endOperation();
  }
  
  
  function getGridMatrix() {
    return grid.map(row => [...row]);
  }
  
  function saveGridToLocalStorage() {
    const data = {
      grid: getGridMatrix(),
      cols: cols.value,
      rows: rows.value,
      cellWidth: cellWidth.value,
      cellHeight: cellHeight.value,
      selectedColor: selectedColor.value,
      backgroundColor: backgroundColor.value
    };
    localStorage.setItem('peyoteGrid', JSON.stringify(data));
  }
  
  function loadGridFromLocalStorage() {
    const saved = localStorage.getItem('peyoteGrid');
    if (saved) {
      const data = JSON.parse(saved);
      cols.value = data.cols || 12;
      rows.value = data.rows || 36;
      cellWidth.value = data.cellWidth || 15;
      cellHeight.value = data.cellHeight || 15;
      selectedColor.value = data.selectedColor || palette[2].hex;
      backgroundColor.value = data.backgroundColor || '#ffffff';
      
      if (data.grid) {
        resizeGrid(rows.value, cols.value);
        for (let r = 0; r < rows.value; r++) {
          for (let c = 0; c < cols.value; c++) {
            grid[r][c] = data.grid[r] && data.grid[r][c] ? data.grid[r][c] : null;
          }
        }
      }
    }
  }
  
  async function exportGridAsImage() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = cols.value * cellWidth.value;
    canvas.height = rows.value * cellHeight.value;
    
    // Draw background
    ctx.fillStyle = backgroundColor.value;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Collect all image promises
    const imagePromises = [];
    const imageCells = [];
    
    // First pass: collect all image cells
    for (let r = 0; r < rows.value; r++) {
      for (let c = 0; c < cols.value; c++) {
        const cellValue = grid[r][c] || backgroundColor.value;
        
        if (cellValue && cellValue.startsWith('data:image/')) {
          const promise = new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve({ img, r, c });
            img.src = cellValue;
          });
          imagePromises.push(promise);
          imageCells.push({ r, c });
        }
      }
    }
    
    // Wait for all images to load
    const loadedImages = await Promise.all(imagePromises);
    
    // Draw all cells
    for (let r = 0; r < rows.value; r++) {
      for (let c = 0; c < cols.value; c++) {
        const cellValue = grid[r][c] || backgroundColor.value;
        const x = c * cellWidth.value;
        const y = r * cellHeight.value;
        
        if (cellValue && cellValue.startsWith('data:image/')) {
          // Find the loaded image for this cell
          const loadedImage = loadedImages.find(img => img.r === r && img.c === c);
          if (loadedImage) {
            ctx.drawImage(loadedImage.img, x, y, cellWidth.value, cellHeight.value);
          }
        } else {
          // Draw color
          ctx.fillStyle = cellValue;
          ctx.fillRect(x, y, cellWidth.value, cellHeight.value);
        }
      }
    }
    
    // Download
    const link = document.createElement('a');
    link.download = 'peyote-grid.png';
    link.href = canvas.toDataURL();
    link.click();
  }
  
  async function exportGridAsHighQualityImage() {
    const scale = 4;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = cols.value * cellWidth.value * scale;
    canvas.height = rows.value * cellHeight.value * scale;
    
    // Draw background
    ctx.fillStyle = backgroundColor.value;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Collect all image promises
    const imagePromises = [];
    
    // First pass: collect all image cells
    for (let r = 0; r < rows.value; r++) {
      for (let c = 0; c < cols.value; c++) {
        const cellValue = grid[r][c] || backgroundColor.value;
        
        if (cellValue && cellValue.startsWith('data:image/')) {
          const promise = new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve({ img, r, c });
            img.src = cellValue;
          });
          imagePromises.push(promise);
        }
      }
    }
    
    // Wait for all images to load
    const loadedImages = await Promise.all(imagePromises);
    
    // Draw all cells
    for (let r = 0; r < rows.value; r++) {
      for (let c = 0; c < cols.value; c++) {
        const cellValue = grid[r][c] || backgroundColor.value;
        const x = c * cellWidth.value * scale;
        const y = r * cellHeight.value * scale;
        const width = cellWidth.value * scale;
        const height = cellHeight.value * scale;
        
        if (cellValue && cellValue.startsWith('data:image/')) {
          // Find the loaded image for this cell
          const loadedImage = loadedImages.find(img => img.r === r && img.c === c);
          if (loadedImage) {
            ctx.drawImage(loadedImage.img, x, y, width, height);
          }
        } else {
          // Draw color
          ctx.fillStyle = cellValue;
          ctx.fillRect(x, y, width, height);
        }
      }
    }
    
    // Download
    const link = document.createElement('a');
    link.download = 'peyote-grid-hd.png';
    link.href = canvas.toDataURL();
    link.click();
  }
  
  function exportGridAsTxt() {
    try {
      // Convert 2D grid to 1D array for consistency with other components
      const colors = [];
      for (let r = 0; r < rows.value; r++) {
        for (let c = 0; c < cols.value; c++) {
          const color = grid[r][c] || backgroundColor.value;
          colors.push(color);
        }
      }
      
      // Create JSON object with grid data and dimensions
      const gridData = {
        grid: colors,
        rows: rows.value,
        cols: cols.value,
        type: 'peyote',
        timestamp: new Date().toISOString()
      };
      
      // Convert to JSON string
      const gridDataString = JSON.stringify(gridData, null, 2);
      
      // Create blob and download
      const blob = new Blob([gridDataString], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `peyote_grid_${rows.value}x${cols.value}_${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.txt`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error exporting TXT file:', error);
    }
  }
  
  function handleTxtUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target.result.trim();
        console.info('TXT file content:', content);
        const lines = content.split('\n');
        
        // Check if it's the new JSON format
        if (content.startsWith('{')) {
          const parsedContent = JSON.parse(content);
          if (parsedContent.grid && parsedContent.rows && parsedContent.cols) {
            // New format: JSON with dimensions
            const { grid: colors, rows: fileRows, cols: fileCols } = parsedContent;
            
            console.info('Parsed colors:', colors.slice(0, 10), '...', 'Length:', colors.length);
            console.info('Expected length:', fileRows * fileCols, 'Rows:', fileRows, 'Cols:', fileCols);
            
            if (Array.isArray(colors) && colors.every(color => 
              color === null || color === backgroundColor.value || 
              (typeof color === 'string' && color.match(/^#[0-9A-Fa-f]{6}$/))
            )) {
              console.info('Color validation passed');
              if (colors.length === fileRows * fileCols) {
                console.info('Length validation passed, updating grid...');
                // Update dimensions first
                cols.value = fileCols;
                rows.value = fileRows;
                
                // Wait for watcher to execute, then update grid
                nextTick(() => {
                  // Convert 1D array to 2D grid
                  const gridData = [];
                  for (let r = 0; r < fileRows; r++) {
                    const row = [];
                    for (let c = 0; c < fileCols; c++) {
                      const index = r * fileCols + c;
                      const color = colors[index];
                      // Use the color if it exists, otherwise use background color
                      row.push(color !== null && color !== undefined ? color : backgroundColor.value);
                    }
                    gridData.push(row);
                  }
                  grid.splice(0, grid.length, ...gridData);
                  console.info('Grid loaded from TXT:', { rows: fileRows, cols: fileCols, gridData });

                });
                return;
              } else {
                console.error('Length mismatch:', colors.length, 'expected', fileRows * fileCols);
              }
            } else {
              console.error('Color validation failed');
            }
          } else {
            console.error('Missing required fields in JSON');
          }
        }
        
        // Legacy format: text with ██ characters
        if (lines.length > 2 && lines[0].includes('Peyote Grid')) {
          // Parse header to get dimensions
          const headerMatch = lines[0].match(/(\d+)x(\d+)/);
          if (headerMatch) {
            const fileCols = parseInt(headerMatch[1]);
            const fileRows = parseInt(headerMatch[2]);
            
            // Update dimensions
            cols.value = fileCols;
            rows.value = fileRows;
            
            // Wait for watcher, then parse grid
            nextTick(() => {
              const gridData = [];
              for (let r = 2; r < lines.length && r - 2 < fileRows; r++) {
                const row = [];
                const line = lines[r];
                for (let c = 0; c < fileCols; c++) {
                  const charIndex = c * 2;
                  if (charIndex + 1 < line.length) {
                    const cell = line.substring(charIndex, charIndex + 2);
                    // For now, set all non-empty cells to a default color
                    // In a real implementation, you'd need to map characters to colors
                    row.push(cell === '██' ? '#FF0000' : backgroundColor.value);
                  } else {
                    row.push(backgroundColor.value);
                  }
                }
                gridData.push(row);
              }
              grid.splice(0, grid.length, ...gridData);
            });
            return;
          }
        }
        
        console.error('Unsupported TXT format');
      } catch (error) {
        console.error('Error parsing TXT file:', error);
      }
    };
    reader.readAsText(file);
  }
  
  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageDataUrl = e.target.result;
      selectedImage.value = imageDataUrl;
      addToRecentImages(imageDataUrl);
      setImageMode(); // Automatically switch to image mode when image is uploaded
    };
    reader.readAsDataURL(file);
  }
  
  // محاسبه‌ی شیفت برای ستون c (0-based): ستون‌های فرد را نیم‌سل پایین می‌بریم
  function colOffsetStyle(colIndex) {
    const isShifted = (colIndex % 2) === 1; // اگر خواستی بالعکسش کن: === 0
    const translateY = isShifted ? cellHeight.value / 2 : 0;
    return {
      transform: `translateY(${translateY}px)`,
      gap: '0px'
    };
  }
  
  
  // استایل هر سل (درج رنگ و اندازه)
  function cellStyle(r, c) {
    const cellValue = grid[r]?.[c] || backgroundColor.value;
    const isSelected = selection.value.includes(`${r},${c}`);
    const isPasteTarget = isPasteMode.value;
    
    // Check if the cell value is an image (data URL) or a color
    const isImage = cellValue && cellValue.startsWith('data:image/');
    
    const baseStyle = {
      width: `${cellWidth.value}px`,
      height: `${cellHeight.value}px`,
      boxSizing: 'border-box',
      border: isSelected ? '2px solid #3b82f6' : isPasteTarget ? '1px solid #f59e0b' : '1px solid #e5e7eb',
      cursor: isPasteTarget ? 'crosshair' : 'pointer',
      opacity: isPasteTarget ? 0.9 : 1
    };
    
    if (isImage) {
      return {
        ...baseStyle,
        backgroundImage: `url(${cellValue})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };
    } else {
      return {
        ...baseStyle,
        background: cellValue
      };
    }
  }
  
  // مثال نمونه در mount (اختیاری)
  onMounted(() => {
    console.info('Component mounted. Initial dimensions:', { rows: rows.value, cols: cols.value });
    
    // Initialize grid first
    initializeGrid();
    
    // یک موج نمونه در ستون‌ها (نمایشی)
    for (let j = 0; j < cols.value; j++) {
      const rr = Math.floor(rows.value / 2 + Math.sin(j / 1.5) * (rows.value / 6));
      if (rr >= 0 && rr < rows.value) grid[rr][j] = palette[2].hex;
    }
    
    // Save the initial state with sample pattern to history
    saveToHistory();
    
    // Add global mouseup event listener
    document.addEventListener('mouseup', handleMouseUp);
  });
  
  onUnmounted(() => {
    // Clean up event listener
    document.removeEventListener('mouseup', handleMouseUp);
  });
  </script>
  
  <style scoped>
  .grid-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-right: 250px;
    height: 100%;
    flex: 1;
    user-select: none;
  }
/* استایل دکمه‌های ذخیره و بارگذاری */
.save-load-buttons {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }
  
  .save-load-buttons .export-btn {
    flex: 1;
    min-width: 100px;
  }
  
  /* بهبود استایل دکمه‌های export */
  .export-section .export-btn {
    margin-bottom: 6px;
    transition: all 0.2s ease;
  }
  
  .export-section .export-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  }
  
  /* استایل نمایش آخرین زمان ذخیره */
  .last-saved-info {
    text-align: center;
    padding: 6px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 6px;
    border: 1px solid #dee2e6;
    margin-bottom: 10px;
  }
  
  .last-saved-info small {
    font-size: 11px;
    color: #6c757d;
  }
  
  /* استایل دکمه‌های رنگ پس‌زمینه */
  .background-color-section {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition: all 0.2s ease;
  }
  
  .background-color-section:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .background-color-controls {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
  }
  
  .background-color-controls .color-picker {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #dee2e6;
    cursor: pointer;
    padding: 0;
    transition: all 0.2s ease;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }
  
  .background-color-controls .color-picker:hover {
    transform: scale(1.05);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
  }
  
  .background-color-controls .tool-btn {
    flex: 1;
    min-width: 100px;
  }
  
  .image-section {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    border: 2px solid #dee2e6;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    height: 100%;
  }
  .upload-section {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
  .upload-label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 15px 25px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: 2px dashed rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    box-sizing: border-box;
    color: white;
    font-weight: 500;
  }
  
  .upload-label:hover {
    background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
  .upload-text {
    font-size: 14px;
    color: #333;
  }
  .upload-input {
    display: none;
  }
  .image-preview {
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 12px;
    border: 2px solid #dee2e6;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin-top: 15px;
  }
  .preview-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }  
  .peyote-editor-container {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }

  .main-content {
    flex: 1;
    overflow-y: auto;
    padding-right: 20px;
  }

  .controls-panel {
    width: 320px;
    background: #f8f9fa;
    border-left: 1px solid #e5e7eb;
    overflow-y: auto;
    padding: 20px;
    box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
  }

  .controls-header {
    border-bottom: 2px solid #e5e7eb;
    padding-bottom: 15px;
    margin-bottom: 20px;
  }

  .controls-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .dimensions-section,
  .color-section,
  .tools-section,
  .export-section {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .dimension-inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .dimension-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .dimension-text {
    font-size: 14px;
    color: #374151;
  }

  .dimension-input {
    width: 80px;
    padding: 4px 8px;
    color: #374151 !important;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    font-size: 14px;
  }

  .color-picker-container {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .color-picker {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .color-value {
    font-size: 12px;
    color: #6b7280;
    font-family: monospace;
  }

  .recent-colors-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .clear-colors-btn {
    background: #ef4444;
    color: white;
    border: none;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
  }

  .recent-colors-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
  }

  .color-swatch {
    width: 30px;
    height: 30px;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    border: 2px solid #e5e7eb;
  }

  .remove-color-btn {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 16px;
    height: 16px;
    background: #ef4444;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tools-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .tool-btn {
    padding: 8px 12px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  .tool-btn:hover {
    background: #f3f4f6;
  }

  .tool-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tool-btn.active {
    background: #3b82f6;
    color: white;
    border-color: #3b82f6;
  }

  .tool-btn.primary {
    background: #3b82f6;
    color: white;
    border-color: #3b82f6;
  }

  .tool-btn.secondary {
    background: #6b7280;
    color: white;
    border-color: #6b7280;
  }

  .tool-btn.success {
    background: #10b981;
    color: white;
    border-color: #10b981;
  }

  .tool-btn.danger {
    background: #ef4444;
    color: white;
    border-color: #ef4444;
  }

  .background-color-section {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #e5e7eb;
  }

  .background-color-controls {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .export-section .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .export-btn {
    padding: 8px 12px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  .export-btn:hover {
    background: #f3f4f6;
  }

  .export-btn.primary {
    background: #3b82f6;
    color: white;
    border-color: #3b82f6;
  }

  .export-btn.success {
    background: #10b981;
    color: white;
    border-color: #10b981;
  }

  .export-btn.info {
    background: #06b6d4;
    color: white;
    border-color: #06b6d4;
  }

  .export-btn.warning {
    background: #f59e0b;
    color: white;
    border-color: #f59e0b;
  }

  .save-load-buttons {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .cell {
    /* بدون فاصله بین سل‌ها، حاشیه‌ی نازک برای دیدن مرز */
    display: block;
  }
  
.recent-colors-header h4 {
    margin: 0;
    font-size: 13px;
    font-weight: 600;
    color: #495057;
  }
  
  .clear-colors-btn {
    background: linear-gradient(135deg, #ff4757 0%, #ff3742 100%);
    color: white;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    box-shadow: 0 2px 6px rgba(255, 71, 87, 0.3);
  }
  
  .clear-colors-btn:hover {
    background-color: #d32f2f;
    transform: translateY(-1px);
  }
  
  .recent-colors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28px, 1fr));
    gap: 6px;
    margin-top: 8px;
  }
  
  .color-swatch {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    border: 1px solid #dee2e6;
    transition: all 0.2s ease;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  }
  
  .color-swatch:hover {
    transform: scale(1.1);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
  
  .remove-color-btn {
    position: absolute;
    top: -6px;
    right: -6px;
    background: linear-gradient(135deg, #ff4757 0%, #ff3742 100%);
    color: white;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid white;
    padding: 0;
    line-height: 1;
    opacity: 0;
    transition: all 0.2s ease;
    box-shadow: 0 1px 4px rgba(255, 71, 87, 0.4);
  }
  
  .color-swatch:hover .remove-color-btn {
    opacity: 1;
  }
  
  .tools-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    margin-top: 8px;
  }
  
  .tool-btn {
    padding: 8px 6px;
    border: 1px solid transparent;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 500;
    transition: all 0.2s ease;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  }
  
  .tool-btn:hover {
    background-color: #e0e0e0;
    border-color: #ccc;
    transform: translateY(-1px);
  }
  
  .tool-btn.active {
    background-color: #4caf50;
    color: white;
    border-color: #4caf50;
  }
  
  .tool-btn.primary {
    background-color: #4caf50;
    color: white;
    border-color: #4caf50;
  }
  
  .tool-btn.primary:hover {
    background-color: #388e3c;
    border-color: #388e3c;
  }
  
  .tool-btn.secondary {
    background-color: #2196f3;
    color: white;
    border-color: #2196f3;
  }
  
  .tool-btn.secondary:hover {
    background-color: #1976d2;
    border-color: #1976d2;
  }
  
  .tool-btn.danger {
    background-color: #f44336;
    color: white;
    border-color: #f44336;
  }
  
  .tool-btn.danger:hover {
    background-color: #d32f2f;
    border-color: #d32f2f;
  }
  
  .tool-btn.success {
    background-color: #4caf50;
    color: white;
    border-color: #4caf50;
  }
  
  .tool-btn.success:hover {
    background-color: #388e3c;
    border-color: #388e3c;
  }
  
  .tool-btn.info {
    background-color: #2196f3;
    color: white;
    border-color: #2196f3;
  }
  
  .tool-btn.info:hover {
    background-color: #1976d2;
    border-color: #1976d2;
  }
  
  .export-section {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;
  }
  
  .export-btn {
    padding: 10px 8px;
    border: 1px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    transition: all 0.2s ease;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }
  
  .export-btn:hover {
    background-color: #e0e0e0;
    border-color: #ccc;
    transform: translateY(-1px);
  }
  
  .export-btn.primary {
    background-color: #4caf50;
    color: white;
    border-color: #4caf50;
  }
  
  .export-btn.primary:hover {
    background-color: #388e3c;
    border-color: #388e3c;
  }
  
  .export-btn.success {
    background-color: #4caf50;
    color: white;
    border-color: #4caf50;
  }
  
  .export-btn.success:hover {
    background-color: #388e3c;
    border-color: #388e3c;
  }
  
  .export-btn.info {
    background-color: #2196f3;
    color: white;
    border-color: #2196f3;
  }
  
  .export-btn.info:hover {
    background-color: #1976d2;
    border-color: #1976d2;
  }
  
  .export-btn.warning {
    background-color: #ff9800;
    color: white;
    border-color: #ff9800;
  }
  
  .export-btn.warning:hover {
    background-color: #f57c00;
    border-color: #f57c00;
  }
  
  .grid-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-right: 250px;
    height: 100%;
    flex: 1;
    user-select: none;
  }
  
  /* استایل دکمه‌های ذخیره و بارگذاری */
  .save-load-buttons {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }
  
  .save-load-buttons .export-btn {
    flex: 1;
    min-width: 100px;
  }
  
  /* بهبود استایل دکمه‌های export */
  .export-section .export-btn {
    margin-bottom: 6px;
    transition: all 0.2s ease;
  }
  
  .export-section .export-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  }
  
  /* استایل نمایش آخرین زمان ذخیره */
  .last-saved-info {
    text-align: center;
    padding: 6px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 6px;
    border: 1px solid #dee2e6;
    margin-bottom: 10px;
  }
  
  .last-saved-info small {
    font-size: 11px;
    color: #6c757d;
  }
  
  /* استایل دکمه‌های رنگ پس‌زمینه */
  .background-color-section {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition: all 0.2s ease;
  }

  /* Image section styles */
  .image-section {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .image-upload-container {
    margin-bottom: 10px;
  }

  .image-upload-label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 15px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: 2px dashed rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: white;
    font-weight: 500;
    font-size: 12px;
  }

  .image-upload-label:hover {
    background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-1px);
  }

  .image-upload-input {
    display: none;
  }

  .selected-image-preview {
    position: relative;
    margin-bottom: 10px;
    border-radius: 8px;
    overflow: hidden;
    border: 2px solid #dee2e6;
    background: #f8f9fa;
  }

  .preview-image-small {
    width: 100%;
    height: 60px;
    object-fit: cover;
    display: block;
  }

  .remove-image-btn {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
    background: #ef4444;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  .recent-images-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .clear-images-btn {
    background: #ef4444;
    color: white;
    border: none;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
  }

  .recent-images-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
  }

  .image-swatch {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    border: 2px solid #e5e7eb;
    overflow: hidden;
    transition: all 0.2s ease;
  }

  .image-swatch:hover {
    transform: scale(1.05);
    border-color: #3b82f6;
  }

  .image-swatch.active {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }

  .image-swatch-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .remove-image-btn-small {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 16px;
    height: 16px;
    background: #ef4444;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.2s ease;
  }

  .image-swatch:hover .remove-image-btn-small {
    opacity: 1;
  }

  /* Selection mode styles */
  .selection-mode-indicator {
    margin-bottom: 10px;
    padding: 8px 12px;
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
    border-radius: 6px;
    border: 1px solid #90caf9;
  }

  .mode-text {
    font-size: 12px;
    font-weight: 600;
    color: #1976d2;
  }

  .mode-switch-buttons {
    display: flex;
    gap: 8px;
    margin-bottom: 10px;
  }

  .mode-btn {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    background: white;
    color: #374151;
  }

  .mode-btn:hover {
    background: #f3f4f6;
    border-color: #9ca3af;
  }

  .mode-btn.active {
    background: #3b82f6;
    color: white;
    border-color: #3b82f6;
  }

  .mode-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .mode-btn:disabled:hover {
    background: white;
    border-color: #d1d5db;
  }
  </style>
  