const express = require("express");
const router = express.Router();
const handleURL = require("../controller/urlController");

router.post("/", handleURL.handleGenerateURL);
router.get("/:shortId", handleURL.handleShortID);
router.get("/analytics/:shortid", handleURL.handleAnalytics);

module.exports = router;
