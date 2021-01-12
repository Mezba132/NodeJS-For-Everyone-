const Product = require("../model/product");
const cart = require("../model/cart");

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
    req.user.getCart()
        .then(cart => {
            return cart
                .getProducts()
                .then(products => {
                    res.render('user/cart',{
                        path : '/cart',
                        pageTitle:'your cart',
                        products:products
                    })
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

// Add Cart
exports.postCart = (req, res, next) => {
    const proId = req.body.productId;
    console.log(proId);
    let fetchCart;
    req.user.getCart()
        .then(cart => {
            fetchCart = cart;
            return cart.getProducts({ where: {id : proId}})
        })
        .then(products => {
            let product;
            if(products.length > 0)
            {
                product = products[0]
            }
            let newQuantity = 1;
            if(product) {
                //...
            }
            return Product.findByPk(proId)
                .then(product => {
                    return fetchCart.addProduct(product, { through : {quantity: newQuantity}});
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err));
}

// Delete Cart from cart page
exports.postCartDelete = (req, res, next) => {
    const itemId = req.body.itemId;
    Product.fetchItemById(itemId, item => {
        cart.deleteCartItem(itemId, item.price);
    })
    res.redirect('/cart');
}

