#!/usr/bin/env node

// console.log('执行成功')
// const server = require('../src-server/main')
// server.run()
const shell = require('shelljs')
const cli = 'npm list --dept 0'
shell.exec(cli, (code, stdout, stderr) => {
  if (code === 0) {
    console.log(`stdout:${stdout}`)
  } else {
    console.log(`stderr:${stderr}`)
  }
})
