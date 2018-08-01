const express = require("express");
const bodyParser = require('body-parser');

const schema = {
  name: 'string',
  value: 'number'
}

const app = express();

const validate = (request) => {
  for (key in request) {
    if (schema[key] === 'number') request[key] = +request[key];
    if (!schema[key] || typeof request[key] !== schema[key]) return false;
  }
  for (key in schema) {
    if (!request[key]) return false;
  }
  return true;
}


app.use(bodyParser.json());

app.use((req, res, next) => { 
  const request = req.body;
  if (validate(request)) {
    next();
  } else {
    res.status(400).end(`Request doesn't correspond to schema`);
  }
});

app.listen(3000);

console.log("Running at Port 3000");