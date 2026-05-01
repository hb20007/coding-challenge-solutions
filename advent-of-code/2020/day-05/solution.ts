import { findHighestSeatID } from './partOne.ts';
import { findMissingSeatID } from './partTwo.ts';

const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`);

const seatCodeList = input.trim().split(/\r?\n/);

console.log(`✅ Part 1: ${findHighestSeatID(seatCodeList)}`);
console.log(`✅ Part 2: ${findMissingSeatID(seatCodeList)}`);
