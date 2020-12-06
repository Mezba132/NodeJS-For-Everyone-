const Items = require("../model/itemScema");

exports.getAddItem = (req, res) => {
    res.render('admin/add-item', {
        pageTitle: 'Add Item',
        path: '/admin/add-item',
    })
}

exports.postItem = (req, res, next) => {
    const title = req.body.title;
    const imgUrl = req.body.imgUrl;
    const price = req.body.price;
    const description = req.body.description;
    const items = new Items(title, imgUrl, price, description);
    items.save();
    res.redirect('/');
}

exports.getAdminItem = (req, res, next) => {
    res.render('admin/item-list', {
        pageTitle: 'Admin Item',
        path: '/admin/item-list',
    })
}