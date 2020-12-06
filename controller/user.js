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

exports.getCart = (req, res, next) => {
    res.render('user/cart', {
        pageTitle: 'Cart',
        path: '/cart',
    })
}

