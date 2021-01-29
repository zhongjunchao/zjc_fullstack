// 配置一下   src/index.js  -> dist/main.js  让项目运行
const path = require('path');
console.log(__dirname);  // 当前项目的绝对路径
// path.resolve  返回一个路径
console.log( path.resolve(__dirname,'dist'));
module.exports = {
    entry:'./src/index.js', // 入口
    output:{   // 出口
        filename:'main.js',
        path: path.resolve(__dirname,'dist')
    },
    /**一个个模块打理  js  babel  await 
     * styl -> css 
     *  */ 
    module: {
        rules: [
            {
                test:/\.jsx?$/,
                use:{   /** 使用什么来处理这个模块  */
                    loader:'babel-loader',
                    options: {
                        /** babel loader 的配置 预处理
                         * let var js es6->es5  让大部分能运行
                         */
                        presets:['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            // {
            //     test:/\.styl$/,
            //     use:{
            //         loader:'stylus-loader'
            //     }
            // }

        ]
    }

}