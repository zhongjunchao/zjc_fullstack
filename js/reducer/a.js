// const arr=[1,2,3,4,4,4,5,5,5,6,7]
// console.log( arr.reduce((acc,cur)=>{
//     if(!acc.includes(cur)){
//         acc.push(cur)
//     }
//     return acc;
// },[]))

// [1,2,3,4].reduce((acc,cur,index,o)=>{
//     console.log(acc,cur.index,o)
//     return acc+cur
// },10);

// 按属性给数组分类
const bills=[
    {
        type:'study',
        money:'641'
    },
    {
        type:'shop',
        money:'345'
    },
    {
        type:'transfer',
        money:'123'
    },
    {
        type:'study',
        money:'532'
    },
    {
        type:'shop',
        money:'984'
    },

]
console.log( bills.reduce((acc,cur)=>{
    if(!acc[cur.type]){
        acc[cur.type]=[];
    }
    acc[cur.type].push(cur)
    return acc
},{}))
