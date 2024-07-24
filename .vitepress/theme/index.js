import DefaultTheme from 'vitepress/theme'
import { setSchema } from '../../functions/set-color-schema.mjs'
if (!import.meta.env.SSR) {
  setSchema('#ffff00')
}
const modules = import.meta.glob('../../packages/**/*.ce.js', { eager: true })

export default {
  extends: DefaultTheme,
}
