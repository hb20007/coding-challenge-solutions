const { readFileSync } = require('fs');
const partOne = require('./partOne');
const partTwo = require('./partTwo');

const INPUT = readFileSync(`${__dirname}/input.txt`, 'utf8');

console.log('PART 1:', partOne(INPUT));

console.log('PART 2:', partTwo);
