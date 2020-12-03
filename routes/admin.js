const express = require("express");
const router = express.Router();
const rootDir = require("../helper/path");
const path = require("path");

router.get( '/add-item',(req, res) => {
    console.log(path.join(rootDir, 'views', 'add-item.html'));
    res.sendFile(path.join(rootDir, 'views', 'add-item.html'));
})

router.post( '/item',(req, res, next) => {
    console.log(req.body);
    res.redirect('/user');
})

module.exports = router;