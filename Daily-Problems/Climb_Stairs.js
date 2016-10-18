// completed 10-17-2016

// You are climbing a stair case. It takes n steps to reach to the top. 
// Your solution will need to be optimized to run in O(n) time complexity.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Solution // 

// Just a fibonacci problem
function climbStairs (n) {
	var arr = [],i;
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 2;
    for(i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
}
