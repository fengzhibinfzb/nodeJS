var fs = require('fs');
var Person={};
var count =0;
fs.readFile('name.txt','utf-8',function (err,data) {
    Person.name = data;
    if(++count==2){
        out();
    }
});
fs.readFile('age.txt','utf-8',function (err,data) {
    Person.age = data;
    if(++count==2){
        out();
    }

});
function out() {
    console.log(Person.name,Person.age);
}