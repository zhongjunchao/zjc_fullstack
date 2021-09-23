function getConstant() {
    return 1
  }
  
  function getAsyncConstant() {
    return Promise.resolve().then(() => {
      return 1
    })
  }
  
  function getPromise() {
    return Promise.resolve().then(() => {
      return new Promise((resolved, rejected) => {
        resolved(1)
      })
    })
  }
  
  function test() {
    return Promise.resolve()
    .then(() => {
      let a = 2
      let c = 1
      return getConstant()
    }).then(() => {
      let d = 3
      return getPromise()
    }).then(() => {
      let e = 4
      return getAsyncConstant()
    }).then(() => {
      return 2
    })
  }