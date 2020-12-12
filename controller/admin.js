const Items = require("../model/productScema");

// Show Add New Item form
exports.getAddItem = (req, res) => {
    res.render('admin/add-item', {
        pageTitle: 'Add Item',
        path: '/admin/add-item',
        editing : false
    })
}

// post add item from
exports.postItem = (req, res, next) => {
    const title = req.body.title;
    const imgUrl = req.body.imgUrl;
    const price = req.body.price;
    const description = req.body.description;
    const items = new Items(null, title, imgUrl, price, description);
    items.save()
        .then( () => res.redirect("/admin/item-list"))
        .catch( err => console.log(err));
}

// Show edit button form
exports.getEditItem = (req, res) => {
    const editMode = req.query.edit;
    if(!editMode)
    {
        res.redirect('/');
    }
    const pid = req.params.itemId;
    Items.fetchItemById(pid)
        .then( ([rows]) => {
            res.render('admin/edit-item', {
            item : rows[0],
            pageTitle: 'Edit Item',
            path: '/admin/edit-item',
            editing : editMode,
            })
        })
        .catch(err => console.log(err));
}

// post Edit form
exports.postEditItem = (req, res, next) => {
    const pId = req.body.itemId;
    const updateTitle = req.body.title;
    const updateImgUrl = req.body.imgUrl;
    const updatePrice = req.body.price;
    const updateDescription = req.body.description;
    const updateItems = new Items(pId,updateTitle, updateImgUrl ,updatePrice, updateDescription);
    updateItems.update()
        .then( () => res.redirect("/admin/item-list"))
        .catch( err => console.log(err));
}

// Show all item on admin page
exports.getAdminItem = (req, res, next) => {
Items.fetchAll()
    .then(([rows]) => {
        res.render('admin/item-list', {
            prods: rows,
            pageTitle: 'Admin Item',
            path: '/admin/item-list',
        })
    })
    .catch(err => console.log(err))
}

// delete item by admin
exports.deleteItem = (req, res, next) => {
    const pId = req.body.pId;
    Items.deleteById(pId)
        .then( () => res.redirect("/admin/item-list"))
        .catch( err => console.log(err) );
}