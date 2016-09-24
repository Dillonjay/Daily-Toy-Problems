// completed 9-24-2016

// Given a string of only lowercase alphabet characters, find the character that occurs the highest number of times. 
// If any characters tie, return them all in alphabetical order.

// Examples
// Input			  | Output
// str: "abcdc"		  | "c"
// str: "occurring"   |	"cr"
// str: "xxyyzz"	  | "xyz"

// Solution //

function highestFreq (str) {
	// Create an object displaying the character count for each character.
 	let count = str.split('').reduce((a,b) => {
    	a[b] ? a[b] ++ : a[b] = 1;
    	return a;
 	},{});
 	// Reduce the keys of our count object
 	return Object.keys(count).reduce((a,b,c) => {
 		// If the array provided to reduce is empty. Push in the first element.
 		// We need to start comparing elements.
    	if(!a.length) {
     		a.push(b);  
     	// If the first element in the array is appears less times than the current character.
     	// Empty out the checker array and push in the new element.
    	} else if(count[a[0]] < count[b]) {
      		while(a.length){
       			a.pop();
      		}
     		 a.push(b);
     	// If the current element appears the same amount of times as the first element in the array.
     	// Push it in the array as well.
    	} else if(count[a[0]] === count[b]) {
      		a.push(b);
    	}
    	// Return the array after each iteration. 
    	return a;
    	// Finally sort the array and join it into a string.
  	}, []).sort().join('');
}
