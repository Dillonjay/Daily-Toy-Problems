// completed 10-9-2016

// Write a function that determines which of the next n years is a leap year.
// If the caller passes in 300, then the program should return the leap years between 2016 and 2316.

// Solution //
function leapYears(num) {
	// Set i to the current year. 
	// Set year to be i plus the number of years provided.
	// Create an array to store the results.
	var i = new Date().getFullYear(), year = i + num, results = [];
	// Loop from the current year to the year provided. 
	for(i; i <= year; i++) {
		// If the year is evenly divisible by four and not evenly divisible by 100 push it in the resluts.
		// If the year is evenly divisible by four hundred, push it in the results array.
		if((!(i % 4) && (i % 100)) || !(i % 400)) results.push(i);
	}	
	//return the results array;
	return results;
}