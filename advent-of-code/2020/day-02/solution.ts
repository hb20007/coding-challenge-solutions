import { logSymbols } from 'https://deno.land/x/log_symbols@v0.1.0/mod.ts';
import { dirname, fromFileUrl } from 'https://deno.land/std@0.177.0/path/mod.ts';
import { countValidPwds as countValidPwds1 } from './partOne.ts';
import { countValidPwds as countValidPwds2 } from './partTwo.ts';

const __dirname = dirname(fromFileUrl(import.meta.url)); // NOSONAR

const input = Deno.readTextFile(`${__dirname}/input.txt`);
input.then((input) => {
  const pwdList = input.trim().split(/\r?\n/);

  console.log(logSymbols.success, `Part 1: ${countValidPwds1(pwdList)}`);
  console.log(logSymbols.success, `Part 2: ${countValidPwds2(pwdList)}`);
});
