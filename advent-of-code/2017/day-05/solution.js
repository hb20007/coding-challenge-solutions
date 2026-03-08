import { readFileSync } from 'node:fs';
import partOne from './partOne.js';
import partTwo from './partTwo.js';

const INPUT = readFileSync(`${import.meta.dirname}/input.txt`, 'utf8')
  .split('\r\n')
  .map((str) => Number.parseInt(str));

console.log('PART 1:', partOne(INPUT.slice())); // We pass in a shallow copy because the function modifies the values in INPUT.

console.log('PART 2:', partTwo(INPUT));
