<template>
  <jj-input
    :value="val"
    @on-input="onInput"
    @on-change="onChange"
  ></jj-input>
  <div>当前input值：{{ val }}</div>
  <div>触发on-input日志：{{ inputLogList }}</div>
  <div>触发on-change日志：{{ changeLogList }}</div>
</template>
<script setup>
import { ref } from 'vue'
const val = ref('')
const inputLogList = ref([])
const changeLogList = ref([])
function onInput({ detail }) {
  const v = detail[0]
  val.value = v
  inputLogList.value.push(v)
}
function onChange({ detail }) {
  const v = detail[0]
  val.value = v
  changeLogList.value.push(v)
}
</script>
