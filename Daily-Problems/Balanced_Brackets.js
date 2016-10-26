// completed 10-26-2016

// Balanced Brackets with all brackets.

// Solution //

function isBalanced (str) {
  var brackets = '{}()[]';
  var stack = [];
  for(var i = 0; i < str.length; i++) {
    if(brackets.indexOf(str[i]) !== -1){
      if(!(brackets.indexOf(str[i]) % 2)) {
        stack.push(brackets[brackets.indexOf(str[i]) + 1]);
      } else {
        if(stack.pop() !== str[i]) return false;
      }
    }
  }
  return stack.length === 0
}
