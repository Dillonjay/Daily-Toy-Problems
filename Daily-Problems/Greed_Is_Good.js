// completed 8-29-2016

//  Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
//  A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   50 + 2 * 100 = 250
//  1 1 1 3 1   1000 + 100 = 1100
//  2 4 4 5 4   400 + 50 = 450

// Solution //

function score( dice ) {
	// declare an array to store the scores.
  	var score = [];
  	//create an object with character count of each number.
	var chCnt = dice.reduce((a,b) => {
		a[b]? a[b]++ : a[b] = 1
		return a;
	},{});
	
	for(var key in chCnt) {
		//check for any instances of '1'.
		if(key === '1') {
			// if less than 3, we know to multiply the count by 100(either 1 or 2.)
			if(chCnt[key] < 3) {

				score.push(chCnt[key] * 100);
			// if greater than three, we know to multiply the remaining by 100(4 or 5) plus 1000.
			} else if(chCnt[key] > 3) {
				
				score.push((chCnt[key] - 3) * 100 + 1000);

			} else {
				// else we know that '1' occured exactly 3 times. 
				score.push(1000);

			}
		// check for any instances of '5'	
		} else if(key === '5') {
			// if less than 3, we know to multiply the count by 50(either 1 or 2).
			if(chCnt[key] < 3) {	

				score.push(chCnt[key] * 50);
			// if greater than three, we know to multiply the remaining by 50 (also 1 or 2) plus 1000.	
			} else if(chCnt[key] > 3) {

				score.push((chCnt[key] - 3) * 5	0 + 500);
			// else we know that '5' occured exactly 3 times. 	
			} else {

				score.push(500);

			}
		// check for any other number that has three instances.	
		} else if(chCnt[key]>=3) {
			// we then know to myltiply whatever number it is by 100.
			score.push(key * 100);

		}
	}
	// if the score is not empty, return the sum of scores. 
	return score.length ? score.reduce((a,b) => a + b) : 0;
}






