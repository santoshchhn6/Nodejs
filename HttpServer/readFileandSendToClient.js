var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){

	fs.readFile('bill_generation.html',function(err,data){

		res.writeHead(200,{'content_type':'text/html'});
		res.write(data);
		return res.end();

	});
	
}).listen(8080);