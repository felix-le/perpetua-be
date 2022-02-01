const express = require('express');
const router = express.Router();
const { statusConstants } = require('../constants/status.constants');
const postsRouter = require('./posts');
const testServerRouter = require('./testServer');
router.get('/', function (req, res, next) {
  res
    .status(statusConstants.SUCCESS_CODE)
    .json('Welcome to the Perpetua - API');
});

router.use('/api/posts', postsRouter);
router.use('/api/ping', testServerRouter);
module.exports = router;
