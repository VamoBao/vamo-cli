import { Command } from "commander";
import inquirer from "inquirer";
import ora from "ora";
import { createDir, copyRecursion } from "../utils/index.js";
import path from 'path';
import { fileURLToPath } from "url";
import { spawnSync } from 'child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const TEMPLATE_PATH = path.join(__dirname, '../template')

/** 初始化项目 */
const initProject = () => {
  const initProgram = new Command()

  // 定义初始化命令
  initProgram.name('init').argument('<name>', '项目名称').description('初始化项目')

  // 初始化操作
  initProgram.action(async (name) => {
    /** 新建目录路径 */
    const dirPath = path.join(process.cwd(), name)
    console.log(dirPath)
    console.log(TEMPLATE_PATH)
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

    if (projectType === 'web') {
      // 处理web项目
      const webAnswer = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'webType',
          message: '是否后台项目',
        }, {
          type: 'list',
          name: 'framework',
          message: '选择技术框架',
          choices: ['react', 'vue', 'none'],
          when: (answer) => answer.webType
        }
      ])
      if (webAnswer.webType) {
        createDir(dirPath)
        const spinner = ora({
          text: '开始创建文件，请稍等...'
        }).start()
        copyRecursion(path.join(TEMPLATE_PATH, 'react'), dirPath)
        spinner.succeed('完成')
        spawnSync('npm', ['i'], { cwd: dirPath, stdio: 'inherit' })
        spawnSync('npm', ['start'], { cwd: dirPath, stdio: 'inherit' })
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
