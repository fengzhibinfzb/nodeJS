var EventEmitter = require('events');
var eve = new EventEmitter();

var fs = require('fs');

var Person={};
var count =0;
eve.on('data',out);
fs.readFile('name.txt','utf-8',function (err,data) {
    Person.name = data;
    eve.emit('data');
});
fs.readFile('age.txt','utf-8',function (err,data) {
    Person.age = data;
    eve.emit('data');
});
function out() {
    if(Person.name && Person.age){
        console.log(Person.name,Person.age);
    }
}