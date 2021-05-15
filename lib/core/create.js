
// 引入第三方库 commander 命令行界面的配置
const program = require('commander');
const { 
  createProjectAction
 } = require('./actions')
const createCommands = () => {
  program
    // 指令 在当前文件创建项目
    .command('create <project>')
    // 描述
    .description('clone repository')
    // command 执行的内容 可传入回调函数
    .action(createProjectAction)
}
module.exports = createCommands
