import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('my-app-component'),
        }
      }
    }),
    vueJsx(),
    vueDevTools(),
    cssInjectedByJsPlugin()
  ],
  build: {
    lib: {
      entry: './src/main.ce.ts',
      name: 'VueExperiment',
      formats: ['es'],
    }
  },
  define: {
    'process.env': process.env
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
