const express = require("express");
const blogs = require("../controllers/blogController");
const router = express.Router();

router.get("/", blogs);
router.get("/categories/:categories", blogs);
router.get("/author/:author", blogs);
router.get("/title/:title", blogs);
router.get("/id/:id", blogs);

module.exports = router;
