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

// Lecture 30: Objects and Functions

/*
	-Objects: Collections of NV pairs
		-How does it reside in memory?
			-Primitive (Property), Object (Property), Function (Method)
			-Core Address with References
		-Dot is just a function that takes the objects and passes the string.
		-Below is not preferred way to create new object
*/

var person = new Object();
person["firstname"] = "Tony";
person["lastname"] = "Alicia";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();

person.address.street = "111 Main St.";

// Lecture 31: Objects and Object Literals

/*
	-When JS engine is parsing syntax, assumes you are creating a new object.
	-Can setup and initialize...
	-JS is very liberal about using white space.
*/

var person = {firstname: 'Tony'};

function greet(person) {
	console.log('Hi' + person.firstname);
}

greet(Tony);
greet({
	firstname: 'Mary';
});
// Above shows creating object on the fly.
// Object Literal, Dot, Operators do the same thing under the hood.

// Lecture 32: Framework Aside: Faking Namespace

/*
	-Namespace: Container for Variables and functions
		-Typically to keep variables and functions with the same name separate
	-No Namespacing in JS

*/

// Lecture 33: JSON and Object Literals

/*
	-Use to be XML
	-<object></object>
	-Properties have to be in quotes
	-JSON has stricter rules. Can use JSON.stringify or JSON.parse to go back and forth.
*/

// Lecture 34: Functions are Objects

/*
	-First Class Functions: Everything you can do with other types you can do with functions.
		-Assign them to variables, pass them around, or crate them on the fly.
		-Has special Properties
			-Can be Anonymous
			-Code can be set. Will be invocable.
				-Code is a property of that function.
*/

// Lecture 35: Functions Statements and Expressions
/*
	Function Expression: Unit of code that results in a value; doesn't have to save in a variable
	Statement: Does not result in value.
*/

greet();

function greet() {
	console.log('Hi');
}

// Above is hoisted while below sets variable as undefined primitive.
// Hence function expressions are not hoisted.

anonymousGreet();

var anonymousGreet =m function() {
	console.log('Hi');
}

function log(a) {
	a();
}

log(function() {
	console.log('Hi');
});

// Example of Functional Programming above

// Lecture 36: Conceptual Aside: By Value vs By Reference

/*
	-In both cases talking about Variables.
	-Reference points to same memory space whereas Value makes a clone and separate memoryspace.
	-Mutate: To change something.
	-Equal operator sets up new memory space (new address)
*/

var a = 3;
var b;

b = a;
a = 2;
console.log(a);
console.log(b);

// By Reference

var c = { greeting: 'Hi' };
var d;

d = c;
c.greeting = 'hello';
// Both pointing to same point aka greeting. Just aliases.
console.log(c);
console.log(d);

// Lecture 37: Objects, Functions, and 'This'

/*
	-When function invoked, execution context is created (Creation Phase)
	-Every time a function is run, JS engine gives us this.

*/

var c = {
	name: 'The c object';
	log: function() {
		this.name = 'Updated c object';
		console.log(this);

		var setname = function(newname) {
			this.name = newname;
		}

		setname('Updated again! The c object');
		console.log(this);
	};
};

c.log();
// Setname changes in global namespace but console.log will not reflect.
// If you set var self = this  right below log function and then use self instead of this.
// Let keyword is to replace the var keyword to help with this issue.

// Lecture 38: Conceptual Aside: Arrays
// Lecture 39: Arguments

/*
	-Next version won't have this.
	-Arguments: Contains list of all parameters/values you pass to a function.
	-Will become depracted.
	-Spread: Add ...name

*/

// Lecture 40: Framework Aside: Function Overloading

// Lecture 41: Conceptual Aside: Syntax Parsers

/*
	-Intermediate programs that translates code so that your computer can understand.
*/

// Lecture 42: Dangerous Aside

/*
	-Automatic Semicolon Insertion: Injects where character return is.
*/

// Lecture 43: Framework Aside: Whitespace

/*
	-Whitespace: Invisible characters that create literal 'space' in your written code.
*/

// Lecture 44: IIFEs

/*
	-You can invoke at point of creation.
	-Put parentheses around function.
	-With new execution context, can call desired variable so as to not interfere with other code.
	-Wrap entire code with parentheses
	-Global is reusable accross server whereas window is not.
*/

// Function Statement
function greet(name) {
	console.log('Hello' + name);
}

greet();

// Function Expression (sort of Object Literal, not in memoryspace)

var greetFunc = function(name) {
	console.log('Hello' + name);
};

greetFunc();

// IIFE

var greetFunc = function(name) {
	return 'Hello' + name;
}();

// Lecture 46: Understanding Closures

/*
	-Closure: Execution context can close in outside variables.
*/

function greet(whattosay) {
	return function (name) {
		console.log(whattosay) + ' ' + name);
	}
}

greet('Hi')('Tony');

var sayHi = greet('Hi');
sayHi('Tony');

// Lecture 47: Understanding Closures Part 2

/*
	-
*/

function buildFunctions() {
	var arr = [];

	for (var i = 0; i < 3, i++) {
		arr.push(
			function () {
				console.log(i);
			}
		)
	}
	return arr;
}

var fs = buildFunctions()

fs[0]();
fs[1]();
fs[2]();
// All return 3 because that is what i is.

// Lecture 48: Framework Aside: Function Factories

/*
	-Factory: Returns or makes something for you.
	-
*/

function makeGreeting(language) {
	return function (firstname, lastname) {
		if (language === 'en') {
			console.log('Hello ' + firstname + ' ' + lastname);
		}
		if (language === 'es') {
			console.log('Hola ' + firstname + ' ' + lastname);
		}
	}
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');

// Lecture 49: Closures and Callbacks

/*
	-setTimeout uses Expressions and Closures.
*/


// Lecture 50: Calls(), Bind() and Apply()

/*
	-Bind functions makes a copy of function.

logName();
logName.call(person, 'en');
logName.apply (person, ['en'])

	-Latter determines what this is and actually calls it.
	-Apply requires an array.
*/

// Function Borrowing
// Function Carrying

function multiply(a,b) {
	return a*b;
}
var multipleByTwo = multiply.bind(this, 2);

// Lecture 51: Functional Programming

/*
	-Utilizes first class functions.
	-You functions should not mutate data at lower levels.
*/

var checkPastLimitSimplified = function (limiter) {
	return function (limiter, item) {
		return item > limiter;
	}.bind(this, limiter);
};

// Lecture 52: Functional Programming Continued

/*
	-Underscore.JS Library
		-Shows how it does what is does.
		-Underscore.JS
		-Implements a lot of Functional Programming
	-Alternate called Lodash
		-Works a bit faster.
	-
*/

// SECTION 5
