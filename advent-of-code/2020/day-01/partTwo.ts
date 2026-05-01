import { findTwoWithGivenSumIteratively } from './partOne.ts';

const findThreeWithGivenSum = (
  entries: Array<number>,
  targetSum: number,
): [number, number, number] => {
  const sortedEntries = [...entries].sort((a, b) => a - b);

  let answerLastTwoNums: [number, number] = [-1, -1];
  const answerFirstNum = sortedEntries.find((currEntry) => {
    answerLastTwoNums = findTwoWithGivenSumIteratively(
      sortedEntries,
      targetSum - currEntry,
    );
    return answerLastTwoNums[0] !== -1;
  });

  if (answerFirstNum) {
    return [...answerLastTwoNums, answerFirstNum];
  }

  return [-1, -1, -1];
};

export { findThreeWithGivenSum };
