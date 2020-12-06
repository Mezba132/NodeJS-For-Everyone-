const Items = require("../model/itemScema");

exports.getAddItem = (req, res) => {
    res.render('admin/add-item', {
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