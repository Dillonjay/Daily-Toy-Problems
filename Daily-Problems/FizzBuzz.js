// completed 9-12-2016

// FIZZBUZZ
// Fill in your function, so that if the number that was passed in to the function is divisible by 3 it returns the value “Fizz”,
// if the value is divisible by 5 it returns “Buzz”, if the value is divisible by both 3 and 5 return the value “FizzBuzz”, 
// and finally if the number is not divisible by any of those just return the value.

// Solution //

function FizzBuzz (value) {
	// Concat the empty string with either "Fizz", "Buzz", Both or two empty strings.
	// An empty string is falsey, so if the left side of the logical operator is === "", return the value.
	return "" + (value % 3 === 0 ? "Fizz" : "") + (value % 5 === 0 ? "Buzz" : "") || value;
};
