var http = require('http');

http.createServer(function (req, res) {
  console.log('Server listening on port 3000')
}).listen(3000);
