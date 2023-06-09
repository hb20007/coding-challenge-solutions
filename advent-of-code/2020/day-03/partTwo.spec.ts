import { assertStrictEquals } from 'https://deno.land/std@0.177.1/testing/asserts.ts';
import { getProductOfTreesForSlopes } from './partTwo.ts';

const SLOPES: Array<[number, number]> = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];
const INPUTS = [
  [
    '..##.......',
    '#...#...#..',
    '.#....#..#.',
    '..#.#...#.#',
    '.#...##..#.',
    '..#.##.....',
    '.#.#.#....#',
    '.#........#',
    '#.##...#...',
    '#...##....#',
    '.#..#...#.#',
  ],
];
const RESULTS = [336];

Deno.test(
  `The example map with the given slopes should yield a tree product of ${RESULTS[0]}.`,
  () => {
    assertStrictEquals(
      getProductOfTreesForSlopes(INPUTS[0], SLOPES),
      RESULTS[0],
    );
  },
);
