const products = [];

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
    products.push({ title: req.body.title });
    res.redirect('/');
}

exports.getAllItem = (req, res, next) => {
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
}
