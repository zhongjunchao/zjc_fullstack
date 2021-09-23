const Koa =require('koa')
const app=new Koa()

app.use((ctx,next)=>{
    ctx.body="Hello World"
})
app.listen(3001)


// let http=require('http')

// let server =http.createServer((req,res)=>{
//     res.end("hello world")
// })

// server.listen(3002)
