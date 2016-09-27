// completed 9-27-2016
// Write two functions for calculating the Fibonacci of n.
// Use recursion in one function and iterate in the other.

// Solution //

// Recursion 
function fib(n) {
	//  Base case of when n is less than 2 return 1.
	if (n < 2){
		return 1;
	} else {
		// Recurse on n - 2 and n - 1.
		return fib(n-2) + fib(n-1);
	}
}

// Iteration
function fib(n) {
	// Variables to keep track of where we are at.
	var result=1, num1=0, num2=1, i=1;
	// While i is less than n, set result to the previous two fib numbers.
    while(i < n){
        num1 = num2;
        num2 = result;
        result = num1 + num2;
        i++;
    }
    // Return the result when we have calculated up to n.
    return result;
} 