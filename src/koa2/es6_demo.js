if(true){
    var a = 11;
}
console.log(a);

let name = "李白";
var app = {
    name,
    run: ()=>{
        console.log(`${name}在运动`);
    },
    sleep(){
        console.log(`${name}在睡觉`);
    },
};

app.run();
console.log(app.name);

// 模拟异步

function getData(callback){
    //1
    //2
    setTimeout(()=>{
        var name = "张三";
        callback(name);
    },1000);
}

getData((name)=>{
    console.log(name);
});


// 使用Promise来处理异步
var p = new Promise((resolve,reject)=>{
    setTimeout(function(){
        var name = "张三";
        resolve(name);
    },1000);
});

p.then((name)=>{
    console.log(`它的名字是${name}`);
});

// 上面的方式可能有点难于理解
function EmuSync(resolve,reject){
    setTimeout(()=>{
        let name = '李四';
        resolve(name);
    },1000);
}

let promise = new Promise(EmuSync);
promise.then((name)=>{
    console.log("Promise方式:" + name);
});