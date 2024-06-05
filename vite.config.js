import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  // build: {
  //   lib: {
  //     entry: [
  //       resolve(__dirname, 'packages/entry.js'),
  //       resolve(__dirname, 'packages/test/test.ce.js'),
  //       resolve(__dirname, 'packages/test-second/test-second.ce.js'),
  //     ],
  //     formats: ['es'], // 由于web components ui组件，不考虑commonjs的场景
  //   },
  // },
})
