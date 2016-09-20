// completed 9-19-2016

// Implement a function that sorts an array of numbers using the “mergesort” algorithm.

// Mergesort uses a divide-and-conquer strategy. 
// It begins by treating the input list of length N as a set of N “sublists” of length 1, which are considered to be sorted. 
// Adjacent sublists are then “merged” into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so on, until only a single sorted list remains. 
// (Note, if N is odd, an extra sublist of length 1 will be left
// after the first merge, and so on.)

// This can be implemented using either a recursive (“top-down”) or an iterative (“bottom-up”) approach.


// Solution //

function mergeSort(arr) {
  let left, right, middle = Math.floor(arr.length/2);
  
  /*
  This function is run recursively. It progressively makes each half of the 
  input array smaller and smaller until it is 1 or 0 in length. Then
  each sorted portion is then merged back together from the 
  smallest array size up until the entire thing is sorted
  */ 
  if (arr.length <= 1) {
    return arr; //too small to split -- time to merge!
  } else {
    left = mergeSort(arr.slice(0, middle)); //sort the left half
    right = mergeSort(arr.slice(middle)); //sort the right half
    return merge(left, right); //then merge those two together and return
  }
};
 
function merge(left, right) { 
  //This is the function that is really doing the sorting by comparison
  let result = [], leftIndex = 0, rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    //while our counters are less than the lengths of the respective arrays
    if (left[leftIndex] < right[rightIndex]){
      //put the smaller value into the result array
      result.push(left[leftIndex]);
      leftIndex++; 
      //incremend leftCounter to reflect we have "remove" a value from it
    } else {
      //otherwise the right one was smaller or the same size
      result.push(right[rightIndex]);
      rightIndex++; //same as before
    };
  };
  var res = left.slice(leftIndex).concat(right.slice(rightIndex))
  //this is just adding all of the parts back together
  //slicing from where those pointers ended
  return result.concat(res);
};