import { readFileSync } from 'node:fs';

const INPUT = readFileSync(`${import.meta.dirname}/input.txt`)
  .toString()
  .split('\n');

const result = INPUT.reduce((totalLength, element) => {
  const sides = element.split('x').map(Number); // We map using Number() to be able to use "!=="" for comparison with integers.
  const maxSideIndex = sides.indexOf(Math.max(...sides)); // We use the index because two sides can be the maximum side, but we want to remove only one.
  return (
    totalLength +
    sides.reduce(Math.imul) +
    sides.reduce(
      (perimeter, side, i) =>
        i === maxSideIndex ? perimeter : perimeter + 2 * side,
      0
    )
  );
}, 0);

console.log(result);
