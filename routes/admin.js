const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin");

router.get( '/add-item', adminController.getAddItem)

router.get( '/edit-item/:itemId', adminController.getEditItem)

router.get( '/item-list', adminController.getAdminItem);

router.post( '/item', adminController.postItem)




module.exports = router;