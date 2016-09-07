// completed 9-6-2016

// Array Max
// Given an array of negative/positive integers, find the largest element. 
// DO NOT use Math.max

// Solution //

function max (numbers) {
 	// Reduce the array of numbers returning the greater of the two each iteration.
	return numbers.reduce((a,b) => a < b ? b : a)
};
