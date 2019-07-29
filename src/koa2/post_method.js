let Koa = require('koa');
let router = require('koa-router')();
let views = require('koa-views');
let common = require('./modules/common.js')
let bodyParser = require('koa-bodyparser');
const hostname = '127.0.0.1';
const port = 9000;

let app = new Koa();

// 配置中间件
app.use(bodyParser());

router
    .get('/',async (ctx,next)=>{
        ctx.body = "这是首页";
        await next();
    })
    .post('/login',async (ctx,next)=>{
        // console.log(ctx.query);
        // console.log(ctx.request);
        // 获取数据，上面的两种都获取不了数据
        // let data = await common.getPostData(ctx);
        // console.log(data);
        // ctx.body = data;
        // 使用koa提供的中间件koa-bodyParser
        console.log(ctx.request.body);
        let data = ctx.request.body;
        console.log(data.username);
        console.log(data.password);

    })
    .get('/login.html',async (ctx,next)=>{
        await ctx.render('login');
        await next();
    })


app
    .use(async (ctx,next)=>{
        let datetime = new Date();
        let author = 'ourfor';
        let email = 'ourfor@qq.com';
        ctx.state = {
            author,
            email,
        };
        console.log(datetime.toLocaleTimeString());
        await next();
    })
    .use(views(__dirname + '/views',{
        extension: 'html'
    }))
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(port,hostname);