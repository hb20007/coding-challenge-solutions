import { find2WithGivenSumIteratively } from './partOne.ts';

const find3WithGivenSum = (
  entries: Array<number>,
  targetSum: number,
): [number, number, number] => {
  const sortedEntries = [...entries].sort((a, b) => a - b);

  let answerFirstPart: [number, number] = [-1, -1];
  const answerSecondPart = sortedEntries.find((currEntry) => {
    answerFirstPart = find2WithGivenSumIteratively(
      sortedEntries,
      targetSum - currEntry,
    );
    return answerFirstPart[0] !== -1;
  });

  if (answerSecondPart) {
    return [...answerFirstPart, answerSecondPart];
  }

  return [-1, -1, -1];
};

export { find3WithGivenSum };
