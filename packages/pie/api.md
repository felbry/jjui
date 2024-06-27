# lc-pie

**Mixins:** BaseMixin

## Properties

| Property  | Type                               | Default   | Description                                      |
|-----------|------------------------------------|-----------|--------------------------------------------------|
| `graphic` | `Object\|Null`                     | null      | echarts的graphic选项，通常用于在圆环图中心绘制文本                 |
| `radius`  | `[Number\|String, Number\|String]` | [0,"75%"] | [内半径， 外半径]。内半径是0就是饼图，内半径有值就是圆环图。（设置百分比是相对于宽高中较小的那一个） |
| `source`  | `Array`                            | []        | 图表数据                                             |
| `theme`   | `Object\|String`                   | "common"  | 主题 库内置了若干主题，通过传递对应的字符串选择不同主题；也可以传递Object自行定制主题（不推荐） |
