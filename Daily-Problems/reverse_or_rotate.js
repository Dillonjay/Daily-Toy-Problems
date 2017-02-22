// Completed Feb 22 2017

// The input is a string str of digits. Cut the string into chunks 
// (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; 
// otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If
// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> "" 
// revrot("563000655734469485", 4) --> "0365065073456944"	

// Solution //

function revrot(str, sz) {
	// First see if there is a need to continue. If not return "".
    if(!str.length || sz <= 0 || sz > str.length) return "";
    var chunks = [];
    // Get chunks of length sz and put them into the chunks array only while the length of the str is >= sz.
    while(str.length >= sz) {
    	chunks.push(str.slice(0,sz));
    	str = str.slice(sz, str.length);
    }
    // Map chunks array to reflect the new individual chunks.
    chunks = chunks.map(function(number) {
    	// Get the cubed sum for the number.
    	var cubedSum = number.split('').reduce(function(a,b) {
        	return a + Math.pow(b,3)
    	},0);
    	// If the cubed sum is divisible by 2 reverse it, otherwise shift one position.
    	if( cubedSum % 2 ) {
        	return number.slice(1) + number[0];
    	} else {
        return number.split('').reverse().join('')
    	}
    });
    // Join all of the new chunks into one string.
    return chunks.join('');
};