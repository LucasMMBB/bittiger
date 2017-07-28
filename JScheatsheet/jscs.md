# The JavaScript Cheat Sheet
This is a quick overview of the js. Reading this from the beginning to end is good, but going to a specific section is better.
## Comments
Single line comments start with `//`. For multi-line commands, you use `/* ... */`
```
// This is a single line comment
/*
And this is 
a multi-line
comment
*/
```
##Variables
You can create variables using var, let, const(the last two are available only in ES6)
Variable names can't start with a number or contain spaces. They can contain letters, numbers, underscores, or $. Variable names are case sensitive.
```
// This is how you define a variable
// 'x' will be 'undefines'
var x;

// Declare a constant
const FOO = 42;

// Declare another two variables
var hello = 'world'
let bar = 'bar'
```

Variables don't have a type. As long as they are not constants, you can change their data:
```
let foo = 42;
foo = 'bar';
foo; 
// output bar
```
`let` VS `var`
They are pretty similar, but unlike `var`, `let` declares a block scope local variable, optionally initializing it to a value.
`let` allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. The `var` keyword which defines a variable to an entire function regardless of block scope.

```
var a = 42;
if(true){
	var b = 7;
	let c = 123;
}
console.log(a); // output 42
console.log(b); // output 7
console.log(c); // error: c is not defined
```
Even the if condition is false, we can still access the `var` declaration inside of the `if`block. In this case, the value will be `undefined`.
```
if(false){
  var b = 7;
}
console.log(b);
// undefined
```
This happens because of the way variables are declared and assigned. The above code is similar to:
```
var b;
if(false){
  b = 7;
}
// Since we don't assign it, the value remains `undefined`
```
