// completed 8-31-2016

// Find the first item that occurs an even number of times in an array. 
//Remember to handle multiple even-occurrence items and return the first one. 
//Return null if there are no even-occurrence items.

// Examples
// Input						  |	Output
// [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]  |	2
// [ "cat", "dog", "dig", "cat" ] | "cat"

// Solution //

function evenOccurrence (arr) {
	// First, count how many times each character occurs. 
	const chCnt = arr.reduce((a,b) => {a[b] = a[b] + 1 || 1; return a;}, {});
	//The value of chCnt[item] will be the number of times item occurred.
	//We want to return the first item that occurs an even amount of times.
	return arr.filter(item => chCnt[item] % 2 ===0)[0] || null;
}
