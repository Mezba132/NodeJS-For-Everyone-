const Items = require("../model/itemScema");

exports.getAllItem = (req, res, next) => {
    Items.fetchAll( (items) => {
        res.render('user/index', {
            prods: items,
            pageTitle: 'Shop',
            path: '/',
        })
    })
}

exports.getItemList = (req, res, next) => {
    Items.fetchAll( (items) => {
        res.render('user/item-list', {
            prods: items,
            pageTitle: 'Items',
            path: '/items',
        })
    })
}

exports.getItem = (req, res, next) => {
    const itemId = req.params.itemId;
    Items.fetchItemById(itemId, detailsItem => {
         // console.log(detailsItem);
        res.render('user/item-detail', {
            product : detailsItem,
            pageTitle : 'Product Dexcription',
            path : "/items"
        })
    })
    //res.redirect('/user/cart');
}

exports.getCart = (req, res, next) => {
    res.render('user/cart', {
        pageTitle: 'Cart',
        path: '/cart',
    })
}

exports.postCart = (req, res, next) => {
    const itemId = req.body.itemId;
    console.log(itemId)
    res.redirect('/cart');
}

