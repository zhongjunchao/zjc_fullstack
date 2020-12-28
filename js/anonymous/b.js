class Book {
    constructor(isbn,title,author){
        this.isbn=isbn;
        this.title=title;
        this.author=author;
    }
    display(){
        return `
            ISBN号：${this.isbn}
            Title:${this.title}
            Author:${this.author}
        `
    }
}
//let jsDontKnow = new Book('1111','aa','bb');
// const attrs=[...Object.getOwnPropertyNames(jsDontKnow),...Object.getOwnPropertyNames(Book.prototype)];
// console.log(attrs);
// 返回所有对象上可以调用的方法或属性 attrs
let jsDontKonw = new Book('1111','aa','bb');
const attrs = [...Object.getOwnPropertyNames (jsDontKonw),
    ...Object.getOwnPropertyNames (Book.prototype),
    ...Object.getOwnPropertyNames (Book),
    ...Object.getOwnPropertyNames (jsDontKonw.__proto__) ,
    ...Object.getOwnPropertyNames (jsDontKonw.__proto__.__proto__)] ;
console.log(attrs);
