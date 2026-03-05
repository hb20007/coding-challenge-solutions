const { readFileSync } = require('node:fs');
const partOne = require('./partOne');
const partTwo = require('./partTwo');

const INPUT = readFileSync(`${__dirname}/input.txt`, 'utf8')
  .split('\r\n')
  .map((line) => line.split('\t').map((num) => Number.parseInt(num)));

console.log('PART 1:', partOne(INPUT));

console.log('PART 2:', partTwo(INPUT));
