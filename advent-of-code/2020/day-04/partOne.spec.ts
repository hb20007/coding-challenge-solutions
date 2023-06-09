import { assertStrictEquals } from 'https://deno.land/std@0.177.1/testing/asserts.ts';
import { isPassportValid, countValidPassports } from './partOne.ts';

const INPUTS = [
  [
    'ecl:gry',
    'pid:860033327',
    'eyr:2020',
    'hcl:#fffffd',
    'byr:1937',
    'iyr:2017',
    'cid:147',
    'hgt:183cm',
  ],
  [
    'iyr:2013',
    'ecl:amb',
    'cid:350',
    'eyr:2023',
    'pid:028048884',
    'hcl:#cfa07d',
    'byr:1929',
  ],
  [
    'hcl:#ae17e1',
    'iyr:2013',
    'eyr:2024',
    'ecl:brn',
    'pid:760753108',
    'byr:1931',
    'hgt:179cm',
  ],
  [
    'hcl:#cfa07d',
    'eyr:2025',
    'pid:166559648',
    'iyr:2011',
    'ecl:brn',
    'hgt:59in',
  ],
];
const RESULTS = [true, false, true, false];
const resultsTrueCount = RESULTS.reduce((acc, curr) => acc + Number(curr), 0);

Deno.test(`The first passport should yield valid status ${RESULTS[0]}`, () => {
  assertStrictEquals(isPassportValid(INPUTS[0]), RESULTS[0]);
});

Deno.test(`The second passport should yield valid status ${RESULTS[1]}`, () => {
  assertStrictEquals(isPassportValid(INPUTS[1]), RESULTS[1]);
});

Deno.test(`The third passport should yield valid status ${RESULTS[2]}`, () => {
  assertStrictEquals(isPassportValid(INPUTS[2]), RESULTS[2]);
});

Deno.test(`The fourth passport should yield valid status ${RESULTS[3]}`, () => {
  assertStrictEquals(isPassportValid(INPUTS[3]), RESULTS[3]);
});

Deno.test(
  `An array with the previous inputs should yield valid passport count ${resultsTrueCount}`,
  () => {
    assertStrictEquals(countValidPassports(INPUTS), resultsTrueCount);
  },
);
