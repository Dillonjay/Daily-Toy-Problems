// completed 9-4-2016

// Given an array of negative/positive integers, return the element in the center position of the array.

// If the array has an even number of elements, return the average of the two middle elements instead.

// Solution //

function middle (numbers) {
 return numbers.length % 2 === 0 ?
 // If there are an even amount of elements we find the average of the two middle elements.
 (numbers[Math.floor(numbers.length / 2)] + numbers[Math.floor(x.length / 2) - 1] ) /2 :
 // Else we return the middle element. 
  numbers[Math.floor(numbers.length / 2)]
}
