<script setup>
import Simple from './cases/simple.vue'
import LabelNowrap from './cases/label-nowrap.vue'
import Circle from './cases/circle.vue'
import CircleWithCenterText from './cases/circle-with-center-text.vue'
</script>

# Pie 饼图

## 示例

### source 的基本使用

和柱状图、折线图的`source`不同，饼图推荐对象数组的形式，即：每一项都是由`name`、`value`组成的对象

<Simple />

::: details 展开代码
<<< @/packages/pie/cases/simple.vue
:::

### label 在一行展示完全

echarts 默认`radius`外半径是`75%`，比较大，当 label 字数比较多且宽高较小时，容易出现省略号，甚至溢出的情况。

此时可以手动调整`radius`的大小，来让 label 展示完全。此处我们设置成`46%`。

<LabelNowrap />

::: details 展开代码
<<< @/packages/pie/cases/label-nowrap.vue
:::

### 圆环图

同样，可以调整`radius`的内半径，使其成为一个圆环图

<Circle />

::: details 展开代码
<<< @/packages/pie/cases/circle.vue
:::

有时，业务需要在内环里额外展示一些固定数据，我们最先想到的可能是把`label.position`设置成`center`。但这样默认的`outside`标签效果就没有了，而且这个`center`的效果是鼠标移入某一块才会在中心区域展示该块标签，并不符合“展示固定数据”的需求。

如果我们既想要默认的`outside`label 效果，又想要居中固定的文字，可以通过`graphic`来绘制。详细配置可以参考：[ECharts graphic 文档](https://echarts.apache.org/zh/option.html#graphic)

<CircleWithCenterText />

::: details 展开代码
<<< @/packages/pie/cases/circle-with-center-text.vue
:::

## 后续内容为自动生成

<!--@include: ./api.md{2,}-->
