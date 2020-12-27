function Cat(name,color){
    this.name=name; //this 指向它实例
    this.color=color;
}

var cat1=new Cat("大毛","黄色")
var cat2=new Cat("二毛","黑色")

console.log(cat1.constructor==cat2.constructor);//构造函数
console.log(cat1 instanceof Cat);
console.log(cat2 instanceof Cat);