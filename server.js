var http = require('http');

var server = http.createServer (function(req, res) {
    res.end ('hello word');
});

server.listen(3000, function(){
console.log("listening on port": + 3000)
});