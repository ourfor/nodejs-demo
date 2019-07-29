let router = require('koa-router')();
let Koa = require('koa');
const hostname = "127.0.0.1";
const port = 9000;

let app = new Koa();

app.use(async (ctx,next)=>{
    let date = new Date();
    console.log(date.toLocaleTimeString());
    await next();
    if(ctx.status === 404){
        ctx.body = "这是一个404页面";
        console.log("访问了不存在的页面");
    }
});

router
    .get('/',async (ctx,next)=>{
        ctx.body = '这是首页';
        await next();
    })
    .get('/news',async (ctx,next)=>{
        ctx.body = "这是新闻页面";
    });

app.use(router.routes())
   .use(router.allowedMethods())
   .listen(port,hostname);

