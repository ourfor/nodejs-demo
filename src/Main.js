const helper = require('./helper/Print.js').Helper;
const tool = require('./helper/Print.js');
var http = require('http');

helper.printf("Have a good time!");

if(module === require.main){
    console.log('This is the main module, Main.js');
}

console.log(`filename is ${__filename}, and the path is ${__dirname}`);

let server = http.createServer();
function a(){}
function b(){}
server.on('request',a);
server.on('request',b);
console.log(server.listeners('request'));
