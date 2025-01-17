const express = require("express");
const router = express.Router();
const auth = require("./auth");
const category = require("./categories");

router.use("/auth",auth);
router.use("/categories", category);

module.exports = router;