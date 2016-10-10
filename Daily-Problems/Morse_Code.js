// completed 10-10-2016
// Write a program that converts a string of numbers to Morse code and vice versa.

// E.g., "143" should be ".---- ....- ...--".


// Solution //

// Helper function to grab the key.
function grabKey(obj, value) {
     for( var key in obj ) {
       if( obj[ key ] === value ) return key;
    }
}
function morse(input){
    var codes = { 0: '-----', 1: '.----', 
                  2: '..---', 3: '...--',
                  4: '....-', 5: '.....',
                  6: '-....', 7: '--...', 
                  8: '---..', 9: '----.'
                }
    // Check if input is a string of numbers.
    if(Number(input)) {
        var result = '';
        // If it is split into an array and loop.
        input.split('').forEach((num, i) => {
            // If we are on the last item in the array, add the code without a space on the end.
            i === input.length -1 ? 
            result += `${codes[num]}` : 
            result += `${codes[num]} `
        })
        return result;
    } else {
        var results = '';
        // Loop through and run our grabKey function to add the key to the results string.
        input.split(' ').forEach((code, i) => {
            results+= grabKey(codes ,code)
        })
        return results;
    }
}