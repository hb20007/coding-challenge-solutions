import { logSymbols } from 'https://deno.land/x/log_symbols@v0.1.0/mod.ts';
import { dirname, fromFileUrl } from 'https://deno.land/std@0.177.0/path/mod.ts';
import { countColorsWhichCanContainColor } from './partOne.ts';
// import { countBagsInsideBagColor } from './partTwo.ts';

const __dirname = dirname(fromFileUrl(import.meta.url)); // NOSONAR

const input = Deno.readTextFile(`${__dirname}/input.txt`);
input.then((input) => {
  const rules = input.trim().split(/\r?\n/);
  const BAG_COLOR = 'shiny gold';

  console.log(
    logSymbols.success,
    `Part 1: ${countColorsWhichCanContainColor(rules, BAG_COLOR)}`,
  );
  // console.log(
  //   logSymbols.success,
  //   `Part 2: ${countBagsInsideBagColor(rules, BAG_COLOR)}`,
  // );
});
