# jj-input

**Mixins:** BaseMixin

## Properties

| Property          | Type                  | Default | Description                     |
|-------------------|-----------------------|---------|---------------------------------|
| `isClearable`     | `boolean`             | true    | 是否可一键清除，需搭配on-input和on-change使用 |
| `isDisabled`      | `boolean`             | false   | 是否禁用                            |
| `isReadonly`      | `boolean`             | false   | 是否只读                            |
| `isShowWordLimit` | `boolean`             | false   | 是否显示字数统计                        |
| `maxlength`       | `number\|null`        | null    | 最大长度                            |
| `placeholder`     | `string`              | "请输入"   | 占位符                             |
| `sheet`           | `CSSStyleSheet\|null` | null    | 额外样式                            |
| `type`            | `'text'\|'password'`  | "text"  | 类型                              |
| `value`           | `string`              | ""      | 初始值                             |

## Methods

| Method  | Type       |
|---------|------------|
| `focus` | `(): void` |

## Events

| Event       | Description |
|-------------|-------------|
| `on-change` | [value]     |
| `on-input`  | [value]     |

## Slots

| Name      |
|-----------|
| `append`  |
| `prefix`  |
| `prepend` |
| `suffix`  |
