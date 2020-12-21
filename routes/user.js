const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.get( '/', userController.getAllItem);

router.get( '/products', userController.getItemList);

router.get( '/cart' , userController.getCart);

router.post( '/cart', userController.postCart);

router.get( '/products/:productId', userController.getItem);

router.get( '/details', userController.getItem);

router.post( '/cart-delete', userController.postCartDelete);



module.exports = router;