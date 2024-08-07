<template>
  <jj-input
    :value="val"
    @on-input="(evt) => (val = evt.detail[0])"
    @on-change="(evt) => (val = evt.detail[0])"
  >
    <span slot="prepend">$</span>
  </jj-input>
  <jj-input
    class="mt-3"
    :value="val"
    @on-input="(evt) => (val = evt.detail[0])"
    @on-change="(evt) => (val = evt.detail[0])"
  >
    <span slot="append">$</span>
  </jj-input>
</template>
<script setup>
import { ref } from 'vue'
const val = ref('')
</script>
