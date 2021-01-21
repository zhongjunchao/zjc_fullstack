#  性能优化
 
- DOM 是最贵的性能开学，没有之一


<script>
  for (var count = 0; count < 10000; count++) {
    //   查找10000次 dom 性能开销大  把他提出去 
    document
      .getElementById('container')
      .innerHTML += '<span>我是一个小测试</span>';
  }
</script>

 1. chrome   tab进程 都有内存的最高值
 2. 内存消耗在哪？
    不在for循环
    在 doucument 性能开销

1. 下载html css  浏览器渲染页面的第一步
    - html DOM 树  树的查询
    - css 解析执行  基于 dom 树 生成 CSS 渲染树  selector 属性构成
    - js 及其耗性能
     1. js 只有Java  的1/5 速度
        C/C++/Java 内存操作
        js应用于前端  未来 go也可以做
     2.  js  处于DOM树 和CSS 渲染树之间  
        js 
- 优化一
<script>
    // let oContainer = document.getElementById('container')
    // for (var count = 0; count < 10000; count++) {
    //     oContainer
    //         .innerHTML += '<span>我是一个小测试</span>';
    // }
</script>
- 优化二
<script>
    let oContainer = document.getElementById('container')
    for (var count = 0; count < 10000; count++) {
        oContainer
            .innerHTML += '<span>我是一个小测试</span>';
    }
</script>