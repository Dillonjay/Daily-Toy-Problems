// completed 10/6/2016

// String Strip
// Write a function that removes a given character from both ends of a given string.
// If no character is given, then strip spaces instead.

// Examples
// Input						 |		Output
// str: "abc" character: "c"	 |		"ab"

// str: "abc" character: "a"	 |      "bc"

// str: "aba" character: "a"	 |      "b"

// Solution //

function strip (str, character) {
	// If the character is not false, return the string with the character removed at the front and at the end.
	// Other wise, trip the whitespace at the start and end of the string. 
	return character ? str.replace(RegExp(`(^${character}+|${character}+$)`, 'g'), "") : str.trim();
}