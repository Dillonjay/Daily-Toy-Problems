// completed 10-11-2016

// Write a function that title-cases a string of words. 
// Make a distinction between prepositions (that shouldn't be capitalized) and other words (which should be capitalized).



// Solution //
function titleCase(str) {
    // Declare a list of prepositions.
    var small =['about', 'above','across','after','against','along','among','around','at','before','behind','below','beneath','beside','between','by','down','during','except','for','from','in','inside','into','like','near','of','off' ,'on','onto','outside','over','past','since','through','to','toward','under','underneath','until','up','upon','with','within','without' ]
    // Make your string lowercase and split it into an array.
    // Then map to an array with every word capitalized except for prepositions
    return str.toLowerCase().split(' ').map(word => {
        // If you encounter a preposition, return it how it is(lower case)
        if(small.includes(word)) return word;
        // Otherwise, return the word with the first letter capitalized.
        else return word.replace(word[0], word[0].toUpperCase());
        // Finally, join the array into a new string.
    }).join(' ');
}