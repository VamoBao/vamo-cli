#!/usr/bin/env node
import fs, { mkdirSync } from 'fs'
import logSymbols from 'log-symbols';
import chalk from 'chalk';
import path from 'path';

/**
 * 处理创建文件夹
 * @param {string} path 创建路径
 */
export const createDir = (path) => {
  mkdirSync(path, (err) => {
    if (err) {
      if (err.errno === -17) {
        console.log(logSymbols.error, chalk.red('文件夹已存在'))
        return
      } else {
        throw err
      }
    }
  })
}

export function copyRecursion(src, dest) {
  const files = fs.readdirSync(src, { withFileTypes: true });
  files.forEach((file) => {
    const sourcePath = path.posix.join(src, file.name);
    const targetPath = path.posix.join(dest, file.name);
    // 文件夹 创建文件夹
    if (file.isDirectory()) {
      if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(path.posix.join(dest, file.name));
      }
      copyRecursion(sourcePath, targetPath);
    } else {
      // 复制文件
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}
