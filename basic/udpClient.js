var dgram = require('dgram');
var message = new Buffer('你好');
var client = dgram.createSocket('udp4');
client.send(message,0,message.length,9999,'localhost',function(err,count){
	console.log('send result: %j ',err);
	console.log('send byte cout: ',count);
});
client.on('message',function(msg,server){
	console.log('receive from Server data:',msg.toString());
	console.log('server info: %j ',server);
	//client.close();
});
client.on('error',function(err){
	console.log('[event:error] %j',err);
});
client.on('close',function(){
	console.log('socket closed..');
});