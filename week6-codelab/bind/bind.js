/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var a =37;

var obj1 = {
	a:39,
	f: function(){
		console.log(this.a);
	}
}

obj1.f(); // 39

var out_f = obj1.f;
out_f(); // 37
console.log("fuck");
var obj2 = {
	a:40,
	f: function(callback){
		//g = callback.bind(this);
		//g();
		callback(); // 40
	}
}
obj2.f(obj1.f);
var obj3 = {
	a:40,
	f: function(callback){
		callback.bind(this)();// bind this function
    // or in this way
    /*
    g = callback.bind(this)
    g();
    */
    console.log("fuck you");
		callback(); // 40
	}
}
console.log("fuck you");
obj3.f(obj1.f);