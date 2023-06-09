import { logSymbols } from 'https://deno.land/x/log_symbols@v0.1.0/mod.ts';
import { dirname, fromFileUrl } from 'https://deno.land/std@0.177.0/path/mod.ts';
import { sumAllYesAnswers as sumAllYesAnswersOr } from './partOne.ts';
import { sumAllYesAnswers as sumAllYesAnswersAnd } from './partTwo.ts';

const __dirname = dirname(fromFileUrl(import.meta.url)); // NOSONAR

const input = Deno.readTextFile(`${__dirname}/input.txt`);
input.then((input) => {
  const groupAnswersList = input
    .trim()
    .split(/\r?\n\r?\n/)
    .map((groupAnswers) => groupAnswers.split(/\r?\n/));

  console.log(
    logSymbols.success,
    `Part 1: ${sumAllYesAnswersOr(groupAnswersList)}`,
  );
  console.log(
    logSymbols.success,
    `Part 2: ${sumAllYesAnswersAnd(groupAnswersList)}`,
  );
});
