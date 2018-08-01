const express = require('express');
const movieRouter = require('./movieRouter');

const router = express.Router();

router.use('/movie', movieRouter);

module.exports = router;
