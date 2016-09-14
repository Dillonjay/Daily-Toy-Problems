// completed 9-14-2016

// Automated Grading
// A teacher needs your help grading her class of students. Given a report of all student grades, return both the class average and the average of each student.

// NOTE: Round any calculations to the nearest 2 decimal places.

// Examples
// Input																						Output
// report: "Jon 19 14 15 15 16\nJeremy 15 11 10 15 16\nJesse 19 17 20 19 18"  | 	{ "all": 15.93, "Jon": 15.8, "Jeremy": 13.4, "Jesse": 18.6 }

// Solution //

function autograde (report) {
	// Regular expression that will add every person with their grades as an index in array. 
	let students = report.match(/^[A-Z]\w+\W+((?:\d*)(?:\s+)).+$/gm);
	// Variables for the final answer object and an array to store all of the averages.
	let answer = {all:''}, allSums = [];
	// Loop through the students array 
	students.forEach( student => {
		// First, split the item into an array with items seprated by a space.
		// Then hold the name of the student by shifting off the first item in the array.
		let studentInfo = student.split(' '), name = studentInfo.shift();
		// Calculate the total average by reducing each item to a sum and dividing by the student infos length.
		let total = studentInfo.reduce((a,b) => Number(a) + Number(b)) / studentInfo.length;
		// Put the total into the allSums array to calculate the all average at the end.
		allSums.push(total);
		// Create a key value pair in our answer object with the key as the name and the value as the average grade.
		answer[name] = total;
	}) 
	// Add the value of all students average to as the value of our 'all' key in the answer object.
	// Round to the nearest second decimal.
	answer.all = Math.round((allSums.reduce((a,b) => a + b) / allSums.length) * 100)/100;
	// Return the answer object.
	return answer
};
