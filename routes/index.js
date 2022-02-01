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
router.get('/api', function (req, res, next) {
  res
    .status(statusConstants.SUCCESS_CODE)
    .json(
      'There are two routes: /api/posts and /api/testServer - Please notice that the /api/posts route requires a tag parameter'
    );
});
router.use('/api/posts', postsRouter);
router.use('/api/ping', testServerRouter);
module.exports = router;
