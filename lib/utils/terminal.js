
/**
 * 执行终端命令
 */
// 引入库 node 库中的终端命令操作库 process当前进程
const spawn = require('child_process')

const commandSpawn = (...args) => {
  // 前缀+命令
  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args)
    // stdout 进程的标准输出流 stderr报错
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)
    // 监听 process的关闭 如果关闭要么执行完了 要么报错
    childProcess.on('close', () => {
      // async =
      resolve()
    })
  })
}
module.exports = spawn