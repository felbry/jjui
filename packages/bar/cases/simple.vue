<template>
  <lc-bar
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
        ['', '水费'],
        ['1月', 43.3],
        ['2月', 83.1],
        ['4月', 86.4],
      ],
    }
  },
}
</script>
