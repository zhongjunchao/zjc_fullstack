//user 类型 Object name age
const getUserInfo =function(user){
    //里面有name age
    console.log(Object.keys(user).includes("name"))
    if(!user ||typeof user !='object' ||!Object.keys(user).includes("name")||!Object.keys(user).includes("age"))
        throw new Error('参数错误')
    return `name: ${user.name},age:${user.age}`
}
console.log(getUserInfo({name:'koala',age:18}));
//有什么问题？
//console.log(getUserInfo({name:'koala'}));
//限制下这种随意性