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