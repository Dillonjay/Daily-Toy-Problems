// completed 9-6-2016

// Alphabet Inventory
// Given an alphabet and a string of text, write a method that tallies the count of each letter defined in said alphabet (case insensitive), then return the result of this tally.
// Examples :
// Input	                                       Output
// alphabet:"aBc" text:"aabbccdd"               |  "a:2,b:2,c:2"
// alphabet:"x" text:"Racer X is my friend :)"	|  "x:1"
// alphabet:"123" text: "o hai"	                |  "no matches" 

// Solution // 

function alphaCount (alphabet, text) {
	// Create an array to store the answer.
	var answer = [];
	// First make the entire text argument lowercase.
	// Create an object with the character count of the text argument. Ex: {a:2, b:3, c:5}.
	var chCnt = text.toLowerCase().split('').reduce((a,b) => {
    	a[b] ? a[b]++ : a[b] = 1;
    	return a
	},{});
	// Make enitre alphabet argument lowercase.
	// Make alphabet an array and loop through it. 
	alphabet.toLowerCase().split('').forEach(item => {
		// If the chCnt object has the item as a property push push the character into the answer array. Ex: a:4.
    	chCnt.hasOwnProperty(item) ? answer.push(item + ':' + chCnt[item]) : null;
	});
	// If the answer array is empty return 'no matches'. If not return the answer array joined to a string.
	return answer.length === 0 ? 'no matches' : answer.join();
}
