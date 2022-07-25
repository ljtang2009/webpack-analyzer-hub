// reference https://github.com/relative-ci/bundle-stats/tree/master/packages/cli

const shell = require('shelljs')
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs-extra')
const open = require('open')
const analyze = requestData =>
  new Promise((resolve, reject) => {
    const statsFilePath = path.resolve(
      __dirname,
      '../../',
      requestData.statsJson.path
    )
    const outputDir = path.resolve(__dirname, '../../report')
    const cli = `bundle-stats --html --out-dir ${outputDir} ${statsFilePath}`
    shell.exec(cli, async (code, stdout, stderr) => {
      if (code === 0) {
        const statsHtmlFilePath = path.resolve(outputDir, 'bundle-stats.html')
        const newStatsHtmlFilePath = path.resolve(outputDir, `${uuidv4()}.html`)
        const statsHtmlFileExists = await fs.pathExists(statsHtmlFilePath)
        if (statsHtmlFileExists) {
          await fs.move(statsHtmlFilePath, newStatsHtmlFilePath)
          await open(newStatsHtmlFilePath)
        }
        resolve()
      } else {
        reject(new Error(stderr))
      }
    })
  })

const compare = requestData =>
  new Promise((resolve, reject) => {
    const statsFilePath1 = path.resolve(
      __dirname,
      '../../',
      requestData.statsJson1.path
    )
    const statsFilePath2 = path.resolve(
      __dirname,
      '../../',
      requestData.statsJson2.path
    )
    const outputDir = path.resolve(__dirname, '../../report')
    const cli = `bundle-stats --html --out-dir ${outputDir} ${statsFilePath2} ${statsFilePath1}`
    shell.exec(cli, async (code, stdout, stderr) => {
      if (code === 0) {
        const statsHtmlFilePath = path.resolve(outputDir, 'bundle-stats.html')
        const newStatsHtmlFilePath = path.resolve(outputDir, `${uuidv4()}.html`)
        const statsHtmlFileExists = await fs.pathExists(statsHtmlFilePath)
        if (statsHtmlFileExists) {
          await fs.move(statsHtmlFilePath, newStatsHtmlFilePath)
          await open(newStatsHtmlFilePath)
        }
        resolve()
      } else {
        reject(new Error(stderr))
      }
    })
  })

module.exports = {
  id: 'bundle-stats',
  analyze,
  compare,
}
