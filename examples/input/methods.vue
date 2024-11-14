<template>
  <jj-input ref="input"></jj-input>
  <button
    class="mt-2"
    @click="() => input.focus()"
  >
    调用focus
  </button>
</template>
<script setup>
import { ref } from 'vue'
const input = ref()
</script>
