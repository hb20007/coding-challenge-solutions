import { sumAllYesAnswers as sumAllYesAnswersOr } from './partOne.ts';
import { sumAllYesAnswers as sumAllYesAnswersAnd } from './partTwo.ts';

const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`);

const groupAnswersList = input
  .trim()
  .split(/\r?\n\r?\n/)
  .map((groupAnswers) => groupAnswers.split(/\r?\n/));

console.log(`✅ Part 1: ${sumAllYesAnswersOr(groupAnswersList)}`);
console.log(`✅ Part 2: ${sumAllYesAnswersAnd(groupAnswersList)}`);
