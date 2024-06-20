<template>
  <lc-line
    width="300px"
    height="300px"
    :source="source"
  />
  <div>
    默认是data1数据 ｜
    <a
      href="void:0"
      @click="assign(1)"
    >
      点击赋值 data1
    </a>
    ｜
    <a
      href="void:0"
      @click="assign(2)"
      >点击赋值 data2</a
    >
    ｜
    <a
      href="void:0"
      @click="assign(3)"
      >点击赋值 data3（y轴有两个类别）</a
    >
  </div>
</template>
<script>
const data1 = [
  ['', '水费'],
  ['1月', 43.3],
  ['2月', 83.1],
  ['4月', 86.4],
]
const data2 = [
  ['', '水费'],
  ['1月', 43.3],
  ['2月', 83.1],
  ['4月', 86.4],
  ['5月', 93.3],
]
const data3 = [
  ['', '水费', '电费'],
  ['1月', 43.3, 13.1],
  ['2月', 83.1],
  ['4月', 86.4, 93.3],
  ['5月', 93.3],
]
export default {
  data() {
    return {
      source: data1,
    }
  },
  methods: {
    assign(count) {
      switch (count) {
        case 1:
          this.source = data1
          break
        case 2:
          this.source = data2
          break
        case 3:
          this.source = data3
          break
        default:
          this.source = data1
          break
      }
    },
  },
}
</script>
