<script setup>
import JohnName from './cases/john-name.vue'
import LucyName from './cases/lucy-name.vue'
import manifest from './custom-elements.json'
</script>

# Test 测试

## 名称为 John

<ClientOnly>
  <JohnName />
</ClientOnly>

::: details 展开代码
<<< @/packages/test/cases/john-name.vue
:::

## 名称为 Lucy

<ClientOnly>
  <LucyName />
</ClientOnly>

::: details 展开代码
<<< @/packages/test/cases/lucy-name.vue
:::

## API

<ClientOnly>
  <api-docs :manifest="manifest"></api-docs>
</ClientOnly>
