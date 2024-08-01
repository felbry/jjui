纯 CSS 方案，参考：

https://antfu.me/posts/icons-in-pure-css-zh

## 获取某个图标的 svg 片段

首页（全部 icon 库） https://icones.js.org

ant-design https://icones.js.org/collection/ant-design

## 一些尝试

### 如何定义 icon 的结构以及提供给用户使用

一开始考虑的是 一个 j-icon 对应一个 svg 标签；但碍于 vue 的 v-html 机制，不得不再多出一个 div 标签。

为了干掉这个 div，也曾想过 svg 和 use 标签 link 的形式，但是 svg 没找到相关属性，use 的话又如何控制每个 icon 的 viewBox 值呢？

最后通过重写`instance.ctx.$el.parentNode.innerHTML`来实现

用户使用直接传 svg 的完整字符串，其实不用 j-icon 也可以的。j-icon 目前只是设置了 svg 的 css 样式为 inline-flex，看后期需求

### 如何垂直方向对齐

icon 一般放在行内与文字并存，所以最先想到的是`line-height`。由于 svg 不属于文字范畴，因为`line-height`对它是不起作用的。立马想到的就是 flex 的 align-item。所以最终方案就是 j-icon 就是一个 长=宽 的方块 icon，外围容器可以设置 flex 的 align-item 来完成垂直对齐（要达到此效果，组件内部还要设置 svg 的上级元素为 inline-flex 而不是默认的 inline 或 inline-block，因为这俩都会受到外部的`line-height`影响而导致 j-icon 不是一个 长=宽的方块，即使 align-item center 也垂直对不齐）。
