// completed 8-21-2016

// Words within Words
// Given an array of unique words, find the word that contains the greatest number of other words. 
//A word must be at least two letters long. For an added challenge, try for O(n).

// Examples
// Input													| Output
// wordList:[ "gray", "grays", "ray", "rays", "strays" ]	| "grays"

// Solution //

function nestedWordCount (wordList) {
	// Keep track of the total count of words that the current word contains.
	var totalCount = 0;
	return wordList.reduce((long, curr) => {
    	var count1 = wordList.reduce((count, word) => {
    	// If the word we are checking in the outer reduce iteration contains one of the words in the array,
    	// and the length of the of the word is greater than two we incriment count by 1.
    	// Otherwise we just return count. 
     	return curr.toLowerCase().indexOf(word.toLowerCase()) > -1 && word.length > 2 ? count + 1 : count;
   		}, 0);
   	// Once the inner reduce is finished running we can check if the count is greater than our total count. 
   	// If it is we set total count to the value of count1 and return the word we are checking.
   	if (count1 > totalCount) {
    	totalCount = count1;
    	return curr;
   }
  	// Otherwise return word that currently has the most other words in it. 
   return long;
	}, '');
}