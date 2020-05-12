const fs = require('fs');

const instructions = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split('\n')
  .map((line) => line.split(''));

const DIALS = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const MAX_INDEX = DIALS.length - 1;

const pos = { x: 1, y: 1 }; // We start at dial 5.
let code = '';

instructions.forEach((line) => {
  line.forEach((instruction) => {
    switch (instruction) {
      case 'U':
        pos.y = pos.y === 0 ? 0 : pos.y - 1;
        break;
      case 'D':
        pos.y = pos.y === MAX_INDEX ? MAX_INDEX : pos.y + 1;
        break;
      case 'L':
        pos.x = pos.x === 0 ? 0 : pos.x - 1;
        break;
      case 'R':
        pos.x = pos.x === MAX_INDEX ? MAX_INDEX : pos.x + 1;
        break;
      default:
        console.log('Something is fishy.');
    }
  });

  code += DIALS[pos.y][pos.x];
});

console.log(code);
