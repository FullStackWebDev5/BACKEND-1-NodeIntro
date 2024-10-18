// # Server returning string data
// const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('First Nodejs server :)')
// })

// server.listen(3000)


// # Server returning JSON data
// const http = require('http')

// const server = http.createServer((req, res) => {
//   const jsonData = [
//     {
//       "id": 1,
//       "email": "george.bluth@reqres.in",
//       "first_name": "Soham",
//       "last_name": "Maruti",
//       "avatar": "https://reqres.in/img/faces/1-image.jpg"
//     },
//     {
//       "id": 2,
//       "email": "janet.weaver@reqres.in",
//       "first_name": "Suraj",
//       "last_name": "Nishad",
//       "avatar": "https://reqres.in/img/faces/2-image.jpg"
//     },
//     {
//       "id": 3,
//       "email": "emma.wong@reqres.in",
//       "first_name": "Vishnu",
//       "last_name": "Bharti",
//       "avatar": "https://reqres.in/img/faces/3-image.jpg"
//     },
//     {
//       "id": 4,
//       "email": "eve.holt@reqres.in",
//       "first_name": "Eve",
//       "last_name": "Holt",
//       "avatar": "https://reqres.in/img/faces/4-image.jpg"
//     },
//     {
//       "id": 5,
//       "email": "charles.morris@reqres.in",
//       "first_name": "Charles",
//       "last_name": "Morris",
//       "avatar": "https://reqres.in/img/faces/5-image.jpg"
//     },
//     {
//       "id": 6,
//       "email": "tracey.ramos@reqres.in",
//       "first_name": "Tracey",
//       "last_name": "Ramos",
//       "avatar": "https://reqres.in/img/faces/6-image.jpg"
//     }
//   ]
//   const jsonString = JSON.stringify(jsonData)
//   res.end(jsonString)
// })

// server.listen(3000)

// # Server returning HTML file
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   const data = fs.readFileSync('index.html')
//   res.end(data)
// })

// server.listen(3000)