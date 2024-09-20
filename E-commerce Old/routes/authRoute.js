const express = require("express");
const userModel = require("../models/userModel");
const authController = require("../controllers/authController");
// const loginController = require("../controllers/authController");
const {
  loginController,
  registerController,
} = require("../controllers/authController");
// router object
const router = express.Router();

// routing ->
// Register || Method POST
router.post("/register", registerController);

// LOGIN || POST ->
router.post("/login", loginController);

module.exports = router;
