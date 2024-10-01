import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoute from "./routes/authRoute.js";
import cors from "cors";

// configure env
dotenv.config();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//connecting Database
connectDB();

// rest Api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to E-Commerce Application</h1>");
});

// Routes
app.use("/api/v1/auth", authRoute);

const PORT = process.env.PORT || 4000;

// run listen
app.listen(PORT, () => {
  console.log(
    `server running on ${process.env.DEV_MODE} mode on port : ${PORT}`.bgCyan
      .white
  );
});
