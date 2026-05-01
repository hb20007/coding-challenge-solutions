import { checkAccValueWhenProgramLoops } from './partOne.ts';
import { checkAccValueWhenProgramTerminates } from './partTwo.ts';

const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`);

const instructions = input.trim().split(/\r?\n/);

console.log(`✅ Part 1: ${checkAccValueWhenProgramLoops(instructions)}`);
console.log(`✅ Part 2: ${checkAccValueWhenProgramTerminates(instructions)}`);
