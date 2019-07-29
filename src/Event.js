var utils = require('utils'),
    EventEmitter = require('event').EventEmitter;

class Server extends EventEmitter{
    constructor(){
        console.log('init');
    }
}

let s = new Server();
s.on('abc',function(e){
    console.log('abc');
});

s.emit('abc');