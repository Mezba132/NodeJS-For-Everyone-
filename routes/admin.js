const express = require("express");
const router = express.Router();

router.get( '/add-item',(req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>Learning Nodejs</title></head>')
    res.write('<body><form action="/item" method="post">' +
        '<input type="text" name="msg">' +
        '<button>Add Item</button>' +
        '</form></body>')
    res.write('</html>')
    res.send();
})

router.post( '/item',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;