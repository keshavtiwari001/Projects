const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const rootroute = require("./routes/rootRoute");
const blogRoute = require("./routes/blogRoute");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 6000 || 8080;
connectDB();
const app = express();
app.use(express.json());

app.get("/", rootroute);
app.use(("/blog", blogRoute));

app.listen(PORT, () => {
  console.log(`Sever is running on http://localhost:${PORT}`.bgBlue.white);
});
