//var obj = {};
// 属性描述符
// Object.defineProperty(obj, "num", {
//     value : 1,
//     writable : true,
//     enumerable : true,
//     configurable : true
// });
//  对象 obj 拥有属性 num，值为 1
// console.log(obj.num);
// obj.num =2;
// console.log(obj.num);

// 存取描述符
var value = 1;
var obj = {};
Object.defineProperty(obj, "num", {
    get : function(){
      return value;
    },
    set : function(newValue){
      value = newValue;
    },
    enumerable : true,
    configurable : true
});
console.log(obj.num)
obj.num=2
console.log(obj.num)
