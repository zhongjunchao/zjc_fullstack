//console.log('leetcode,必考之two Sum')
//手写代码 js
/**
 * @author zjc
 * @data 20-11-20
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 */
// 键头函数
const twoSum =(nums,target)=> {
    // console.log('两数相加')
    let map ={};// JSON Object
    let res= [];
    // 编写功能 一个函数完成一个功能
    // es6更简洁
    // callback
    // for + 执行功能 
    nums.forEach((e,i)=>map[e]=i ); //O(n) 以空间换时间
    //console.log(map)
    for (let i=0;i<nums.length;i++) {
        let j=map[target-nums[i]]; //undefined
        if ( j&&j!==i){
            res =[i,j];
            break;
        }
    }  
    return res;
}

console.log(twoSum([2,7,11,15],9) );