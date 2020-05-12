const { readFileSync } = require('fs');
const partOne = require('./partOne');
const partTwo = require('./partTwo');

const INPUT = readFileSync(`${__dirname}/input.txt`, 'utf8')
  .split('\r\n')
  .map((str) => parseInt(str));

console.log('PART 1:', partOne(INPUT.slice())); // We pass in a shallow copy because the function modifies the values in INPUT.

console.log('PART 2:', partTwo(INPUT));
