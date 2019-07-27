var http = require("http"),
    assert = require("assert");
var opts = {
    host: "localhost",
    port: 8000,
    path: "/send",
    method: "POST",
    heads: {"content-type":"application/x-www-form-urlencoded"}
};

var request = http.request(opts,function(response){
    response.setEncoding("UTF-8");
    var data = "";
    response.on("data",function(dataPart){
        data += dataPart;
        console.log(data);
    });

    response.on("end",function(){
        console.log("正常退出");
        assert.notStrictEqual(data,'{"status": "ok","message":"Tweet received"}');
    })
});

request.write("tweet==test");
request.end();