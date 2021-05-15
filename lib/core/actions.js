
// callback->promisify(函数)->Promise->async await 两者可以把异步变成同步

// 导入node 中的 promisify 用于函数包装成promise
const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
const { vueRepo } = require('../config/repo-config')
const commandSpawn = require('../utils/terminal')
const createProjectAction = async (project) => {
  // clone项目 把自己配置好的cli从仓库clone下来
  await download(vueRepo, project, { clone: true })

  // 执行npm install `模板字符串` ${id} platform平台
  const command = process.platform === 'win32' ? 'npm.cmd':'npm'
  await commandSpawn(command,['install'],{cwd:`./${project}`})

  // 运行npm run serve
  commandSpawn(command,['run','serve'],{cwd:`./${project}`})

  // 打开浏览器 热更新
  open("http://loaclhost:8080/")
}

module.exports = { createProjectAction }