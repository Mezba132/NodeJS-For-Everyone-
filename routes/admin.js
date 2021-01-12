const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin");

router.get( '/add-product', adminController.getAddProduct);

router.get( '/edit-product/:productId', adminController.getEditProduct);

router.post( '/edit-product', adminController.postEditProduct);

router.get( '/product-list', adminController.getProductList);

router.post( '/product', adminController.postProduct);

router.post( '/delete-product', adminController.deleteProduct);

module.exports = router;