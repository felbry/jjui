import path from 'path'
import fs from 'fs'
import { camelize } from '@vue/shared'
export default function appendImportsToMarkdown(options = {}) {
  // const { examplesRoot } = options
  // path.resolve('packages')
  return {
    name: 'append-imports-to-markdown',
    enforce: 'pre',
    transform(content, filename) {
      if (!filename.endsWith('.md')) return
      const compId = path.basename(filename, '.md') // 当前文档名称
      const compDemoRoot = path.resolve('examples', compId)
      if (!fs.existsSync(compDemoRoot)) return // 如果examples下没有当前组件的同名目录，返回
      const files = fs.readdirSync(compDemoRoot)
      const imports = []
      for (const item of files) {
        if (!/\.vue$/.test(item)) continue
        const file = item.replace(/\.vue$/, '')
        const name = camelize(`Exp-${compId}-${file}`)
        imports.push(`import ${name} from '../../examples/${compId}/${item}'`)
      }
      return (
        content +
        `\n<script setup>\n
        ${imports.join('\n')}
      </script>\n
      `
      )
    },
  }
}
