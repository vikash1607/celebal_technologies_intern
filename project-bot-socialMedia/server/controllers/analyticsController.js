const Post = require('../models/Post');

exports.getAnalytics = async (req, res) => {
    try {
        const posts = await Post.find();
        const analytics = {
            totalPosts: posts.length,
            platforms: posts.reduce((acc, post) => {
                acc[post.platform] = (acc[post.platform] || 0) + 1;
                return acc;
            }, {}),
        };
        res.status(200).json(analytics);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
