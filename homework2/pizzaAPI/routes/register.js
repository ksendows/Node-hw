const express = require('express');
const router = express.Router();
let user = {};


router.post('/', (req, res) => {
  user = req.body;
  res.end();
});

module.exports = router;