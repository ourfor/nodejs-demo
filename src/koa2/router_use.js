let Router = require('koa-router');
let Koa = require('koa');
const hostname = "127.0.0.1";
const port = 9000;


let app = new Koa();
let router = new Router();

// 配置路由
// context中包含request，response
router.get('/',async (ctx,next)=>{
    ctx.body = "Hello, it is homepage";
}).get('/news',async (ctx)=>{
    ctx.body = "This is the News Page";
});

// 启动路由，路由生效
app.use(router.routes())
   .use(router.allowedMethods());

app.listen(port,hostname);

