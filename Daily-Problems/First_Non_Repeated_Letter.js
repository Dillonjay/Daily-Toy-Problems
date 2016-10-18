// completed 10-18-2016

// Write a function named firstNonRepeatingCharacter that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. 
// For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return the empty string ("").

// Solution //

function firstNonRepeatingCharacter(s) {
	// Run a for in loop on the provided string.
 	for(var i in s) {
 		// If the matching array only contains one item, we know that we have found the first nonrepeated.
 		// Exit the loop by returning the character. 
    	if(s.match(new RegExp(s[i],"gi")).length === 1) {
      		return s[i];
    	}
  	}
  	// If we have not found a non repeated character after looping through the whole string, return ''
 	return '';
}
