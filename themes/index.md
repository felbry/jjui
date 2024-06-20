<script setup>
import { ref, computed, provide, nextTick } from 'vue'
import Bar from './cases/bar/index.vue'
import Line from './cases/line/index.vue'
import ThemeOther from './other.js'
const isRender = ref(true)
const currentThemeVal = ref('common')
function changeVal(evt) {
  currentThemeVal.value = evt.target.value
  isRender.value = false
  nextTick(() => {
    isRender.value = true
  })
}
const theme = computed(() => {
  switch(currentThemeVal.value) {
    case 'common':
      return 'common'
    case ThemeOther.name:
      return ThemeOther.value
    default:
      return 'common'
  }
})
provide('theme', theme)
</script>

# 主题预览

<sl-radio-group label="选择不同主题查看效果" :value="currentThemeVal" @sl-change="changeVal">
<sl-radio-button value="common">common</sl-radio-button>
<sl-radio-button value="other">other</sl-radio-button>
</sl-radio-group>

{{ currentThemeVal === 'common' ? 'common即“通用”的意思，在后续开发中，我们尽量维护一套通用的图表主题，避免过度、重复设计。' : '当通用主题满足不了的特殊场景，我们就要分离出第二、第三、第N个配置了' }}

## 柱状图

<Bar v-if="isRender" />

## 折线图

<Line v-if="isRender" />
