// completed 9-1-2016

// Given a positive number, return the sum of all positive primes that are less than or equal to that number.

// Solution //

function sumOfPrimes (n) {
 	var prime = [];
 // If n is 1 we immediately return 0.
 	if(n === 1) return 0;
 	for(var i = 2; i <= n; i++) {
 		// Only push the number into our prime array if it is a prime number.
    	isPrime(i) ? prime.push(i) : null
 	}
 	// If the array is not empty, total the sum. 
 	return prime.length >=1 ? prime.reduce((a,b) => a + b) : 0
}

// Helper function to test if a number is prime.

function isPrime(n) { 
	if(n === 2) return true;  
 	else {  
 	// Start the loop at 2 and end it one number before n.
    	for(var i = 2; i < n; i++) { 
      // If n divides by any number evenly, we know that it is not prime. 
     		 if(!(n % i)) return false;  
    	}  
    return true;    
  	}  
}  
