import { assertArrayIncludes } from 'https://deno.land/std@0.177.1/testing/asserts.ts';
import { find2WithGivenSum } from './partOne.ts';

const TARGET_SUM = 2020;
const INPUTS = [[1721, 979, 366, 299, 675, 1456]];
const RESULTS = [[1721, 299]];

Deno.test(`${INPUTS[0]} should yield ${RESULTS[0]}.`, () => {
  assertArrayIncludes(find2WithGivenSum(INPUTS[0], TARGET_SUM), RESULTS[0]);
});
