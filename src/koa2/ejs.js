let Koa = require('koa');
let router = require('koa-router')();
let views = require('koa-views');

const hostname = "127.0.0.1";
const port = 9000;

let app = new Koa();

// 配置模板引擎中间件，第三方中间件
app.use(views((__dirname + '/views'),{
    extension: "ejs" // 应用ejs模板引擎
}));





router
    .get('/',async (ctx,next)=>{
        let title = '这是标题';
        // 必须加上 await，不然找不到路由
        await ctx.render('index',{
            title: title,
        });
        await next();
    })
    .get('/news',async (ctx,next)=>{
        let newsArray = [1,2,3,4,5];
        let content = `<h2>这是副标题</h2>`;
        let test = 7;
        await ctx.render('news',{
            news: newsArray,
            content: content,
            test: test,
        });
    });

// 如果要在公共路由中渲染数据，可以将数据放在state中，类比jsp中的application作用域,写在中间件中
app.use(async (ctx,next)=>{
    ctx.state = {
        author: 'ourfor',
        email: 'ourfor@qq.com',
    };
    await next();
});




app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(port,hostname);