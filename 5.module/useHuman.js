
var Person = require('./Human');
var girl = new Person("张三",15);
var boy = new Person('李四',10);

console.log(girl.getName(),girl.getAge());
console.log(boy.getName(),boy.getAge());

girl.setName('王五');
girl.setAge(20);

console.log(girl.getName(),girl.getAge());
console.log(boy.getName(),boy.getAge());

console.log(girl.home,boy.home);
//console.log(girl.hasOwnProperty('home')); //-> false  //私有属性，只能在对象构造函数内部使用
//girl.home='上海';
//console.log(girl.hasOwnProperty('home')); //-> true //公有属性,在对象实例化后调用
Person.prototype.home='上海';

console.log(girl.home,boy.home);
console.log(Person.staticName); //静态变量
