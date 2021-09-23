# 跨域
  - 后端的跨域解决方案
  - JSONP json with padding
  https://photo.sina.cn/aj/index?page=1&cate=recommend
  同源机制 为了安全  端口、协议、域名不同就会跨域 会让一个域的js无法和另一个域的内容进行交互

  1. 通过script src跨域向sina发出了请求http
  规避了js代码xhr fetch 同源机制

  2. &callback=callback
  sina在页面上有一个callback的函数，等待你的调用
  3. callback({}) JSON + padding

  - xhr/fetch 因运行在沙箱中的js同源机制 无法请求跨域的sina 资源
  迂回到使用script标签 有跨域访问资源的能力，http请求中
  带上&callback=callback 这个padding，sina服务器就在json数据外面包一层callback函数，将这个带有padding的，可以在script得到后
  运行的函数，页面上已经准备好了这个函数，从而效果一样