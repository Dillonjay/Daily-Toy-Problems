// Completed Feb 16 2017 //

// Delta Storage source control software stores versions of files in diffs. In other words, 
//if a developer added 3 lines to myfile.txt, then those three line additions will be what gets saved when committed.

// Given a list of changes for a single “file”, construct the final result as a single string.



// Input																			Output

// changes:
// [ 
// 	[ 
// 		{ "type": "add", "line": 0, "text": "there\n" } 
// 	],      														  |          "hi\nthere\n"
//  [ 
//  	{ "type": "add", "line": 0, "text": "hi\n" } 
//  ] 
// ]	
// changes:
// [ 
// 	[ 
// 		{ "type": "add", "line": 0, "text": "pillow\nhogs\n" } 
// 	],
// 	[ 
// 	 	{ "type": "rem", "line": 1, "count": 1 }					   |	"fluffy\npillow\ncarnivores\n"
// 	], 
// 	[ 
// 	 	{ "type": "add", "line": 0, "text": "fluffy\n" }, 
// 	 	{ "type": "add", "line": 2, "text": "carnivores\n" } 
// 	]
// ]	

// Solution //

function reconstruct (changes) {
	var lines = [];
	// First reduce to a single array of change objects. Then loop through changes
	changes.reduce((a, b) => ( a.concat(b)), []).forEach( function(change) {
    	if (change.type === 'add') {
    		// Simply add the text to the specified line index. 
      		lines.splice(change.line, 0, change.text);
      		lines = lines.join('\n').split(/\n+/);
    	} else if (change.type === 'rem') {
    		// Simply splice out the specified count of words at the specfied line index.
      		lines.splice(change.line, change.count);
    	}
  	});
  	return lines.join('\n');
};