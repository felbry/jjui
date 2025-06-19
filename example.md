---
layout: false
---

<script setup>
import { ref, onMounted } from 'vue'
const is = ref('')
onMounted(() => {
  const url = new URL(window.location.href)
  is.value = new URLSearchParams(url.search).get('is')

  // 动态向body中添加style标签，写入样式
  // https://github.com/vuejs/vitepress/issues/4777
  const style = document.createElement('style')
  style.textContent = `
    jj-demo-block-setting::part(setting-icon) {
      display: none;
    }
  `
  document.body.appendChild(style)
})
</script>

<component v-if="is" :is="is" />
