// completed 10-16-2016

// This is an extension of the Dog Walker problem.
// Write a function that tells you, given a time of day, a list of all the dogs that are to be walked in that time of day throughout the week. If no dog is to be walked in that time slot on a given day, it should be marked "N/A". 

// Return a list, in ascending order of time, in this data format:

// [
//   {'Mon': 'Bowser'},
//   {'Tue': 'N/A'},
//   {'Wed': 'Ladykiller'},
//   {'Thu': 'N/A'}
// ]


var sched = {
  mon: {
    nine: '',
    ten: '',
    elev: '',
    noon: '',
    one: '',
    two: '',
  },
  tue: {
    nine: '',
    ten: '',
    elev: '',
    noon: '',
    one: '',
    two: '',
  },
  wed: {
    nine: '',
    ten: '',
    elev: '',
    noon: '',
    one: '',
    two: '',
  },
  thr: {
    nine: '',
    ten: '',
    elev: '',
    noon: '',
    one: '',
    two: '',
  },
}


function timeCheck(str) {
	// Create the results array to sore days. 
	let results = [];
	// Loop through the days. 
    for(let day in sched){
    	// Loop through each day and find the time provided. 
        for(let time in sched[day]){
        	// If we find the time we are gonna push it as an object into our results array.
            if(time.toLowerCase() === str.toLowerCase()){
            	// If there is no dog at the slot push in the day and 'N/A'
                if(sched[day][time] === ''){
                    results.push({[day] : 'N/A'})
                } else {
                	// Otherwise push the day and the dog in the results array.
                    results.push({[day]: sched[day][time]})
                }
            }
        }
    }
    return results;
}