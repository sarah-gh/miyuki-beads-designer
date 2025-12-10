<template>
  <div class="peyote-editor-container overflow-auto">
    <!-- Mobile Control Bar -->
    <div class="mobile-control-bar">
      <button
        class="mobile-menu-btn"
        :class="{ active: isMobilePanelOpen }"
        @click="toggleMobilePanel"
      >
        <span class="menu-icon">☰</span>
        <span class="menu-text">ابزارها</span>
      </button>
      <div class="mobile-title">🎨 ویرایشگر Peyote</div>
    </div>

    <!-- Pinned Section (Mobile Only) -->
    <div
      v-if="pinnedSection"
      class="pinned-section"
    >
      <div class="pinned-section-header">
        <h4 class="pinned-section-title">
          {{ getSectionTitle(pinnedSection) }}
        </h4>
        <button
          class="unpin-btn"
          title="Unpin Section"
          @click="unpinSection"
        >
          ✕
        </button>
      </div>
      <div class="pinned-section-content">
        <!-- Dimensions Section -->
        <div
          v-if="pinnedSection === 'dimensions'"
          class="pinned-dimensions"
        >
          <div class="dimension-inputs">
            <label class="dimension-label">
              <span class="dimension-text">ردیف‌ها:</span>
              <input
                v-model.number="rows"
                type="number"
                min="1"
                class="dimension-input"
              />
            </label>
            <label class="dimension-label">
              <span class="dimension-text">ستون‌ها:</span>
              <input
                v-model.number="cols"
                type="number"
                min="1"
                class="dimension-input"
              />
            </label>
            <label class="dimension-label">
              <span class="dimension-text">عرض سل:</span>
              <input
                v-model.number="cellWidth"
                type="number"
                min="5"
                max="50"
                class="dimension-input"
              />
            </label>
            <label class="dimension-label">
              <span class="dimension-text">ارتفاع سل:</span>
              <input
                v-model.number="cellHeight"
                type="number"
                min="5"
                max="50"
                class="dimension-input"
              />
            </label>
            <div class="dimension-label">
              <span class="dimension-text">جهت گرید:</span>
              <div class="orientation-toggle-group">
                <button
                  class="orientation-toggle-btn"
                  :class="{ active: gridOrientation === 'vertical' }"
                  @click="gridOrientation = 'vertical'"
                >
                  ↕️ عمودی
                </button>
                <button
                  class="orientation-toggle-btn"
                  :class="{ active: gridOrientation === 'horizontal' }"
                  @click="gridOrientation = 'horizontal'"
                >
                  ↔️ افقی
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Color Section -->
        <div
          v-if="pinnedSection === 'color'"
          class="pinned-color"
        >
          <div class="color-picker-container">
            <input
              v-model="selectedColor"
              type="color"
              class="color-picker"
            />
            <span class="color-value">{{ selectedColor }}</span>
          </div>
          <div class="recent-colors-header">
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

        <!-- Mode Section -->
        <div
          v-if="pinnedSection === 'mode'"
          class="pinned-mode"
        >
          <div class="mode-toggle">
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
              @click="setImageMode"
            >
              🖼️ تصویر
            </button>
          </div>
        </div>

        <!-- Image Section -->
        <div
          v-if="pinnedSection === 'image'"
          class="pinned-image"
        >
          <div class="image-picker-container">
            <div class="available-images-grid">
              <div
                v-for="image in availableImages"
                :key="image.name"
                class="image-item"
                :class="{ selected: selectedBeadImage?.url === image.url }"
                @click="selectBeadImage(image)"
              >
                <img
                  :src="image.url"
                  :alt="image.displayName"
                  class="bead-image"
                />
                <span class="image-name">{{ image.displayName }}</span>
              </div>
            </div>
          </div>
          <div
            v-if="recentImages.length > 0"
            class="recent-images-section"
          >
            <div class="recent-images-header">
              <h4 class="text-sm font-semibold text-gray-700">
                🔄 تصاویر اخیر
              </h4>
              <button
                class="clear-images-btn"
                title="پاک کردن تمام تصاویر"
                @click="clearRecentImages"
              >
                🗑️ پاک کردن
              </button>
            </div>
            <div class="recent-images-grid">
              <div
                v-for="image in recentImages"
                :key="image.url"
                class="recent-image-item"
                :class="{ selected: selectedBeadImage?.url === image.url }"
                @click="selectBeadImage(image)"
              >
                <img
                  :src="image.url"
                  :alt="image.displayName"
                  class="recent-bead-image"
                />
                <button
                  class="remove-image-btn"
                  @click.stop="removeRecentImage(image)"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Tools Section -->
        <div
          v-if="pinnedSection === 'tools'"
          class="pinned-tools"
        >
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
        </div>

        <!-- Export Section -->
        <div
          v-if="pinnedSection === 'export'"
          class="pinned-export"
        >
          <div class="save-load-buttons">
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

    <!-- Mobile Dropdown Panel -->
    <div
      class="mobile-dropdown-panel"
      :class="{ open: isMobilePanelOpen }"
    >
      <div class="mobile-panel-content">
        <!-- Image Section for Mobile -->
        <div class="mobile-image-section">
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

        <!-- Controls Panel Content for Mobile -->
        <div class="mobile-controls-content">
          <div class="controls-header">
            <h3 class="mb-4 text-lg font-bold text-gray-800">
              🎨 ابزارهای طراحی
            </h3>
          </div>

          <div class="controls-content">
            <!-- تنظیمات ابعاد -->
            <div class="dimensions-section">
              <div class="section-header">
                <h4 class="mb-2 text-sm font-semibold text-gray-700">
                  📐 ابعاد شبکه
                </h4>
                <button
                  class="pin-btn"
                  :class="{ pinned: pinnedSection === 'dimensions' }"
                  :title="
                    pinnedSection === 'dimensions'
                      ? 'Unpin Section'
                      : 'Pin Section'
                  "
                  @click="pinSection('dimensions')"
                >
                  {{ pinnedSection === 'dimensions' ? '📌' : '📌' }}
                </button>
              </div>
              <div class="dimension-inputs">
                <label class="dimension-label">
                  <span class="dimension-text">ردیف‌ها:</span>
                  <input
                    v-model.number="rows"
                    type="number"
                    min="1"
                    class="dimension-input"
                  />
                </label>
                <label class="dimension-label">
                  <span class="dimension-text">ستون‌ها:</span>
                  <input
                    v-model.number="cols"
                    type="number"
                    min="1"
                    class="dimension-input"
                  />
                </label>
                <label class="dimension-label">
                  <span class="dimension-text">عرض سل:</span>
                  <input
                    v-model.number="cellWidth"
                    type="number"
                    min="5"
                    max="50"
                    class="dimension-input"
                  />
                </label>
                <label class="dimension-label">
                  <span class="dimension-text">ارتفاع سل:</span>
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
              <div class="section-header">
                <h4 class="mb-2 text-sm font-semibold text-gray-700">
                  🎨 انتخاب رنگ
                </h4>
                <button
                  class="pin-btn"
                  :class="{ pinned: pinnedSection === 'color' }"
                  :title="
                    pinnedSection === 'color' ? 'Unpin Section' : 'Pin Section'
                  "
                  @click="pinSection('color')"
                >
                  {{ pinnedSection === 'color' ? '📌' : '📌' }}
                </button>
              </div>
              <div class="color-picker-container">
                <input
                  v-model="selectedColor"
                  type="color"
                  class="color-picker"
                />
                <span class="color-value">{{ selectedColor }}</span>
              </div>
              <div class="recent-colors-header mt-3!">
                <h4 class="text-sm font-semibold text-gray-700">
                  🔄 رنگ‌های اخیر
                </h4>
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

            <!-- انتخاب حالت رنگ یا تصویر -->
            <div class="mode-section">
              <div class="section-header">
                <h4 class="mb-2 text-sm font-semibold text-gray-700">
                  🎨 حالت طراحی
                </h4>
                <button
                  class="pin-btn"
                  :class="{ pinned: pinnedSection === 'mode' }"
                  :title="
                    pinnedSection === 'mode' ? 'Unpin Section' : 'Pin Section'
                  "
                  @click="pinSection('mode')"
                >
                  {{ pinnedSection === 'mode' ? '📌' : '📌' }}
                </button>
              </div>
              <div class="mode-toggle">
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
                  @click="setImageMode"
                >
                  🖼️ تصویر
                </button>
              </div>
            </div>

            <!-- انتخاب تصویر مهره -->
            <div
              v-if="selectionMode === 'image'"
              class="mode-section"
            >
              <div class="section-header">
                <h4 class="mb-2 text-sm font-semibold text-gray-700">
                  🖼️ انتخاب تصویر مهره
                </h4>
                <button
                  class="pin-btn"
                  :class="{ pinned: pinnedSection === 'image' }"
                  :title="
                    pinnedSection === 'image' ? 'Unpin Section' : 'Pin Section'
                  "
                  @click="pinSection('image')"
                >
                  {{ pinnedSection === 'image' ? '📌' : '📌' }}
                </button>
              </div>
              <div class="image-picker-container">
                <div class="available-images-grid">
                  <div
                    v-for="image in availableImages"
                    :key="image.name"
                    class="image-item"
                    :class="{ selected: selectedBeadImage?.url === image.url }"
                    @click="selectBeadImage(image)"
                  >
                    <img
                      :src="image.url"
                      :alt="image.displayName"
                      class="bead-image"
                    />
                    <span class="image-name">{{ image.displayName }}</span>
                  </div>
                </div>
              </div>
              <div
                v-if="recentImages.length > 0"
                class="recent-images-section"
              >
                <div class="recent-images-header">
                  <h4 class="text-sm font-semibold text-gray-700">
                    🔄 تصاویر اخیر
                  </h4>
                  <button
                    class="clear-images-btn"
                    title="پاک کردن تمام تصاویر"
                    @click="clearRecentImages"
                  >
                    🗑️ پاک کردن
                  </button>
                </div>
                <div class="recent-images-grid">
                  <div
                    v-for="image in recentImages"
                    :key="image.url"
                    class="recent-image-item"
                    :class="{ selected: selectedBeadImage?.url === image.url }"
                    @click="selectBeadImage(image)"
                  >
                    <img
                      :src="image.url"
                      :alt="image.displayName"
                      class="recent-bead-image"
                    />
                    <button
                      class="remove-image-btn"
                      @click.stop="removeRecentImage(image)"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- ابزارهای اصلی -->
            <div class="tools-section">
              <div class="section-header">
                <h4 class="mb-2 text-sm font-semibold text-gray-700">
                  🛠️ ابزارها
                </h4>
                <button
                  class="pin-btn"
                  :class="{ pinned: pinnedSection === 'tools' }"
                  :title="
                    pinnedSection === 'tools' ? 'Unpin Section' : 'Pin Section'
                  "
                  @click="pinSection('tools')"
                >
                  {{ pinnedSection === 'tools' ? '📌' : '📌' }}
                </button>
              </div>
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
                <h4 class="mb-2 text-sm font-semibold text-gray-700">
                  🎨 پس‌زمینه
                </h4>
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
              <div class="section-header">
                <h4 class="mb-2 text-sm font-semibold text-gray-700">
                  📤 خروجی
                </h4>
                <button
                  class="pin-btn"
                  :class="{ pinned: pinnedSection === 'export' }"
                  :title="
                    pinnedSection === 'export' ? 'Unpin Section' : 'Pin Section'
                  "
                  @click="pinSection('export')"
                >
                  {{ pinnedSection === 'export' ? '📌' : '📌' }}
                </button>
              </div>

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
    </div>

    <!-- Main content area -->
    <div
      class="grid-container max-md:min-h-[calc(100vh_-_310px)] md:max-h-[calc(100vh_-_200px)]"
      :class="{
        'pinned-active': pinnedSection,
      }"
    >
      <div v-if="showImageSection" class="image-section">
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
          <!-- Grid wrapper: flex row so columns sit side-by-side -->
          <div
            ref="gridWrapper"
            class="h-[80vh] overflow-auto rounded border bg-white p-2"
          >
            <!-- حالت عمودی: ستون‌ها افقی، ردیف‌ها عمودی -->
            <div
              v-if="isGridReady && gridOrientation === 'vertical'"
              class="flex items-start"
              :style="{ gap: '0px' }"
            >
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

            <!-- حالت افقی: ردیف‌ها افقی، ستون‌ها عمودی -->
            <div
              v-else-if="isGridReady && gridOrientation === 'horizontal'"
              class="flex flex-col items-start"
              :style="{ gap: '0px' }"
            >
              <!-- each row -->
              <div
                v-for="r in rowsArr"
                :key="r"
                class="flex flex-shrink-0 items-start"
                :style="{ height: cellHeight + 'px', width: '100%' }"
              >
                <!-- row content (cells side-by-side). we apply translateX to create peyote offset -->
                <div
                  class="flex items-start"
                  :style="rowOffsetStyle(r)"
                >
                  <div
                    v-for="c in colsArr"
                    :key="`${r}-${c}`"
                    class="cell flex-shrink-0 cursor-pointer border-[1px] border-gray-200"
                    :style="cellStyle(r, c)"
                    @mousedown="handleCellClick(r, c)"
                    @mouseenter="handleCellMouseEnter(r, c)"
                  ></div>
                </div>
              </div>
            </div>

            <div
              v-else
              class="flex h-full items-center justify-center text-gray-500"
            >
              Loading grid...
            </div>
          </div>

          <p class="mt-2 text-xs text-gray-500">
            راست‌کلیک = پاک کردن. می‌توانی تعداد ردیف/ستون را در متغیرها تغییر
            بدهی.
          </p>
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
          <div class="section-header">
            <h4 class="mb-2 text-sm font-semibold text-gray-700">
              📐 ابعاد شبکه
            </h4>
            <button
              class="pin-btn"
              :class="{ pinned: pinnedSection === 'dimensions' }"
              :title="
                pinnedSection === 'dimensions' ? 'Unpin Section' : 'Pin Section'
              "
              @click="pinSection('dimensions')"
            >
              {{ pinnedSection === 'dimensions' ? '📌' : '📌' }}
            </button>
          </div>
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
            <div class="dimension-label">
              <span class="dimension-text">جهت گرید:</span>
              <div class="orientation-toggle-group">
                <button
                  class="orientation-toggle-btn"
                  :class="{ active: gridOrientation === 'vertical' }"
                  @click="gridOrientation = 'vertical'"
                >
                  ↕️ عمودی
                </button>
                <button
                  class="orientation-toggle-btn"
                  :class="{ active: gridOrientation === 'horizontal' }"
                  @click="gridOrientation = 'horizontal'"
                >
                  ↔️ افقی
                </button>
              </div>
            </div>
          </div>
          <div class="section-header">
            <!-- showImageSection button -->
            <button
              class="show-image-section-btn text-blue-500 !mt-2"
              @click="showImageSection = !showImageSection"
            >
              {{ showImageSection ? '🔍 Show Image Section' : '🔍 Hide Image Section' }}
            </button>
          </div>
        </div>

        <!-- انتخاب رنگ -->
        <div class="color-section">
          <div class="section-header">
            <h4 class="mb-2 text-sm font-semibold text-gray-700">
              🎨 انتخاب رنگ
            </h4>
            <button
              class="pin-btn"
              :class="{ pinned: pinnedSection === 'color' }"
              :title="
                pinnedSection === 'color' ? 'Unpin Section' : 'Pin Section'
              "
              @click="pinSection('color')"
            >
              {{ pinnedSection === 'color' ? '📌' : '📌' }}
            </button>
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

        <!-- انتخاب حالت رنگ یا تصویر -->
        <div class="mode-section">
          <div class="section-header">
            <h4 class="mb-2 text-sm font-semibold text-gray-700">
              🎨 حالت طراحی
            </h4>
            <button
              class="pin-btn"
              :class="{ pinned: pinnedSection === 'mode' }"
              :title="
                pinnedSection === 'mode' ? 'Unpin Section' : 'Pin Section'
              "
              @click="pinSection('mode')"
            >
              {{ pinnedSection === 'mode' ? '📌' : '📌' }}
            </button>
          </div>
          <div class="mode-toggle">
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
              @click="setImageMode"
            >
              🖼️ تصویر
            </button>
          </div>
        </div>

        <!-- انتخاب تصویر مهره -->
        <div
          v-if="selectionMode === 'image'"
          class="image-section"
        >
          <div class="section-header">
            <h4 class="mb-2 text-sm font-semibold text-gray-700">
              🖼️ انتخاب تصویر مهره
            </h4>
            <button
              class="pin-btn"
              :class="{ pinned: pinnedSection === 'image' }"
              :title="
                pinnedSection === 'image' ? 'Unpin Section' : 'Pin Section'
              "
              @click="pinSection('image')"
            >
              {{ pinnedSection === 'image' ? '📌' : '📌' }}
            </button>
          </div>
          <div class="image-picker-container">
            <div class="available-images-grid">
              <div
                v-for="image in availableImages"
                :key="image.name"
                class="image-item"
                :class="{ selected: selectedBeadImage?.url === image.url }"
                @click="selectBeadImage(image)"
              >
                <img
                  :src="image.url"
                  :alt="image.displayName"
                  class="bead-image"
                />
                <span class="image-name">{{ image.displayName }}</span>
              </div>
            </div>
          </div>

          <!-- تصاویر اخیر -->
          <div
            v-if="recentImages.length > 0"
            class="recent-images-section"
          >
            <div class="recent-images-header">
              <h4 class="text-sm font-semibold text-gray-700">
                🔄 تصاویر اخیر
              </h4>
              <button
                class="clear-images-btn"
                title="پاک کردن تمام تصاویر"
                @click="clearRecentImages"
              >
                🗑️ پاک کردن
              </button>
            </div>
            <div class="recent-images-grid">
              <div
                v-for="image in recentImages"
                :key="image.url"
                class="recent-image-item"
                :class="{ selected: selectedBeadImage?.url === image.url }"
                @click="selectBeadImage(image)"
              >
                <img
                  :src="image.url"
                  :alt="image.displayName"
                  class="recent-bead-image"
                />
                <button
                  class="remove-image-btn"
                  @click.stop="removeRecentImage(image)"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- ابزارهای اصلی -->
        <div class="tools-section">
          <div class="section-header">
            <h4 class="mb-2 text-sm font-semibold text-gray-700">🛠️ ابزارها</h4>
            <button
              class="pin-btn"
              :class="{ pinned: pinnedSection === 'tools' }"
              :title="
                pinnedSection === 'tools' ? 'Unpin Section' : 'Pin Section'
              "
              @click="pinSection('tools')"
            >
              {{ pinnedSection === 'tools' ? '📌' : '📌' }}
            </button>
          </div>
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
            <h4 class="mb-2 text-sm font-semibold text-gray-700">
              🎨 رنگ پس‌زمینه
            </h4>
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
          <div class="section-header">
            <h4 class="mb-2 text-sm font-semibold text-gray-700">📤 خروجی</h4>
            <button
              class="pin-btn"
              :class="{ pinned: pinnedSection === 'export' }"
              :title="
                pinnedSection === 'export' ? 'Unpin Section' : 'Pin Section'
              "
              @click="pinSection('export')"
            >
              {{ pinnedSection === 'export' ? '📌' : '📌' }}
            </button>
          </div>

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
import {
  ref,
  reactive,
  computed,
  onMounted,
  onUnmounted,
  onBeforeUnmount,
  watch,
  nextTick,
} from 'vue';

