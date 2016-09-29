// completed 9-29-2016

// Given a number, reverse it. 
// Ex:
// input |  output
// 5544  |  4455
// 123   |  321


// Solution //
function reverseInteger (n) {
	// Convert the number to a string, split to an array, reverse it join it, then convert back to a number.
	return Number(n.toString().split('').reverse().join(''))
}