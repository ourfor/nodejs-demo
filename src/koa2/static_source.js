// 引入静态资源
let Koa = require('koa')
let router = require('koa-router')();
let static = require('koa-static');
let views = require('koa-views');
const hostname = "127.0.0.1",
      port = 9000;

let app = new Koa();
app
    .use(static(__dirname + '/static')) // 将static目录下面的文件映射到本文件相同目录等级
    .use(views(__dirname + '/views',{
        extension: 'ejs'
    }))

router
    .get('/',async (ctx,next)=>{
        await ctx.render('index',{
            title: '这是首页',
            author: 'ourfor',
            email: 'ourfor@qq.com',
        });
    });

app
    .use(router.routes())
    .use(router.allowedMethods)
    .listen(port,hostname);