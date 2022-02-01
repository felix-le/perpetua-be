const express = require('express');
const router = express.Router();

const testServerCtrl = require('../../controllers/testServerCtrl');

router.get('/', testServerCtrl.getServerTest);

module.exports = router;
