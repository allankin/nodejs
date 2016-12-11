var net = require('net');
//var server = net.createServer({allowHalf:true});
var server = net.createServer();
server.maxConnections = 10;
var fs = require('fs');
var file = fs.createWriteStream('./file/socket_recive_data');
server.on('connection',function(socket){
	var address = socket.address();
	console.log('client socket establish ...');
	console.log(address);
	//console.log('socket info:',socket);
	/*socket读取数据超时时间设置，在间隔时间内未接收到客户端发送的数据，则触发timeout事件*/
	socket.setTimeout(2000);
	socket.setKeepAlive(true,2000);
	socket.setEncoding('utf8');
	server.getConnections(function(err,count){
		console.log('current client connection size:'+count);
	});
	socket.on('data',function(data){
		console.log('receive bytes count:'+socket.bytesRead,data);
		var flag = socket.write(data);
		console.log(flag);
		console.log(typeof data);
		console.log('socket bufferSize:',socket.bufferSize);
		if(data == 'BYE!'){
			/*关闭连接前 发送数据*/
			socket.end('server close client socket...');
		}
		console.log('socket send totoal byte count:',socket.bytesWritten);
	});
	socket.on('end',function(){
		console.log('[event:socket.end]client connection close....');
	});
	/*当数据被发送到缓存队列中，
	然后由NodeJS系统再将缓存队列数据发送到TCP缓存区，
	再由OS将TCP缓存区数据发送成功后，会触发drain事件*/
	socket.on('drain',function(){
		console.log('tcp buffer data send....');
	});
	/*
	socket.on('error',(err)=>
		console.log('socket error stack:',err.stack);
	);
	*/
	/* socket error stack: Error: read ECONNRESET */
	socket.on('error',function(err){
		console.log('socket error stack:',err.stack);
		socket.destroy();
	});
	socket.on('timeout',function(){
		console.log('socket timeout....');
		/*end:false  ,{'end':false}*/
		socket.pipe(file);
	});
	socket.on('close',function(isError){
		console.log('socket close isError:'+isError);
		server.getConnections(function(err,count){
			if(count == 0){
				//server.unref();
			}
		});
	});
	
	
});
/*server.close(function(){
	console.log('server close after all connections close...');
});*/
console.log('server maxConnections:'+server.maxConnections);

server.on('error',function(e){
	console.log(e);
});
server.on('close',function(e){
	console.log('all client socket disconnect....',' server close....');
});
server.listen(8888,'localhost',1,function(){
	var address = server.address();
	console.log('server begin to listen....');
	console.log(address);
});
//server.unref();
