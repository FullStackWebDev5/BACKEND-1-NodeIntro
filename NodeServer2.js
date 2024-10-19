const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const data = fs.readFileSync('text1.txt', { encoding: 'utf8' })
  res.end(data)
})

server.listen(4000)