// session的使用
let Koa = require('koa'),
    session = require('koa-session'),
    router = require('koa-router')();
const hostname = '127.0.0.1',
      port = 9000;
// 1. 安装koa-session
// 2. 引入kos-session,并配置

let app = new Koa();

app.keys = ['some secret hurr']; // cookies的签名
const CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  maxAge: 86400000,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};

app.use(session(CONFIG,app))


router
    .get('/',async (ctx,next)=>{
        ctx.body = '这是首页';
        // 使用session
        console.log('session:' + ctx.session.username);
    })
    .get('/login',async (ctx,next)=>{
        // 设置session
        console.log('设置session');
        ctx.session.username = 'catalina';
    })



app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(port,hostname);
