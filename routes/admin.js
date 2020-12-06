const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin");

router.get( '/add-item', adminController.getAddItem)

router.post( '/item', adminController.postItem)

module.exports = router;