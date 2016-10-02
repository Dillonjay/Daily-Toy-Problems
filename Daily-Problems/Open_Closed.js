// completed 10-2-2016

// We all know about "balancing parentheses" (plus brackets, braces and chevrons) and even balancing characters that are identical.

// Read that last sentence again, I balanced different characters and identical characters twice and you didn't even notice... :)

// Your challenge in this kata is to write a piece of code to validate that a supplied string is balanced.

// You must determine if all that is open is then closed, and nothing is closed which is not already open!

// You will be given a string to validate, and a second string, where each pair of characters defines an opening and closing sequence that needs balancing.

// You may assume that the second string always has an even number of characters.

// Example

//  In this case '(' opens a section, and ')' closes a section
// isBalanced("(Sensei says yes!)", "()")        => True
// isBalanced("(Sensei says no!", "()")          => False

// In this case '(' and '[' open a section, while ')' and ']' close a section
// isBalanced("(Sensei [says] yes!)", "()[]")    => True
// isBalanced("(Sensei [says) no!]", "()[]")     => False

// In this case a single quote (') both opens and closes a section
// isBalanced("Sensei says 'yes'!", "''")        => True
// isBalanced("Sensei say's no!", "''")          => False

// Solution //

function isBalanced(s, caps) {
  // Objects for stroigin pairs and closing strings.
  let pairs = {}, closers = {};
  // Loop though the caps string incrementing by 2 each time.
  // Increment by 2 because each opening string must have a closing one.
  for ( let i = 0; i < caps.length; i = i + 2) {
    // Sore key value pairs of opening and closing strings.
    pairs[caps[i]] = caps[i + 1];
    // Store the closing string as a key with a value of true.
    closers[caps[i + 1]] = true;
  }
  // Array to keep track of closing strings.
  let opened = [];
  for ( i = 0; i < s.length; i++) {
    // If the opened array is not empty and the current character is equal to the last one put in the array.
    // Pop it off.
    if ((opened.length > 0) && (s[i] === opened[opened.length - 1])) {
      opened.pop();
      // If one of the characters we encounter is an opening string.
      // Push in the corresponding closing sring.
    } else if(pairs[s[i]]) {
      opened.push(pairs[s[i]]);
      // If we encounter a closing character out of place return false.
    } else if (closers[s[i]]) {
      return false;
    }

  }
  // Return weather the opened array is empty or not. 
  return opened.length === 0;
}