// completed 9-13-2016

//Given a string, return true if it contains balanced parenthesis.

// Solution //

function isBalanced (string) {
	//  Hold parentheses in a string to check against.
	let parentheses = "()";
	// Create an empty array to use as a stack.
	let stack = [];
	// Variable to hold the character we are  
	let character;
	// Variable to hold the position of the brace position in our parentheses variable.
	let bracePosition;
  	// Loop through the string and set character to the character at string[i]
  	for(let i = 0; character = string[i]; i++) {
    	// set brace position to the index of the character in the parentheses string.
    	bracePosition = parentheses.indexOf(character);
    	// If bracePosition is === -1 we know that the character is not a parentheses.
    	// Continue.
    	if(bracePosition === -1) continue;
    
    	// THE ONLY WAY WE WILL GET TO THIS POINT IS IF THE CHARACTER IS EITHER 
    	// A "(" OR A ")".
    
    	// If bracePosition is 0 we know that the character is a "(".
    	if(bracePosition === 0) {
      	// Push a closing parenthesis into the stack.
      		stack.push(")");
    	// Other wise the brasePosition must be a 1 and the character must be ")"
    	} else {
      	// if the value we pop off is not a closing parenthesis, we know that the parentheses can not be balanced.
      		if(stack.pop() !== ")") {
        		return false;
      		}
    	}
  }
	// Finally return true if the stack is empty and false if not.
	return !stack.length;
}
