# react 小书

- 简单应用 一个功能  不是完整的应用   不需要route

- 多个页面使用   需要route 以及对参数验证


- 如何把组件组织起来？
    1. CommentApp 根组件 index.js render
    2. 子组件  Comment
    3. 数据放在父组件中，通过prop传递，让不同的子组件能够使用

        comments 放在CommentApp 的主要原因是  CommentInput 要把它push到（CommentList）
        
    4. 每个组件有专属的CSS  方便CSS 的管理

    5. 子组件要通知父组件 
      父组件将函数通过 props 方式传给 子组件， 告知子组件通过这个方法来通知父组件 进行收尾工作