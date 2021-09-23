const createFlow=require('./flow')
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// 一大波正在逼近
const subFlow = createFlow([
  () => delay(1000).then(() => console.log('c'))
])
// 参数为数组
createFlow([
  () => console.log("a"),
  () => console.log("b"),
  subFlow, // 递归不是算法， 编程技巧 大问题分小问题的思路
  [
    ()=>delay(1000).then(() => console.log("d")),
    () => console.log("e")
  ]
]).run(() => {
  console.log("done");
})
// 如果函数返回值是Promise 实例， 
// 那么就是thenable 
delay(1000)
  //callback 
  .then(() => {
    console.log();
  }) 
  // .then()