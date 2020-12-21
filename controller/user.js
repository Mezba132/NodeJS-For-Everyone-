const Product = require("../model/productScema");
const cart = require("../model/cartScema");

// Show on Item on index
exports.getAllItem = (req, res, next) => {
    Product.findAll()
        .then( products => {
            res.render('user/index', {
                prods: products,
                pageTitle: 'Shop',
                path: '/',
            })
        })
        .catch( err => console.log(err));
}

// Show All Item
exports.getItemList = (req, res, next) => {
    Product.findAll()
        .then( products => {
        res.render('user/product-list', {
            prods: products,
            pageTitle: 'Product List',
            path: '/products',
        })
    })
        .catch( err => console.log(err));
}

// Show Item details
exports.getItem = (req, res, next) => {
    const pId = req.params.productId;
    Product.findByPk(pId)
        .then( products => {
            res.render('user/product-details', {
                product : products,
                pageTitle : 'Product Description',
                path : "/products"
            })
        })
        .catch( err => console.log(err));
}

// Show Cart item on cart page
exports.getCart = (req, res, next) => {
    cart.getCart()
        .then(([rows, fileData]) => {
            res.render('user/cart', {
                prods : rows,
                pageTitle: 'Cart',
                path: '/cart',
            })
        })
        .catch( err => console.log(err));
}

// Add Cart
exports.postCart = (req, res, next) => {
    const itemId = req.body.itemId;
    Product.fetchItemById(itemId)
        .then( ([rows, filedata]) => {
            const pid = rows[0].id;
            const cost = rows[0].price;
            cart.addItem(pid,cost);
            res.redirect('/cart');
        })
        .catch( err => {
            console.log(err);
        })
}

// Delete Cart from cart page
exports.postCartDelete = (req, res, next) => {
    const itemId = req.body.itemId;
    Product.fetchItemById(itemId, item => {
        cart.deleteCartItem(itemId, item.price);
    })
    res.redirect('/cart');
}

