import { defineConfig } from 'vitepress'
import babel from 'vite-plugin-babel'
import UnoCSS from 'unocss/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'jjui',
  description: '大一统组件库',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: '主页', link: '/' }],
    sidebar: [
      {
        text: '组件',
        items: [{ text: 'Input 输入框', link: '/input' }],
      },
    ],
    outline: {
      level: [2, 3],
    },
  },
  rewrites: {
    'packages/:comp/(.*)': ':comp.md',
  },
  vue: {
    template: {
      compilerOptions: {
        // 将所有前缀为 lc- 或 sl- 的标签名都视为自定义元素
        isCustomElement: (tag) => tag.startsWith('jj-'),
      },
    },
  },
  vite: {
    plugins: [
      // Babel will try to pick up Babel config files (.babelrc or .babelrc.json)
      babel(),
      UnoCSS({ mode: 'shadow-dom', theme: { colors: { primary: 'var(--jjui-color-primary)' } } }),
    ],
  },
})
