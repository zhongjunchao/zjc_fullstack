# TwoSum leetcode 腾讯必考题

1.node 有安装好吗？
    - node.exe programfiles/
    - node 全局可访问
    gt
- node 是让js 运行在服务器端的环境，
    开发速度更快，没有Java那么稳定 1.5倍
    Server Linux pwd 当前在哪里
    node 1.js

- 读题
    给定一个整数数组 nums ,target 参数
    返回下标
    const nums = [2,7,11,15]

- 前期leetcode 先暴力再调优 easy
    1. 时间复杂度
        O(n2)
    2. 空间复杂度

- 提供一个算法
    O(n2) -> O(n)
    找一种适合的数据结构 
    Array 是一个数据集合 也是最基本的数据结构 数字索引，空间是连续的
    JSON Object对象字面量 也是一个数据集合 在c里是没有原生的，HashMap
    O（n2) ->O(n)+空间多花