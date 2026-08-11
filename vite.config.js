import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

// The app is published under a project sub-path on GitHub Pages, so every
// PWA URL (scope, start_url, shortcuts) has to carry that prefix too.
const BASE = '/miyuki-beads-designer/';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      // Makes the install prompt work while running `npm run dev` too.
      devOptions: { enabled: true, type: 'module' },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        id: BASE,
        name: 'Miyuki Beads Designer',
        short_name: 'Miyuki Beads',
        description:
          'طراحی الگوی مرواریدبافی میوکی — شبکهٔ تخت، پیوت و بافت، همراه با پیش‌نمای سه‌بعدی دستبند.',
        lang: 'fa',
        dir: 'rtl',
        start_url: BASE,
        scope: BASE,
        display: 'standalone',
        orientation: 'any',
        background_color: '#f5f2ed',
        theme_color: '#9e7b62',
        categories: ['graphics', 'productivity', 'lifestyle'],
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        // Long-press / right-click the installed icon to jump straight to an editor.
        shortcuts: [
          {
            name: 'Flat Grid',
            short_name: 'Flat',
            url: `${BASE}`,
            icons: [{ src: 'pwa-192x192.png', sizes: '192x192' }],
          },
          {
            name: 'Weaving Grid',
            short_name: 'Weaving',
            url: `${BASE}weaving-grid`,
            icons: [{ src: 'pwa-192x192.png', sizes: '192x192' }],
          },
          {
            name: 'Beadwork Pattern',
            short_name: 'Beadwork',
            url: `${BASE}beadwork-pattern`,
            icons: [{ src: 'pwa-192x192.png', sizes: '192x192' }],
          },
          {
            name: 'Peyote Grid',
            short_name: 'Peyote',
            url: `${BASE}peyote-grid`,
            icons: [{ src: 'pwa-192x192.png', sizes: '192x192' }],
          },
        ],
      },
      workbox: {
        // Every route chunk and every bead swatch is precached, so all pages of
        // the app open in standalone mode even with no network.
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,woff,woff2}',
        ],
        // Deep links like /miyuki-beads-designer/peyote-grid are client-side
        // routes; hand them back to index.html instead of 404-ing.
        navigateFallback: `${BASE}index.html`,
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },
    }),
  ],
  base: BASE,
  server: {
    host: true, // Allow external connections
    port: 5173,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
