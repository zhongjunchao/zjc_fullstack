const fs =require('fs');

fs.readFile('./car911.png',function (err,data) {
    //console.log(err);
    if (err) {
        throw new Error(err)
        return;
    }
    console.log(data);
})