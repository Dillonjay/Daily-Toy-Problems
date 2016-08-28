// completed 8-27-2016 

// A new law has been passed that mandates a tax on genetically modified food. 
// A certain farmer decides to increase the price of his goods by 15% in response, and wants your help on analyzing the difference.
// Given the farmer’s catalog of original prices and a category name, your task is to return the sum of all price increases 
// for foods in that category after the 15% increase (round to the nearest cent).

// NOTE: You are required to use at least one filter. Pros can use reduce to make their code even more functional-style.

// Solution //

function getTaxIncrease (foods, category) {
	return foods.filter(function(item){
		// first filter out the foods that match the provided catagory.
  		return item.category === category;
	}).map(function(veg){
		// then map a new array of each items cents per unit with 15% increase.  
		return veg.centsPerUnit;
	}).reduce(function(x,y){
		// finally, return the sum of the new prices.
		return x+y;
	})
}
// shorter ES6 version
function getTaxIncrease (foods, category) {
	return foods.filter(item => item.category === category)
  	.map(veg => veg.centsPerUnit/100*15)
  	.reduce((x,y) => x+y)
}