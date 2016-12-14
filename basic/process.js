//process.stdin.resume();
process.stdin.on('data',function(chunk){
	process.stdout.write(' process recevice data: '+chunk);
	console.log(chunk);
	console.log('isBuffer:',Buffer.isBuffer(chunk));
	if(chunk.toString().trim()=='exit'){
		process.exit(0);
	}
});
console.log('......');
process.argv.forEach(function(val,index,array){
	console.log(index,":",val);
});
console.log(process.memoryUsage());
process.nextTick(function(){
	console.log('nexttick ......');
});
console.log('before......');

console.log('current dir:',process.cwd());
process.chdir('../');
console.log('prev dir: ',process.cwd());
console.log('current time:',process.uptime());
var fs = require('fs');
process.chdir('basic');
var time = process.hrtime();
var data = fs.readFileSync('./foo.js');
var diff = process.hrtime(time);
console.log('read file consume %d nanos ',diff[0]*1e9 + diff[1]);
process.on('exit',function(){
	console.log('[event:process exit]  process exit....');
});
process.on('uncaughtException',function(err){
	console.log('catch an exception :',err);
});
nodefineFunc();

process.on('SIGINT',function(){
	console.log('receive SIGINT event....');
});


//console.log('pid:',process.getgid());