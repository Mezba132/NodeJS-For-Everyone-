const http = require("http");

const server = http.createServer( function(req, res) {

    const url = req.url;
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