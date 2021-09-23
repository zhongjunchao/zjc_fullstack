let target = {
    _bar: 'foo',
    _prop: 'bar',
    prop: 'baz'
  };
  
  let handler = {
    ownKeys (target) {
      return Reflect.ownKeys(target).filter(key => key[0] !== '_');
    }
  };
  
  let proxy = new Proxy(target, handler);
  for (let key of Object.keys(proxy)) {
    console.log(target[key]);
  }
  // "baz"
