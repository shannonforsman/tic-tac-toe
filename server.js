var http = require('http')
var fs = require('fs')
var mime = require('mime')

var handleRequest = function (req, res) {
  var urlPath = req.url === '/' ? './index.html' : '.' + req.url

  fs.readFile(urlPath, function (err, file) {
    if (err) {
      res.end('404')
    } else {
      res.setHeader('Content-Type', mime.lookup(urlPath))
      res.end(file)
    }
  })
}

var server = http.createServer(handleRequest)

server.listen((process.env.PORT || 4000))
