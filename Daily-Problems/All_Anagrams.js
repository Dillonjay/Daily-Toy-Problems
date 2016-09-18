// completed 9-18-2016

// Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. 
// At first, don’t worry about repeated strings.

// Examples
//    Input        |                  Output
// string: "abc"   | [ "abc", "acb", "bac", "bca", "cab", "cba" ]

// Solution //

function allAnagrams (string) {
  // If the string is only one letter, return it as an array.
  if (string.length === 1) {
    return [string];
  } else {
    // Array for storing answers.
    let ans = [];
    // Loop through the string keeping track of the index.
    string.split('').forEach((letter, i) => {
      // Take out the letter at the current index and recursively grab all anagrams for the new string.
      let word = string.substr(0, i) + string.substr(i + 1,string.length-1);
      let wordAr = allAnagrams(word);
      wordAr.forEach((b, j) => {
        // If the anagram has not yet been accounted for, put if in the answers array.
        ans.indexOf(letter + wordAr[j]) === -1 ? ans.push(letter +wordAr[j]) : null;
      })
    })
    // Return the answer.
    return ans;
    }
}