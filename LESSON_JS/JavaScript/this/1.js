//  'use strict';//启用严格模式
var obj ={ //json object
    bar =1,
    foo:function(){ //obj属性
        console.log(this.bar);
    }
}

var foo=obj.foo;
var bar=2;
obj.foo();
foo();