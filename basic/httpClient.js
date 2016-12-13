var http = require('http');
var options = {
	hostname:'127.0.0.1',
	port:8081,
	path:'/',
	method:'POST'
};
var req = http.request(options);
req.write('http client data...','utf8');
req.on('socket',function(socket){
	socket.setTimeout(1000);
	socket.on('timeout',function(){
		console.log('[event:socket timeout]');
		/* error code: { [Error: socket hang up] code: 'ECONNRESET' } */
		/*终止http请求*/
		req.abort();
	});
});
/*会覆盖socket.setTimeout*/
req.setTimeout(1000);
req.on('timeout',function(){
	console.log('[event: request timeout]');
	req.abort();
});
req.on('response',function(res){
	console.log('response code:',res.statusCode);
	console.log('response headers:',JSON.stringify(res.headers));
	res.setEncoding('utf8');
	res.on('data',function(chunk){
		console.log('response content:',chunk);
	});
	/*获取Trailers数据*/
	res.on('end',function(){
		console.log('Trailer header info:',res.trailers);
	});
});
req.on('error',function(err){
	console.log('error code:',err);
});

req.end();