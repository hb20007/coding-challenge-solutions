import { assertStrictEquals } from '@std/assert';
import { findHighestSeatID } from './partOne.ts';

const INPUTS = [['FBFBBFFRLR', 'BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL']];
const RESULTS = [820];

Deno.test(
  `The four example seat codes should yield highest seat ID ${RESULTS[0]}`,
  () => {
    assertStrictEquals(findHighestSeatID(INPUTS[0]), RESULTS[0]);
  },
);
