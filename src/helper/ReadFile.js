const fs = require('fs');
let data = new Buffer.from('欲戴王冠必承其重','utf8');
let opts = {
    encoding: 'base64',
    flag: 'w'
};
fs.readFile('./Print.js','utf8',function(err,data){
    if(err){
        console.log('出现异常');
    } else{
        console.log(data.toString());
        fs.writeFile('../../data/base64.txt',data.toString(),opts,function(err,){
            if(err){
                console.log(err);
            }
        });
    }
});
