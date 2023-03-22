var fs=require('fs');

fs.rename('file1.txt','myfile1.txt',function(err){
	if (err) throw err;
		console.log("Renamed!");
});