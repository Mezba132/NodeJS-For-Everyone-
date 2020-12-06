const Items = require("../model/itemScema");

exports.getAddItem = (req, res) => {
    res.render('admin/add-item', {
        pageTitle: 'Add Item',
        path: '/admin/add-item',
    })
}

exports.postItem = (req, res, next) => {
    const items = new Items(req.body.title);
    items.save();
    res.redirect('/');
}

exports.getAdminItem = (req, res, next) => {
    res.render('admin/item-list', {
        pageTitle: 'Admin Item',
        path: '/admin/item-list',
    })
}