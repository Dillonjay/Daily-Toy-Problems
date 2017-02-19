// Completed Feb 19 2017 //

// Just some javascript selection sort for ya. 


// Solution //

function selectionSort(array) {
  for(let i = 0; i < array.length -1; i ++) {
    let min = i;
    // Start loop at i because
    for (let j = i; j < array.length; j++) {
      // Assign new min
      if(array[j] < array[min]) min = j;
    }
  }
  // If there is a new min value, swap to place it in its place.
  if(min !== i) [array[min], array[i]] = [array[i], array[min]];
  return array
}