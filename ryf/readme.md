- 阮一峰

    1. JS变量的数据类型由值决定
      常量的话，es6以前没有常量 var
      - 类型不可改变
      - 简单类型的值不可变，复杂数据类型的值是可以改变的
      - 数值型 字符串 布尔值 undefined null symbol 对象 7种类型
        对象（数组，函数）

    2. typeof [1,2,3] 
      区分简单数据类型和复杂数据类型
      复杂数据类型中 function
      typeof 可以正确（细致）得到数据类型的
      number string Boolean null undefined symbol object(array,function)

    3. Object.prototype.toString.call() 核心
      Object 是所有对象的原型对象
      prototype 是什么 
      call 借