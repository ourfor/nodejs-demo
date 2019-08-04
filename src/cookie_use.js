let Koa = require('koa'),
    bodyParser = require('koa-bodyparser'),
    router = require('koa-router')();

const hostname = '127.0.0.1',
      port = 9000;

let app = new Koa();

app.use(bodyParser());

router
    .get('/',async (ctx,next)=>{
        let content = `
            <form method='post' action='login'>
                <input type=text name=username placeholder=登录名 />
                <input type=password name=password placeholder=密码 />
                <input type=submit value=提交 />
            </form>
        `;
        ctx.body = content;
    })
    .post('/login',async (ctx,next)=>{
        let data = ctx.request.body;
        try{
            if(data.username==='catalina' && data.password==='2320813747'){
                ctx.body = '登录成功';
                // 设置cookies
                // data.username不能直接设置为中文，如果需要设置为中文，建议使用buffer编码成base64
                // new Buffer(data.username).toString('base64');
                ctx.cookies.set('userinfo_server',data.username,{
                    maxAge: 5 * 60 * 1000,
                    path: '/home', // 配置可以访问的路径
                    httpOnly: true, // 设置只有服务器可以访问，本地js无法获取
                });
            } else{
                ctx.body = '登录失败';
            }
        } catch(err){
            console.log(err);
            ctx.body = err;
        }
    })
    .get('/home',async (ctx,next)=>{
        // 使用cookies
        let userinfo = ctx.cookies.get('userinfo');
        console.log(userinfo);
        ctx.body = '个人中心';
    })


app 
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(port,hostname);

