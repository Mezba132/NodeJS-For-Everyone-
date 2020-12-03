const express = require("express");
const app = express();

app.use( '/add-item',(req, res) => {
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

app.use( '/item',(req, res, next) => {
    // parseBody
    const body = [];
    req.on('data', function (rawData) {
        console.log(rawData);
        body.push(rawData);
    })
    req.on('end', function() {
        const parseBody = Buffer.concat(body).toString();
        console.log(parseBody);
    })
    res.redirect('/home');
})

app.use( '/home',(req, res, next) => {
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