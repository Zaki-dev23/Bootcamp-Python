const _ = require('loadsh')
const { add, mult } = require('./math')

console.log('add : ', add(5, 10));
console.log('mult : ', mult(5, 10));
// add :  15
// mult :  50

const numbers = [10, 5, 4, 6]

console.log(_.sum(numbers));
console.log(_.max(numbers));
console.log(_.min(numbers));
console.log(_.mean(numbers));
// 25
// 10
// 4
// 6.25

