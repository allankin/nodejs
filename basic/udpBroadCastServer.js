var dgram = require('dgram');
var server = dgram.createSocket('udp4');
server.on('message',function(msg,client){
	console.log(' recevie client data:',msg.toString());
	console.log(' client socket info %j:',client);
	var buf = new Buffer('server send:'+msg.toString());
	server.send(buf,0,buf.length,client.port,'192.168.2.255');
});
server.on('listening',function(){
	var address = server.address();
	console.log('server listen:',address);
});
server.bind(9999);
/*利用Timeout事件队列，单线程机制实现。设置为广播模式，放在server.bind之后*/
setTimeout(function(){server.setBroadcast(true);},0);
//server.close();