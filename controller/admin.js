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
    const items = new Items(title, imgUrl, price, description);
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
    console.log(itemId);
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


exports.getAdminItem = (req, res, next) => {
Items.fetchAll( (items) => {
    res.render('admin/item-list', {
        prods: items,
        pageTitle: 'Admin Item',
        path: '/admin/item-list',
    })
  })
}