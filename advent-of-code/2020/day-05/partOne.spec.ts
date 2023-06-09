import { assertStrictEquals } from 'https://deno.land/std@0.177.1/testing/asserts.ts';
import { findHighestSeatID } from './partOne.ts';

const INPUTS = [['FBFBBFFRLR', 'BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL']];
const RESULTS = [820];

Deno.test(
  `The 4 example seat codes should yield highest seat ID ${RESULTS[0]}`,
  () => {
    assertStrictEquals(findHighestSeatID(INPUTS[0]), RESULTS[0]);
  },
);
