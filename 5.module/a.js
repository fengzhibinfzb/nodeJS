exports.loaded = function () {
    console.log(module.loaded);
};
console.log('A加载完成');
exports.name='binli';

console.log(module.parent);
