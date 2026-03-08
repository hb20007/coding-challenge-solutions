import { readFileSync } from 'node:fs';

const INPUT = readFileSync(`${import.meta.dirname}/input.txt`).toString(); // I use an absolute URL for VS Code tasks.

const result = INPUT.split('').reduce(
  (floor, direction) => (direction === '(' ? ++floor : --floor),
  0
);

console.log(result);
