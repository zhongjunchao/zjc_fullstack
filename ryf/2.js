/**
 * @author zjc
 * @param {any} o 
 * @param {string} type 
 * @returns boolean
 */
const isTypeof =(o,type)=>{
    if (['number','boolean','function','string'].indexOf(type)>0){
        return typeof o ===type
    }
    return Object.prototype.toString.call(o).toLowerCase().indexOf(type)>0;
    // if (typeof o===type)
    //     return typeof o ===type;
    // else{
    //     console.log(Object.prototype.toString.call(o));
}      

//let a=[1,2,3];
//let a =()=>{}
//let a="hello"
//let a;
let a=null;
//null 和array是有问题的
//let a=[1,2,3];
console.log(isTypeof(a,'null'))