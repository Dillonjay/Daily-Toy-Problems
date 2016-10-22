// completed 10-22-2016

// Implement an iterator to flatten a 2d vector.
// For example,
// Given 2d vector =
// [
//   [1,2],
//   [3],
//   [4,5,6]
// ]
// By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,2,3,4,5,6].
// Hint:
//     How many variables do you need to keep track?
//     Two variables is all you need. Try with x and y.
//     Beware of empty rows. It could be the first few rows.
//     To write correct code, think about the invariant to maintain. What is it?
//     The invariant is x and y must always point to a valid point in the 2d vector. Should you maintain your invariant ahead of time or right when you need it?
//     Not sure? Think about how you would implement hasNext(). Which is more complex?
//     Common logic in two different places should be refactored into a common method.

// Solution //

var Vector2D = function(vec2d) {
    this.vec = vec2d;
    this.row = 0;
    this.col = 0;
};

Vector2D.prototype.hasNext = function() {
    if (this.vec.length === 0) {
        return false;
    }
    if (this.col === this.vec[this.row].length) {
        this.col = 0;
        this.row++;
    }
    while (this.row < this.vec.length && this.vec[this.row].length === 0) {
        this.row++;
    }
    if (this.row === this.vec.length) {
        return false;
    }
    return true;
};

Vector2D.prototype.next = function() {
    const val = this.vec[this.row][this.col];
    this.col++;
    return val;
};