const express = require("express");
const router = express.Router();
const auth = require("./auth");
const category = require("./categories");
const products = require("./products");

router.use("/auth",auth);
router.use("/categories", category);
router.use("/products",products);

module.exports = router;