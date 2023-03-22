var http=require('http');
var fs=require('fs');
var url=require('url');

http.createServer(function(req,res){
    var file=url.parse(req.url,true);
    fs.readFile(file,function(err,data){
        if (err) throw err;
        res.write(data);
        res.end();
    });
}).listen(8080);