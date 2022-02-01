const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/postsCtrl');

router.get('/', postsCtrl.getAllPosts);

module.exports = router;
