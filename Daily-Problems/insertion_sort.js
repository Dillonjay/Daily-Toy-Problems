// Completed Feb 18 2-12 //

// Good old insertion sort. O(n2)


// Solution // 

function insertionSort(array) {
	let temp, j;
	// Avoid mutation
	array = array.slice();
 	for(var i = 1; i < array.length; i++) {
 		// Assign value to be inserted.
    	temp = array[i];
    	j = i;
    	// While the current index - 1 is greater than the value to be inserted, shift.
    	while(j > 0 && temp < array[j - 1]) {
     		array[j] = array[j - 1]
      		j--;
    	}
    	// Insert value
    	array[j] = temp
  	}
  	return array;
}