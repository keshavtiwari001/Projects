const express = require("express");
const rootcontroller = require("../controllers/rootController");
const router = express.Router();

router.get("/", rootcontroller);
module.exports = router;
