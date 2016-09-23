// completed 9-23-2016

// It turns out that we can write logical and and logical or in terms of each other and logical not using De Morgan's Laws.

// Write a function or that works like ||, but only uses ! and &&.
// Write a function and that works like &&, but only uses ! and ||.

// Solution //

// Using a truth table, figure out that && is just the oppoiste of ||.
function or(a,b) {
	return !(!a && !b)
}

function and(a,b) {
	return !(!a || !b) 
}