const coinChange = function(coins, amount) {
    // 用于保存每个目标总额对应的最小硬币个数
    const f = []
    f[0] = 0
    for (let i = 1; i <= amount; i++) {
      f[i] = Infinity;
      // 上一次的金额+ 1比较
      // 遍历每个可用硬币的面额
      for(let j = 0; j < coins.length; j++) {
  
        if (i - coins[j] >= 0) { // 可以成这个金额
          f[i] = Math.min(f[i], f[i-coins[j]] + 1)
        }
      }
    }
    if (f[amount] === Infinity) {
      return -1
    }
    return f[amount];
  }
  console.log(coinChange([1,2,5], 11))