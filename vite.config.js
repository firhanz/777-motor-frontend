import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: 'localhost:8000',
    port: 3000,
},
  plugins: [vue()],
})
