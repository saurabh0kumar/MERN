var http = require("http");
var port= 2000;
var server =http.createServer(function(req,res)
{
    res.writeHead(200,{"content type":"text/plain"});
    res.write("hello world node js");
    res.end();

});
server.listen(port);
console.log('server started with the ${port}');