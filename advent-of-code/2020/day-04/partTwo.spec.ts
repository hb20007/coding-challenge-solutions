import { assertStrictEquals } from 'https://deno.land/std@0.177.1/testing/asserts.ts';
import { isPassportValid } from './partTwo.ts';

const INPUTS = [
  [
    'eyr:1972',
    'cid:100',
    'hcl:#18171d',
    'ecl:amb',
    'hgt:170',
    'pid:186cm',
    'iyr:2018',
    'byr:1926',
  ],
  [
    'iyr:2019',
    'hcl:#602927',
    'eyr:1967',
    'hgt:170cm',
    'ecl:grn',
    'pid:012533040',
    'byr:1946',
  ],
  [
    'hcl:dab227',
    'iyr:2012',
    'ecl:brn',
    'hgt:182cm',
    'pid:021572410',
    'eyr:2020',
    'byr:1992',
    'cid:277',
  ],
  [
    'hgt:59cm',
    'ecl:zzz',
    'eyr:2038',
    'hcl:74454a',
    'iyr:2023',
    'pid:3556412378',
    'byr:2007',
  ],
  [
    'pid:087499704',
    'hgt:74in',
    'ecl:grn',
    'iyr:2012',
    'eyr:2030',
    'byr:1980',
    'hcl:#623a2f',
  ],
  [
    'eyr:2029',
    'ecl:blu',
    'cid:129',
    'byr:1989',
    'iyr:2014',
    'pid:896056539',
    'hcl:#a97842',
    'hgt:165cm',
  ],
  [
    'hcl:#888785',
    'hgt:164cm',
    'byr:2001',
    'iyr:2015',
    'cid:88',
    'pid:545766238',
    'ecl:hzl',
    'eyr:2022',
  ],
  [
    'iyr:2010',
    'hgt:158cm',
    'hcl:#b6652a',
    'ecl:blu',
    'byr:1944',
    'eyr:2021',
    'pid:093154719',
  ],
];
const RESULTS = [false, false, false, false, true, true, true, true];

Deno.test(`The first invalid passport should yield ${RESULTS[0]}`, () => {
  assertStrictEquals(isPassportValid(INPUTS[0]), RESULTS[0]);
});

Deno.test(`The second invalid passport should yield ${RESULTS[1]}`, () => {
  assertStrictEquals(isPassportValid(INPUTS[1]), RESULTS[1]);
});

Deno.test(`The third invalid passport should yield ${RESULTS[2]}`, () => {
  assertStrictEquals(isPassportValid(INPUTS[2]), RESULTS[2]);
});

Deno.test(`The fourth invalid passport should yield ${RESULTS[3]}`, () => {
  assertStrictEquals(isPassportValid(INPUTS[3]), RESULTS[3]);
});

Deno.test(`The first valid passport should yield ${RESULTS[4]}`, () => {
  assertStrictEquals(isPassportValid(INPUTS[4]), RESULTS[4]);
});

Deno.test(`The second valid passport should yield ${RESULTS[5]}`, () => {
  assertStrictEquals(isPassportValid(INPUTS[5]), RESULTS[5]);
});

Deno.test(`The third valid passport should yield ${RESULTS[6]}`, () => {
  assertStrictEquals(isPassportValid(INPUTS[6]), RESULTS[6]);
});

Deno.test(`The fourth valid passport should yield ${RESULTS[7]}`, () => {
  assertStrictEquals(isPassportValid(INPUTS[7]), RESULTS[7]);
});
