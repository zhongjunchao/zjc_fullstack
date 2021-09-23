var express = require('express');
var cors = require('cors');//后端cors 中间件
const app = express();
app.use(cors());
app.get('/product',(req,res)=>{
    res.json({
        a:1,
        b:2
    })
})
app.listen(8000,()=>{
    console.log('server is ok')
})