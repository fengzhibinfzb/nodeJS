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


function eat(times,callback) {
    console.log(times,callback)
    var arr =[];
    return function(data){
        arr.push(data);
        if(--times===0){
            callback(arr)
        }
    }
}
var newEat = eat(5,function(arr){
    console.log(arr);
});
newEat('吃完了');