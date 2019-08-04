// 使用art-template高性能模板引擎
// 1 安装art-template koa-art-template 
// 2 引入koa-art-template
// 3 配置
// render(app,{
//     root: path.join(__dirname,'views'),// 模板视图的位置
//     extname: '.art', // 后缀名
//     debug: process.env.NODE_ENV !== 'production' // 是否开启调试模式
// })

let Koa = require('koa'),
    router = require('koa-router')(),
    render = require('koa-art-template'),
    path = require('path');

const hostname = '127.0.0.1',
      port = 9000;

let app = new Koa();
render(app,{
    root: path.join(__dirname,'views'),
    extname: '.html',
});

router 
    .get('/',async (ctx,next)=>{
        await ctx.render('index',{
            author: 'ourfor',
            email: 'ourfor@qq.com',
        });
    });



app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(port,hostname);
