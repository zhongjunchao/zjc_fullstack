function getConstant() {
    return 1
  }
  
  async function getAsyncConstant() {
    return 1
  }
  
  async function getPromise() {
    return new Promise((resolved, rejected) => {
      resolved(1)
    })
  }
  
  async function test() {
    let a = 2
    let c = 1
    await getConstant()
    let d = 3
    await getPromise ()
    let e = 4
    await getAsyncConstant()
    return 2
  }