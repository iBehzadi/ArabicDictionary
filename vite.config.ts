import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'
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
  plugins: [vue(),      VitePWA({
    registerType: 'autoUpdate',
    workbox: {
      sourcemap: true  
    },strategies:'injectManifest',
    includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],  
    manifest: {
      name: 'Name of your app',
      short_name: 'Translite Ar To Fa',
      description: 'ترجمه ',
      theme_color: '#00ccc2',
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

