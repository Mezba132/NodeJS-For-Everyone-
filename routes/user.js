const express = require("express");
const router = express.Router();
const path = require("path");
const adminData = require('./admin');
const rootDir = require("../helper/path");
const itemController = require("../controller/items");

router.get( '/', itemController.getAllItem);

module.exports = router;