require("http").createServer((req,res)=>{
	const request=require("request");
	request("http://worldtimeapi.org/api/timezone/America/New_York",(err,inres,body)=>{
		res.end(`Hello from my first Node Web server:${body}`);
	});
}).listen(3000);

