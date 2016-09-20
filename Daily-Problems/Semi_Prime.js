// completed 9-20-2016
// This is a problem that I created on the challenge app for hackreactor.

// Semiprime number!

// A semiprime is the product of two prime numbers.
// Given a semiprime, write a function that will return an array of both prime numbers that were used to create it.
// Only small semiprimes will be passed to your function so don’t worry about timing out.

// Examples

// 	Input	  |	 Output
// number: 6  | [ 2, 3 ]
// number: 55 | [ 5, 11 ]
// number: 20 | "Number is not semiprime"

function semiPrime(x) {
	for(var i = 2; i < x; i++) {
		// If i is a prime number, go in and check. 
	 	if(isPrime(i)) {
	 		// Loop again starting at i;
		 	for(var j = i; j < x; j++) {
		 		// If j is prime and j * i is equal to the semprime
				if(isPrime(j) && (j * i === x)) {
					// Return the numbers in an array.
					return [i,j];
				}
			}
		// If i isnt prime we continue to the next itteration.
		} else {
			continue;
		}
	}
	return 'Number is not semiprime'
};
// Helper function to check if a number is prime or not.
function isPrime(x) {
	// If the number is one return false.
	if(x === 1) return false;
	// Start the forloop at 2.
 	for(var i = 2; i < x; i++){
 		// If number is evenly divisible by any number we know that it is not prime.
		if( x % i === 0) return false;
	}
	// Else return true.
	return true;
};

