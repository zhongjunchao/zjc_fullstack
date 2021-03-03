const Koa = require('koa');
const app = new Koa(); // web app
app.use(async ctx => {
        ctx.body = 'Hello World';
})
app.listen(3000);