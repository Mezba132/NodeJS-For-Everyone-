const express = require("express");
const router = express.Router();
const path = require("path");

router.get( '/', (req, res, next) => {
    if(!res.status === 200)
    {
        res.send("<h1>Shop Page not found</h1>");
    }
    else
    {
        res.status(200).sendFile(path.join(__dirname, '../' ,'views', 'shop.html'));
        // res.status(200).sendFile(process.cwd() + '/views/shop.html');
    }

})

module.exports = router;