const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.get( '/', userController.getAllItem);

router.get( '/items', userController.getItemList);

router.get( '/cart' , userController.getCart);




module.exports = router;