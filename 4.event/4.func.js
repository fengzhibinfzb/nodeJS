//函数柯里化Currying
function say(name,word){
    console.log(name,":",word);
}
//var newSay = say.bind(this,'张三');
function newSay(){
    say.apply(null,['张三'].concat(Array.prototype.slice.call(arguments)));
}
newSay('上学');
newSay('上课');
newSay('休息');