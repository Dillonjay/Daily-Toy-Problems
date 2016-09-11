// completed 9-11-16

// Character Sum
// Given a string of arbitrary size, convert each character into its integer equivalent and sum the entirety.

// 		Examples
//	Input			  |	Output
// str:"123"		  | 6
// str: "0101"		  |	2
// str: "so cool!!1!" |	1

// Solution //

function charSum (str) {
	// First convert string to an array of digits via regEx.
	// Reduce the array of numbers(as strings), converting each string to a number first.
	// Provide reduce with a initial value of zero for edge case when there is only one digit match.
	return str.match(/\d/gi).reduce((a,b) => Number(a) + Number(b), 0)
};
