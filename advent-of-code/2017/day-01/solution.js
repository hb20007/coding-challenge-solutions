const partOne = require('./partOne');
const partTwo = require('./partTwo');

const { readFileSync } = require('fs');
const INPUT = readFileSync(__dirname + '/input.txt', 'utf8').split('').map(x => parseInt(x));

console.log('PART 1:', partOne(INPUT));

console.log('PART 2:', partTwo(INPUT));