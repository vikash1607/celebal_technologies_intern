const express = require('express');
const { likePost, commentOnPost } = require('../controllers/interactionController');
const router = express.Router();

router.post('/like', likePost);
router.post('/comment', commentOnPost);

module.exports = router;
