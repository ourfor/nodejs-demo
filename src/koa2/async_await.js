// 普通方法
function getData(){
    console.log("你的名字");
}

// async让普通方法变成异步方法

async function getData2(){
    return "2";
}

// console.log(getData2());

// 结果 Promise { '你的名字2' }

// asycn wait等待异步方法执行完成

async function test(){
    var d = await getData2();
    console.log(d);
    console.log(1);
    console.log(3);
}

test();

function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let name = "张三";
            resolve(name);
        },1000);
    });
}

// 使用await获取

async function printName(){
    let name = await getName();
    console.log("它的名字为" + name);
}