const fs = require('fs');

const INPUT = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split('\n');

const result = INPUT.reduce((totalLength, element) => {
  const sides = element.split('x').map(Number); // Number is a function, we map to Number in order to use '!==' to compare with an int.
  const maxSideIndex = sides.indexOf(Math.max(...sides)); // We use the index because 2 sides can be the max side but we want to remove only 1.
  return (
    totalLength
    + sides.reduce(Math.imul)
    + sides.reduce(
      (perimeter, side, i) =>
        i !== maxSideIndex ? perimeter + 2 * side : perimeter,
      0
    )
  );
}, 0);

console.log(result);
