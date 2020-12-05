const Items = require("../model/item");

exports.getAddItem = (req, res) => {
    res.render('add-item', {
        pageTitle: 'Add Item',
        path: '/admin/add-item',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    })
}

exports.postItem = (req, res, next) => {
    const items = new Items(req.body.title);
    items.save();
    res.redirect('/');
}

exports.getAllItem = (req, res, next) => {
Items.fetchAll( (items) => {
    res.render('shop', {
        prods: items,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: items.length > 0,
        activeShop: true,
        productCSS: true
    })
 })
}
