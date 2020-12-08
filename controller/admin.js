const Items = require("../model/itemScema");

exports.getAddItem = (req, res) => {
    res.render('admin/add-item', {
        pageTitle: 'Add Item',
        path: '/admin/add-item',
        editing : false
    })
}

exports.postItem = (req, res, next) => {
    const title = req.body.title;
    const imgUrl = req.body.imgUrl;
    const price = req.body.price;
    const description = req.body.description;
    const items = new Items(null, title, imgUrl, price, description);
    items.save();
    res.redirect('/');
}

exports.getEditItem = (req, res) => {
    const editMode = req.query.edit;
    if(!editMode)
    {
        res.redirect('/');
    }
    const itemId = req.params.itemId;
    Items.fetchItemById(itemId, item => {
        if(!item)
        {
            res.redirect('/');
        }
        res.render('admin/edit-item', {
            pageTitle: 'Edit Item',
            path: '/admin/edit-item',
            editing : editMode,
            item : item
        })
    })
}

exports.postEditItem = (req, res, next) => {
    const itemId = req.body.itemId;
    const updateTitle = req.body.title;
    const updateImgUrl = req.body.imgUrl;
    const updatePrice = req.body.price;
    const updateDescription = req.body.description;
    const updateItems = new Items(itemId,updateTitle, updateImgUrl, updatePrice, updateDescription);
    updateItems.save();
    res.redirect('/admin/item-list');
}

exports.getAdminItem = (req, res, next) => {
Items.fetchAll( (items) => {
    res.render('admin/item-list', {
        prods: items,
        pageTitle: 'Admin Item',
        path: '/admin/item-list',
    })
  })
}

exports.deleteItem = (req, res, next) => {
    const itemId = req.body.pId;
    console.log(itemId);
    Items.deleteById(itemId);
    res.redirect('/');
}