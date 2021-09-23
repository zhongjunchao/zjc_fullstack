- 组件的产出是什么? VNode ->VTree ->patch ->diff 源码
# 组件的本质

1. 模板引擎 历史
    字符串+数据=html DOM 没有离开
    一个组件就是一个函数，给我什么样的数据，我就渲染对应的 html 内容
    组件的产出就是 Virtual DOM
2. VNode