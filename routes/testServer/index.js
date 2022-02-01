const express = require('express');
const router = express.Router();
const testServerRouter = require('./testServer');

router.use('/', testServerRouter);

module.exports = router;
