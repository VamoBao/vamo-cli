#!/usr/bin/env node
import { Command } from 'commander';
import initProject from './commands/init.js';

const program = new Command();

program.addCommand(initProject())

program.parse(process.argv);