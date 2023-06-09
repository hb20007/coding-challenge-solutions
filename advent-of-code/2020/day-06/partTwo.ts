import { wordToBin, countSetBits } from './utils.ts';

const countGroupAnswers = (groupAnswers: Array<string>): number =>
  groupAnswers.map(wordToBin).reduce((result, curr) => result & curr);

const sumAllYesAnswers = (groupAnswersList: Array<Array<string>>): number =>
  groupAnswersList
    .map(countGroupAnswers)
    .reduce((setBitSum, num) => setBitSum + countSetBits(num), 0);

export { sumAllYesAnswers };
