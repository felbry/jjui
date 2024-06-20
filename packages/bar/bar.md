<script setup>
import Simple from './cases/simple.vue'
import Multi from './cases/multi.vue'
import IsDefaultAxisType from './cases/is-default-axis-type.vue'
</script>

# Bar 柱状图

## 示例

### source 的基本使用

柱状图我们主要关心 x 和 y 轴的数据，用`source`表示

`source`是一个二维数组，默认情况下，我们**按列**逐列解析，以`data`为例：

```javascript
const data = [
  ['', '水费'],
  ['1月', 43.3],
  ['2月', 83.1],
  ['4月', 86.4],
]
```

- 第一列默认为 x 的 category（类目）轴，即：“1 月”、“2 月”、“4 月”

- 从第二列开始对应 y 轴的一个个 serial（系列），此示例只有一个“水费”系列。

渲染效果如下：

<Simple />

::: details 展开代码
<<< @/packages/bar/cases/simple.vue
:::

如需展示更多 serial（系列），往后追加更多列即可：

<Multi />

::: details 展开代码
<<< @/packages/bar/cases/multi.vue
:::

### y 为类目轴，x 为 value 轴

将`isDefaultAxisType`设置为`false`即可

<IsDefaultAxisType />

::: details 展开代码
<<< @/packages/bar/cases/is-default-axis-type.vue
:::

## 已知问题

1. 当`source`的 serial（系列）由少变多 再由多变少时，echarts 依然会渲染多个 serial（系列）。比如由[水费]变为[水费、电费]再变为[水费]，此时电费依然显示。（考虑实际使用这种动态场景很少，暂时不解决。如后续遇到**可联系开发者** 组件内部可尝试在每次 setOption 前 reset 一下）

## 后续内容为自动生成

<!--@include: ./api.md{2,}-->
