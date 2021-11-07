import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
// @ts-ignore
import path from 'path'
/**
 * @type {import('vite').UserConfig}
 */
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://nebrasar.ir/'
    }
  },
  plugins: [vue(), VitePWA({
    registerType: 'autoUpdate',
    injectManifest: {
      globPatterns: [
        '**/*.{png,js,jpg,css,woff,woff2,ico,html,webmanifest,txt}'
      ],
    },
    workbox: {
      sourcemap: true
    },
    strategies: 'injectManifest',
    includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    manifest: {
      name: 'Nebras Dictionary',
      short_name: 'Nebras',
      description: 'A sample project for internship at Faravin BootCamp',
      theme_color: '#fbd83a',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        }
      ]
    }
  })],
  resolve: {
    alias: {
      // @ts-ignore
      '@': path.resolve(__dirname, './src'),
    },
  },

})


