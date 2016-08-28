// completed 8-28-2016

// Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

// pigIt('Pig latin is cool'); should return 'igPay atinlay siay oolcay'

// Solution //

function pigIt(str){
	// First split string into an array of with each word at its own index.
	// Then map the array to a new array with the first letter moved to the of each word.
	// Add +'ay' to the end of each word. Finally join the mapped array to a string seperated by space.
	return str.split(' ').map(word => word.substr(1) + word.substr(0,1) + 'ay').join(' ')
} 	