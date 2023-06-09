import { logSymbols } from 'https://deno.land/x/log_symbols@v0.1.0/mod.ts';
import { dirname, fromFileUrl } from 'https://deno.land/std@0.177.0/path/mod.ts';
import { countTreesInPath } from './partOne.ts';
import { getProductOfTreesForSlopes } from './partTwo.ts';

const __dirname = dirname(fromFileUrl(import.meta.url)); // NOSONAR

const PART_ONE_SLOPE = [3, 1];
const PART_TWO_SLOPES: Array<[number, number]> = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];
const input = Deno.readTextFile(`${__dirname}/input.txt`);
input.then((input) => {
  const map = input.trim().split(/\r?\n/);
  console.log(
    logSymbols.success,
    `Part 1: ${countTreesInPath(map, PART_ONE_SLOPE[0], PART_ONE_SLOPE[1])}`,
  );
  console.log(
    logSymbols.success,
    `Part 2: ${getProductOfTreesForSlopes(map, PART_TWO_SLOPES)}`,
  );
});
