/**
 * 事件
 * 订阅发布
 *
 */

function Person(name){
    this.name=name;
    this._events ={}
}
//注册监听
Person.prototype.on=function(eventName,callback){
    if(this._events[eventName]){
        this._events[eventName].push(callback);
    }else{
        this._events[eventName] = [callback];
    }
};
//发射事件
Person.prototype.emit = function (eventName) {
    var args = Array.prototype.slice.call(arguments,1);
    var callbacks = this._events[eventName];
    var self = this;
    callbacks.forEach(function (callback) {
        callback.apply(self,args);
    });
};
var girl = new Person();
girl.on('hello',function () {
   console.log('您好');
});
girl.on('hello',function () {
   console.log('中国');
});
girl.emit('hello');




