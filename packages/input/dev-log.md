# 开发日志

## input 及其子元素的高度

一开始 input 以及 slot 容器的高度都没有设定，input 的高度由 line-height+py 撑起来。

但是后来做 input number 时，当一个 suffix 高度比较高时，input 随之被撑大了。以小见大，如果不定高，在存在很多 input 的场景中，可能高度就不可控了，影响美感。

因此 从 input wrapper 到 slot container 都要一一指定 height，根写死，子继承。（一旦哪个没有指定高度，其子元素就没法通过 100%继承）
