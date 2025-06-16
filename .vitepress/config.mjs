import { defineConfig } from 'vitepress'
import babel from 'vite-plugin-babel'
import UnoCSS from 'unocss/vite'
import unoConf from '../uno.config.js'
import mdContainer from 'markdown-it-container'
import createDemoContainer from './plugins/markdown/demo.js'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'jjui',
  description: '组件库',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: '主页', link: '/' }],
    sidebar: [
      { text: '样式覆盖', link: '/override-style' },
      { text: '主题', link: '/theme' },
      {
        text: '表单组件',
        items: [
          { text: '设计思路', link: '/form-design' },
          { text: 'Input 输入框', link: '/input' },
          { text: 'Input Number 数字输入框', link: '/input-number' },
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
        isCustomElement: (tag) => tag.startsWith('jj-'),
      },
    },
  },
  markdown: {
    config: (md) => md.use(mdContainer, 'demo', createDemoContainer(md)),
  },
  vite: {
    plugins: [
      // Babel will try to pick up Babel config files (.babelrc or .babelrc.json)
      babel(),
      UnoCSS(unoConf), // 给Web Components 组件用
      UnoCSS(), // 给Vitepress 的 md页面用
    ],
  },
})
