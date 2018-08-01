const express = require("express");
const bodyParser = require('body-parser');
const router = require('./router');
const app = express();


app.use(bodyParser.json()); // middleware function that parses request body and makes it accessible through req.body

app.use('/', router);

app.listen(3000);

console.log("Running at Port 3000");