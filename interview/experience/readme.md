1. JS的基础数据类型：string,number,boolean,symbol,object,undefined,function
2. cookie哪个字段可以防止恶意xss攻击
    利用 HttpOnly
    很多 XSS 攻击脚本都是用来窃取Cookie, 而设置 Cookie 的 HttpOnly 属性后，JavaScript 便无法读取 Cookie 的值。这样也能很好的防范 XSS 攻击。
3. http协议是长协议还是短协议

- web存储，都会答localStorage、sessionStorage、还有就是cookie
localstorage  sectionstorage   
cookie 具体属性 samesite http://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html domain HttpOnly 
浏览器缓存 强缓存和协商缓存
http https
xss csrf

- CSS伪元素，伪类
样式的层级顺序   CSS优先级顺序：!important > 行内样式>ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认样式
block块级元素
css3的两个动画属性 transition 当一个元素和属性发生改变时，可以设置一个过度属性 
                  animation 适合比较复杂的关键效果
- IE盒子模型
flex布局，三属性 
flex-direction
flex-wrap 
flex-flow
justify-content 
align-items 
align-content

- 页面适配
使用css的媒体查询 @media
使用 rem 单位

清除浮动


- JS
ES6 新方法 let var  const 
数组ES6新方法
箭头函数
async await    promise    A+规范
原型链
new call apply bind
闭包 例子防抖+节流

- html5 新增特性 https://www.cnblogs.com/sarah-wen/p/10767178.html