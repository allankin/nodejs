var http = require('http');
const url = require('url');
const querystring = require('querystring');
var server = http.createServer(function(req,rsp){
});
server.setTimeout(2000);
server.on('request',function(req,rsp){
	//rsp.statusCode = 404;
	rsp.sendDate = false;
	rsp.setHeader('Content-Type','text/html');
	rsp.setHeader('Trailer','MD5');
	rsp.addTrailers({'MD5':'123133ae21321874909'});
	console.log('[event:request] receive a request.. ',req.url);
	console.log(req.method,req.url,req.headers,req.httpVersion,req.trailers);
	var urlObj = url.parse(req.url);
	console.log(urlObj);
	var params = querystring.parse(urlObj.query);
	console.log('params:',params);
	rsp.setTimeout(1000);
	/*由于timeout事件设置了callback，当发生timeout时，不会断开连接。*/
	rsp.on('timeout',function(){
		console.log('[event:timeout] rsp timeout....');
	});
	req.on('data',function(data){
		console.log('receive client data: ',data.toString());
	});
	req.on('end',function(){
		console.log('received all data...');
		rsp.end();
	});
	rsp.on('close',function(){
		console.log('[event:close] rsp closed....');
	});
	rsp.write('Hello Nodejs');
	//rsp.end();
});

server.on('timeout',function(socket){
	console.log('[event:timeout] socket timeout...');	
});
server.on('connection',function(socket){
	console.log(' client socket established...');
});

server.on('listening',function(){
	console.log('[event:listening] server listen on 8081');
});
server.on('error',function(e){
	console.log('[event:error] error... %j',e);
});
server.on('close',function(){
	console.log('[event:close] server closed...');
});
server.listen(8081,'127.0.0.1');