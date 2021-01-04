# 把面试题当成高考题
 1. 以题目来检验下当前js之所学 推动之
    黄冈中学 出试卷
 2. 衡水一中
    清北方法论

    打卡 课后做的任何事情
    2. 能力增长点
    JS能力

- null和underfined 的区别是什么？
  Object.prototype.__proto__==null

  Underfined 意义是类型，当一个声明了一个变量初始化时，得到的是underfined
  1. 箭头函数和普通函数不一样
    es5时代的arguments 有用的
    不只是便利，也被干掉了arguments
    ()=>{} function (){} arguments 都可以省 但是es6里提供了... rest 运算符
    function(){}
  2. Object的原型对象
  new Object()
  Object(函数).prototype
  父（原型）对象
  Object(函数).prototype.__proto__
  为什么？到顶了，不该有原型 null-此处没有对象，不该有值

- 选择元素可以通过标签、id、选择器()、类名、子元素(),任何元素都可以有这些方法，不仅限document
