# 字节h5面试题之Drag and Drop

1. 基础好，细节，能力增长梯度
2. 比较好的特效

## github 拖拽上传功能
1. 给要拖拽的元素，加dragable属性 cursor :move
2. 拖拽元素在上空的感觉
3. drag 有3个事件，
    JS在前端是基于事件的语言，Event机制 （小红书495页）
    - dragstart
    - drag
    - dragend

    drop 异步
    - dragenter 进入 border
    dashed classList.add
    -  dragover 多次
    - leave 离开 classList.remove

    drap +drop 良好的用户体验模拟的API比较复杂
    draggable =true 属性
    dragstart drag dragend
    dragenter dragover dragleave +drop
    阻值默认行为 event.preventDefault();
    oForm sunmit

    
