import exp from "constants";
import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      required: true,
      unique: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      required: true,
      type: String,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Users", userSchema);
