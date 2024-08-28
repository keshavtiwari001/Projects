const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("MongoDB is connected !!".bgBlack.green);
  try {
  } catch (error) {
    console.log(`err in mongoDB connection ${error}`.bgBlack.red);
  }
};
module.exports = connectDB;
