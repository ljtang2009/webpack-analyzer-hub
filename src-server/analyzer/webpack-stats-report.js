// reference https://github.com/cenfun/webpack-stats-report
const StatsReportGenerator =
  require('webpack-stats-report').StatsReportGenerator
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs-extra')
const open = require('open')

const analyze = async requestData => {
  const originalname = requestData.statsJson.originalname
  const title = originalname.toLowerCase().endsWith('.json')
    ? originalname.substring(0, originalname.lastIndexOf('.'))
    : originalname
  const outputFilePath = path.resolve(
    __dirname,
    '../../report',
    `${uuidv4()}.html`
  )
  const stats = await fs.readJson(requestData.statsJson.path)
  await StatsReportGenerator({
    title,
    output: outputFilePath,
    stats,
  })
  await open(outputFilePath)
}

module.exports = {
  id: 'webpack-stats-report',
  analyze,
}
