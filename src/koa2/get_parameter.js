let Router = require('koa-router');
let Koa = require('koa');
const hostname = "127.0.0.1"
const port = 9000;

let app = new Koa();
let router = new Router();

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