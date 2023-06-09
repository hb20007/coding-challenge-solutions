import { logSymbols } from 'https://deno.land/x/log_symbols@v0.1.0/mod.ts';
import { dirname, fromFileUrl } from 'https://deno.land/std@0.177.0/path/mod.ts';
import { find2WithGivenSum } from './partOne.ts';
import { find3WithGivenSum } from './partTwo.ts';

const __dirname = dirname(fromFileUrl(import.meta.url)); // NOSONAR

const TARGET_SUM = 2020;
const input = Deno.readTextFile(`${__dirname}/input.txt`);
input.then((input) => {
  const entries = input.trim().split(/\r?\n/).map(Number);

  const partOneAndTwoEntries = [
    find2WithGivenSum(entries, TARGET_SUM),
    find3WithGivenSum(entries, TARGET_SUM),
  ];
  const partOneAndTwoSolutions: number[] = [];

  partOneAndTwoEntries.forEach((entriesArr) =>
    partOneAndTwoSolutions.push(entriesArr.reduce((acc, curr) => acc * curr)),
  );

  console.log(logSymbols.success, `Part 1: ${partOneAndTwoSolutions[0]}`);
  console.log(logSymbols.success, `Part 2: ${partOneAndTwoSolutions[1]}`);
});
