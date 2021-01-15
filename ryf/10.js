function Animal() {
    
}

Animal.prototype.species='动物'

function Cat(name,color){
    this.name=name;
    this.color=color;
}

var F =function(){}
    F.prototype=Animal.prototype;

Cat.prototype=Animal.prototype;
Cat.prototype=new F();//没有2的效率问题，没有3的修改父类问题
Cat.prototype.constructor =Cat;
