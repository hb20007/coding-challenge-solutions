import { readFileSync } from 'node:fs';
import partOne from './partOne.js';
import partTwo from './partTwo.js';

const INPUT = readFileSync(`${import.meta.dirname}/input.txt`, 'utf8')
  .split('\r\n')
  .map((line) => line.split('\t').map((num) => Number.parseInt(num)));

console.log('PART 1:', partOne(INPUT));

console.log('PART 2:', partTwo(INPUT));
