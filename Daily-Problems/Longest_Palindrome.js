// completed 8-25-2016

//Longest Palindrome
//Find the length of the longest substring in the given string s that is the same in reverse.

//As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

//If the length of the input string is 0, return value must be 0.

// Solution //

longestPalindrome=function(s){
  var palindromes = [];
  
  for (var i=0; i<s.length; i++) {
    for (var j=1; j<s.length+1; j++) {
      var sub = s.slice(i,j);
      //check if substring is a palindrome
      if (sub === sub.split('').reverse().join('')) {
        palindromes.push(sub);
      }
    }
  }
  // return the longest palindrome length
  return palindromes.length > 0 ? 
  palindromes.reduce(function (a, b) { return a.length > b.length ? a : b; }).length : 0;
}