const http = require('http')

console.log("Backend loading, beginning");

http.createServer(function(req, res) {
    console.log(req.headers.X - API - KEY)
    res.end();
}).listen(8080);