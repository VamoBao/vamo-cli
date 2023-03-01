#!/usr/bin/env node
import { Command } from 'commander';
import initProject from './commands/init.js';

const program = new Command();

// 添加初始化命令
program.addCommand(initProject())

program.parse(process.argv);