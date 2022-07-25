// reference https://github.com/webpack-contrib/webpack-bundle-analyzer

const shell = require('shelljs')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

const analyze = requestData =>
  new Promise((resolve, reject) => {
    const statsFilePath = path.resolve(
      __dirname,
      '../../',
      requestData.statsJson.path
    )
    const outputFilePath = path.resolve(
      __dirname,
      '../../report',
      `${uuidv4()}.html`
    )
    const originalname = requestData.statsJson.originalname
    const title = originalname.toLowerCase().endsWith('.json')
      ? originalname.substring(0, originalname.lastIndexOf('.'))
      : originalname

    const cli = `webpack-bundle-analyzer ${statsFilePath} --mode static --report ${outputFilePath} --title ${title}`
    shell.exec(cli, (code, stdout, stderr) => {
      if (code === 0) {
        resolve()
      } else {
        reject(new Error(stderr))
      }
    })
  })

module.exports = {
  id: 'webpack-bundle-analyzer',
  analyze,
}
