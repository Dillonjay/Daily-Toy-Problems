// completed 9-17-2016

// Zero Sum
// Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

// Examples

// Input					 |	Output
// numbers: [ 1, 3, 2, -3 ]	 |	true
// numbers: [ 5, 7, 2, 9 ]	 |	false

// Solution //

function zeroSum (numbers) {

	return numbers.reduce((found, cur, i) => {
    	return found ? true : !(numbers.find((other, j) =>  i !== j && cur + other === 0) === undefined)
	}, false)
};
