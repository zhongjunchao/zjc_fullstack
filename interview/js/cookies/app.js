const Koa = require('koa');
const app = new Koa();
// 启用中间件 一个个函数服务于app, 访问者 
// node server 基本思路
// app.use(ctx => {
//   console.log('fdfdfdf')

// })
app.use(async (ctx) => {
  // ctx  是request response 合集
  //ctx.body = 'hello world'; // 
  if (ctx.url == '/index') {
    // 设置cookies 
    // 服务器端设置 
    // 客户端每次会带上cookie向服务器发送请求 服务器知道你是谁 

    ctx.cookies.set('uid', '123212342', {
      //域名限定的， 安全
      domain: '127.0.0.1',
      path:'./index',
      maxAge: 1000*60*60*24,
      httpOnly:false
      //expires: new Date('2020-1-1')
    })
    ctx.body = '/index';
  } else if (ctx.url == '/') {
    if (ctx.cookies.get('uid')) {
      ctx.body = ctx.cookies.get('uid')
    } else {
      ctx.type = 'text/html;charset=utf-8';
      ctx.body = 'Cookie is none';
    }
    

  }
})

app.listen(1234, () => {
  console.log('server is starting at port 1234')
})