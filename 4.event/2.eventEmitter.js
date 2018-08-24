var EventEmitter = require('events');

/**
 *
 */
var util = require('util');
function Bell(name){
    this.name = name;
}
util.inherits(Bell,EventEmitter);

var jingleBell = new Bell('jingle');
jingleBell.on('ring',function(){
   console.log('收到礼物1');
});
jingleBell.addListener('ring',function () {
   console.log('收到礼物2');
});
//removeAllListeners： 移除所有监听
//jingleBell.removeAllListeners('ring');

var drop = function (who) {
    console.log(who,'铃铛丢了');
};
//once 触发一次后，不再触发
jingleBell.once('drop',drop);

jingleBell.emit('ring');
// removeListener ：移除监听
//jingleBell.removeListener('drop',drop);
jingleBell.emit('drop','鹿');
jingleBell.emit('drop','老人');

console.log(jingleBell.listeners('ring'));








