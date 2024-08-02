const express = require('express');
const { getTrends } = require('../controllers/trendController');
const router = express.Router();

router.get('/', getTrends);

module.exports = router;
