<template>
  <p>
    只支持 maxlength（浏览器会自动限制长度），不支持 minlength（没什么用，要做校验应结合 form-item
    来使用）
  </p>
  <jj-input
    :value="val"
    @on-input="(evt) => (val = evt.detail[0])"
    @on-change="(evt) => (val = evt.detail[0])"
    :maxlength="10"
  >
  </jj-input>
  <p>可以配合isShowWordLimit显示字数统计</p>
  <jj-input
    :value="val"
    @on-input="(evt) => (val = evt.detail[0])"
    @on-change="(evt) => (val = evt.detail[0])"
    :maxlength="10"
    :isShowWordLimit="true"
  >
  </jj-input>
</template>
<script setup>
import { ref } from 'vue'
const val = ref('')
</script>
