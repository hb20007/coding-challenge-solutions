import { readFileSync } from 'node:fs';

const INPUT = readFileSync(`${import.meta.dirname}/input.txt`, 'utf-8');

const NUMBER_REGEX = /-?\d+/g;

const result = INPUT.match(NUMBER_REGEX).reduce(
  (total, number) => total + +number,
  0
);

console.log(result);
