var _name,_age;
var name,age;
/*构造函数*/
var foo = function(name,age){
	_name = name;
	_age = age;
};
/*实例方法*/
foo.prototype.getName = function(){
	return _name;
};
foo.prototype.getAge = function(){
	return _age;
};
foo.prototype.setName = function(name){
	_name = name;
}
foo.prototype.setAge = function(age){
	_age = age;
}
/*公共属性*/
foo.prototype.name = name;
foo.prototype.age = age;

/*类方法（静态方法）*/
foo.setAddress = function(address){
	/*类变量*/
	foo.staticAddress = address;
};
foo.getAddress = function(){
	return foo.staticAddress;
};
/*类方式导出*/
module.exports = foo;



