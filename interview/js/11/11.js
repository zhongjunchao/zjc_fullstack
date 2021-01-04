const arr=[3,4,5];
//给出在数组尾部/头部加、删除元素的方法
arr.push(6);//面向对象的
console.log(arr.pop());
console.log(arr);
arr.unshift(1);
arr.shift(1);
// 把数组打印出来有多少总方法
for (let num in arr){
    console.log(num,1);
}
arr.forEach(item =>{
    console.log(item,2);
})
console.log(arr.join(" "),3)
console.log(arr.splice(0,arr.length),4);
console.log(arr.map(item=>item),5); 
//console.log(arr);