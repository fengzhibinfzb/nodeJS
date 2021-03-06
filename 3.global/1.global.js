/**
 * global == window 全局对象
 *
 * module 当前模块对象
 * exports 导出对象
 * require 加载模块的方法
 * __dirname 当前模块所在的目录的绝对路径
 * __filename 当前模块的绝对路径
 */

//function x(module,exports,require,__dirname,__filename) {
//     var name = "binli";
//     exports.name = name;
//     console.log(this.name);
//     console.trace();//显示当前的调用当前堆栈信息
//}
//console.log(global);
/**
 * setImmediate clearImmediate
 * pid 4856 进程ID
 * process 当前的进程对象
 */

/**
 * 1. 当前模块内部声明的变量
 * 2. 外部导入的模块
 * 3. 全局对象
 * 4. 从外界传入的参数
 */
//console.log(a);
process.on('uncaughtException',function (e) {
    console.log('uncaughtException',e.message);
});

process.stdout.write('hello');
console.log(process.pid);
process.stdin.on('data',function(data){
    console.log(data.toString());
});
process.argv.forEach(function(val,index,array){
   console.log(val,index.array)
});
process.on('exit',function(){
    console.log('退出前执行')
});
try{
    console.log(a);
}catch(e){
    console.log(e.message);
}
console.log(b)
