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
          'Design flat, peyote and weaving bead patterns for Miyuki beads, with a live 3D preview of your bracelet.',
        lang: 'en',
        dir: 'ltr',
        start_url: BASE,
        scope: BASE,
        display: 'standalone',
        orientation: 'any',
        background_color: '#f6efe9',
        theme_color: '#a86f67',
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
            url: `${BASE}projects?mode=flat`,
            icons: [{ src: 'pwa-192x192.png', sizes: '192x192' }],
          },
          {
            name: 'Weaving Grid',
            short_name: 'Weaving',
            url: `${BASE}projects?mode=weaving`,
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
            url: `${BASE}projects?mode=peyote`,
            icons: [{ src: 'pwa-192x192.png', sizes: '192x192' }],
          },
        ],
      },
      workbox: {
        // Every route chunk and every bead swatch is precached, so all pages of
        // the app open in standalone mode even with no network.
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,woff,woff2,glb}',
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
