import DefaultTheme from 'vitepress/theme'
import { defineAsyncComponent } from 'vue'
import VpDemo from '../components/vp-demo.vue'
import { setSchema } from '../../functions/set-color-schema.mjs'
import 'virtual:uno.css'
if (!import.meta.env.SSR) {
  setSchema('#1890ff')
}
// 注册全部Web Component
import.meta.glob('../../packages/**/*.ce.js', { eager: true })
// 注册全部Example（按需加载）
const examples = import.meta.glob('../../examples/*/*.vue')
console.log('examples', examples)

export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => {
    app.component('Demo', VpDemo)
    Object.entries(examples).forEach(([path, importFunc]) => {
      app.component(
        'exp-' +
          path
            .replace(/^.*?examples\//, '')
            .replace(/\.vue$/, '')
            .replace(/\//, '-'),
        defineAsyncComponent(importFunc)
      )
    })
  },
}
