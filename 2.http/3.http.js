var http = require('http');
var fs=require('fs');
var mime = require('mime');
var url = require('url'); //对URL进行处理，把字符串转成对象

/**
 *
 * @param request 请求
 * @param response 响应
 */
function serve(request,response){
    //true 表示query转成对象
    var urlObj = url.parse(request.url,true);
    console.log(urlObj.query.name);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        //-> 设置响应的类型，编码格式为utf-8
        response.setHeader('Content-Type','text/html;charset=utf-8');
        // 读取文件的内容并且将读取的内容写入响应体
        fs.readFile('index.html',function(err,data){
            response.write(data); //-> 写响应头
            response.end();//-> 关闭响应
        });
    }else if(pathname =='/clock'){ //通过cmd命令窗口，输入curl http://localhost:3000/clock 即可开启
        var counter = 0;
        var init = setInterval(function(){
            response.write(new Date().toString());
            counter++;
            if(counter==5){
                clearInterval(init);
                response.end();
            }
        },1000);
    }else{
        static(pathname,response);
    }

    function static(pathname,response){
        //-> 设置响应的类型，编码格式为utf-8
        response.setHeader('Content-Type',mime.getType(pathname)+';charset=utf-8');
        // 读取文件的内容并且将读取的内容写入响应体
        fs.readFile(pathname.slice(1),function(err,data){
            response.write(data); //-> 写响应头
            response.end();//-> 关闭响应
        });
    }
}
//每当有请求的时候调用serve函数对客户端进行响应
var server = http.createServer(serve);
server.listen(3000,'localhost');
