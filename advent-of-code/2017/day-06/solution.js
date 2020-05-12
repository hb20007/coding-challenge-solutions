const { readFileSync } = require('fs');
const partOne = require('./partOne');
const partTwo = require('./partTwo');

const INPUT = readFileSync(`${__dirname}/input.txt`, 'utf8')
  .split(/\s+/)
  .map((bank) => parseInt(bank));

console.log('PART 1:', partOne(INPUT));

console.log('PART 2:', partTwo(INPUT));
