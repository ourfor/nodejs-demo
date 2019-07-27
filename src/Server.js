var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var hostname = "127.0.0.1";
var port = 8000;

app.listen(port,hostname);

let tweets = [];

app.get("/",function(request,response){
    response.send("Welcome to Node Twtter!");
});

app.post("/send",bodyParser(),function(request,response){
    if(request.body && request.body.tweet){
        tweets.push(tweet);
        response.send({state: "ok",message: "Tweet Receive"});
    } else {
        // 没有tweet?
        response.send({state: "nok",message: "No tweet Receice"});
    }
});




