var http = require('http');
var events = require('events');
var server = http.createServer();
var testFunc = function(req,res){
	console.log(req.url);
	res.end();
}
/*EventEmitter类自身事件：newListener*/
server.on('newListener',function(e,f){
	console.log('new listen: '+e);
});

server.on('request',testFunc);
/*自定义事件 myEvent*/
server.on('myEvent',function(data){
	console.log('myEvent...data:'+data);
});
server.listen(8086,'127.0.0.1');
server.emit('myEvent','emmit by server.....');
console.log('server startup listen on 8086');
/*获取server对象的request事件的事件处理器数量*/
console.log(events.EventEmitter.listenerCount(server,'request'));




