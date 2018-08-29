exports.loaded = function () {
    console.log(module.loaded);
};
console.log('B加载完成');

var a = require('./a');
a.loaded();
console.log('a.name',a.name);
