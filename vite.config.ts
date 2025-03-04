import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

// import { defineConfig } from 'vite'
// import { resolve } from 'path'

// import vue from '@vitejs/plugin-vue'
// import dts from 'vite-plugin-dts'
// import vueDevTools from 'vite-plugin-vue-devtools'
// import tailwindcss from '@tailwindcss/vite'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     vueDevTools(),
//     tailwindcss(),
//     dts({
//       include: ['src/components/**/*.vue', 'src/types/**/*.ts'],
//       beforeWriteFile: (filePath, content) => ({
//         filePath: filePath.replace('/dist/src/', '/dist/'),
//         content,
//       }),
//     }),
//   ],
//   resolve: {
//     alias: {
//       '@': resolve(__dirname, 'src'),
//     },
//   },
//   build: {
//     lib: {
//       entry: resolve(__dirname, 'src/components/index.ts'),
//       name: 'MyComponentLibrary',
//       fileName: (format) => `my-component-library.${format}.js`,
//     },
//     rollupOptions: {
//       external: ['vue'],
//       output: {
//         globals: {
//           vue: 'Vue',
//         },
//       },
//     },
//     cssCodeSplit: true,
//   },
// })
