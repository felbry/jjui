const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

// 设置要遍历的目录路径
const rootDir = path.join(__dirname, 'packages')

// 读取目录内容
fs.readdir(rootDir, (err, files) => {
  if (err) {
    console.error('读取目录时出错:', err)
    return
  }

  // 遍历文件和文件夹
  files.forEach((file) => {
    const filePath = path.join(rootDir, file)
    // 检查是否为目录
    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error('获取文件状态时出错:', err)
        return
      }

      if (stats.isDirectory()) {
        // 如果是目录，file就是目录名称
        exec(
          `npx cem analyze --litelement --globs "packages/${file}/${file}.ce.js" --outdir packages/${file}`,
          (error) => {
            if (error) {
              console.error(`exec error: ${error}`)
              return
            }
          }
        )
      }
    })
  })
})
