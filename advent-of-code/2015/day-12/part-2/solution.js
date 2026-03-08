import { readFileSync } from 'node:fs';

const INPUT = JSON.parse(
  readFileSync(`${import.meta.dirname}/input.txt`, 'utf-8'),
  (_, value) => {
    if (!Array.isArray(value)) {
      return Object.keys(value)
        .map((key) => value[key])
        .includes('red')
        ? {}
        : value;
    }
    return value;
  }
);

const NUMBER_REGEX = /-?\d+/g;

const result = JSON.stringify(INPUT)
  .match(NUMBER_REGEX)
  .reduce((total, number) => total + +number, 0);

console.log(result);
