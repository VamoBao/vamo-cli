#!/usr/bin/env node
import {Command} from 'commander'
import inquirer from 'inquirer';
import path from 'path';
import fs from "fs-extra"
import { execa } from 'execa';
import { stdout } from 'process';

const program = new Command();

async function createApp(projectName?:string,install:boolean=false,start:boolean=false){
  if(!projectName){
    const {name} = await inquirer.prompt([
      {
        type:'input',
        name:'name',
        message:'Please input a name for you project',
        default:'my-app'
      }
    ])
    projectName = name
  }
  const {framework} = await inquirer.prompt([
    {
      type:'list',
      name:'framework',
      message:'Please select the frontend framework',
      choices:['React','Vue']
    }
  ])
  const dirPath = path.resolve(process.cwd(),projectName!);
  let templateDirName = ''
  switch (framework) {
    case 'Vue':
      templateDirName = 'template-vue-ts'
      break;

    default:
      templateDirName = 'template-react-ts-swc'
      break;
  }

  const templateDirPath = path.resolve(__dirname,'../templates',templateDirName)

  if(fs.existsSync(dirPath)){
    console.log(`The folder which name is ${projectName} is existed`)
    process.exit(1)
  }

  try {
    console.log('Create files...')
    await fs.copy(templateDirPath,dirPath)
    console.log('Create files successful')
  } catch (error) {
    console.log(error)
  }

  if(install||start){
    try {
      console.log('Install dependencies...')
      await execa('npm',['install'],{cwd:dirPath,stdio:'inherit'})
      console.log('Install dependencies successful!')
      if(start){
        console.log('Project is starting...')
        await execa('npm',['run','dev'],{cwd:dirPath,stdio:'inherit'})
      }
    } catch (error) {
      console.log(error)
    }
  }
}

program.name('vcli')
.description('A cli to create React or Vue project quickly')
.version('1.0.3')
.argument('[projectName]','Custom the name of your project')
.option('-i,--install','Whether to automatically install dependencies after create')
.option('-s,--start','Whether to automatically start project after create')
.action((name)=>{ 
  const {install,start} = program.opts() 
  createApp(name,install,start)
})

program.parse();