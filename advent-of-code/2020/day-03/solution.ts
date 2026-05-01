import { countTreesInPath } from './partOne.ts';
import { getProductOfTreesForSlopes } from './partTwo.ts';

const PART_ONE_SLOPE = [3, 1];
const PART_TWO_SLOPES: Array<[number, number]> = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`);

const map = input.trim().split(/\r?\n/);
console.log(
  `✅ Part 1: ${countTreesInPath(map, PART_ONE_SLOPE[0], PART_ONE_SLOPE[1])}`,
);
console.log(
  `✅ Part 2: ${getProductOfTreesForSlopes(map, PART_TWO_SLOPES)}`,
);
