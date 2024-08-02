const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    content: String,
    scheduledTime: Date,
    platform: String,
});

module.exports = mongoose.model('Post', PostSchema);
