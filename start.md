# 安装和引入

## 安装

`npm i @ylfe/lazy-chart -S`

## 引入项目

通常我们在项目的**主入口**引入，比如 vue 工程的`main.js`中，这样就能在整个项目中使用

### 全部引入

`import '@ylfe/lazy-chart'`

### 按需引入

`import '@ylfe/lazy-chart/bar'`

`import '@ylfe/lazy-chart/line'`

`import '@ylfe/lazy-chart/pie'`

## 使用

引入之后，就可以在页面的任何地方以`lc-`开头使用各种图表了。就像使用原生`div`标签一样简单。

比如

```html
<lc-bar :source="[...]"></lc-bar>

<lc-line :source="arr"></lc-line>
```
