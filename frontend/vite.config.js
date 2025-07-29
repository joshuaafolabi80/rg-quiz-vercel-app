import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  base: '/',
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          ui: ['react-bootstrap', 'react-icons', 'lucide-react'],
          animation: ['framer-motion'],
          audio: ['howler'],
          fonts: ['@fortawesome/fontawesome-free'],
          pwa: ['vite-plugin-pwa']
        }
      },
      // --- ADDED: Externalize Node.js specific modules ---
      external: [
        'fsevents', // This was the primary error
        'path',
        'fs',
        'util',
        'stream',
        'os',
        'events',
        'process',
        'perf_hooks',
        'node:path',
        'node:fs',
        'node:fs/promises',
        'node:util',
        'node:stream',
        'node:os',
        'node:events',
        'node:process',
        'node:perf_hooks',
      ],
      // --- END ADDED SECTION ---
    }
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,webp,mp3,wav,json,webmanifest}',
        ],
        maximumFileSizeToCacheInBytes: 20 * 1024 * 1024,
        runtimeCaching: [
          {
            urlPattern: /\/all_quiz_data\.json/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'quiz-data-cache',
              expiration: {
                maxEntries: 1,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              }
            }
          },
          {
            urlPattern: /\.(mp3|wav)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'audio-assets',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          },
          {
            urlPattern: /\.(png|svg|jpg|jpeg|webp)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-assets',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          }
        ],
        navigateFallback: '/index.html',
        clientsClaim: true,
        skipWaiting: true,
        cleanupOutdatedCaches: true,
        offlineGoogleAnalytics: false
      },
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: 'index.html'
      }
    }),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
      template: 'treemap'
    })
  ]
});