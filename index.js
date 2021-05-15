#!/usr/bin/env node
// 第一行是固定的 为了给 node 添加命令行 

// 引入第三方库 commander 命令行界面的配置
const program = require('commander');

const helpOptions = require('./lib/core/help')
const createCommands = require('./lib/core/create')
// 版本号的查询  
program.version(require('./package.json').version, '-v,-V,--version')


// help帮助 和 options 可选信息
helpOptions()

// 项目Cli构建指令 的创建
createCommands()

// process全局对象类似agr argv存储着全局对象的参数
program.parse(process.argv);
