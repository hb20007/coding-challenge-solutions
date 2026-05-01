import { countValidPassports as countValidPassports1 } from './partOne.ts';
import { countValidPassports as countValidPassports2 } from './partTwo.ts';

const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`);

const passportList = input
  .trim()
  .split(/\r?\n\r?\n/)
  .map((passport) => passport.split(/\r?\n| /));

console.log(`✅ Part 1: ${countValidPassports1(passportList)}`);
console.log(`✅ Part 2: ${countValidPassports2(passportList)}`);