// Props for initial grid state
const props = defineProps({
  initialPattern: {
    type: Array,
    default: null,
  },
  initialRows: {
    type: Number,
    default: null,
  },
  initialCols: {
    type: Number,
    default: null,
  },
});

const emit = defineEmits(['update-grid']);

// File upload state (only for preview/idea)
const selectedImage = ref(null);
const recentImages = ref([]);
const selectionMode = ref('color'); // 'color' or 'image'
const showImageSection = ref(true);
// Bead images for painting
const availableImages = ref([]);
const selectedBeadImage = ref(null);

// Mobile panel state
const isMobilePanelOpen = ref(false);

// Pinning state
const pinnedSection = ref(null);

// Toggle mobile panel
function toggleMobilePanel() {
  isMobilePanelOpen.value = !isMobilePanelOpen.value;
}

// Pin/unpin section functions
function pinSection(sectionName) {
  if (pinnedSection.value === sectionName) {
    // If already pinned, unpin it
    pinnedSection.value = null;
  } else {
    // Pin the new section (this will automatically unpin the previous one)
    pinnedSection.value = sectionName;
    // Auto-close the mobile menu when pinning a section
    isMobilePanelOpen.value = false;
  }
}

function unpinSection() {
  pinnedSection.value = null;
}

// Helper functions for pinned section
function getSectionTitle(sectionName) {
  const titles = {
    dimensions: '📐 ابعاد شبکه',
    color: '🎨 انتخاب رنگ',
    mode: '🎨 حالت طراحی',
    image: '🖼️ انتخاب تصویر',
    tools: '🛠️ ابزارها',
    export: '📤 خروجی',
  };
  return titles[sectionName] || sectionName;
}

