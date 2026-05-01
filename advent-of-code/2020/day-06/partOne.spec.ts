import { assertStrictEquals } from '@std/assert';
import { sumAllYesAnswers } from './partOne.ts';

const INPUTS = [
  [['abc'], ['a', 'b', 'c'], ['ab', 'ac'], ['a', 'a', 'a', 'a'], ['b']],
];
const RESULTS = [11];

Deno.test(
  `The example list should yield group positive answer count ${RESULTS[0]}`,
  () => {
    assertStrictEquals(sumAllYesAnswers(INPUTS[0]), RESULTS[0]);
  },
);
