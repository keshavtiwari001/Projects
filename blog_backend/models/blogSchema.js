const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
  categories: {
    type: [String],
    required: true,
  },
  tags: {
    type: [String],
  },
});

const blogCollection = mongoose.model("blogPosts", blogPostSchema);

module.exports = blogCollection;
