// completed 8-26-2016

// Make an array method that can
// return whether or not a context
// array is a subset of an input array. 
// To simplify the problem, you can assume that 
// both arrays will contain only strings.

// Solution //

Array.prototype.isSubsetOf = function(array) {
  // iterate through the array that you are calling isSubsetOf on.
  // check to see if every item in that array is in the array that you are checking.
  return this.reduce((pre,cur) => (!pre) ? false : array.includes(cur),true);
};
