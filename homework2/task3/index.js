const express = require('express');
const fs = require('fs');
const app = express();

app.all('/', (req, res) => {
    fs.readFile('index.html', (error, data) => {
        if (error) {
            res.writeHead(404);
            res.end('File not found');
        } else {
            res.end(data);
        }
    });
})

app.listen(3000);