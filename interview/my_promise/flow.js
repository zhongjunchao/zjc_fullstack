// const _ = require('lodash');
// 1. 普通函数  ()
// 2. 自身的递归   subFlow 不平坦 
// 3. 不平坦 flattern
const createFlow = (effects = []) => {
    // console.log(effects, '-----');
    // console.log(_.flatten(effects), '++++++++');
    // 不要影响外面 
    let sources = effects.slice().flat(); // 闭包 
  
    // for (let item of sources) {
      // 如果是普通函数请执行， 
      // 如果是delay 等待 then 请行 
      // 如果是自身的话 递归调用, 出口
      // - flow 
      // - 每一个item 都去
      // - 普通函数的话 
      // console.log(item, '------');
    // }
  
    const run = (callback) => {
      // 有东西， 
      while(sources.length) {
        // source 为空就解决了
        const task = sources.shift();
        const next = () => createFlow(sources).run(callback);
        if (typeof task === 'function') {
          const res = task();
          if (res?.then) {
            // then 得到？ 
            res.then(next)
            return;
          }
        // 本身的递归
        } else if (task?.isFlow) {
          // 又是一个flow 
          // ? 递归 
          // createFlow 
          task.run(next);
          return;
        }
      }
  
      callback();
    }
    return {
      run,
      isFlow:true // 手动加 
    }
  }
  
module.exports = createFlow;