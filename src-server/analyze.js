const glob = require('glob')
const path = require('path')

const analyzerFiles = glob.sync(path.join(__dirname, 'analyzer', '**.js'))
const analyzerArray = []
analyzerFiles.forEach(file => {
  analyzerArray.push(require(path.resolve(file)))
})

const getAnalyzer = requestData => {
  let analyzer
  for (const item of analyzerArray) {
    if (item.id === requestData.analyzerId) {
      analyzer = item
      break
    }
  }
  return analyzer
}

const analyze = async requestData => {
  const analyzer = getAnalyzer(requestData)
  if (analyzer && analyzer.analyze) {
    await analyzer.analyze(requestData)
  }
}

const compare = async requestData => {
  const analyzer = getAnalyzer(requestData)
  if (analyzer && analyzer.compare) {
    await analyzer.compare(requestData)
  }
}

module.exports = {
  analyze,
  compare,
}
