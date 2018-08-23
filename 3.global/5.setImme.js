// 通过运行查看 （fs）异步I/O、 setTimeout、 setImmediate 的优先级
var fs = require('fs');
fs.readFile('1.txt',function (err,data) {
    console.log(data.toString());
});

setTimeout(function(){
    console.log('a扫地 setTimeout');
},0);

/*process.nextTick(function(){
   console.log('a');
    process.nextTick(function(){
        console.log('b');
    });
});*/

setImmediate(function(){
    console.log('a');
    setImmediate(function(){
        console.log('b');
    });
});