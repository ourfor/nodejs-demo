// 动态路由

let Router = require('koa-router');
let Koa = require('koa');
const hostname = "127.0.0.1"
const port = 9000;

let app = new Koa();
let router = new Router();

// 动态路由匹配
// 1 路由地址配置
router.get('/blog/:aid',async ctx=>{
    console.log(ctx.params);
    // 会将请求的参数赋值给aid
    // 动态路由中可以传入多个值
    // /blog/:aid/:cid
    ctx.body = ctx.params.aid;
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(port,hostname);