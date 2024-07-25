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
        text: '表单组件',
        items: [
          { text: '设计思路', link: '/form-design' },
          { text: 'Input 输入框', link: '/input' },
        ],
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
      // https://tailwindcss.com/docs/font-size
      // text-xs 12 16
      // text-sm 14 20
      // text-base 16 24
      // text-lg 18 28
      // text-xl 20 28
      // https://tailwindcss.com/docs/font-weight
      // font-normal	 400;
      // font-medium	 500;
      // font-semibold	 600;
      UnoCSS({ mode: 'shadow-dom', theme: { colors: { primary: 'var(--jjui-color-primary)' } } }),
    ],
  },
})
