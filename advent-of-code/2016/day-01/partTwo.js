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

// Using destructuring assignment:
const { visits } = instructions.reduce(
  (state, instruction) => {
    state.pointing = DIRECTIONS[state.pointing][instruction.direction];

    switch (state.pointing) {
      case 'N': {
        const newVNorth = state.v + instruction.blocks;
        for (let i = state.v + 1; i <= newVNorth; i++) {
          state.visits.push(`${state.h},${i}`);
        }
        state.v = newVNorth;
        break;
      }
      case 'S': {
        const newVSouth = state.v - instruction.blocks;
        for (let i = state.v - 1; i >= newVSouth; i--) {
          state.visits.push(`${state.h},${i}`);
        }
        state.v = newVSouth;
        break;
      }
      case 'E': {
        const newHEast = state.h + instruction.blocks;
        for (let i = state.h + 1; i <= newHEast; i++) {
          state.visits.push(`${i},${state.v}`);
        }
        state.h = newHEast;
        break;
      }
      case 'W': {
        const newHWest = state.h - instruction.blocks;
        for (let i = state.h - 1; i >= newHWest; i--) {
          state.visits.push(`${i},${state.v}`);
        }
        state.h = newHWest;
        break;
      }
      default:
        console.log('This does not make sense.');
    }

    return state;
  },
  {
    pointing: 'N', h: 0, v: 0, visits: ['0,0']
  }
);

const firstDup = visits
  .find((e, i) => visits.lastIndexOf(e) !== i)
  .split(',')
  .map(Number);

console.log(Math.abs(firstDup[0]) + Math.abs(firstDup[1]));
