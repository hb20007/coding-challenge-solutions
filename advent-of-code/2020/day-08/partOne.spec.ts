import { assertStrictEquals } from '@std/assert';
import { checkAccValueWhenProgramLoops } from './partOne.ts';

const INPUTS = [
  [
    'nop +0',
    'acc +1',
    'jmp +4',
    'acc +3',
    'jmp -3',
    'acc -99',
    'acc +1',
    'jmp -4',
    'acc +6',
  ],
];
const RESULTS = [5];

Deno.test(`The example instructions should yield accumulator value ${RESULTS[0]}`, () => {
  assertStrictEquals(checkAccValueWhenProgramLoops(INPUTS[0]), RESULTS[0]);
});
