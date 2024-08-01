import DefaultTheme from 'vitepress/theme'
import { setSchema } from '../../functions/set-color-schema.mjs'
import 'virtual:uno.css'
if (!import.meta.env.SSR) {
  setSchema('#1890ff')
}
const modules = import.meta.glob('../../packages/**/*.ce.js', { eager: true })

export default {
  extends: DefaultTheme,
}
