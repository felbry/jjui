# 主题

## 颜色

一个系统首先有一个背景色，在 Material Design 中被定义为 Surface。在国内主流应用中，一般是灰色系，比如`#F7F8FA`。

基于此，每个中性色组件应该有个区分 Surface 的背景色，叫作 Surface Container，而其上的文字与 Icon 的颜色则为 On Surface Container。（看 Material Design 中并没有提到这个角色，推测 Surface 和 Surface Container 颜色相近，属于一个派系，因此其上的字体共用一个值）

由此得出组件库的两个基本颜色：

- `surface-container` 背景（light：`#ffffff`，dark：`#232324`）
- `on-surface` 文字和 Icon（light：`#1d2129`，dark：`#f6f6f6`）
