(function () { // 匿名函数
    let foo = 10;
    let bar = 2;
    console.log(foo * bar);
  })();

  let res= (function (foo,bar)
  {
      return foo * bar;
  })(20,3)