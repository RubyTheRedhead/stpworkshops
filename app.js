var express = require("express")
var app = express();

/* app.use(function (req,res,next){
    console.log("Time:", Date.now());
    next();
});
*/

function logRequest (req,res,next){
    console.log("Time:", Date.now());
    next();
};

function serverError(err, req, res, next){
    console.error(err.stack);
    res.status(500).send("server error");
};

function clientError(err, req, res, next){
    console.error(err.stack);
    res.status(404).send("not found");
};


app.get('/',logRequest, function(req, res){
    throw new Error("jakis blad");
    res.send("Hello world!");
},serverError, clientError);







var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('listening at port:' + 3000);
});
