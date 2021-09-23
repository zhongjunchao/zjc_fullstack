// 递归需要优化，尾递归
// 重复计算，大量的
// 算过的记忆下来 {K:resuslt}
const f = [];
const climStairs = function(n) {
    if(n== 1) {
        return 1
    }
    if(n == 2) {
        return 2
    }
    if(f[n] === undefined) f[n] = climStairs(n-1) + climStairs(n-2)
    // console.log(f)
    return f[n]
}
console.log(climStairs(99))