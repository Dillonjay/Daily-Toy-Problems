// completed 9-4-2016

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//  EX: moveZeros([false,1,0,1,2,0,1,3,"a"]) returns[false,1,1,2,1,3,"a",0,0]

// Solution //

var moveZeros = function (arr) {
	// Filter every value that is not a zero.
	// Filter every value that is is a zero.
	// Concat the two arrays.
	return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0));
}

