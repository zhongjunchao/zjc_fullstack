const koa =require('koa');
const mount =require('koa-mount');
const serve=require('koa-static')
const fs =require('fs');
const app = new koa();
app.use(server(__dirname +'/static'))
app.use(
    mount('/',ctx=>{
        ctx.body=fs.readFileSync(__dirname +'/max_count.html','utf-8');
    })
)
app.listen(1234)
