// 输出什么 aysnc 原理是什么？ 将这段代码翻译成promise
function getJson() {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        console.log(2);
        resolve(2)
      }, 2000)
    })
  }
  
  async function testAsync() {
    await getJson()
    console.log(3);
  }
  
  testAsync()

// 翻译
function testAsync(){
    return Promise.resolve().then(()=>{
        return getJson()
    }).then(()=>{
        console.log(3);
    })
}

testAsync()