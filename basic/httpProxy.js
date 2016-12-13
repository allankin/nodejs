var http = require('http');
var url = require('url');
var server = http.createServer(function(sreq,srsp){
	var urlParts = url.parse(sreq.url);
	if(urlParts.path!='/favicon.ico'){
		console.log('urlParts:',urlParts);
		console.log('headers:',sreq.headers);
		var opts = {
			host:'www.baidu.com',
			port:80,
			path:urlParts.pathname,
			//headers:sreq.headers
		};
		//srsp.end('sssssssssss');
		var creq = http.get(opts,function(crsp){
			srsp.writeHead(crsp.statusCode,crsp.headers);
			crsp.pipe(srsp);
		});
		sreq.pipe(creq);
	}
});
 
server.listen(9999);
console.log(' http server listen on : 9999');