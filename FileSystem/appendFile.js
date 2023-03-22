var fs=require('fs');

fs.appendFile('file1.txt','Hello content!',function(err){
	if(err) throw err;
		console.log('Saved!');
});