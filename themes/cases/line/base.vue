<template>
  <lc-line
    :source="source"
    :theme="theme"
  />
</template>
<script setup>
import { inject } from 'vue'
const theme = inject('theme')
const source = [
  ['', '水费', '电费'],
  ['1月', 43.3, 13.1],
  ['2月', 83.1, 2],
  ['4月', 86.4, 93.3],
  ['5月', 93.3, 60],
]
</script>
