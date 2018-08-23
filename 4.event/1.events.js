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
    var args = Array.prototype.slice(arguments,1);
};



