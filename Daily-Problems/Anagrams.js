// completed 9-8-2016

// Anagrams
// Given two strings, return true if one string is an anagram of another.

// Examples
// Input	       | Output

// a:"silent"      |
// b:"listen"	   | true

// a:"torchwood"   |
// b:"doctor who"  | true

// a:"why?"	       |
// b:"why not?"    | false

// Solution // 

function isAnagram (a, b) {
	// First, split both strings into arrays.
	// Next, filter out every whitespace using a regular expression. 
	// Then, alphabetically sort the arrays.
	// Finally, join them both back to strings.
	var A = a.split('').filter(a => /\S/.test(a)).sort().join('');
	var B = b.split('').filter(a => /\S/.test(a)).sort().join('');
	// Return the boolean value of weather or not they are the same thing. 
	return A === B;
};
