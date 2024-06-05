import DefaultTheme from 'vitepress/theme'
if (!import.meta.env.SSR) {
  import('@api-viewer/docs')
}
const modules = import.meta.glob('../../packages/**/*.ce.js', { eager: true })

export default {
  extends: DefaultTheme,
}
