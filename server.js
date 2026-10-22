
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
        if (err) {
            res.writeHead(500);
            return res.end('No se pudo cargar la página');
        }

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end(content);
    });
});

server.listen(process.env.PORT || 8080);
