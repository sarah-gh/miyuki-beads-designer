<template>
  <div class="min-h-screen bg-white flex items-center justify-center p-6">
    <div class="w-full max-w-[1200px] border border-neutral-300 rounded-2xl p-4">
      <h1 class="text-xl font-semibold mb-4">الگوی مهره‌ها (SVG + Vue 3)</h1>

      <!-- Settings Panel -->
      <div class="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
        <h2 class="text-lg font-medium mb-4 text-gray-800">تنظیمات الگو</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Basic Settings -->
          <div class="space-y-3">
            <h3 class="font-medium text-gray-700">تنظیمات اصلی</h3>
            
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-1">تعداد ردیف‌ها</label>
              <input 
                v-model.number="settings.rows" 
                type="number" 
                min="1" 
                max="50"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-1">تعداد ستون‌ها</label>
              <input 
                v-model.number="settings.cols" 
                type="number" 
                min="1" 
                max="100"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-1">شعاع مهره</label>
              <input 
                v-model.number="settings.beadR" 
                type="number" 
                min="1" 
                max="10" 
                step="0.1"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <!-- Gap Settings -->
          <div class="space-y-3">
            <h3 class="font-medium text-gray-700">فاصله‌ها</h3>
            
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-1">فاصله افقی</label>
              <input 
                v-model.number="settings.gapX" 
                type="number" 
                min="5" 
                max="30" 
                step="1"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-1">فاصله عمودی</label>
              <input 
                v-model.number="settings.gapY" 
                type="number" 
                min="5" 
                max="30" 
                step="1"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-1">پدینگ</label>
              <input 
                v-model.number="settings.padding" 
                type="number" 
                min="10" 
                max="100" 
                step="1"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <!-- Fringe Settings -->
          <div class="space-y-3">
            <h3 class="font-medium text-gray-700">تنظیمات آویز</h3>
            
            <div class="flex items-center space-x-2">
              <input 
                id="showFringe" 
                v-model="settings.showFringe" 
                type="checkbox"
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label for="showFringe" class="text-sm font-medium text-gray-600">نمایش آویز</label>
            </div>
            
            <div v-if="settings.showFringe">
              <div>
                <label class="block text-sm font-medium text-gray-600 mb-1">پایه آویز</label>
                <input 
                  v-model.number="settings.fringeBase" 
                  type="number" 
                  min="1" 
                  max="20" 
                  step="1"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-600 mb-1">دامنه آویز</label>
                <input 
                  v-model.number="settings.fringeAmp" 
                  type="number" 
                  min="0" 
                  max="20" 
                  step="1"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-600 mb-1">دوره آویز</label>
                <input 
                  v-model.number="settings.fringePeriod" 
                  type="number" 
                  min="1" 
                  max="20" 
                  step="1"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

                     <!-- Other Settings -->
           <div class="space-y-3">
             <h3 class="font-medium text-gray-700">سایر تنظیمات</h3>
             
             <div class="flex items-center space-x-2">
               <input 
                 id="stagger" 
                 v-model="settings.stagger" 
                 type="checkbox"
                 class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
               />
               <label for="stagger" class="text-sm font-medium text-gray-600">نمایش پلکانی</label>
             </div>
             
             <div class="flex items-center space-x-2">
               <input 
                 id="showGridHelpers" 
                 v-model="settings.showGridHelpers" 
                 type="checkbox"
                 class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
               />
               <label for="showGridHelpers" class="text-sm font-medium text-gray-600">نمایش راهنما</label>
             </div>
           </div>

           <!-- Color Settings -->
           <div class="space-y-3">
             <h3 class="font-medium text-gray-700">تنظیمات رنگ</h3>
             
             <div>
               <label class="block text-sm font-medium text-gray-600 mb-1">رنگ مهره‌ها</label>
               <div class="flex items-center space-x-2">
                 <input 
                   v-model="settings.beadFillColor" 
                   type="color" 
                   class="w-12 h-10 border border-gray-300 rounded-md cursor-pointer"
                 />
                 <input 
                   v-model="settings.beadFillColor" 
                   type="text" 
                   placeholder="#ffffff"
                   class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                 />
               </div>
               <p class="text-xs text-gray-500 mt-1">بوردر به طور خودکار تنظیم می‌شود</p>
             </div>
             
             <div>
               <label class="block text-sm font-medium text-gray-600 mb-1">رنگ پس‌زمینه SVG</label>
               <div class="flex items-center space-x-2">
                 <input 
                   v-model="settings.svgBackgroundColor" 
                   type="color" 
                   class="w-12 h-10 border border-gray-300 rounded-md cursor-pointer"
                 />
                 <input 
                   v-model="settings.svgBackgroundColor" 
                   type="text" 
                   placeholder="#ffffff"
                   class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                 />
               </div>
             </div>
           </div>
        </div>

        <!-- Reset Buttons -->
        <div class="mt-4 pt-4 border-t border-gray-200 flex space-x-3">
          <button 
            class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            @click="resetSettings"
          >
            بازنشانی تنظیمات
          </button>
          <button 
            class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            @click="clearAllColors"
          >
            پاک کردن همه رنگ‌ها
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
      
             <div class="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
         <h3 class="text-sm font-medium text-blue-800 mb-2">راهنمای رنگ‌آمیزی:</h3>
         <ul class="text-sm text-blue-700 space-y-1">
           <li>• رنگ مهره‌ها را در بالا انتخاب کنید</li>
           <li>• روی هر مهره کلیک کنید تا آن را رنگ کنید</li>
           <li>• برای حذف رنگ، دوباره روی مهره کلیک کنید</li>
           <li>• بوردر به طور خودکار تنظیم می‌شود (مشکی برای رنگ‌های روشن)</li>
           <li>• از دکمه "پاک کردن همه رنگ‌ها" برای شروع مجدد استفاده کنید</li>
         </ul>
       </div>
      
      <p class="text-sm text-neutral-600 mt-3">
        نکته: برای «دقیقاً» مطابق تصویر، می‌تونی <code>fringeMap</code> رو دستی بر اساس هر ستون ست کنی
        تا تعداد مهره‌های آویزِ هر ستون دقیقاً یکی باشه.
      </p>
    </div>
  </div>
</template>

<script setup>
import BeadPattern from '@/components/BeadPattern.vue'
import { reactive } from 'vue'

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
  svgBackgroundColor: '#ffffff'
}

// Reactive settings object
const settings = reactive({ ...defaultSettings })

// State for colored beads
const coloredBeads = reactive(new Map())

// Reset function
const resetSettings = () => {
  Object.assign(settings, defaultSettings)
  coloredBeads.clear()
}

// Handle bead click
const handleBeadClick = (beadId) => {
  if (coloredBeads.has(beadId)) {
    coloredBeads.delete(beadId)
  } else {
    coloredBeads.set(beadId, {
      fill: settings.beadFillColor
    })
  }
}

// Clear all colors
const clearAllColors = () => {
  coloredBeads.clear()
}

// اگر بخواهی دقیقاً طول هر ستون را خودت بدهی، این آرایه را پر کن (طول = تعداد ستون‌ها)
const customFringe = null
// نمونه‌ی دقیق‌تر: V تکراریِ عمیق‌تر در هر 6 ستون
// const customFringe = Array.from({length: 38}, (_, c) => {
//   const p = 6, base = 6, amp = 5
//   const pos = ((c % p) + p) % p
//   const dist = Math.abs(pos - (p - 1) / 2)
//   return base + Math.max(0, Math.round(amp - dist))
// })
</script>