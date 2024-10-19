/*
  # Modules in Node.js
    - Module: Collection of code, which can be re-used
    - Benefits:
      - DRY principle
      - Maintainability
      - Code reusability
      - Code organization
    
    - Modules Syntaxes
      - CommonJS Module (default)
        - Export
          const sum = (a, b) => a + b
          const diff = (a, b) => a - b
          module.exports = { sum, diff }

        - Import
          const { sum, diff } = require('path')
      - ES6 Module
        - Export
          const sum = (a, b) => a + b
          const diff = (a, b) => a - b
          export { sum, diff }

        - Import
          import { sum, diff } from 'path

    - Types of modules
      - Core/In-built modules: Basic functionalities of Node.js. Eg: http (HTTP), fs (FileSystem), etc
      - User-defined/ Local modules: Done by the developer to follow DRY principle
      - Third-party modules: External modules, Installed using npm (Node Package Manager)

  -----------------------------------------
  # NPM (Node Package Manager)
    - Package: Collection of re-usable code
    - NPM: Manage the external dependencies required by the Node.js server
    - Responsibilities: Install/Update/Uninstall package versions
    - package.json: Meta data of the node project
      - scripts: Create script to internally run any other command, should be run using syntax 'npm script-name'
      - dependencies: List of packages required by the project

    - Commands
      - npm init: Setup a new Node project
        - Will create a package.json file
        - -y flag: Default values
      - npm install package-name: Install a package
        - Shorthand command: npm i package-name
        - For existing projects: 'npm install' will install all packages under dependencies field

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
  # HTTP Response methods
    - end(): Return any string/buffer data
    - setHeader(): Set the headers of the response
      - 'Content-Type': Set the content type of the response
        - application/json: JSON data
        - text/html: Text/HTML data

    -----------------------------------------
    # FileSystem methods
      - readFileSync(): Read the content of a file synchronously
        - path: Path to the file along with filename and extension
        - options:
          - encoding: utf8: UTF8 encoding

    -----------------------------------------
    # Third-party packages
      - nodemon: Nodemon - Provides you with a command to run your server and apply changes which saving the file (Live server)
*/