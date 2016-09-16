// completed 9-16-2016

// Implement a function that takes an array and sorts it using this bubble sort.

// agerage = Θ(n log(n))	
// Solution //

var bubbleSort = function(array) {
	// Loop through the array.
	array.forEach( x => {
		// On each iteration, loop through the array again and keep track of the index.
    	array.forEach( (y, index) => {
    		// If the element at the current index is greater than the element at the next index we swap them.
      		if(array[index] > array[index + 1]) swap( array, index, index + 1 );
    	});
	});
	return array
}
// Helper swap function to swap two elements in an array. 
let swap = (array, a, b) => {
  var temp = array[a];array[a] = array[b]; array[b] = temp;
}