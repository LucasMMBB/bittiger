/*
	Arrow function get the parent variable for this.
	ES5 function get the current variable for this
*/

var a = 37;

var obj1 = {
    a: 39,
    f: () => {
        console.log('f', this.a); // 39
    },
    ff: function() {
        function f1() {
            console.log('f1', this.a);
        }
        f1();

        (() => {
            console.log('f2', this.a);
        })(); 
    },
    fff: function() {
        function f1() {
            var a = 41;
            function f2() {
                console.log('f2', this.a);
            }
            f2();

            (() => {
                console.log('f2', this.a);
            })();
        }
        f1();
    }
}

obj1.f(); // 37
obj1.ff();// 37 39
obj1.fff();// 37 37
