<template>
  <div
    style="
      font-size: 14px;
      line-height: 20px;
      color: red;
      display: flex;
      align-items: center;
    "
  >
    这是前面的文字123
    <j-icon :svg="testIcon"></j-icon>
    ，后面的文字
  </div>
</template>
<script setup lang="ts">
import testIcon from '../source/test.svg?raw'
</script>
