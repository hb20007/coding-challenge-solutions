const partOne = require('./partOne');
// const partTwo = require('./partTwo');

const { readFileSync } = require('fs');
const input = readFileSync(__dirname + '/input.txt', 'utf8');

console.log('PART 1:', partOne(input));

// console.log('PART 2:', partTwo(input));