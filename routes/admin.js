const express = require("express");
const router = express.Router();
const path = require("path");

router.get( '/add-item',(req, res) => {
    console.log(path.join(__dirname, '../', 'views', 'add-item.html'));
    res.sendFile(path.join(__dirname, '../', 'views', 'add-item.html'));
})

router.post( '/item',(req, res, next) => {
    console.log(req.body);
    res.redirect('/user');
})

module.exports = router;