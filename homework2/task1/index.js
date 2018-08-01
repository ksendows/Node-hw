const http = require('http');

http.createServer((req, res) => {
    const name = req.url.substring(1);
    res.end(`Hello ${name}!`);
}).listen(3000);