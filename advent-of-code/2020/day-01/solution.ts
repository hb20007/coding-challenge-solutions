import { findTwoWithGivenSum } from './partOne.ts';
import { findThreeWithGivenSum } from './partTwo.ts';

const TARGET_SUM = 2020;
const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`);

const entries = input.trim().split(/\r?\n/).map(Number);

const partOneAndTwoEntries = [
  findTwoWithGivenSum(entries, TARGET_SUM),
  findThreeWithGivenSum(entries, TARGET_SUM),
];
const partOneAndTwoSolutions: number[] = [];

partOneAndTwoEntries.forEach((
  entriesArr,
) => {
  partOneAndTwoSolutions.push(entriesArr.reduce((acc, curr) => acc * curr));
});

console.log(`✅ Part 1: ${partOneAndTwoSolutions[0]}`);
console.log(`✅ Part 2: ${partOneAndTwoSolutions[1]}`);
