const express = require("express");
const router = express.Router();

router.get( '/', (req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>Learning Nodejs</title></head>')
    res.write('<body></body><h1>Hello World</h1></body>')
    res.write('</html>')
    res.send();
})

module.exports = router;