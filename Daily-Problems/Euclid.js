// completed 10-19-2016

// Compute the greatest common divisor of two nonnegative integers p and q as follows:
// If q is 0, the answer is p. If not, divide p by q and take the remainder r.
// The answer is the greatest common divisor of q and r.

// Solution

function gcd(a,b) { 
 	return b === 0 ? a : gcd(b, a % b)
}
