// 阮一峰面向对象第二篇
function Animal() {
    this.species ="动物";
    // this.Cat();
}
// Animal ->Function
//函数是一等对象 Object()
// 拿到函数原型链上的方法靠它
//console.log(Animal.__proto__.__proto__);

function Cat(name,color){
    console.log(arguments);
    Animal.apply(this,arguments);
    Animal.call(this,name,color);
    this.name=name;
    this.color=color;
}

// 猫应该是Animal 的子类，继承

var cat1 =new Cat("大毛","黄色");
console.log(cat1.species);