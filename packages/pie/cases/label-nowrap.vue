<template>
  <lc-pie
    style="width: 300px; height: 300px"
    :source="source"
    :radius="[0, '46%']"
  />
</template>
<script>
export default {
  data() {
    return {
      source: [
        { name: '分类一', value: 1048 },
        { name: '分类二', value: 735 },
        { name: '分类三', value: 580 },
      ],
    }
  },
}
</script>
