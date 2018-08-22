var http = require('http');
var fs=require('fs');
var mime = require('mime');

/**
 *
 * @param request 请求
 * @param response 响应
 */
function serve(request,response){
    var url = request.url;
    if(url == '/'){
        //-> 设置响应的类型，编码格式为utf-8
        response.setHeader('Content-Type','text/html;charset=utf-8');
        // 读取文件的内容并且将读取的内容写入响应体
        fs.readFile('index.html',function(err,data){
            response.write(data); //-> 写响应头
            response.end();//-> 关闭响应
        });
    }else{
        static(url,response);
    }

    function static(url,response){
        //-> 设置响应的类型，编码格式为utf-8
        response.setHeader('Content-Type',mime.getType(url)+';charset=utf-8');
        // 读取文件的内容并且将读取的内容写入响应体
        fs.readFile(url.slice(1),function(err,data){
            response.write(data); //-> 写响应头
            response.end();//-> 关闭响应
        });
    }
}
//每当有请求的时候调用serve函数对客户端进行响应
var server = http.createServer(serve);
server.listen(3000,'localhost');
