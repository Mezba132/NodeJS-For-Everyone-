const express = require("express");
const router = express.Router();
const rootDir = require("../helper/path");
const path = require("path");
const itemController = require("../controller/items");

router.get( '/add-item', itemController.getAddItem)

router.post( '/item', itemController.postItem)

module.exports = router;