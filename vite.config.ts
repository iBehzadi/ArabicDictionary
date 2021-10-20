import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
/**
 * @type {import('vite').UserConfig}
 */
// https://vitejs.dev/config/
export default defineConfig({
  server : {
    proxy : {
      '/api' : 'https://nebrasar.ir/'
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
 
})


