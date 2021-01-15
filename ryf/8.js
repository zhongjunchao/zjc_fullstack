//prototype 模式
function Animal() {
    this.species ="动物";
}

function Cat(name,color){
    this.name=name;
    this.color=color;
}


// cat1-> Cat ->new Animal(){species: }
// 一心只想species
Cat.prototype =new Animal(); //副作用
Cat.prototype.constructor= Cat;
var cat1 =new Cat("大毛","黄色");
console.log(cat1.species);
console.log(cat1.prototype.constructor);