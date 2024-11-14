<template>
  <jj-input
    :value="val"
    type="password"
    @on-input="(evt) => (val = evt.detail[0])"
    @on-change="(evt) => (val = evt.detail[0])"
  />
</template>
<script setup>
import { ref } from 'vue'
const val = ref('')
</script>
