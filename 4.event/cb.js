
function Person(){
    this.name = 'binli';
    return {name:'bin'};
}

/**
 * 1. 创建空对象
 * 2. 把空对象作为this 传入Person
 * 3. 返回这个对象
 *
 */
var p = new Person;
console.log(p.name);

var P2 = Person.bind({}); // f.bind(obj)，实际上可以理解为obj.f()，这时，f函数体内的this自然指向的是obj
var p2 = new P2;
console.log(p2);
