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

// SECTION 6

// Lecture 57: Function Constructors, 'new', and the History of JS
/*
	-Built by Brandon Eich
	-Netscape, Microsoft, Oracle and Sun. Written eventually for browser. Named to attract Java developers.
	-A class in Java is not an object but used to define an object.
	-Class in JS isn't really a class like in C++.
	-Function Constructors: A normal function that is used to construct objects
*/

Function Person() {
	this.firstname = 'John';
	this.lastname = 'Doe';

}

var john = new Person();
console.log('John');

// Gives you function with firstname and lastname
// New is an operator. Immediately empty object is created. Then invokes function. When function is called, execution context generates variable called this.
// As long as function doesn't return value then JS engine will return that object that was created by the new operator.



// Lecture 58: Function Constructors and '.prototype'

/*
	-The prototype property on a function is NOT the prototype of the function.
	-It's the prototype of any objects created if you're using function constructors.
	-Why add method to the prototype method? Takes up memory space.
*/

Person.prototype.getFullName = function() {
	return this.firstname + ' ' + this.lastname;
}

// Lecture 59: Danger Aside: 'new' and Functions

/*
	-Function constructors likely going away.
*/

// Lecture 60: Conceptual Aside: Built-In Function Constructors

/*
	-Actually created objects that contain primitives
*/

String.prototype.isLengthGreaterThan = function(limit) {
	return this.length > limit;
}

console.log("John".isLengthGreaterThan(3));

// Lecture 61: Dangerous Aside: Built-In Function Constructors

/*
	-Moment.js (library on dates)
*/

// Lecture 62: Dangerous Aside: Arrays and for..in

// Lecture 63: Object.create and Pure Prototypal Inheritance

/*
	-Polyfill: Code that adds a Feature which the engine may lack.
*/
// Polyfill
if (!Object.create) {
	Object.create = function (o) {
		if (arguments.length > 1) {
			throw new Error('Object.create implementation' + ' only accepts the first parameter.');
		}
		function F() {}
		F.prototype = o;
		return new F();
	};
}

// Lecture 64: ES6 and Classes

/*
	-Classes are not objects in other languages, but in JS it is.
	-extend sets prototype.
	-Syntactic Sugar: A different way to type somethign that doesn't change how it works under the hood.
*/

class Person {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}

	greet() {
		return 'Hi' + firstname;
	}

}

var john = new Person('John', 'Doe');

class InformalPerson extends Person {
	constructor(firstname, lastname) {
		super(firstname, lastname);
	}

	greet() {
		return 'Yo' + firstname;
	}
}

// SECTION 7
// Lecture 65: Initialization

// Lecture 66: 'typeof', 'instanceof', and Figuring What Something Is

/*
	-typeof and instanceof
	-Do different things.
*/

// Lecture 67: Strict Mode
/*
	-Must declare variable to define it
	-Top of file or top of function
	-Not every engine implements it the same way.
*/

function Person(a) {
'use strict';

	console.log(a)
}
// Lecture 68: Strict Mode Reference

// SECTION 8:
// Lecture 69: Learning From Other's Good Code
// Lectures 70-72: Deep Dive into Source Code: jQuery

/*
	-Manipulate the DOM.
	-Method Chaining: Calling one method after another, and each affects the parent object
	-Because methods are on the prototype it points back using return this.
*/

addChild().removeClass();

// SECTION 9
// Lecture 73: Requirements
// Lecture 74: Structuring Safe Code
// Lecture 75: Our Object and Its prototype
// Lecture 76: Properties and Chainable Methods
// Lecture 77: Adding jQuery Support
// Lecture 78: Good Commenting
// Lecture 79: Let's Use Our Framework
// Lecture 80: A Side Note

// SECTION 10
// Lecture 81: TypeScript, ES6, and Transpiled Languages
// Lecture 82: Transpiled Languages References

// SECTION 11
// Lecture 83: Existing and Upcoming Features
// Lecture 84: ES6 Features Reference
