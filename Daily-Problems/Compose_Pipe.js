// completed 9-22-2016

// Implement the functions compose and pipe.

// Compose
// Compose should return a function that is the composition of a list of functions of arbitrary length. Each function is called on the return value of the function that follows.

// You can think of compose as moving right to left through its arguments.

// Example
// var greet = function(name){ return 'hi: ' + name;}
// var exclaim = function(statement) { return statement.toUpperCase() + '!';}

// var welcome = compose(greet, exclaim);
// welcome('phillip'); //=> 'hi: PHILLIP!'

//Pipe:
// Pipe composes a series of functions and returns the resulting function. Each function is called on the return value of the preceding function.

// You can think of pipe as moving left to right through its arguments.

// Example
// var add2 = function(number){ return number + 2; }
// var multiplyBy3 = function(number){ return number * 3; }

// pipe(add2, multiplyBy3)(5) //=> 21
// pipe(add2, multiplyBy3, multiplyBy3)(5) //=> 63
// HINT: You should use the functions reduce() and reduceRight() in your solutions.

// Solution //

function compose() {
	// Grap all of the arguments that are supplied to the compose funtion. (arguments will be functions)
	// Then return an anonymous function that has closure to the supplied functions. 
	// Need to copy the arguments as an array so we can use array methods on it. 
	let args = Array.prototype.slice.call(arguments);
	// Reduce the array of functions from the right calling the last function with the argument provided to the anonymous function.
	// As reduce iterates, it will call the next function in the array with the return value of the previous.
	return (arg) =>  args.reduceRight((pre, curr) =>  curr(pre), arg);
};

function pipe() {
	// Use the compose function to accomplish the same task except in the reverse order. 
	return compose.apply(null, Array.prototype.slice.call(arguments).reverse());
};