// تنظیمات — این مقادیر را مطابق نیازت تغییر بده
// Initialize with props if provided, otherwise use defaults
const cols = ref(props.initialCols ?? 12); // طول (تعداد ستون‌ها)
const rows = ref(props.initialRows ?? 50); // عرض (تعداد سطرها در هر ستون)
const cellWidth = ref(15); // عرض هر خانه (پیکسل)
const cellHeight = ref(17); // ارتفاع هر خانه (پیکسل)

// جهت گرید: 'vertical' (عمودی) یا 'horizontal' (افقی)
const gridOrientation = ref('vertical');

// پالت رنگ‌ها
const palette = [
  { key: 'DB-1510', hex: '#efe9df' },
  { key: 'DB-1503', hex: '#efbfc7' },
  { key: 'DB-0914', hex: '#d92e5b' },
  { key: 'DB-1832', hex: '#d39c2a' },
];

const selectedColor = ref(palette[2].hex);
const backgroundColor = ref('#ffffff');

// آرایه‌های کمکی برای v-for (0-based indices)
const colsArr = computed(() => Array.from({ length: cols.value }, (_, i) => i));
const rowsArr = computed(() => Array.from({ length: rows.value }, (_, i) => i));

// ماتریس grid[r][c] (rows x cols)
const grid = reactive([]);

