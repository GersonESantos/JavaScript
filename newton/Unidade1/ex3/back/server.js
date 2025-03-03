var http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("<h1>Newtom</h1><h2>Ola mundâo</h2>");
}).listen(3000);
console.log("Server running at http://localhost:3000/");