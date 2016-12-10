var buf = new Buffer(128);
console.log(buf);
buf.fill(3,6,10);
console.log(buf);
buf = new Buffer([1,2,3,4,5]);
console.log(buf);
buf = new Buffer('abc','utf8');
console.log(buf);
buf = new Buffer('你好');
console.log(buf);
buf = new Buffer('你好','utf8');
console.log(buf);
buf = new Buffer('姓名','utf8');
console.log(buf);
buf = new Buffer('姓名','ascii');
console.log(buf);
buf = new Buffer('10ac3a','hex');
console.log(buf);

buf = new Buffer('周嘉丽，我喜欢','utf8');
console.log(buf);

console.log('slice()....');
var bufSlice = buf.slice(0,5);
console.log(bufSlice);
bufSlice[0] = 1;
console.log(buf);
var str = buf.toString();
console.log(str);

console.log('toString()....');
var zhoujiali = new Buffer('e591a8e59889e4b8bd','hex');
console.log(zhoujiali);
var zhoujialiStr = zhoujiali.toString();
console.log(zhoujialiStr);

console.log('write()......');
var missyou = new Buffer('想你');
console.log(missyou);
zhoujiali.write(missyou.toString(),0);
console.log(zhoujiali.toString());

var ilike = new Buffer('我喜欢');
console.log(ilike);

var i = new Buffer([0xe6, 0x88, 0x91, 0xe5, 0x96, 0x9c, 0xe6, 0xac, 0xa2]);
console.log(i.toString());

console.log('######### StringDecoder ###############');
var str1 = new Buffer([0xe6, 0x88, 0x91, 0xe5, 0x96]);
console.log(str1.toString());
var str2 = new Buffer([0x9c, 0xe6, 0xac, 0xa2]);
console.log(str2.toString());
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder();
console.log(decoder.write(str1));
console.log(decoder.write(str2));
console.log(decoder.write(str2));
console.log(decoder.toString());

console.log('########## buffer to JSON ############');
var jsonBuf = new Buffer('{"content":"我喜欢周嘉丽"}');
console.log(buf);
var jsonStr = JSON.stringify(jsonBuf);
console.log(jsonStr);
var jsonObj = JSON.parse(jsonStr);
console.log(jsonObj);
var jsonBuf2 = new Buffer(jsonObj);
console.log(jsonBuf2.toString());


console.log('########## buffer copy ############');
var copySrc = new Buffer("我喜欢周嘉丽");
console.log(copySrc);

var copyDst = new Buffer(18);
console.log(copyDst);
copyDst.fill(0);
console.log(copyDst);
copySrc.copy(copyDst,0);
console.log(copyDst);


console.log('########## buffer method ############');
var a = 'aaaa';
var b = new Buffer([1]);
console.log(typeof(a));
console.log(typeof(b));
console.log(Buffer.isBuffer(b));
console.log(Buffer.byteLength(b));

var loveyou = new Buffer('我喜欢周嘉丽');
console.log(loveyou.toString('base64'));
console.log(Buffer.byteLength(loveyou.toString('base64'),'base64'));


var c = new Buffer([1,2]);
console.log(c);
var b_= Buffer.concat([b]);
b_.fill(9);
console.log(b);
var concat = Buffer.concat([b,c],90);
console.log(concat);
















