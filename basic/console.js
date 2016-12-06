require('./testModule.js');
console.log('console.log.......');
console.error('conosle error.....');
console.time('time1');
for(var i=0;i<1000000;i++){

}
console.timeEnd('time1');
var User = {
	name:'kim',
	age:23,
	login:function(){

	}
};
console.dir(User);

console.trace('trace message:');

console.log(require.cache);

console.assert(1==1,' 1==1 not equal .....');
console.assert(1==2,' 1==2 not equal .....');

