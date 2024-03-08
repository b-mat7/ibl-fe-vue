import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // FROM jokez -> vue mit sass setup to find files...
  /*
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/_variables.module.scss";`, // Import variables
      },
    },
  },
  */
})
