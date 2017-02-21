// Completed Feb 20 2017

// You have a positive number n consisting of digits. You can do at most one operation: 
// Choosing the index of a digit in the number, remove this digit at that index and insert it back to another place in the number.

// Doing so, find the smallest number you can get.

// Task:
// Return an array or a tuple depending on the language (see "Your Test Cases" Haskell) with
// 1) the smallest number you got
// 2) the index i of the digit d you took, i as small as possible
// 3) the index j (as small as possible) where you insert this digit d to have the smallest number.

// Example:
// smallest(261235) --> [126235, 2, 0]


// Solution //

function smallest(n) {
  var s = n.toString();
  var min = [+n,0,0];
  for (var i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      var temp = s.slice(0,i) + s.slice(i+1);
      temp = temp.slice(0,j) + s[i] + temp.slice(j);
      if (+temp < min[0]) {
        min = [+temp, i, j];
      };
    };
  };
  return min;   
};