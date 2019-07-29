var Koa = require('koa');
const app = new Koa();
const hostname = "127.0.0.1";
const port = 9000;

app.use(async ctx=>{
    ctx.body = "Hello Koa!";
});

app.listen(port,hostname);
