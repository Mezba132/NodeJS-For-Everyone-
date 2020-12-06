const Items = require("../model/itemScema");

exports.getAllItem = (req, res, next) => {
    Items.fetchAll( (items) => {
        res.render('user/item-list', {
            prods: items,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: items.length > 0,
            activeShop: true,
            productCSS: true
        })
    })
}

