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
A really nice use-case to use this difference between let and var is the `for` loops with something async in it.
Notice how in the first example, we get the final value of `i`(because we print it after one second). In other examples, the i value inside of the setTimeout is the current value of i when the setTImeout was called.

```
for(var i=0; i<7; i++){
	setTimeout(function(){console.log(i)}, 1000);
}
// output 7,7,7,7...


for(let i = 0; i < 7; i++){
	setTimeout(function(){console.log(i)}, 1000);
}
```

##How does `const` work?
`const` is simple: you can use it for variables whose values remain the same.
```
const pi = 3.14
pi = 3;

-> TypeError: Assignment to constant variable
```
Note this won't freeze the objects:
```
const myObj = {foo: 'bar'}
myObj.foo = 42;

// add a new field
myObj.hello = 'world';

myobj;
->{foo: 42, hello: 'world'}

// Though, if you try to reset the whole thing, you can't
myObj = {}
-> TypeError: Assignment to constant variable

```
##`if` statements
Use `if (expression){...}else{...}` to do something if `expression` is true or not.
```
let foo = 42;
if(foo > 42){
	// dothing something
}else{
	// do something else
}
```
## Switches
```
let planet = 'Earth';

switch (planet) {
  case "Mercury":
  case "Venus":
    console.log("Too hot here.");

  case 'Earth' :
    console.log("Welcome home!");
    break;

  case 'Mars' :
    console.log("Welcome to the other home!");
    break;

  case "Jupiter":
  case "Saturn":
  case "Uranus":
  case "Neptune":
  case "Pluto":
    console.log("You may get gold here.");
    break;

  default:
    console.log("Seems you found another planet.");
    break;
}
```

##Primitive types
The following ones, are primitives:
- Booleans: `false`, `true`
- Numbers: `42`, `3.14`, `0b1101b`, `0x16`, `NaN`
- Strings: `mars`
- Special values: `undefined`, `null`

##Objects
The common way to declare objects is by using the curly braces:
```
let myObj = {world: 'Earch'}
```
<b>Attention</b>: Objects are compared by reference.
```
let first = {}
let second = {}

// check if they are equal
first === second // false


// comparing an object with itself
first === first; // true

// let's point the second to first
second = first

first === second; // true

```
<b>Attention</b>: you have no guarantee that adding the object keys in a specific order will get them in the same. Object keys are not ordered, even in general JavaScript interpreters which will iterate them in the order of adding them in the object(again, do not rely on this feature).
##Arrays
In addition to objects, the array data is ordered by indexes. Arrays are actually objects, having the indexes(numbers from `0` to length - 1) as keys.
```
let fruits = ['apples', 'pears', 'oranges'];

fruits[1]
-> "pears"
```
##Access, add, remove, and update elements
```
let fruits = ['apple'];

// add to the end of the array
fruits.push('pear');
fruits;
// ['apple', 'pear']

// Add to the start of the array
fruits.unshift('orange')

// splice() adds/removes items to/from an array, and returns the removed items.
array.splice(index, howmany, item1,...,itemX)

// Remove the last element
fruits.pop()

// Remove the first element
fruits.shift()

```