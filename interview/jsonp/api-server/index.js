var http = require('http');
http.createServer(function(req, res){
// req url  callback=?
console.log(req.url);
let data = {a: 1};
res.writeHead(200, {'Content-type' : 'text/json'})
  const reg = /callback=([\w]+)/
  if (reg.test(req.url)) {
    let padding = RegExp.$1
    res.end(`${padding}(${JSON.stringify(data)})`)
  } else {
    res.end(JSON.stringify(data));
  }

 
//  res.end('<p>Hello World</p>');
 res.end(JSON.stringify(data));
}).listen(3000);