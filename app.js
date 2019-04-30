// const http = require('http');
// const express = require('express');
// const app = express()
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
// });

// app.get('/', function (req, res) {
//     res.render("main.html");

//   })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
const express = require('express')
const app = express()
var path=require('path');
var fs = require('fs');
const port = 3002

app.get('/', (req, res) =>   res.sendFile(path.join(__dirname+'/map.html')))

app.get('/citations', function(req, res) {
    let filename = path.join(__dirname+'/citations.csv');
    fs.readFile(filename, function read(err, data) {
      if (err) {
          throw err;
      }
      res.setHeader('Content-disposition', 'attachment; filename=testing.csv');
      res.set('Content-Type', 'text/csv');
      res.status(200).send(data);
  });
  
   
  });
  app.use(express.static( path.join(__dirname, 'public')));



app.listen(port, () => console.log(`Example app listening on port ${port}!`))