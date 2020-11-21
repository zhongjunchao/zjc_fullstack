# 源码分析

## 国际化的命名规范 BEM

1. 取类名
 - .weui-btn
    btn 组件名 70%都是由框架提供的，基础类
    weui 项目前缀 例如tb tm 项目组
2. CSS 知识点
 - 元素分为行内元素和块级元素 inline  block inline-block
 - 元素在页面上的占位，由内容（wh）padding border margin posotion(盒子模型)
3. 面向对象的CSS
 - 一个元素有多个类
    .weui-btn Block 基础类
    .weui-btn_primary Modifier 多态

4. npm i - g live-server
- 安装了一个插件
    node js 的后端
    live-server web 服务器

5. 结构
    结构套路 移动端页面 超越项目
    .page>.page_hd+.page_bd //BEM 搭积木 Block 块，
    Element 子元素 __
    Modifier 装饰 _
