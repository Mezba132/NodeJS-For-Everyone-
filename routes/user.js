const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.get( '/', userController.getAllItem);

router.get( '/items', userController.getItemList);

router.get( '/cart' , userController.getCart);

router.post( '/cart', userController.postCart);

router.get( '/items/:itemId', userController.getItem);

router.get( '/details', userController.getItem);






module.exports = router;