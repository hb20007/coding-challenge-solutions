const fs = require('fs');

const INPUT = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split('\n');

const result = INPUT.reduce((totalArea, element) => {
  const [l, w, h] = element.split('x');
  const [lw, wh, lh] = [l * w, w * h, l * h];
  return totalArea + 2 * lw + 2 * wh + 2 * lh + Math.min(lw, wh, lh);
}, 0);

console.log(result);
