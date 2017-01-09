var mongoose = require('mongoose');
let articleSchema = new mongoose.Schema({
    author: String,
    title:   String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: { type: Date, default: Date.now }
});
mongoose.model('Article',articleSchema);
