// import { resolve } from 'path'
// import { defineConfig } from 'vite'
// import UnoCSS from 'unocss/vite'
// import babel from 'vite-plugin-babel'

// export default defineConfig({
//   build: {
//     lib: {
//       entry: [
//         resolve(__dirname, 'packages/entry.js'),
//         resolve(__dirname, 'packages/bar/bar.ce.js'),
//         resolve(__dirname, 'packages/line/line.ce.js'),
//         resolve(__dirname, 'packages/pie/pie.ce.js'),
//       ],
//       formats: ['es'], // 由于web components ui组件，不考虑commonjs的场景
//     },
//     rollupOptions: {
//       external: ['echarts'],
//     },
//   },
//   plugins: [
//     // Babel will try to pick up Babel config files (.babelrc or .babelrc.json)
//     babel(),
//     UnoCSS({ mode: 'shadow-dom', theme: { colors: { primary: 'var(--jjui-color-primary)' } } }),
//   ],
// })
