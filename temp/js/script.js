
var d = typeof (function b(){ return this.b;}).bind({b:90});
console.log(d);

//var d = 0; (function(){d=this.b}).call({b: 2}, {b: 1});

//console.log(d);

/*var arr = [1,2,3]; var d = arr.map(function (a){return a += 1;});
console.log(d);*/

/*function a() {this.action = function(){return 1)};};
a.prototype.action = function(){return 2;)};
a.action();*/


//(function (c,d){return console.log(arguments[2]);}) (1,2);
