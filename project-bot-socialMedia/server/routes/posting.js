const express = require('express');
const { schedulePost } = require('../controllers/postingController');
const router = express.Router();

router.post('/schedule', schedulePost);

module.exports = router;
