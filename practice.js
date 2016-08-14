// Lecture 11

function b() {
	console.log('Called b!');
}

b();

console.log(a);
// Will return undefined as only set in Creation Phase

var a = 'Hello World!';

console.log(a);

// Lecture 12 Conceptual Aside
	/*
	-Single Threaded: One command at a time
		-Caveat, Javascript is not the only thing happening within a browser.
	-Synchronous: One line (and order in this case) at a time
	-How do asynchronous calls in AJAX work?
	*/

// Lecture 14

	// -Invocation: Running the function, use () in JS

function b() {
	var d;
}

function a() {
	b();
	var c;
}

a();
var d;

/*
	-Parser parses code. Global Execution Context is created. Compiler does this.
	-Window object created and code attached. Executes line by line.
	-New Execution Context is created and placed in Execution Stack. Whatever is on top, that is currently running.
	-Own space for functions and variables.
	- a() runs, then function a(), then b() within function a()
	-When finished b() pops out
*/

// Lecture 15
/*
	-Variable Environment: Where variables live an how they live relative to each other.

*/

function b() {
	var myVar;
	console.log(myVar);
}

function a() {
	var myVar = 2;
	console.log(myVar);
	b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);
// Second console.log will still give you 1 as you are in Global Execution Context.

// Lecture 16
/*
	-Scope Chain: Link of Outer Environments
	-Every Execution Context has a Reference to Outer Environment
	-Lexical Environment...

*/

function a() {

	function b() {
		console.log(myVar);
	}

	var myVar = 2;
	b();
}

var myVar = 1;
a();
b();
// a() is 2, b() is undefined
// b()'s Outer Reference is a() now
// Lexical refers to when it is created


// Lecture 17: Scope, ES6, and let

/*
	-Scope: Where a variable is available in your code
	-ECMAScript 6
	-let can be used instead of var
		-Allows JS engine to use blockscoping
			-Not allowed to use until line of code is run
		-Declared inside a block ()

if (a > b) {
	let c = true;
}
*/

// Lecture 18
/*
	-What about Asynchronous Callbacks
		-Asynchronous: More than one at a time
		-Click events etc
	-JS Engine:
		-Doesn't exist by itself. Other elements, engines running.
			-Rendering Engine, HTTP Request
			-Has hooks to talk to each other
	-Event Queue: List of events that are happening. If JS Engine wants to be notified, gets placed.
	-When stack is empty, JS engine looks at Event Queue periodically and then creates Execution Context
	-Browser is putting things asynchronously
	-Asynchronous is possible in JS but it's about events happening outside JS Engine.
*/

function waitThreeSeconds() {
	var ms = 3000 + new Date().getTime();
	while (new Date() < ms){}
		console.log('Finished Function');
}

function clickHandler() {
	console.log('Click Event');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('Finished Execution');

// Section 3
// Lecture 19: Conceptual Aside: Types and JS

/*
	-Dynamic Typing: You don't tell the engine what type of data a variable holds, it figures it out while your code is running.
	-C# using Static Typing hence you have to tell.
*/

// Lecture 20: Primitive Types

/*
	-Primitive or Simple Type: A type of data that represents a single value aka not an object.
	-Undefined: Lack of existence, default.
	-Null: Lack of existence, but you can set this etc.
	-Boolean: True or false.
	-Number: Floating point # (there's always some decimals)...you can fake it, makes math weird.
	-String: A sequence of characters using '' or "".
	-Symbol: Used in ES6
*/

// Lecture 21: Conceptual Aside

/*
	-Operators: A special function that is syntactically (written) differently
		-Take two parameters and return one result.
	-Infix notation: Operators sits in between two parameters.
*/

var a = 3 + 4;
console.log(a);

// Lecture 22: Operator Precedence and Associativity

/*
	-Associativity: What order operator functions gets called in: L-R or R-L (when functions have same precedence).
		-If they have same precedence, helps to resolve.
	-Operator Precedence: Which operator function gets called first; in order of precedence.
	-What happens if you have the same associativity?


*/

var a = 3 + 4 * 5;
console.log(a);

var a = 2, b = 3, c = 4;
a = b = c;
console.log(a);
console.log(b);
console.log(c);

// Lecture 23: Coercion

/*
	Coercion: Convering a value from one type to another
		-Due to it be a dynamic type language

*/

// Lecture 24: Comparison Operators

/*

*/

console.log(1 < 2 < 3) // returns true
console.log(3 < 2 < 1) //returns true (L to R, gives False < 1 aka 0 < 1)
// true becomes a 1
// undefined is notation
// null is 0, however null == 0 (returns false)
"" == 0
"" == false
// Both return true
// Use strict equality aka ===
// Object.is in ES6

// Lecture 27: Existence and Booleans
/*
	-All things with a lack of existence will yield False
*/
var a;

a = 0;

if (a || a === 0) {
	console.log('Something is there.');
};
// returns true and console logs it...

// Lecture 28: Default Values

/*
	-Operators are functions that return values
*/

function greet(name) {
	console.console.log(name);
	console.log('Hello'  + name);
}

greet();

// Lecture 29: Framework Aside

/*
	-
*/
