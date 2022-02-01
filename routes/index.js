const express = require('express');
const router = express.Router();
const { statusConstants } = require('../constants/status.constants');
const postsRouter = require('./posts');

router.get('/', function (req, res, next) {
  res
    .status(statusConstants.SUCCESS_CODE)
    .json('Welcome to the Perpetua - API');
});

router.use('/posts', postsRouter);
module.exports = router;
