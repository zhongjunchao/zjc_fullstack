// HF high function 高阶函数
// 就相加
// decorators @ 
function add(a, b) {
    return a + b
}
// 两数相加计算功能， 
// 结果打印 
function withLog (fn) {
// 高阶函数 参数或者返回值是函数的话， 这个函数叫高阶函数 
    return (a, b) => {
      const result = fn(a, b); // 吃
      console.log(result)
      return result
    }
}
  
const withLogAdd = withLog(add)
withLogAdd(1, 2)
// console.log(add(1, 2));