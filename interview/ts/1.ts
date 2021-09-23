type FunctionProps={
    a:number
    onSomething:()=>void;
    //input num 
    onChange:(id:number)=>void;
    onClick(event:React.MouseEvent<HTMLButtonElement>)
}
//
type Dog<T>={name:string,type:T}
const dog:Dog<number>={name:'wewe',type:21}
React 