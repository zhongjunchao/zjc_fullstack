// console.log('AI 来了 帅')
// require 是 node 引入模块的关键字
const ApiImageClassifyClient= require('baidu-aip-sdk').imageClassify; //图像识别
// 内置模块 fileSystem
const fs =require('fs');
//1.读入文件 I/O 从硬盘里读入内存中，
const APP_ID="23077968";
const API_KEY="9VxvCGvpSnAiGdhcRIcs8DGZ";
const SECRET_KEY="88Bs54kKn7wUFxqXzw8abrDzZSmzUQGR";

const client =new ApiImageClassifyClient(APP_ID,API_KEY,SECRET_KEY)
//const fs = require('fs');
const image =fs.readFileSync("car911.png").toString("base64");

client
    .carDetect(image)
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err)
    })