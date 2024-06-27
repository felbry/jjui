# lc-bar

**Mixins:** BaseMixin

## Properties

| Property            | Type             | Default  | Description                                      |
|---------------------|------------------|----------|--------------------------------------------------|
| `dataZoom`          | `DataZoom\|null` | null     | 区域缩放相关配置。当dataZoom为true时，启用区域缩放功能。               |
| `isDefaultAxisType` | `Boolean`        | true     | 是否默认x轴和y轴的类型（默认x轴type为category，y轴type为value）。当设置该值为false时柱状图将横向展示。 |
| `source`            | `Array`          | []       | 图表数据                                             |
| `theme`             | `Object\|String` | "common" | 主题 库内置了若干主题，通过传递对应的字符串选择不同主题；也可以传递Object自行定制主题（不推荐） |
