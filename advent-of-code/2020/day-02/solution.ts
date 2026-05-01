import { countValidPwds as countValidPwds1 } from './partOne.ts';
import { countValidPwds as countValidPwds2 } from './partTwo.ts';

const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`);

const pwdList = input.trim().split(/\r?\n/);

console.log(`✅ Part 1: ${countValidPwds1(pwdList)}`);
console.log(`✅ Part 2: ${countValidPwds2(pwdList)}`);
