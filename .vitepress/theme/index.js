import DefaultTheme from 'vitepress/theme'
import VpDemo from '../components/vp-demo.vue'
import { setSchema } from '../../functions/set-color-schema.mjs'
import 'virtual:uno.css'
if (!import.meta.env.SSR) {
  setSchema('#1890ff')
}
const modules = import.meta.glob('../../packages/**/*.ce.js', { eager: true })

export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => {
    app.component('Demo', VpDemo)
  },
}
