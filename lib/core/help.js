// 引入第三方库 commander 命令行界面的配置
const program = require('commander');

const helpOptions = () => { 
  program
  // 增加自己的options 指令+说明  <dest>必须加的参数 这里是文件路径 可以再--help查看选择器信息
  .option('-d --dest <dest>', 'a destination folder,example: -d /top/network')
  .option('-f -framework <framework>', 'your framework')

  // 想告诉你能监听某一个事件
  .on('--help', function () {
    console.log(''); 
    console.log('Others:');
    console.log(" other options~");
  })
}
module.exports = helpOptions