import { logSymbols } from 'https://deno.land/x/log_symbols@v0.1.0/mod.ts';
import { dirname, fromFileUrl } from 'https://deno.land/std@0.177.0/path/mod.ts';
import { countValidPassports as countValidPassports1 } from './partOne.ts';
import { countValidPassports as countValidPassports2 } from './partTwo.ts';

const __dirname = dirname(fromFileUrl(import.meta.url)); // NOSONAR

const input = Deno.readTextFile(`${__dirname}/input.txt`);
input.then((input) => {
  const passportList = input
    .trim()
    .split(/\r?\n\r?\n/)
    .map((passport) => passport.split(/\r?\n| /));

  console.log(
    logSymbols.success,
    `Part 1: ${countValidPassports1(passportList)}`,
  );
  console.log(
    logSymbols.success,
    `Part 2: ${countValidPassports2(passportList)}`,
  );
});
