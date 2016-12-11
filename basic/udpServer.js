var dgram = require('dgram');
var server = dgram.createSocket('udp4');
server.on('message',function(msg,client){
	console.log(' recevie client data:',msg.toString());
	console.log(' client socket info %j:',client);
	var buf = new Buffer('server send:'+msg.toString());
	server.send(buf,0,buf.length,client.port,client.address);
});
server.on('listening',function(){
	var address = server.address();
	console.log('server listen:',address);
});
server.bind(9999);
//server.close();