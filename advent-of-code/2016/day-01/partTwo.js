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

// Using destructuring assigment:
const { visits } = instructions.reduce(
  (state, instruction) => {
    state.pointing = DIRECTIONS[state.pointing][instruction.direction];

    switch (state.pointing) {
      case 'N': {
        const newV_N = state.v + instruction.blocks;
        for (let i = state.v + 1; i <= newV_N; i++) {
          state.visits.push(`${state.h},${i}`);
        }
        state.v = newV_N;
        break;
      }
      case 'S': {
        const newV_S = state.v - instruction.blocks;
        for (let i = state.v - 1; i >= newV_S; i--) {
          state.visits.push(`${state.h},${i}`);
        }
        state.v = newV_S;
        break;
      }
      case 'E': {
        const newH_E = state.h + instruction.blocks;
        for (let i = state.h + 1; i <= newH_E; i++) {
          state.visits.push(`${i},${state.v}`);
        }
        state.h = newH_E;
        break;
      }
      case 'W': {
        const newH_W = state.h - instruction.blocks;
        for (let i = state.h - 1; i >= newH_W; i--) {
          state.visits.push(`${i},${state.v}`);
        }
        state.h = newH_W;
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
