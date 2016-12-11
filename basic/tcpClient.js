var net = require('net');
var client = new net.Socket();
client.setEncoding('utf8');
client.connect(8888,'127.0.0.1');
client.on('connect',function(){
	console.log('connected......');
	client.write('hello server...你好');
	setTimeout(function(){client.end();},2000);
});
client.on('data',function(data){
	console.log(' receive data:',data.toString());
});
client.on('error',function(){

});
client.on('error',(err)=>{
	console.log('socket error stack:',err.stack);
	console.log('error code:',err.code);
	client.destroy();
});