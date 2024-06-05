import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'lazy-chart',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Home', link: '/' }],
    sidebar: [
      {
        text: '组件',
        items: [
          { text: 'Test', link: '/test' },
          { text: 'TestSecond', link: '/test-second' },
        ],
      },
    ],
  },
  rewrites: {
    'packages/:comp/(.*)': ':comp.md',
  },
  vue: {
    template: {
      compilerOptions: {
        // 将所有前缀为 j- 的标签名都视为自定义元素
        isCustomElement: (tag) => tag.startsWith('lazy-') || tag.startsWith('api-'),
      },
    },
  },
})
