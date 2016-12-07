var Foo = require('./foo.js');
var foo = new Foo('kim','22');
console.log('foo....age:'+foo.getAge()+',name:'+foo.getName());

var foo2 = new Foo('tom',39);
foo2.name = 'tom_';
console.log('foo2....age:'+foo2.getAge()+',name:'+foo2.getName());

console.log(foo.name+'   '+foo2.name);

var Foo_ = require('./foo.js');
var foo_ = new Foo_('jim','32');
console.log('foo_....age:'+foo_.getAge()+',name:'+foo_.getName());

/*类方法使用*/
Foo.setAddress('China');
console.log(Foo.getAddress());
Foo_.setAddress('USA');
console.log(Foo_.getAddress());
console.log(Foo.getAddress());
console.log(Foo.staticAddress);













