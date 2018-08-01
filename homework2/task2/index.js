const express = require('express');
const app = express();

app.all('/:name', (req, res) => {
    const { name } = req.params;
    res.end(`Hello ${name}!`);
})

app.listen(3000);