//constructor构造函数


function Book(isbn,name,author){
    this.isbn = isbn;
    this.name = name;
    this.author = author;
}

let theHabbit = new Book("0-395-07122-4","The Habbit","J.R.R. Tolkien");
console.log(theHabbit.isbn);