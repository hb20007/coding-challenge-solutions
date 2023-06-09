import { assertStrictEquals } from 'https://deno.land/std@0.177.1/testing/asserts.ts';
import { isPwdValid, countValidPwds } from './partTwo.ts';

const INPUTS = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];
const RESULTS = [true, false, false];
const resultsTrueCount = RESULTS.reduce((acc, curr) => acc + Number(curr), 0);

Deno.test(`${INPUTS[0]} should yield valid status ${RESULTS[0]}.`, () => {
  assertStrictEquals(isPwdValid(INPUTS[0]), RESULTS[0]);
});

Deno.test(`${INPUTS[1]} should yield valid status ${RESULTS[1]}.`, () => {
  assertStrictEquals(isPwdValid(INPUTS[1]), RESULTS[1]);
});

Deno.test(`${INPUTS[2]} should yield valid status ${RESULTS[2]}.`, () => {
  assertStrictEquals(isPwdValid(INPUTS[2]), RESULTS[2]);
});

Deno.test(
  `An array with the previous inputs should yield valid password count ${resultsTrueCount}.`,
  () => {
    assertStrictEquals(countValidPwds(INPUTS), resultsTrueCount);
  },
);
