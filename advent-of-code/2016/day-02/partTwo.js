const fs = require('fs');

const instructions = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split('\n')
  .map((line) => line.split(''));

const DIALS = [
  [null, null, 1, null, null],
  [null, 2, 3, 4, null],
  [5, 6, 7, 8, 9],
  [null, 'A', 'B', 'C', null],
  [null, null, 'D', null, null]
];
const MAX_INDEX = DIALS.length - 1;

const pos = { x: 0, y: 2 };
let code = '';

instructions.forEach((line) => {
  line.forEach((instruction) => { // NOSONAR
    switch (instruction) {
      case 'U':
        if (pos.y > 0 && DIALS[pos.y - 1][pos.x]) {
          pos.y--;
        }
        break;
      case 'D':
        if (pos.y < MAX_INDEX && DIALS[pos.y + 1][pos.x]) {
          pos.y++;
        }
        break;
      case 'L':
        if (pos.x > 0 && DIALS[pos.y][pos.x - 1]) {
          pos.x--;
        }
        break;
      case 'R':
        if (pos.x < MAX_INDEX && DIALS[pos.y][pos.x + 1]) {
          pos.x++;
        }
        break;
      default:
        console.log('What is going on?');
    }
  });

  code += DIALS[pos.y][pos.x];
});

console.log(code);
