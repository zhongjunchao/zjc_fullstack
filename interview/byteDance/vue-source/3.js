const {h}=require('snabbdom');
// 返回VNode比html字符串模板有什么好处?
// 内存，对象，ssr服务器端渲染 
const MyComponent=props=>{
    return h('h1',props.title,[
        h('span',{style:{fontWeight:'bold'}},'This is bold')
    ])
}
console.log(MyComponent({title:'hello'}));