const Product = require("../model/product");

// Show Add New Item form
exports.getAddProduct = (req, res) => {
    res.render('admin/add-product', {
        pageTitle: 'Add product',
        path: '/admin/add-product',
        editing : false
    })
}

// post add item form
exports.postProduct = (req, res, next) => {
    const title = req.body.title;
    const imgUrl = req.body.imgUrl;
    const price = req.body.price;
    const description = req.body.description;
    req.user.createProduct({
        title : title,
        price : price,
        imageURL : imgUrl,
        description : description
    })
        .then( results => {
            console.log(results);
            res.redirect('/admin/product-list');
        })
        .catch( err => {
            console.log(err)
        })
}

// Show edit button form
exports.getEditProduct = (req, res) => {
    const editMode = req.query.edit;
    if(!editMode)
    {
        res.redirect('/');
    }
    const pid = req.params.productId;
    Product.findAll({ where : { id : pid} })
        .then( products => {
            res.render('admin/edit-product', {
            product : products[0],
            pageTitle: 'Edit Item',
            path: '/admin/edit-product',
            editing : editMode,
            })
        })
        .catch(err => console.log(err));
}

// post Edit form
exports.postEditProduct = (req, res, next) => {
    const pId = req.body.productId;
    const updateTitle = req.body.title;
    const updateImgUrl = req.body.imgUrl;
    const updatePrice = req.body.price;
    const updateDescription = req.body.description;
    Product.findByPk(pId)
        .then( products => {
            products.title = updateTitle;
            products.price = updatePrice;
            products.imageURL = updateImgUrl;
            products.description = updateDescription;
            return products.save();
        })
        .then( (results) =>  {
            console.log("Data Updated")
            res.redirect('/admin/product-list')
        })
        .catch( err => console.log(err))
}

// Show all item on admin page
exports.getProductList = (req, res, next) => {
Product.findAll()
    .then( products => {
        res.render('admin/product-list', {
            prods: products,
            pageTitle: 'Admin-Product List',
            path: '/admin/product-list',
        })
    })
    .catch(err => console.log(err))
}

// delete item by admin
exports.deleteProduct = (req, res, next) => {
    const pId = req.body.pId;
    Product.findByPk(pId)
        .then( products => {
            return products.destroy()
        })
        .then( () => {
            console.log("Delete Successfully");
            res.redirect("/admin/product-list")
        })
        .catch( err => console.log(err) );
}