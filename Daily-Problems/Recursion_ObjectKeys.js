//completed 9-28-2016

// Write a function that will take an object as a paramater. Every value in the object will be a number. 
// Your job is to remove all of the odd values from the object. The catch is that you must use recursion and Object.keys in your solution.
// Ex:
// Input   													Output
// obj = {legs:2,fingers:5,toes:5, nose:1, eyes:2}     |    {eyes:2, legs:2}

// Solution //
function removeOddValuesRecursion(obj) {
	// Base case is when our oject is empty.
	if(Object.keys(obj).length === 0) {
		return {};
	} else if(obj[Object.keys(obj)[0]] % 2 === 0) {
		// If the value of our Object at keys[0] is even, Extend our return object to contain the key value pair. 
		var key = Object.keys(obj)[0];
		var value = obj[Object.keys(obj)[0]];
		// Delete first key value pair after checking it.
		delete obj[Object.keys(obj)[0]];
		return Object.assign(removeOddValuesRecursion(obj),{[key]: value})
	} else {
		// If the value is not even. We dont do anything. 
		delete obj[Object.keys(obj)[0]];
		return removeOddValuesRecursion(obj);
	}
 }