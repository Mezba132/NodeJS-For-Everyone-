const express = require("express");
const app = express();

app.use( (req, res, next) => {
    console.log("Go To Next Middleware");
    next();
})

app.use( (req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>Learning Nodejs</title></head>')
    res.write('<body></body><h1>Bye World</h1></body>')
    res.write('</html>')
    res.send();
})

app.listen(3000,  () => {
    console.log("server is running on port 3000");
})