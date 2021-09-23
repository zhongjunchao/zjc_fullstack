let EventEmitter=require('events');
let  context =require('./context');
let request =require('./request');
let response=require('./response');



class Koa extends EventEmitter{
    constructor(){
        super()
        this.fn
    }
    use(fn){
        this.fn=fn0
    }
    createContext(){
        const ctx=Object.create.context
    }

    listen(...args){
        let server=https.createServer(this.fn)
        server.listen(...args)
    }
}

module.exports=Koa