# cookie

cookie 

1. Cookie 是服务器种在客户端的存储的数据
  每次再发送请求的时候都会带上。 
  Cookie 比较小  4Kb   uid = 12121212
  登录状态 
2. 
  node  设置cookie 
  有哪些选项
  domain
  path 
  expires 删除cookie

3. 牙羽
  cookie 安全问题
  cookie 由服务器端种下， 写在用户端
  是一段比较小的文本
  每次都要传给服务器
  传送的过程是不安全  http
  有些攻击， 可以得到用户的cookie 
  得到cookie 就可以伪装成用户去下单

  httpOnly:false 为了前端也能操作cookie 不自量力 ， XSS 攻击 
  document.cookie  js 
  httOnly: true  默认是true 
  这样安全， 
  前端什么都能做， 连node + go 写 
  前端也操作cookie , 有些cookie 没有那么重要
  比如一些用户选项设置， 夜间模式(低安全怀), uid（高安全性）

  Cookie 与 locastorage 
  相同 都是文本 
  都是用来做存储的， 区别 
  cookies 4KB  用户状态， 最基本用户配置
  localStorage 5MB  lokijs 数据库 多存一些
  用户的地址（家， 公司的） 用户看了哪些内容 

  Cookie 的性能不好 
  浪费的地方 每次http请求都会带上它， 开销
  http是一种无状态的网格协议， Cookie 登录
  http 是无状态的协议 一个请求一个返回 
  Cookie 是http的状态的一种弥补
  localStorage 只存在于客户端 性能好