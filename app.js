const express = require("express");
const app = express();

app.use( (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>Learning Nodejs</title></head>')
    res.write('<body></body><h1>Hello World</h1></body>')
    res.write('</html>')
    res.send();
})

app.listen(3000, function () {
    console.log("server is running on port 3000");
})