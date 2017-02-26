// Completed Feb 26th 2017

// Write a function, which takes a non-negative integer (seconds) as input 
// and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)


// Solution //

function humanReadable(seconds) {
	var hr = Math.floor( seconds/3600 );
	var min = Math.floor(( seconds%3600 ) / 60);
	var sec = ( seconds % 3600 ) % 60;
	if ( hr < 10 ) hr = '0'+ hr;
	if ( min < 10 ) min = '0'+ min;
	if ( sec < 10 ) sec = '0'+ sec;    
	return `${hr}:${min}:${sec}`;
}