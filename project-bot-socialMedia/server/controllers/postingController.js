const Post = require('../models/Post');

exports.schedulePost = async (req, res) => {
    try {
        const { content, scheduledTime, platform } = req.body;
        const newPost = new Post({ content, scheduledTime, platform });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
