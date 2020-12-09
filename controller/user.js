const Items = require("../model/itemScema");
const cart = require("../model/cartScema");

// Show on Item on index
exports.getAllItem = (req, res, next) => {
    Items.fetchAll( (items) => {
        res.render('user/index', {
            prods: items,
            pageTitle: 'Shop',
            path: '/',
        })
    })
}

// Show All Item
exports.getItemList = (req, res, next) => {
    Items.fetchAll( (items) => {
        res.render('user/item-list', {
            prods: items,
            pageTitle: 'Items',
            path: '/items',
        })
    })
}

// Show Item details
exports.getItem = (req, res, next) => {
    const itemId = req.params.itemId;
    Items.fetchItemById(itemId, data => {
        res.render('user/item-detail', {
            product : data,
            pageTitle : 'Product Dexcription',
            path : "/items"
        })
    })
    //res.redirect('/user/cart');
}

// Show Cart item on cart page
exports.getCart = (req, res, next) => {
    cart.getItemCart( cartItem => {
        Items.fetchAll( items => {
            const selectedCart = [];
            for (let item of items)
            {
                const findCart = cartItem.item.find( p => p.id === item.id);
                if(findCart)
                {
                    selectedCart.push({ itemData : item, itemQty : findCart.quantity})
                }
            }
            res.render('user/cart', {
                prods : selectedCart,
                pageTitle: 'Cart',
                path: '/cart',
            })
        })
    })
}

// Add Cart
exports.postCart = (req, res, next) => {
    const itemId = req.body.itemId;
    Items.fetchItemById(itemId, item => {
        cart.addItem(itemId, item.price);
    })
    res.redirect('/cart');
}

// Delete Cart from cart page
exports.postCartDelete = (req, res, next) => {
    const itemId = req.body.itemId;
    Items.fetchItemById(itemId, item => {
        cart.deleteCartItem(itemId, item.price);
    })
    res.redirect('/cart');
}

