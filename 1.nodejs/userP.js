var person = require('./person');
console.log(person.name);

// console.log(global);


console.time("共花费了");
console.log('执行我花费了一点时间');
console.log('又花费了一点时间');
console.timeEnd("共花费了");
