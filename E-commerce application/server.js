const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const authRoutes = require("./routes/authRoute");

// rest object
const app = express();

// database config
connectDB();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);

// rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcom to Ecommerce app</h1>");
});

app.listen(PORT, () => {
  console.log(
    `Server runnning on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white
  );
});
