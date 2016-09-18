// completed 9-17-2016

// Zero Sum
// Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

// Examples

// Input					 |	Output
// numbers: [ 1, 3, 2, -3 ]	 |	true
// numbers: [ 5, 7, 2, 9 ]	 |	false

// Solution //

function zeroSum (numbers) {
	// Reduce all numbers while keeping track of the index and providing an initial value of false.
	return numbers.reduce((found, cur, i) => {
		// If we find 2 values whos sum equals zero we will return true for the next iteration.
		// If the accumulator is true return true until reduce has completed its iterations.
		// If not, loop through the numbers again using the find method also keeping track of the index.
		// Array.find returns the value that passed the predicate function or undefined if no value passed.
		// Make sure that we are not comparing the same index on each find iteration.
		// If find returns undefined, we know that we did not find two numbers with a sum of zero, return false.
		// If find returns anything other that undefined, we know that we have found two numbers whos sum is equal to zero.
    	return found ? true : !(numbers.find((other, j) =>  i !== j && cur + other === 0) === undefined)
	}, false)
};
