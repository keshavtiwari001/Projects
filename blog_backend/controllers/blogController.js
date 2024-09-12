const mongoose = require("mongoose");
const blogCollection = require("../models/blogSchema");
const blogController = async (req, res) => {
  try {
    const { id, categories, title, author } = req.params;
    let blogs;
    if (categories) {
      const searchcategories = categories.toLowerCase();
      blogs = await blogCollection.find({
        categories: { $regex: new RegExp(searchcategories, "i") },
      });
    } else if (title) {
      const searchtitle = title.toLowerCase();
      blogs = await blogCollection.find({
        title: { $regex: new RegExp(searchtitle, "i") },
      });
    } else if (author) {
      const searchauthor = author.toLowerCase();
      blogs = await blogCollection.find({
        author: { $regex: new RegExp(searchauthor, "i") },
      });
    } else if (id) {
      blogs = await blogCollection.find({
        _id: id,
      });
    } else {
      blogs = await blogCollection.find();
      console.log(`blogs fetched successfully`);
    }
    if (!blogs || blogs.length === 0)
      return res.status(404).send({ message: "blogs not found" });
    res.status(200).send(blogs);
  } catch (error) {
    res.status(504).send({
      message: "Error fetching blogs",
    });
    console.log(`Error Occured :${error}`);
  }
};
module.exports = blogController;
