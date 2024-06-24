<script setup>
import Simple from './cases/simple.vue'
import LabelNowrap from './cases/label-nowrap.vue'
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

## 后续内容为自动生成

<!--@include: ./api.md{2,}-->
