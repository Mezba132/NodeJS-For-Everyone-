const products = require("../model/productScema");
const cart = require("../model/cartScema");

// Show on Item on index
exports.getAllItem = (req, res, next) => {
    products.fetchAll()
        .then(([rows, fileData]) => {
            res.render('user/index', {
                prods: rows,
                pageTitle: 'Shop',
                path: '/',
            })
        })
        .catch();
}

// Show All Item
exports.getItemList = (req, res, next) => {
    products.fetchAll().then(([rows, fileData]) => {
        res.render('user/item-list', {
            prods: rows,
            pageTitle: 'Items',
            path: '/items',
        })
    }).catch();
}

// Show Item details
exports.getItem = (req, res, next) => {
    const pId = req.params.itemId;
    products.fetchItemById(pId)
        .then(([rows, fileData]) => {
            res.render('user/item-detail', {
                product : rows[0],
                pageTitle : 'Product Dexcription',
                path : "/items"
            })
        })
        .catch( err => {
            console.log(err);
        });
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
    products.fetchItemById(itemId)
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
    products.fetchItemById(itemId, item => {
        cart.deleteCartItem(itemId, item.price);
    })
    res.redirect('/cart');
}

