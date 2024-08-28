const exp = require("constants");
const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const route = require("./routes/rootRoutes");
const connectDB = require("./config/db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/user", route);

app.get("/", (req, res) => {
  res.send("Hello, im server !! ");
});

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
