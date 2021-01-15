function Animal() {
}
Animal.prototype.species = '动物'

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

function extend(Child, Parent) {
  var F = function() {}; // 空函数对象， 内存开销不大
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.Constructor = Child;
  Child.uber = Parent.prototype;
}

extend(Cat, Animal);
