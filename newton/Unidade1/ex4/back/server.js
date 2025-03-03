var http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>Meu Servidor</title>
        </head>
        <body>
            <h1>Newtom</h1>
            <h2>Ola mundâo</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/300px-The_Earth_seen_from_Apollo_17.jpg" alt="Globo Terrestre">
        </body>
        </html>

    `);
}).listen(3000);
console.log("Server running ex4/server.js at http://localhost:3000/");