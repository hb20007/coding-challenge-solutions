const { readFileSync } = require('fs');
const partOne = require('./partOne');
const partTwo = require('./partTwo');

const INPUT = readFileSync(`${__dirname}/input.txt`);

console.log('PART 1:', partOne(INPUT));

const LIMIT = 10000;

console.log('PART 2:', partTwo(INPUT, LIMIT));
