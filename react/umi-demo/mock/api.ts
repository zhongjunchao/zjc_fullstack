import mockjs from 'mockjs'
export default{
    'GET /api/tags':mockjs.mock({
        'list|100':[{
            name:'@city'
        }]
    }),
    'GET /api/users':{user:[1,2]},
    'api/users/1':{id:1},
    'POST /api/users/create':(req,res)=>{
        res.setHeader('Access-control-Allow-Origin','*')
        res.send("ok");
    }
}