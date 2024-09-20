import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URL);
  console.log(`connected to mongoDB ${conn.connection.host}`.bgMagenta.white);
  try {
  } catch (error) {
    console.log(`Error in mongoDB : ${error}`.bgRed.white);
  }
};

export default connectDB;
