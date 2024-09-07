const Data = require("../models/blogSchema");

exports.getblogs = async (req, res) => {
  const data = await Data.find();
  res.status(200).json(data);
  if (!data) {
    res.status(400).json({ message: "no data provided" });
  }
};
