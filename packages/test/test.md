<script setup>
import JohnName from './cases/john-name.vue'
import LucyName from './cases/lucy-name.vue'
import manifest from './custom-elements.json'
</script>

# Test 测试

## 名称为 John

<JohnName />

::: details 展开代码
<<< @/packages/test/cases/john-name.vue
:::

## 名称为 Lucy

<LucyName />

::: details 展开代码
<<< @/packages/test/cases/lucy-name.vue
:::

## API

<api-docs :manifest="manifest"></api-docs>
