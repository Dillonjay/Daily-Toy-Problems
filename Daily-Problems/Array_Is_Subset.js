// completed 9-15-2016

// Array isSubset
// Create a function that takes two arrays and determine whether the second array is a subset of the first array. 
// Arrays will only contain primitive values.

// Examples
// Input						|  Output
// array: [ 1, 2, 3, 4 ]
// sub: [ 2, 3, 4 ]	        	|  true
// array: [ 2, 2, 2, 3, 4 ]
// sub: [ 2, 4, 3 ]				|  true
// array: [ 2, 3, 3, "a" ]
// sub: [ 3, 3, 3, "a" ]		|  false

// Solution // 

function isSubset (array, sub) {
	// Declare a answer variable to return at the end. 
	let answer = true;
	// Copy the array to avoid mutation.
	let copy = array.slice();
	// Loop through the sub array.
	sub.forEach( item => {
		// If the origional array includes the current item 
		// we splice that item out of the copy array and continue.
    	copy.includes(item) ? 
    	copy.splice(copy.indexOf(item), 1) :
    	// If the copy does not include the current item,
    	// we know that sub is not a subset of array.
    	answer = false;
	});
	// Return the answer.
	return answer;
};
