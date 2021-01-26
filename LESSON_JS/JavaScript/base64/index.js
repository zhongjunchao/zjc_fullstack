const webp = require('webp-converter');

webp.cwebp("4a42713ce5.jpg","output.webp","-q 80",function(status,error){
    console.log(status)
})