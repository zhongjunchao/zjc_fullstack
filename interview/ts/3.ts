class Stack<T>{
    private arr:T[]=[];
    public push(item:T){
        this.arr.pop()
    }
    public pop(){
        this.arr.pop()
    }
}

const stack =new Stack<string>();
stack.push("a")
stack.push(1)