// completed 10-8-2016
// With the name list below, write a function that will randomly return a person to call. 
// When everyone has been called, it should begin afresh with the entire list.
var nameList = [
    'Aaron Aves',
    'Alex Duda',
    'Colton Jett',
    'Elliott Birch',
    'Jamin Ewell',
    'Jane Vaden',
    'Jared Cairns',
    'Jason Sierra',
    'Joshua Peng',
    'Nick Partridge',
    'Rachel Noble',
    'Richard Mathera',
    'Robert Ballard',
    'Sammy Icaza',
    'Samy Kebaish',
    'Silvia Fernandez',
    'Vandeth Nop',
    'Vy Trinh'
];
// First create an IFIE to return a curried function with closure to the alreadyCalled array.
var coldCall = (function() {
  var alreadyCalled = []; 
  return function recurse(people){ 
            // If the people array and alreadyCalled are the same length reset alreadyCalled.
            if(alreadyCalled.length === people.length) alreadyCalled = [];
            // Grab a random person
            var random = people[Math.floor(Math.random() * people.length)];
            // Check if that person has been called already.
            if(alreadyCalled.includes(random)) {
                // If they have, recurse until you find someone who has not.
                return recurse(people);
            } else {
                // If not, push them into the alreadyCalled array and return them.
                alreadyCalled.push(random)
                return random;
            }
        }
}());