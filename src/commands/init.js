import { Command } from "commander";
import inquirer from "inquirer";
import ora from "ora";
import { createDir, copyRecursion } from "../utils/index.js";
import path from 'path';
import { fileURLToPath } from "url";
import { spawnSync } from 'child_process'
import renderEjs from "../utils/renderEjs.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const TEMPLATE_PATH = path.join(__dirname, '../template')
const EJS_PATH = path.join(__dirname, '../template/ejs')

/** 初始化项目 */
const initProject = () => {
  const initProgram = new Command()

  // 定义初始化命令
  initProgram.name('init').argument('<name>', '项目名称').description('初始化项目')

  // 初始化操作
  initProgram.action(async (name) => {
    /** 新建目录路径 */
    const dirPath = path.join(process.cwd(), name)
    /** 配置对象 */
    let config = { name };
    const { projectType } = await inquirer.prompt({
      type: 'list',
      name: 'projectType',
      message: '请选择项目类型',
      choices: [
        { name: 'Web项目', value: 'web' },
        { name: 'H5项目', value: 'h5' },
        { name: 'Electron客户端', value: 'electron' },
      ]
    })
    /** 更新配置 */
    config = { ...config, projectType }

    if (projectType === 'web') {
      // 处理web项目
      const webAnswer = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'webType',
          message: '是否后台项目',
        }, {
          type: 'list',
          name: 'layout',
          message: '请选择布局',
          choices: [
            { name: '左右布局', value: 'left-right' },
            { name: '上下布局', value: 'top' },
            { name: '没有目录', value: 'none' },
          ],
          when: (answer) => answer.webType
        }, {
          type: 'list',
          name: 'framework',
          message: '选择技术框架',
          choices: [
            { name: 'React+Antd', value: 'react' },
            { name: 'Vue3+Element Plus', value: 'vue' },
          ],
          when: (answer) => answer.webType
        }
      ])
      config = { ...config, ...webAnswer }
      if (config.webType) {
        // 创建文件夹
        createDir(dirPath)
        const spinner = ora({
          text: '开始创建文件，请稍等...'
        }).start()
        // 递归复制选择的项目内容到新建的目录
        copyRecursion(path.join(TEMPLATE_PATH, 'react'), dirPath)
        /** 创建ejs处理列表 */
        const renderArr = new Map([
          [path.join(EJS_PATH, 'package.json.ejs'), path.join(dirPath, 'package.json')],
          [path.join(EJS_PATH, 'App.tsx.ejs'), path.join(dirPath, 'src/App.tsx')]
        ])
        console.log(config)
        Array.from(renderArr.keys()).forEach(src => {
          renderEjs(src, renderArr.get(src), config)
        })
        spinner.succeed('完成')
        // 执行npm i安装依赖
        // spawnSync('npm', ['i'], { cwd: dirPath, stdio: 'inherit' })
        // 启动项目
        // spawnSync('npm', ['start'], { cwd: dirPath, stdio: 'inherit' })
      }
    } else if (projectType === 'h5') {
      // 处理h5项目
      console.log('h5')
    } else {
      // 处理electron客户端
      console.log('electron')
    }
  })

  return initProgram
};

export default initProject;
