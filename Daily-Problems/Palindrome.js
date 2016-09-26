// completed 9-26-2016
// Given a string, return true if it’s a palindrome, and false otherwise. 
// Only consider alphabet characters as part of the word.

// Examples 
//  Input	      		Output
// str: "kayak"		|	true
// str: "race car"  |	true
// str: "Civic"		|	true
// str: "Honda"		|	false

// Solution //

function isPalindrome (str) {
	// First split the string into an array.
	// Then reverse and join it back into a string.
	// Then replace every space with no space and make every character uppercase.
	// Compare equality with the same string with no spaces and uppercase.
	// Return the result of equality.
	return str.split('').reverse().join('').replace(/\s/g,'').toUpperCase() === str.replace(/\s/g,'').toUpperCase();
};
