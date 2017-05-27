var a = 37;

var obj1 = {
	a:39,
	f: ()=>{
		cosole.log('f', this.a);
	},
	ff: function(){
		function f1(){
			console.log('f1', this.a);
		}
		f1();

		
	},
	fff:function(){}
}

obj1.f();
obj1.ff();
obj1.fff();