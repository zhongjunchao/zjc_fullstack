// 使用 has 方法隐藏某些属性，不被 in 运算符发现
var handler = {
    has (target, key) {
      if (key[0] === '_') {
        return false;
      }
      return key in target;
    }
  };
  var target = { _prop: 'foo', prop: 'foo' };
  var proxy = new Proxy(target, handler);
  console.log('_prop' in proxy); // false
  