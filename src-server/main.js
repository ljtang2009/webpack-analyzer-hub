const express = require('express')
const _package = require('../package.json')
const chalk = require('chalk')
const getPort = require('get-port')
const path = require('path')
const multer = require('multer')
const upload = multer({ dest: 'uploads' })
const { analyze, compare } = require('./analyze')
const fs = require('fs-extra')

fs.emptyDirSync(path.resolve(__dirname, '../report'))
fs.emptyDirSync(path.resolve(__dirname, '../uploads'))

const run = async options => {
  const { port = await getPort(), host = '127.0.0.1' } = options || {}
  const url = `http://${host}:${port}`
  const app = express()
  app.use(express.static(path.resolve(__dirname, '../dist/spa')))
  app.listen(port, host, () => {
    console.log(
      chalk.bold.hex('#90EE90')(`${_package.productName} is started at ${url}.`)
    )
  })
  app.post('/api/analyze', upload.single('statsJson'), async (req, res) => {
    try {
      await analyze({
        ...req.body,
        statsJson: req.file,
      })
      res.end()
    } catch (error) {
      res.status(500).send({ message: error.message, stack: error.stack })
    }
    fs.remove(path.resolve(__dirname, '..', req.file.path))
  })
  app.post(
    '/api/compare',
    upload.fields([{ name: 'statsJson1' }, { name: 'statsJson2' }]),
    async (req, res) => {
      const statsJson1 = req.files.statsJson1[0]
      const statsJson2 = req.files.statsJson2[0]
      try {
        await compare({
          ...req.body,
          statsJson1,
          statsJson2,
        })
        res.end()
      } catch (error) {
        res.status(500).send({ message: error.message, stack: error.stack })
      }
      fs.remove(path.resolve(__dirname, '..', statsJson1.path))
      fs.remove(path.resolve(__dirname, '..', statsJson2.path))
    }
  )
}

module.exports = {
  run,
}
