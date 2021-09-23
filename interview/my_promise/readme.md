// promise 题目
const delay =(ms)=>new promise((resolve)=>setTimeout(resolve,msg));

1. 递归的高级套路
    数组的length +shift 操作
    run 只需要调用这一个API就可以
    区分 flow 跟普通函数的区别 delay 标志isFlow:true
    slice .
    flat .