import { transformerVariantGroup, transformerDirectives, presetUno } from 'unocss'
export default {
  mode: 'shadow-dom',
  presets: [presetUno()],
  // <div class="hover:(bg-gray-400 font-medium) font-(light mono)"/> 转换为： <div class="hover:bg-gray-400 hover:font-medium font-light font-mono"/>
  transformers: [transformerVariantGroup(), transformerDirectives()],
}
