---
layout: false
---

<script setup>
import { ref, onMounted } from 'vue'
const is = ref('')
onMounted(() => {
  const url = new URL(window.location.href)
  console.log('ffd', new URLSearchParams(url.search).get('is'))
  is.value = new URLSearchParams(url.search).get('is')
})
</script>

<component v-if="is" :is="is" />
