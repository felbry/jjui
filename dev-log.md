# 开发日志

## Web component 的坑

~slot 内容并不能继承其父级样式，比如 input 有一个 suffix 插槽，插槽内容的文本还不能继承 input 的，还需要显式的::slotted() 来声明～

shadow-dom mode, lit, support @apply directive

## 其它问题

### :hover

https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover

PC hover 态很好理解，但是移动端有这个状态吗？比如一个 div 元素加了一个:hover 态，根据不同的浏览器

- 可能永远都不会匹配
- 也可能只会在触摸一个元素后短暂匹配
- 还可能即使用户停止触摸并且直到用户触摸另一个元素之前仍然匹配

在 chrome 环境， div > input + icon 的测试中，给 div 加 hover 态，hover 就展示 icon，不 hover 就不展示。

在移动端，只要 input focus 了，始终能触发 hover 态，icon 也能正常展示。（这种好像符合上述第三种情况），不同浏览器可能表现不一，这在后期可能是个兼容性问题。

### slot 动态渲染问题

如何实现

<div v-if="hasXxxSlot"><slot name="xxx"></slot></div> ？

一个组件的结构是
tag(this)
-- shadowRoot
-- slots...

在组件 connected 时，通过 this.querySelectorAll('[slot]')查找所有具备 slot 属性的元素，即可知道外界传入了哪些 slot 元素。

### CSSStyleSheet

// const as = new CSSStyleSheet()
// as.replaceSync(`:host {
//   height: 50px;
//   background: green;
// }
// .input {
//   background: yellow;
// }`)

// function tt() {
// as.replaceSync(`:host {
//   height: 100px;
//   background: pink;
// }
// .input {
//   background: green;
// }`)
// }
