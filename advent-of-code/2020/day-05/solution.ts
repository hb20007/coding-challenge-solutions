import { logSymbols } from 'https://deno.land/x/log_symbols@v0.1.0/mod.ts';
import { dirname, fromFileUrl } from 'https://deno.land/std@0.177.0/path/mod.ts';
import { findHighestSeatID } from './partOne.ts';
import { findMissingSeatID } from './partTwo.ts';

const __dirname = dirname(fromFileUrl(import.meta.url)); // NOSONAR

const input = Deno.readTextFile(`${__dirname}/input.txt`);
input.then((input) => {
  const seatCodeList = input.trim().split(/\r?\n/);

  console.log(logSymbols.success, `Part 1: ${findHighestSeatID(seatCodeList)}`);
  console.log(logSymbols.success, `Part 2: ${findMissingSeatID(seatCodeList)}`);
});
