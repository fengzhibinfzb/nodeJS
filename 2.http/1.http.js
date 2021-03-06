var http = require('http');
var fs=require('fs');

/**
 *
 * @param request 请求
 * @param response 响应
 */
function serve(request,response){
    console.log(request.method,request.url);

    //console.log(request.method); //-> 请求的方法
    //console.log(request.url); //-> 请求的url 地址
    //console.log(request.headers);//-> 获取请求头


    response.statusCode = 200; //-> 设置状态码
    response.setHeader('nane','binli'); //-> 设置响应头
    // 读取文件的内容并且将读取的内容写入响应体
    fs.readFile('index.html',function(err,data){
        response.write(data); //-> 写响应头
        response.end();//-> 关闭响应
    });
    response.setHeader('Content-Type','text/html;charset=utf-8');//-> 设置响应的类型，编码格式为utf-8
    /*response.write(new Date().toString()); //-> 写响应头
    response.end();//-> 关闭响应*/
}
//每当有请求的时候调用serve函数对客户端进行响应
var server = http.createServer(serve);
server.listen(3000,'localhost');