// Initialize grid based on current dimensions
function initializeGrid(initialPattern = null) {
  const newGrid = Array.from({ length: rows.value }, () =>
    Array.from({ length: cols.value }, () => backgroundColor.value),
  );
  
  // If initial pattern is provided, restore from it
  if (initialPattern && Array.isArray(initialPattern) && initialPattern.length > 0) {
    // Convert 1D pattern array to 2D grid matrix
    for (let r = 0; r < rows.value; r++) {
      for (let c = 0; c < cols.value; c++) {
        const index = r * cols.value + c;
        if (index < initialPattern.length) {
          newGrid[r][c] = initialPattern[index] || backgroundColor.value;
        }
      }
    }
  }
  
  grid.splice(0, grid.length, ...newGrid);
  gridInitialized.value = true;
  console.info('Grid initialized:', {
    rows: rows.value,
    cols: cols.value,
    gridLength: grid.length,
    hasInitialPattern: !!initialPattern,
  });

  // Initialize history with the initial grid state
  history.value = [JSON.parse(JSON.stringify(grid))];
  historyIndex.value = 0;
}

// محاسبه ارتفاع و عرض گرید بر اساس جهت
// eslint-disable-next-line no-unused-vars
const gridHeight = computed(() => {
  if (gridOrientation.value === 'horizontal') {
    // در حالت افقی: ردیف‌ها افقی هستند، پس ارتفاع = تعداد ستون‌ها × ارتفاع سل
    return cols.value * cellHeight.value + cellHeight.value;
  } else {
    // در حالت عمودی: ردیف‌ها عمودی هستند، پس ارتفاع = تعداد ردیف‌ها × ارتفاع سل
    return rows.value * cellHeight.value + cellHeight.value;
  }
});

// eslint-disable-next-line no-unused-vars
const gridMinWidth = computed(() => {
  if (gridOrientation.value === 'horizontal') {
    // در حالت افقی: ردیف‌ها افقی هستند، پس عرض = تعداد ردیف‌ها × عرض سل
    return rows.value * cellWidth.value + cellWidth.value;
  } else {
    // در حالت عمودی: ستون‌ها افقی هستند، پس عرض = تعداد ستون‌ها × عرض سل
    return cols.value * cellWidth.value + cellWidth.value;
  }
});

