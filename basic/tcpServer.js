var net = require('net');
var server = net.createServer();
server.maxConnections = 1;
var fs = require('fs');
var file = fs.createWriteStream('./file/socket_recive_data');
server.on('connection',function(socket){
	var address = socket.address();
	console.log('client socket establish ...');
	console.log(address);
	socket.setTimeout(2000);
	socket.setEncoding('utf8');
	server.getConnections(function(err,count){
		console.log('current client connection size:'+count);
	});
	socket.on('data',function(data){
		console.log(data);
		console.log('receive bytes count:'+socket.bytesRead);
	});
	socket.on('end',function(){
		console.log('client connection close....');
	});
	socket.on('timeout',function(){
		console.log('socket timeout....');
		/*end:false  ,{'end':false}*/
		socket.pipe(file);
	});
	
	
});
/*server.close(function(){
	console.log('server close after all connections close...');
});*/
console.log('server maxConnections:'+server.maxConnections);
server.listen(0,'localhost',1,function(){
	var address = server.address();
	console.log('server begin to listen....');
	console.log(address);
});
server.on('error',function(e){
	console.log(e);
});
server.on('close',function(e){
	console.log('server close....');
});

