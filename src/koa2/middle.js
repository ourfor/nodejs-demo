// 中间件
// 1.应用中间件
// 2.路由中间件
// 3.错误处理中间件
// 4.第三方中间件

let Router = require('koa-router');
let Koa = require('koa');
const hostname = "127.0.0.1"
const port = 9000;

let app = new Koa();
let router = new Router();

// 设置中间件
app.use(async (ctx,next)=>{
    let date = new Date();
    console.log(date.toLocaleTimeString());
    // 继续匹配下一个路由
    await next();
    // 不写next就不会继续向下匹配
});


router.get('/',async ctx =>{
    ctx.body = "这是首页";
})
.get('/user',async ctx=>{
    ctx.body = "这是个人页面";
    // 从ctx中获取get传值
    console.log(ctx.query); // 获取对象
    console.log(ctx.querystring); // 获取查询串

    let req = ctx.request;
    let res = ctx.response;
    console.log(req);
    console.log(req.query);
})


app.use(router.routes()).use(router.allowedMethods());
app.listen(port,hostname);