# 开发日志

## Web component 的坑

~~slot 内容并不能继承其父级样式，比如 input 有一个 suffix 插槽，插槽内容的文本还不能继承 input 的，还需要显式的::slotted() 来声明~~

shadow-dom mode, lit, support @apply directive

## adoptedStyleSheets 和 CSSStyleSheet

https://caniuse.com/?search=adoptedStyleSheets

无论是 Document API 还是 ShadowRoot API，对 adoptedStyleSheets 的支持都比较晚。最早的也在 2019，Safari 到 2023 才支持。因此，这个特性要考虑兼容性方案，使用 lit 封装好的方法。

https://caniuse.com/?search=CSSStyleSheet

CSSStyleSheet 虽然支持的比较早，但是 repalce 和 repalceSync 这俩方法支持的比较晚。所以不能靠外部传进来，只能通过外部传入字符串，内部通过兼容方案来实现。

## 如何覆盖样式

单个组件或是一级嵌套，可以利用 parts 和 exportparts 来实现，

比如 input

```javascript
export const PART_MAP = {
  input: 'input',
  prepend: 'input__prepend',
  append: 'input__append',
  body: 'input__body',
  prefix: 'input__body__prefix',
  suffix: 'input__body__suffix',
  core: 'input__body__core',
  clear: 'input__body__clear',
  count: 'input__body__count',
  eye: 'input__body__eye',
}
```

input-number 嵌套 input，

```javascript
import { PART_MAP as INPUT_PART_MAP } from 'input.js'
export class InputNumber {
  render() {
    return html`<x-input exportparts=${Object.values(INPUT_PART_MAP).join(',')}></x-input>`
  }
}
```

考虑下上述方案在“更深层级”、“动态性”、“灵活性”的表现。

以一个 alltable 为例

alltable

- condition-form
  - input
  - radio
  - input
- table
- pagination

每个组件都有一个最终导出的 parts 对象，包含了自身和所有子组件的 parts（添加父级头/）

先考虑“更深层级”，

input 有 part：input**prefix、input**body、input**suffix
radio 有 part：radio**prefix、radio**body、radio**suffix

condition-form 引入了 input 和 radio，在其标签上声明 exportparts，
值为 inputParts.map(p => `${p}: condition-form/${p}__${id}`)和 radioParts.map(p => `${p}: condition-form__${p}__${id}`)
其中 id 是可选的，如果 input 仅在该组件中存在一个，就不需要 id 编号。
alltable 引入 condition-form，在其标签上声明 exportparts，
值为 conditionFormParts.map(p => `${p}: alltable/${p}__${id}`)，其中这个 conditionFormParts 里包含了 inputParts 和 radioParts 的全部

再考虑动态性
假如 condition-form 下的表单控件是动态的且随机个数，如何编码 id？结论就是通过动态数据的某个 key 来定义 id 值。如果不定义 id，就不追加后缀，相当于是两个同类名的类。

还有一种动态性是组件的状态，比如 disable 或是 active，类中我们可以追加类，但是 part 如何表现呢？能否结合“属性选择器”？【有待验证。】

最后考虑灵活性
part 的取值只有一个，比如有两个 input 元素，【我既想给一个 input 设置通用的样式，又想给其中一个 input 设置特殊的样式。该怎么做呢？】显然通过 part 来区分是不现实的。
退而求其次的方案是 ::part(input1),::part(input2) {} ::part(input1) {} 这样来设置。

父状态 + 子状态 {} 实现不了，part 与 part 间都是相互独立的，【父状态变化，其下的子状态应该是什么样没法通过 part 来实现。】 - 这种也意味着无论哪种方案，都实现不了 父 shadow 嵌套 子 shadow，父状态影响子状态。（除非另辟蹊径，用 css 变量/或者是 单一组件保留 part 属性，父组件可以通过:part 选择器来实现）

所以，从组件层面通过传递 CSSStyleSheet 的 prop 是最灵活的。
一个组件不管有多少层级，其结构都是确定的，使用的子组件也是确定的，在设计之初就确定好自己 CSSStyleSheet 的数据结构，外部传递时严格按照这种数据结构传。如果是动态数据渲染，就把 CSSStyleSheet 放在动态数据的 key 里。

最终，好像 CSSStyleSheet + part 结合才能满足更多场景。
（由于 part 实施起来相对比较麻烦，可以考虑后期真遇到该场景了再针对的增加其特性，避免前期做太多无用工作）

## 其它问题

### :hover

https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover

PC hover 态很好理解，但是移动端有这个状态吗？比如一个 div 元素加了一个:hover 态，根据不同的浏览器

- 可能永远都不会匹配
- 也可能只会在触摸一个元素后短暂匹配
- 还可能即使用户停止触摸并且直到用户触摸另一个元素之前仍然匹配

在 chrome 环境， div > input + icon 的测试中，给 div 加 hover 态，hover 就展示 icon，不 hover 就不展示。

在移动端，只要 input focus 了，始终能触发 hover 态，icon 也能正常展示。（这种好像符合上述第三种情况），不同浏览器可能表现不一，这在后期可能是个兼容性问题。

### 激活样式

主流的组件库一般有两种形态

一种是加 primary 色的边框

一种是 material 风格的，hover、focus 都改变背景色

本组件库的思路就是 material 风格，通过背景色展示不同状态，不要边框

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
