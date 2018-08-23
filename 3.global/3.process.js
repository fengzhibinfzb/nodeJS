// cwd current working directory 当前工作目录
console.log(process.cwd());
console.log(__dirname);
//change directory 改变当前工作目录
process.chdir('..');
process.chdir('3.global');
console.log(process.cwd());
console.log(__dirname);
