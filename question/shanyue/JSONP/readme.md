1. HTTP 协议
    TCP/IP HTTP是上层
    Web Server RestFul 

    JSON 资源，喜欢的老师，HTTP 提供下服务？ R请求 Q服务
    url http://127.0.0.1/players.json
    动作 GET 
    live-server 静态资源
    json—server

    url ->资源 resources
    跨域 域名不一样 协议不一样 http->https 3000->8080
    json-server 自带跨域能力
    js 是不允许跨域的，不支持解决方案是JSONP JSON with padding

    我们用了DOM编程,document.createElement("script") 
    script.scr="https://www.runoob.com/try/ajax/jsonp.php?jsoncallback=callbackFunction"
    document.body.appendChild(script);

- 文章 
    用前端实现底层
    1. fetch Promise thenable 去服务器端通信
    2. DOM API
        tree
        document.createElement()
        父节点.appendchild(子节点)
        document.createTextNode()

    HTTP 底层协议
        请求响应 url+method
        数据格式是 JSON

    跨域 为了安全 域名端口
    json-server 本地 自己自带解决方案
    JSONP fn(data) 在页面端预留一个函数fn
    
    response 来到客户端
    script 返回来 fn（data）

    代码有一定的功能区分时，请写函数createUserElment =()=>{
        const user =createElment;
        return user;
    }

    es6 for of

