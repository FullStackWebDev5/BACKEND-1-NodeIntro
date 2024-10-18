/*
  # Common JS Export/Import Syntax
    - Export
      module.exports = { sum }

    - Import
      const { sum } = require('./path.js')

  -----------------------------------------
  # Built-in modules of Nodejs
    - http: HTTP
    - fs: FileSystem

  -----------------------------------------
  # Node.js boilerplate
    // Import the http module from http package
    const http = require('http')

    // Invoke createServer() to create a new Node.js server
    const server = http.createServer((req, res) => {
      res.end('Our first server :)')
    })

    // Make the server listen on a specific port
    server.listen(3000)

  -----------------------------------------
  # Response methods
    - end(): Return any string/buffer data
    - setHeader(): Set the headers of the response
      - 'Content-Type': Set the content type of the response
        - application/json: JSON data
        - text/html: Text/HTML data
*/