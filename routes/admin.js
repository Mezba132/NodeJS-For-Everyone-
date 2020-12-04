const express = require("express");
const router = express.Router();
const rootDir = require("../helper/path");
const path = require("path");

const products = [];

router.get( '/add-item',(req, res) => {
    res.render('add-item', {
        pageTitle: 'Add Item',
        path: '/admin/add-item',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
})

router.post( '/item',(req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
})

exports.routes = router;
exports.products = products;