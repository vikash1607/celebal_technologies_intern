const axios = require('axios');

exports.likePost = async (req, res) => {
    try {
        const { postId, platform } = req.body;
        // Mock interaction with social media API
        await axios.post(`https://api.${platform}.com/like`, { postId });
        res.status(200).json({ message: 'Post liked successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.commentOnPost = async (req, res) => {
    try {
        const { postId, platform, comment } = req.body;
        // Mock interaction with social media API
        await axios.post(`https://api.${platform}.com/comment`, { postId, comment });
        res.status(200).json({ message: 'Comment added successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
