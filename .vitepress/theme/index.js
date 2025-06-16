import DefaultTheme from 'vitepress/theme'
import { defineAsyncComponent, h } from 'vue'
import 'virtual:uno.css'
import 'jj-demo-block'
// 注册全部Web Component
import.meta.glob('../../packages/**/*.ce.js', { eager: true })
// 注册全部Example（按需加载）
const examples = import.meta.glob('../../examples/**/*.vue')

export default {
  extends: DefaultTheme,
  Layout() {
    return h('jj-demo-block-setting', null, [h(DefaultTheme.Layout)])
  },
  enhanceApp: ({ app }) => {
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
