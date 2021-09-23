const getJson =()=>{
    return"JSON"
}

// 函数前面加aysnc只是声明这个函数内部存在异步
async function testAsync (){
    // 异步函数前面加await，逻辑就会等到这个异步函数执行完毕后，再往下执行
    await getJson()
}