// node 
// 自定义事件 
const tecenttime = require('./tecenttime')
// 事件是如何实现的？  订阅， 发布者模式
tecenttime.on('newlesson', ({price}) => {
  if(price < 80) {
    console.log('ok, buy it');
  }
})