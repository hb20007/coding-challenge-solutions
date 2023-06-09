import { assertStrictEquals } from 'https://deno.land/std@0.177.1/testing/asserts.ts';
import { countTreesInPath } from './partOne.ts';

const SLOPE = [3, 1];
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
const RESULTS = [7];

Deno.test(
  `The example map with the slope right ${SLOPE[0]}, down ${SLOPE[1]} should yield ${RESULTS[0]} trees.`,
  () => {
    assertStrictEquals(
      countTreesInPath(INPUTS[0], SLOPE[0], SLOPE[1]),
      RESULTS[0],
    );
  },
);
