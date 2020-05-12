const fs = require('fs');

const instructions = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split(', ')
  .map(
    (str) => ({
      direction: str[0], blocks: parseInt(str.substring(1))
    })
  );

const DIRECTIONS = {
  N: {
    L: 'W',
    R: 'E'
  },
  E: {
    L: 'N',
    R: 'S'
  },
  S: {
    L: 'E',
    R: 'W'
  },
  W: {
    L: 'S',
    R: 'N'
  }
};

const result = instructions.reduce(
  (acc, instruction) => {
    acc.pointing = DIRECTIONS[acc.pointing][instruction.direction];

    switch (acc.pointing) {
      case 'N':
        acc.v += instruction.blocks;
        break;
      case 'S':
        acc.v -= instruction.blocks;
        break;
      case 'E':
        acc.h += instruction.blocks;
        break;
      case 'W':
        acc.h -= instruction.blocks;
        break;
      default:
        console.log('Something weird is going on...');
    }

    return acc;
  },
  { pointing: 'N', h: 0, v: 0 }
);

console.log(Math.abs(result.v) + Math.abs(result.h));
