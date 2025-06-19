import DefaultTheme from 'vitepress/theme'
import { defineAsyncComponent, h } from 'vue'
import 'virtual:uno.css'
// 注册全部Web Component
import.meta.glob('../../packages/**/*.ce.js', { eager: true })
// 注册全部Example（按需加载）
const examples = import.meta.glob('../../examples/**/*.vue')

export default {
  extends: DefaultTheme,
  Layout() {
    return import.meta.env.SSR
      ? h('div', 'loading...')
      : h('jj-demo-block-setting', null, [h(DefaultTheme.Layout)])
  },
  enhanceApp: async ({ app }) => {
    if (!import.meta.env.SSR) {
      import('jj-demo-block')
    }
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
