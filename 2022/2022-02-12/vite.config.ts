import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [vue(), AutoImport({
    // targets to transform
    include: [
      /\.vue$/ // .vue
    ],

    // global imports to register
    imports: [
      // presets
      'vue',

    ],

  })]
})