// Check if grid is properly initialized
const isGridReady = computed(() => {
  const ready =
    gridInitialized.value &&
    grid.length === rows.value &&
    grid.length > 0 &&
    grid[0]?.length === cols.value;
  console.info('Grid ready check:', {
    gridInitialized: gridInitialized.value,
    gridLength: grid.length,
    rows: rows.value,
    cols: cols.value,
    firstRowLength: grid[0]?.length,
    ready,
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

  console.info('Saved to history:', {
    historyLength: history.value.length,
    historyIndex: historyIndex.value,
  });
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
// Watch for props changes to restore grid when switching back
watch(
  () => [props.initialPattern, props.initialRows, props.initialCols],
  ([newPattern, newRows, newCols], [oldPattern]) => {
    // Only restore if grid is initialized and props actually changed
    if (!gridInitialized.value) return;
    
    // If pattern changed and we have a new pattern, restore it
    if (
      newPattern &&
      Array.isArray(newPattern) &&
      newPattern.length > 0 &&
      newPattern !== oldPattern
    ) {
      // Update dimensions if provided
      if (newRows && newRows !== rows.value) rows.value = newRows;
      if (newCols && newCols !== cols.value) cols.value = newCols;
      
      // Wait for dimensions to update, then restore grid
      nextTick(() => {
        initializeGrid(newPattern);
      });
    }
  },
  { deep: true }
);

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
    console.info('Dimensions changed:', {
      oldRows,
      oldCols,
      newRows: validRows,
      newCols: validCols,
    });
    resizeGrid(validRows, validCols);
  }
});

// Watch for color selection changes - removed automatic addition to recent colors
// Colors are now only added when actually used on the grid (in toggleCell, paintCell, fillArea)

function resizeGrid(newRows, newCols) {
  const oldRows = rows.value;
  const oldCols = cols.value;
  console.info('Resizing grid:', { oldRows, oldCols, newRows, newCols });

  startOperation();

  const newGrid = Array.from({ length: newRows }, () =>
    Array.from({ length: newCols }, () => backgroundColor.value),
  );

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
    actualFirstRowLength: grid[0]?.length,
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
function addToRecentImages(image) {
  // Remove image if it already exists to avoid duplicates
  const index = recentImages.value.findIndex((img) => img.url === image.url);
  if (index > -1) {
    recentImages.value.splice(index, 1);
  }

  // Add image to the beginning of the array
  recentImages.value.unshift(image);

  // Limit to maximum 10 recent images
  if (recentImages.value.length > 10) {
    recentImages.value = recentImages.value.slice(0, 10);
  }
}

function removeRecentImage(image) {
  const index = recentImages.value.findIndex((img) => img.url === image.url);
  if (index > -1) {
    recentImages.value.splice(index, 1);
  }
}

function clearRecentImages() {
  recentImages.value = [];
}

// clearSelectedImage is kept for potential future use with preview image
// function clearSelectedImage() {
//   selectedImage.value = null;
//   // Don't change selectionMode when clearing preview image
// }

function setColorMode() {
  selectionMode.value = 'color';
}

function setImageMode() {
  // if (selectedBeadImage.value) {
  selectionMode.value = 'image';
  // }
}

// بارگذاری تصاویر موجود در پوشه beads
function loadAvailableImages() {
  const imageFiles = [
    '310.jpg',
    '1130.jpg',
    '1135.jpg',
    '2116.jpg',
    '2131.jpg',
    '2132.jpg',
    '725.jpg',
    '877.jpg',
    'f111.jpg',
    'f222.jpg',
    'f333.jpg',
    'f444.jpg',
    'f555.jpg',
    'f666.jpg',
    'f777.jpg',
    'f888.jpg',
    'f999.jpg',
    'f1010.jpg',
    'f1111.jpg',
    'f1212.jpg',
    'f1313.jpg',
    'f1414.jpg',
    'f1515.jpg',
    'Awhite.jpg',
    'Turquoise.jpg',
    'db0042.jpg',
    'db0221.jpg',
    'db0231.jpg',
    'db0268.jpg',
    'db0623.jpg',
    'db0627.jpg',
    'db0635.jpg',
    'db0651.jpg',
    'db0680.jpg',
    'db0721.jpg',
    'db0722.jpg',
    'db0723.jpg',
    'db0725.jpg',
    'db0726.jpg',
    'db0729.jpg',
    'db0759.jpg',
    'db0763.jpg',
    'db0791.jpg',
    'db0796.jpg',
    'db0877.jpg',
    'db1132.jpg',
    'db1133.jpg',
    'db1135.jpg',
    'db1153.jpg',
    'db1262.jpg',
    'db1570.jpg',
    'db1802.jpg',
    'db1832.jpg',
    'db1832-2.jpg',
    'db2111.jpg',
    'db2127.jpg',
    'db2131.jpg',
    'db2132.jpg',
    'db2144.jpg',
    'db2316.jpg',
    'db2352.jpg',
    'db2357.jpg',
    'db310.jpg',
    'db626.jpg',
    'db732.jpg',
    'db856.jpg',
  ];

  availableImages.value = imageFiles.map((filename) => ({
    name: filename,
    url: `/miyuki-beads-designer/beads/${filename}`,
    displayName: filename.replace('.jpg', ''),
  }));
}

// انتخاب تصویر مهره
function selectBeadImage(image) {
  selectedBeadImage.value = image;
  addToRecentImages(image);
  setImageMode(); // Automatically switch to image mode
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
    const newValue =
      selectionMode.value === 'image' && selectedBeadImage.value
        ? selectedBeadImage.value.url
        : selectedColor.value;

    // Only apply new value if it's different from current value
    // Don't clear if clicking with the same color
    if (currentValue !== newValue) {
      grid[r][c] = newValue;

      // Add to recent colors/images when painting
      if (newValue === selectedColor.value) {
        addToRecentColors(selectedColor.value);
      } else if (
        selectionMode.value === 'image' &&
        selectedBeadImage.value &&
        newValue === selectedBeadImage.value.url
      ) {
        addToRecentImages(selectedBeadImage.value);
      }
    }
  }
}

function paintCell(r, c) {
  if (grid[r] && grid[r][c] !== undefined) {
    const newValue =
      selectionMode.value === 'image' && selectedBeadImage.value
        ? selectedBeadImage.value.url
        : selectedColor.value;
    grid[r][c] = newValue;

    // Add to recent colors/images when painting
    if (newValue === selectedColor.value) {
      addToRecentColors(selectedColor.value);
    } else if (selectionMode.value === 'image' && selectedBeadImage.value) {
      addToRecentImages(selectedBeadImage.value);
    }
  }
}

function fillArea(startR, startC) {
  if (!grid[startR] || grid[startR][startC] === undefined) return;

  const targetValue = grid[startR][startC];
  const fillValue =
    selectionMode.value === 'image' && selectedBeadImage.value
      ? selectedBeadImage.value.url
      : selectedColor.value;

  if (targetValue === fillValue) return;

  const visited = new Set();
  const stack = [[startR, startC]];

  while (stack.length > 0) {
    const [r, c] = stack.pop();
    const key = `${r},${c}`;

    if (
      visited.has(key) ||
      r < 0 ||
      r >= rows.value ||
      c < 0 ||
      c >= cols.value
    ) {
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

  const selectedCells = selection.value.map((key) => {
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

  const selectedCells = selection.value.map((key) => {
    const [r, c] = key.split(',').map(Number);
    return { r, c, color: grid[r]?.[c] || backgroundColor.value };
  });

  clipboard.value = selectedCells;
  console.info(`Cut ${selectedCells.length} cells to clipboard`);

  // Clear the selected cells
  selection.value.forEach((key) => {
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
  const minR = Math.min(...clipboard.value.map((cell) => cell.r));
  const minC = Math.min(...clipboard.value.map((cell) => cell.c));
  const maxR = Math.max(...clipboard.value.map((cell) => cell.r));
  const maxC = Math.max(...clipboard.value.map((cell) => cell.c));

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
      console.info(
        `Odd→Even: sourceCol=${minC}, targetCol=${targetCol}, cellAdjustment=${cellAdjustment}`,
      );
    } else if (!sourceIsOdd && targetIsOdd) {
      // Case 2: Even → Odd: shift odd columns one row higher
      cellAdjustment = -1;
      console.info(
        `Even→Odd: sourceCol=${minC}, targetCol=${targetCol}, cellAdjustment=${cellAdjustment}`,
      );
    } else {
      // Case 1: Same column type (even→even, odd→odd): no adjustment needed
      console.info(
        `Same type: sourceCol=${minC}, targetCol=${targetCol}, cellAdjustment=${cellAdjustment}`,
      );
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
  const minR = Math.min(...clipboard.value.map((cell) => cell.r));
  const minC = Math.min(...clipboard.value.map((cell) => cell.c));

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
      if (origC % 2 === 1) {
        cellAdjustment = 0;
      } else {
        cellAdjustment = -1;
      }
      console.info(
        `Odd→Even: sourceCol=${minC}, targetCol=${targetCol}, cellAdjustment=${cellAdjustment}`,
      );
    } else if (!sourceIsOdd && targetIsOdd) {
      // Case 2: Even → Odd: shift odd columns one row higher
      console.info(
        `Even→Odd: sourceCol=${minC}, targetCol=${targetCol}, cellAdjustment=${cellAdjustment}`,
      );
      if (origC % 2 === 1) {
        cellAdjustment = -1;
      } else {
        cellAdjustment = -2;
      }
    } else {
      // Case 1: Same column type (even→even, odd→odd): no adjustment needed
      console.info(
        `Same type: sourceCol=${minC}, targetCol=${targetCol}, cellAdjustment=${cellAdjustment}`,
      );
      cellAdjustment = -1;
    }

    console.info('cellAdjustment', cellAdjustment);

    const newR = r + offsetR + cellAdjustment;
    const newC = targetCol;

    console.info(
      `Pasting cell: orig(${origR},${origC}) -> new(${newR},${newC}) offset(${offsetR},${offsetC}) cellAdjustment=${cellAdjustment}`,
    );

    if (newR >= 0 && newR < rows.value && newC >= 0 && newC < cols.value) {
      if (grid[newR] && grid[newR][newC] !== undefined) {
        grid[newR][newC] = color;
        pastedCount++;
      }
    }
  });

  console.info(
    `Pasted ${pastedCount} cells at position (${r}, ${c}) with per-cell peyote adjustment`,
  );
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

  const cells = selection.value.map((key) => {
    const [r, c] = key.split(',').map(Number);
    return { r, c, color: grid[r]?.[c] || backgroundColor.value };
  });

  const maxC = Math.max(...cells.map((cell) => cell.c));

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

  const cells = selection.value.map((key) => {
    const [r, c] = key.split(',').map(Number);
    return { r, c, color: grid[r]?.[c] || backgroundColor.value };
  });

  const maxR = Math.max(...cells.map((cell) => cell.r));

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
    console.info('Undo performed:', {
      historyIndex: historyIndex.value,
      historyLength: history.value.length,
    });
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
    console.info('Redo performed:', {
      historyIndex: historyIndex.value,
      historyLength: history.value.length,
    });
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
  return grid.map((row) => [...row]);
}

function saveGridToLocalStorage() {
  const data = {
    grid: getGridMatrix(),
    cols: cols.value,
    rows: rows.value,
    cellWidth: cellWidth.value,
    cellHeight: cellHeight.value,
    selectedColor: selectedColor.value,
    backgroundColor: backgroundColor.value,
    orientation: gridOrientation.value, // ذخیره جهت گرید
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

    // بارگذاری جهت گرید اگر ذخیره شده باشد
    if (
      data.orientation &&
      (data.orientation === 'vertical' || data.orientation === 'horizontal')
    ) {
      gridOrientation.value = data.orientation;
    }

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

  // محاسبه ابعاد canvas بر اساس جهت گرید و peyote offset
  if (gridOrientation.value === 'horizontal') {
    // در حالت افقی: ردیف‌ها افقی هستند (rows)، ستون‌ها عمودی هستند (cols)
    // عرض = ستون‌ها × عرض سل + نیم‌سل برای offset، ارتفاع = ردیف‌ها × ارتفاع سل
    canvas.width = cols.value * cellWidth.value + cellWidth.value / 2;
    canvas.height = rows.value * cellHeight.value;
  } else {
    // در حالت عمودی: عرض = ستون‌ها × عرض سل، ارتفاع = ردیف‌ها × ارتفاع سل + نیم‌سل برای offset
    canvas.width = cols.value * cellWidth.value;
    canvas.height = rows.value * cellHeight.value + cellHeight.value / 2;
  }

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

      if (
        cellValue &&
        (cellValue.startsWith('data:image/') ||
          cellValue.startsWith('/miyuki-beads-designer/beads/'))
      ) {
        const promise = new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve({ img, r, c });
          img.onerror = () => resolve({ img: null, r, c }); // Handle image load errors
          img.src = cellValue;
        });
        imagePromises.push(promise);
        imageCells.push({ r, c });
      }
    }
  }

  // Wait for all images to load
  const loadedImages = await Promise.all(imagePromises);

  // Draw all cells با اعمال peyote offset
  for (let r = 0; r < rows.value; r++) {
    for (let c = 0; c < cols.value; c++) {
      const cellValue = grid[r][c] || backgroundColor.value;

      // محاسبه موقعیت سل بر اساس جهت گرید و peyote offset
      let x, y;
      if (gridOrientation.value === 'horizontal') {
        // در حالت افقی: ردیف‌ها افقی هستند (rows)، ستون‌ها عمودی هستند (cols)
        // ردیف‌های فرد (r % 2 === 1) با translateX نیم‌سل راست می‌روند
        const rowOffset = r % 2 === 1 ? cellWidth.value / 2 : 0;
        x = c * cellWidth.value + rowOffset; // x بر اساس ستون (c)
        y = r * cellHeight.value; // y بر اساس ردیف (r)
      } else {
        // در حالت عمودی: ستون‌ها افقی هستند، ستون‌های فرد نیم‌سل پایین می‌روند
        const colOffset = c % 2 === 1 ? cellHeight.value / 2 : 0;
        x = c * cellWidth.value;
        y = r * cellHeight.value + colOffset;
      }

      if (
        cellValue &&
        (cellValue.startsWith('data:image/') ||
          cellValue.startsWith('/miyuki-beads-designer/beads/'))
      ) {
        // Find the loaded image for this cell
        const loadedImage = loadedImages.find(
          (img) => img.r === r && img.c === c,
        );
        if (loadedImage && loadedImage.img) {
          ctx.drawImage(
            loadedImage.img,
            x,
            y,
            cellWidth.value,
            cellHeight.value,
          );
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
  link.download = `peyote-grid-${gridOrientation.value}.png`;
  link.href = canvas.toDataURL();
  link.click();
}

async function exportGridAsHighQualityImage() {
  const scale = 4;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // محاسبه ابعاد canvas بر اساس جهت گرید و peyote offset
  if (gridOrientation.value === 'horizontal') {
    // در حالت افقی: ردیف‌ها افقی هستند (rows)، ستون‌ها عمودی هستند (cols)
    // عرض = ستون‌ها × عرض سل + نیم‌سل برای offset، ارتفاع = ردیف‌ها × ارتفاع سل
    canvas.width = (cols.value * cellWidth.value + cellWidth.value / 2) * scale;
    canvas.height = rows.value * cellHeight.value * scale;
  } else {
    // در حالت عمودی: عرض = ستون‌ها × عرض سل، ارتفاع = ردیف‌ها × ارتفاع سل + نیم‌سل برای offset
    canvas.width = cols.value * cellWidth.value * scale;
    canvas.height =
      (rows.value * cellHeight.value + cellHeight.value / 2) * scale;
  }

  // Draw background
  ctx.fillStyle = backgroundColor.value;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Collect all image promises
  const imagePromises = [];

  // First pass: collect all image cells
  for (let r = 0; r < rows.value; r++) {
    for (let c = 0; c < cols.value; c++) {
      const cellValue = grid[r][c] || backgroundColor.value;

      if (
        cellValue &&
        (cellValue.startsWith('data:image/') ||
          cellValue.startsWith('/miyuki-beads-designer/beads/'))
      ) {
        const promise = new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve({ img, r, c });
          img.onerror = () => resolve({ img: null, r, c }); // Handle image load errors
          img.src = cellValue;
        });
        imagePromises.push(promise);
      }
    }
  }

  // Wait for all images to load
  const loadedImages = await Promise.all(imagePromises);

  // Draw all cells با اعمال peyote offset
  for (let r = 0; r < rows.value; r++) {
    for (let c = 0; c < cols.value; c++) {
      const cellValue = grid[r][c] || backgroundColor.value;

      // محاسبه موقعیت سل بر اساس جهت گرید و peyote offset
      let x, y;
      if (gridOrientation.value === 'horizontal') {
        // در حالت افقی: ردیف‌ها افقی هستند (rows)، ستون‌ها عمودی هستند (cols)
        // ردیف‌های فرد (r % 2 === 1) با translateX نیم‌سل راست می‌روند
        const rowOffset = r % 2 === 1 ? cellWidth.value / 2 : 0;
        x = (c * cellWidth.value + rowOffset) * scale; // x بر اساس ستون (c)
        y = r * cellHeight.value * scale; // y بر اساس ردیف (r)
      } else {
        // در حالت عمودی: ستون‌ها افقی هستند، ستون‌های فرد نیم‌سل پایین می‌روند
        const colOffset = c % 2 === 1 ? cellHeight.value / 2 : 0;
        x = c * cellWidth.value * scale;
        y = (r * cellHeight.value + colOffset) * scale;
      }

      const width = cellWidth.value * scale;
      const height = cellHeight.value * scale;

      if (
        cellValue &&
        (cellValue.startsWith('data:image/') ||
          cellValue.startsWith('/miyuki-beads-designer/beads/'))
      ) {
        // Find the loaded image for this cell
        const loadedImage = loadedImages.find(
          (img) => img.r === r && img.c === c,
        );
        if (loadedImage && loadedImage.img) {
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
  link.download = `peyote-grid-hd-${gridOrientation.value}.png`;
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
      orientation: gridOrientation.value, // ذخیره جهت گرید
      type: 'peyote',
      timestamp: new Date().toISOString(),
    };

    // Convert to JSON string
    const gridDataString = JSON.stringify(gridData, null, 2);

    // Create blob and download
    const blob = new Blob([gridDataString], {
      type: 'text/plain;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `peyote_grid_${rows.value}x${cols.value}_${gridOrientation.value}_${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.txt`;
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
          const {
            grid: colors,
            rows: fileRows,
            cols: fileCols,
            orientation: fileOrientation,
          } = parsedContent;

          console.info(
            'Parsed colors:',
            colors.slice(0, 10),
            '...',
            'Length:',
            colors.length,
          );
          console.info(
            'Expected length:',
            fileRows * fileCols,
            'Rows:',
            fileRows,
            'Cols:',
            fileCols,
          );
          console.info('Orientation:', fileOrientation || 'vertical (default)');

          // اعمال جهت گرید اگر در فایل ذخیره شده باشد
          if (
            fileOrientation &&
            (fileOrientation === 'vertical' || fileOrientation === 'horizontal')
          ) {
            gridOrientation.value = fileOrientation;
            console.info('Grid orientation set to:', fileOrientation);
          }

          if (
            Array.isArray(colors) &&
            colors.every(
              (color) =>
                color === null ||
                color === backgroundColor.value ||
                (typeof color === 'string' &&
                  (color.match(/^#[0-9A-Fa-f]{6}$/) ||
                    color.startsWith('data:image/') ||
                    color.startsWith('/miyuki-beads-designer/beads/'))),
            )
          ) {
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
                    row.push(
                      color !== null && color !== undefined
                        ? color
                        : backgroundColor.value,
                    );
                  }
                  gridData.push(row);
                }
                grid.splice(0, grid.length, ...gridData);
                console.info('Grid loaded from TXT:', {
                  rows: fileRows,
                  cols: fileCols,
                  orientation: gridOrientation.value,
                  gridData,
                });
              });
              return;
            } else {
              console.error(
                'Length mismatch:',
                colors.length,
                'expected',
                fileRows * fileCols,
              );
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
    // Don't add to recent images or change mode - this is only for preview/idea
  };
  reader.readAsDataURL(file);
}

// محاسبه‌ی شیفت برای ستون c (0-based): ستون‌های فرد را نیم‌سل پایین می‌بریم
function colOffsetStyle(colIndex) {
  const isShifted = colIndex % 2 === 1; // اگر خواستی بالعکسش کن: === 0
  const translateY = isShifted ? cellHeight.value / 2 : 0;
  return {
    transform: `translateY(${translateY}px)`,
    gap: '0px',
  };
}

// محاسبه‌ی شیفت برای ردیف r در حالت افقی (0-based): ردیف‌های فرد را نیم‌سل راست می‌بریم
function rowOffsetStyle(rowIndex) {
  const isShifted = rowIndex % 2 === 1; // اگر خواستی بالعکسش کن: === 0
  const translateX = isShifted ? cellWidth.value / 2 : 0;
  return {
    transform: `translateX(${translateX}px)`,
    gap: '0px',
  };
}

// استایل هر سل (درج رنگ و اندازه)
function cellStyle(r, c) {
  const cellValue = grid[r]?.[c] || backgroundColor.value;
  const isSelected = selection.value.includes(`${r},${c}`);
  const isPasteTarget = isPasteMode.value;

  // Check if the cell value is an image (data URL or bead image URL)
  const isImage =
    cellValue &&
    (cellValue.startsWith('data:image/') ||
      cellValue.startsWith('/miyuki-beads-designer/beads/'));

  const baseStyle = {
    width: `${cellWidth.value}px`,
    height: `${cellHeight.value}px`,
    boxSizing: 'border-box',
    border: isSelected
      ? '2px solid #3b82f6'
      : isPasteTarget
        ? '1px solid #f59e0b'
        : '1px solid #e5e7eb',
    cursor: isPasteTarget ? 'crosshair' : 'pointer',
    opacity: isPasteTarget ? 0.9 : 1,
  };

  if (isImage) {
    return {
      ...baseStyle,
      backgroundColor: 'transparent',
      backgroundImage: `url(${cellValue})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    };
  } else {
    return {
      ...baseStyle,
      background: cellValue,
    };
  }
}

// مثال نمونه در mount (اختیاری)
onMounted(() => {
  console.info('Component mounted. Initial dimensions:', {
    rows: rows.value,
    cols: cols.value,
    hasInitialPattern: !!props.initialPattern,
  });

  // Initialize grid first - restore from props if provided
  if (props.initialPattern && props.initialPattern.length > 0) {
    // Restore from saved pattern
    initializeGrid(props.initialPattern);
  } else {
    // Initialize with default empty grid
    initializeGrid();
    
    // یک موج نمونه در ستون‌ها (نمایشی) - only if no initial pattern
    for (let j = 0; j < cols.value; j++) {
      const rr = Math.floor(
        rows.value / 2 + Math.sin(j / 1.5) * (rows.value / 6),
      );
      if (rr >= 0 && rr < rows.value) grid[rr][j] = palette[2].hex;
    }
  }

  // Load available bead images
  loadAvailableImages();

  // Save the initial state to history
  saveToHistory();

  // Add global mouseup event listener
  document.addEventListener('mouseup', handleMouseUp);
});

// Auto-save grid state before component is unmounted (when switching tabs)
onBeforeUnmount(() => {
  // Emit current grid state to parent so it can be restored when switching back
  if (gridInitialized.value && grid.length > 0) {
    emit('update-grid', getGridMatrix());
  }
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
  gap: 20px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.main-content {
  flex: 1;
  overflow-y: auto;
  padding-right: 20px;
}

.controls-panel {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 260px;
  height: calc(100vh - 168px);
  background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
  border-left: 1px solid #dee2e6;
  z-index: 1000;
  overflow-y: auto;
  padding: 12px;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.08);
  scrollbar-width: thin;
  scrollbar-color: #adb5bd #f8f9fa;
}

.controls-panel::-webkit-scrollbar {
  width: 6px;
}

.controls-panel::-webkit-scrollbar-track {
  background: #f8f9fa;
}

.controls-panel::-webkit-scrollbar-thumb {
  background: #adb5bd;
  border-radius: 3px;
}

.controls-panel::-webkit-scrollbar-thumb:hover {
  background: #6c757d;
}

.controls-header {
  text-align: center;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #dee2e6;
}

.controls-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #495057;
}

.controls-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dimensions-section,
.color-section,
.tools-section,
.export-section {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
}

.dimensions-section:hover,
.color-section:hover,
.tools-section:hover,
.export-section:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.dimensions-section h4,
.color-section h4,
.tools-section h4,
.export-section h4 {
  margin: 0 0 8px 0;
  font-size: 13px;
  font-weight: 600;
  color: #495057;
}

.dimension-inputs {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 4px;
}

.dimension-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.dimension-text {
  font-size: 12px;
  color: #6c757d;
  font-weight: 500;
}

.dimension-input {
  width: 60px;
  color: #495057;
  padding: 6px 8px;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  font-size: 12px;
  background: #ffffff;
  transition: all 0.2s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.dimension-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
}

.dimension-input:hover {
  border-color: #adb5bd;
}

.orientation-toggle-group {
  display: flex;
  gap: 4px;
}

.orientation-toggle-btn {
  flex: 1;
  padding: 6px 12px;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  font-size: 11px;
  background: #ffffff;
  color: #6c757d;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.orientation-toggle-btn:hover {
  border-color: #adb5bd;
  background: #f8f9fa;
}

.orientation-toggle-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border-color: #667eea;
  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.3);
}

.color-picker-container {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
}

.color-picker {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #dee2e6;
  cursor: pointer;
  padding: 0;
  transition: all 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.color-picker:hover {
  transform: scale(1.05);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
}

.color-value {
  font-size: 12px;
  color: #495057;
  font-weight: 500;
  background: #f8f9fa;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  min-width: 60px;
  text-align: center;
}

.recent-colors-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
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

.tool-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
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

.tool-btn.success {
  background-color: #4caf50;
  color: white;
  border-color: #4caf50;
}

.tool-btn.success:hover {
  background-color: #388e3c;
  border-color: #388e3c;
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

.export-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}

.export-section .grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
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

.save-load-buttons {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.save-load-buttons .export-btn {
  flex: 1;
  min-width: 100px;
}

.export-section .export-btn {
  margin-bottom: 6px;
  transition: all 0.2s ease;
}

.export-section .export-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
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
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
}

.image-section:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.image-picker-container {
  margin-top: 8px;
  width: 100%;
}

.available-images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: 8px;
  max-height: 200px;
  overflow-y: auto;
  padding: 4px;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  background: #f8f9fa;
}

.image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px;
  border: 2px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.image-item:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.image-item.selected {
  border-color: #667eea;
  background: linear-gradient(135deg, #f8f9ff 0%, #e6f0ff 100%);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.bead-image {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #dee2e6;
}

.image-name {
  font-size: 10px;
  color: #6c757d;
  margin-top: 4px;
  text-align: center;
  font-weight: 500;
}

.recent-images-section {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #e9ecef;
}

.recent-images-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.recent-images-header h4 {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: #495057;
}

.clear-images-btn {
  background: linear-gradient(135deg, #ff4757 0%, #ff3742 100%);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  box-shadow: 0 1px 4px rgba(255, 71, 87, 0.3);
}

.clear-images-btn:hover {
  background: linear-gradient(135deg, #d32f2f 0%, #c62828 100%);
  transform: translateY(-1px);
}

.recent-images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  gap: 6px;
}

.recent-image-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.recent-image-item:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.recent-image-item.selected {
  border-color: #667eea;
  background: linear-gradient(135deg, #f8f9ff 0%, #e6f0ff 100%);
  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.3);
}

.recent-bead-image {
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 3px;
  border: 1px solid #dee2e6;
}

.remove-image-btn {
  position: absolute;
  top: -4px;
  right: -4px;
  background: linear-gradient(135deg, #ff4757 0%, #ff3742 100%);
  color: white;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid white;
  padding: 0;
  line-height: 1;
  opacity: 0;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(255, 71, 87, 0.4);
}

.recent-image-item:hover .remove-image-btn {
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

.mode-section {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
}

.mode-section:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.mode-section h4 {
  margin: 0 0 8px 0;
  font-size: 13px;
  font-weight: 600;
  color: #495057;
}

.mode-toggle {
  display: flex;
  gap: 6px;
  margin-top: 8px;
}

.mode-switch-buttons {
  display: flex;
  gap: 6px;
  margin-top: 8px;
}

.mode-btn {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  background: #ffffff;
  color: #495057;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.mode-btn:hover {
  background: #f8f9fa;
  border-color: #adb5bd;
  transform: translateY(-1px);
}

.mode-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: #667eea;
  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.3);
}

.mode-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.mode-btn:disabled:hover {
  background: white;
  border-color: #d1d5db;
}

/* Section Header with Pin Button */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.pin-btn {
  background: transparent;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s ease;
  color: #6c757d;
}

.pin-btn:hover {
  background: #f8f9fa;
  border-color: #adb5bd;
  transform: scale(1.1);
}

.pin-btn.pinned {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: #667eea;
  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.3);
}

.pin-btn.pinned:hover {
  background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
  transform: scale(1.1);
}

/* Pinned Section Styles */
.pinned-section {
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-bottom: 2px solid #667eea;
  z-index: 1800;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-height: 200px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.pinned-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
}

.pinned-section-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
}

.unpin-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;
  transition: all 0.2s ease;
}

.unpin-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.pinned-section-content {
  padding: 16px;
  flex: 1;
  overflow-y: auto;
  min-height: 0;
}

.pinned-section-content::-webkit-scrollbar {
  width: 6px;
}

.pinned-section-content::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.pinned-section-content::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.pinned-section-content::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .peyote-editor-container {
    flex-direction: column;
    padding: 0;
    gap: 0;
  }

  /* Mobile Control Bar */
  .mobile-control-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2000;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .mobile-menu-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    padding: 4px 8px;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease;
    backdrop-filter: blur(10px);
  }

  .mobile-menu-btn:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }

  .mobile-menu-btn.active {
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .menu-icon {
    font-size: 18px;
    font-weight: bold;
  }

  .menu-text {
    font-size: 14px;
    font-weight: 500;
  }

  .mobile-title {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    flex: 1;
  }

  /* Mobile Dropdown Panel */
  .mobile-dropdown-panel {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
    border-bottom: 1px solid #dee2e6;
    z-index: 1500;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .mobile-dropdown-panel.open {
    max-height: 80vh;
    overflow-y: auto;
  }

  .mobile-panel-content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .mobile-image-section {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }

  .mobile-controls-content {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }

  /* Hide desktop controls panel on mobile */
  .controls-panel {
    display: none;
  }

  /* Make grid container full screen on mobile */
  .grid-container {
    margin-right: 0;
    margin-top: 50px;
    padding: 10px;
    height: calc(100vh - 50px);
    flex-direction: column;
    transition: margin-top 0.3s ease;
  }

  /* Adjust grid container when section is pinned */
  .grid-container.pinned-active {
    margin-top: 250px; /* 50px (mobile bar) + 200px (pinned section) */
  }

  .image-section {
    display: none;
  }

  .main-content {
    flex: 1;
    min-height: 0;
    padding: 12px;
    max-height: calc(100vh - 182px);
    -webkit-overflow-scrolling: touch;
    overflow: auto;
  }

  /* Mobile-specific adjustments for tools */
  .tools-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .tool-btn {
    padding: 10px 8px;
    font-size: 12px;
  }

  /* Mobile-specific adjustments for export buttons */
  .export-section .grid {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .export-btn {
    padding: 12px 8px;
    font-size: 13px;
  }

  /* Mobile-specific adjustments for color picker */
  .color-picker-container {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }

  .color-picker {
    width: 40px;
    height: 40px;
  }

  /* Mobile-specific adjustments for dimension inputs */
  .dimension-inputs {
    gap: 8px;
  }

  .dimension-label {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .dimension-input {
    width: 100%;
    max-width: 120px;
  }

  /* Mobile-specific adjustments for mode toggles */
  .mode-toggle {
    flex-direction: column;
    gap: 8px;
  }

  .mode-btn {
    padding: 10px 12px;
    font-size: 13px;
  }

  /* Mobile-specific adjustments for image grids */
  .recent-images-grid {
    grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
    gap: 4px;
  }

  /* Mobile-specific adjustments for background controls */
  .background-color-controls {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
}

/* Desktop styles - ensure desktop layout is preserved */
@media (min-width: 769px) {
  .mobile-control-bar,
  .mobile-dropdown-panel {
    display: none;
  }

  .grid-container {
    margin-top: 0;
  }
}
</style>
