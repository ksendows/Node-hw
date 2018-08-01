const express = require('express');
const router = express.Router();
let order = {};

router.get('/', (req, res) => {
    res.json(order);
});

router.post('/', (req, res) => {
  order = req.body;
  res.end();
});

module.exports = router;