// completed 9-10-2016

// Array Zip Sum
// Given two arrays of negative/positive integers, 
//return a new array such that each element at index n is the sum of the two elements from the other arrays at their index n’s.

// 					Examples
// 		Input						Output
// xs:[ 10, 20, 30 ]	|	[ 11, 22, 33 ]
// ys:[ 1, 2, 3 ]		|
// 						|
// xs:[ 100, 1 ]		|	[ 150, 6 ]
// ys:[ 50, 5 ]			|
// 						|
// xs:[ 10, 20, 30 ]	|	[ 11, 22 ]
// ys:[ 1, 2 ]			|
// 						|
// xs:[ 10, 20 ]		|	[ 11, 22 ]
// ys:[ 1, 2, 3 ]		|

// Solution //

function zipSum (xs, ys) {
	// Create an empty array to store the sums.
	var answer = [];
	// Choose an array and loop through it. 
	xs.forEach((item, i) => {
		// If the other array has a value at the index being checked, push the sum of the two into the answer array.
		// If not, do nothing.
    	ys[i] ? answer.push(item + ys[i]) : null;
	});	
	// Return the answer array. 
	return answer;
};


