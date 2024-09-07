const mongoose = require("mongoose");

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.mongo_URL);
    console.log("DataBase connected!!".bgCyan.white);
  } catch (error) {
    console.log("DataBase not connected!!".bgred.white);
  }
};

module.exports = connectDB;
