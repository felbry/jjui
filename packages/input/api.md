# jj-input

**Mixins:** BaseMixin

## Properties

| Property      | Type                  | Default | Description            |
|---------------|-----------------------|---------|------------------------|
| `isClearable` | `boolean`             | true    | 是否可一键清除，需搭配on-change使用 |
| `isDisabled`  | `boolean`             | false   | 是否禁用                   |
| `isReadonly`  | `boolean`             | false   | 是否只读                   |
| `placeholder` | `string`              | "请输入"   | 占位符                    |
| `sheet`       | `CSSStyleSheet\|null` | null    | 额外样式                   |
| `type`        | `'text'\|'password'`  | "text"  | 类型                     |
| `value`       | `string`              | ""      | 初始值                    |

## Events

| Event       | Description |
|-------------|-------------|
| `on-change` | [value]     |
| `on-input`  | [value]     |
