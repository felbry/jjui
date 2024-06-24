import { defineConfig } from 'vitepress'
import babel from 'vite-plugin-babel'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'lazy-chart',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Home', link: '/' }],
    sidebar: [
      { text: '主题预览', link: '/themes/' },
      {
        text: '组件',
        items: [
          { text: 'Bar 柱状图', link: '/bar' },
          { text: 'Line 折线图', link: '/line' },
          { text: 'Pie 饼图', link: '/pie' },
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
        // 将所有前缀为 j- 的标签名都视为自定义元素
        isCustomElement: (tag) => tag.startsWith('lc-') || tag.startsWith('sl-'),
      },
    },
  },
  vite: {
    plugins: [
      // Babel will try to pick up Babel config files (.babelrc or .babelrc.json)
      babel(),
    ],
  },
  transformPageData(pageData) {
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.1/cdn/themes/light.css',
      },
    ])
    pageData.frontmatter.head.push([
      'script',
      {
        type: 'module',
        src: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.1/cdn/shoelace.js',
      },
    ])
  },
})
