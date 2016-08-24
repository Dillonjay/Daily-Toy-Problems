// completed 8-23-2016

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns N.

// For example:
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160

//solution// 

function findOutlier(integers){
 // create two arrys of odd and even integers.
 let even = integers.filter((item) => item % 2 === 0);
 let odd = integers.filter((item) => item % 2 !==0);
 // if the even array only has one item, we know that the pop value is the outlier. 
 // vise versa. 
 return even.length === 1 ? even.pop() : odd.pop();       
}