#!/usr/bin/env node
import {Command} from 'commander'
import inquirer from 'inquirer';
import path from 'path';
import fs from "fs-extra"

const program = new Command();

async function createApp(projectName?:string){
  console.log(projectName)
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
    await fs.copy(templateDirPath,dirPath)
  } catch (error) {
    console.log(error)
  }
}

program.name('vcli')
.description('A cli to create React or Vue project quickly')
.version('1.0.0')
.argument('[projectName]','Custom the name of your project')
.action((name)=>{
  createApp(name)
})

program.parse();