var a = 1;
function test(){
    a = 2;
    return function(){
        console.log(a);
    }
    var a = 3
    console.log(a)
}
test()();
