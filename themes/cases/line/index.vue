<template>
  <div class="flex">
    <sl-card class="card">
      <div slot="header">普通折线图</div>
      <Base></Base>
    </sl-card>
  </div>
</template>
<script setup>
import Base from './base.vue'
</script>
<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 12px;
}
.card::part(body) {
  display: flex;
  padding: 0;
  width: 300px;
  height: 300px;
  justify-content: center;
  align-items: center;
}
</style>
