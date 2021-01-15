# grid 布局

- 在哪里， 大家看过这种布局方式
- 考题中， 有多少让元素在屏幕居中的方法？
  - flex body d:f  justify-content:center  align-items: center;   一代
  - grid  二代 二维的时候   justify-content ：center
  - 定位
  - margin 负值
  - ...... 
- grid-template-rows|columns
  布局可以直接对二维名声面， 
-  9个元素， 请大家给一个方案， 每个格子背景颜色不一样？ 
  - js 是王者， ele.style  夏原骏
  - css方案 .box:nth-child
    ? 每一个都不一样
    .box:nth-child(1|odd|event) :last-child
  - 别的方案？ 9个格子， 更多格子？ 选择器写的有没有一点累？

- 弹性布局在解决现代移动端甚至未来物联网，不好解决或者解决麻烦
  九宫格 多加每一行的父元素
  grid 的二维布局方案来了。 

- 在垂直方向做主元素分配高度
    display:gird +grid-template-rows: 1fr auto;

- firstChild lastChild
    childNodes 换行符会做为空的文本节点来