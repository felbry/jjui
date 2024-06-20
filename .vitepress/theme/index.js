import DefaultTheme from 'vitepress/theme'

const modules = import.meta.glob('../../packages/**/*.ce.js', { eager: true })

export default {
  extends: DefaultTheme,
}
