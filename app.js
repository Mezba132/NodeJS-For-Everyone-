const http = require("http");
const fs = require("fs");

const server = http.createServer( function(req, res) {

    const url = req.url;
    const method = req.method;

    if( url === '/')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Learning Nodejs</title></head>')
        res.write('<body></body>' +
            '<form action="/message" method="post">' +
            '<input type="text" name="msg"><br/><button>Post</button>' +
            '</form>' +
            '</body>')
        res.write('</html>')
        return res.end();
    }

    if( url === "/message" && method === "POST")
    {
        fs.writeFileSync('message.txt', "Dummy Text");
        res.statusCode = 302;
        res.setHeader("location", "/");
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>Learning Nodejs</title></head>')
    res.write('<body></body><h1>Hello World</h1></body>')
    res.write('</html>')
    res.end();
})

server.listen(3000, function () {
 console.log("server is running on port 3000");
})