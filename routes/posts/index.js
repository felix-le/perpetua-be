const express = require('express');
const router = express.Router();
const postsRouter = require('./posts');

router.use('/', postsRouter);

module.exports = router;
