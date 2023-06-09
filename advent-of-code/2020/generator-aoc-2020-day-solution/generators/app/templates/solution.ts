import { logSymbols } from 'https://deno.land/x/log_symbols@v0.1.0/mod.ts';
import { dirname, fromFileUrl } from 'https://deno.land/std@0.177.0/path/mod.ts';
// import {  } from './partOne.ts';
// import {  } from './partTwo.ts';

const __dirname = dirname(fromFileUrl(import.meta.url)); // NOSONAR

const input = Deno.readTextFile(`${__dirname}/input.txt`);
input.then((input) => {
  // console.log(logSymbols.success, `Part 1: ${}`);
  // console.log(logSymbols.success, `Part 2: ${}`);
});
