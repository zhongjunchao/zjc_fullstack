let Mock =require('mockjs');
const Random = Mock.Random

Mock.mock('/infos','get',{
    // data: [
    //     {
    //         'key':1,
    //         'title':'aa',
    //         'content':'ddd'
    //     }
    // ]
    'data|100': [{
        'key|+1':1,
        'title':Random.csentence(10,13),
        'content':Random.paragraph(),
        'name':'@name',
        'email':'@email',
        'sex|1':['男','女'],
        'zip':Random.zip(),
        'avatar':Random.image('200x100','#FF6600')
    }]
})
