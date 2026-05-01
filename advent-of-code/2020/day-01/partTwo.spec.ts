import { assertArrayIncludes } from '@std/assert';
import { findThreeWithGivenSum } from './partTwo.ts';

const TARGET_SUM = 2020;
const INPUTS = [[1721, 979, 366, 299, 675, 1456]];
const RESULTS = [[979, 366, 675]];

Deno.test(`${INPUTS[0]} should yield ${RESULTS[0]}.`, () => {
  assertArrayIncludes(findThreeWithGivenSum(INPUTS[0], TARGET_SUM), RESULTS[0]);
});
