const express = require("express");
const blogController = require("../controllers/blogController");
const router = express.Router();

router.get("/", blogController.getblogs);

module.exports = router;
