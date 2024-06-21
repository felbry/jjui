<template>
  <lc-line
    width="300px"
    height="300px"
    :source="source"
  />
</template>
<script>
export default {
  data() {
    return {
      source: [
        ['', '水费', '电费'],
        ['1月', 43.3, 13.1],
        ['2月', 83.1, 60],
        ['4月', 86.4, 93.3],
        ['5月', 93.3, 20],
      ],
    }
  },
}
</script>
