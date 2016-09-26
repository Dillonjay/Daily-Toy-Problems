// completed 9-25-2016

// Given an array of arrays, return all elements in a single array. 
// You must use recursion.


// Examples
// 		Input									 |	Output
// arrays: [ [ 10 ], [ 20, 30 ], [ 40 ] ]		 |  [ 10, 20, 30, 40 ]
// arrays: [ 1, 2, [ 3 ], 4, [ 5, [ 6 ], 7 ] ]	 |	[ 1, 2, 3, 4, 5, 6, 7 ]


// Solution //

function flatten (arrays) {
	// Reduce the input array into a new flattened array and return the result. 
	return arrays.reduce((a,b) => {
		// If the current element is an array, recursivly flatten out the array.
		// Concat the return value with the array we are building. 
    	if(b.constructor === Array) return a.concat(flatten(b));
    	// If the element is not an array, push the result into the array.
    	else a.push(b);
    	// Return the array after each iteration.
    	return a;
  	},[])
};

// Solution for an array that only contains arrays one level deep //
function flattenOneLevel(array) {
    return array.reduce((a,b) =>  a.concat(b),[])
};

