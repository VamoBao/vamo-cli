#!/usr/bin/env node
import ejs from 'ejs'
import { writeFileSync } from 'fs';

/**
 * ejs渲染
 * @param {string} src ejs源文件
 * @param {string} target 目标文件地址
 * @param {*} data 数据
 */
const renderEjs = (src, target, data) => {
  ejs.renderFile(src, data, (err, str) => {
    if (err) throw err
    writeFileSync(target, str)
  })
}

export default renderEjs