class Cat<T>{
    private type:T;
    constructor(type:T){
        this.type=type
    }

}
const cat:Cat<number>= new Cat<number>(20);