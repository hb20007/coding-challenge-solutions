import { readFileSync } from 'node:fs';

const INPUT = readFileSync(`${import.meta.dirname}/input.txt`, 'utf-8').split(
  '\n'
);

const result = INPUT.reduce(
  (acc, line) => acc + (line.length - eval(line).length), // eslint-disable-line no-eval
  0
);

console.log(result);
