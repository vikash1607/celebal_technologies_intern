const axios = require('axios');

exports.getTrends = async (req, res) => {
    try {
        const { platform } = req.query;
        // Mock data scraping from social media platform
        const response = await axios.get(`https://api.${platform}.com/trends`);
        res.status(200).json(response.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
