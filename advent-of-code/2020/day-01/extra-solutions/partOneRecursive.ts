const findTwoWithGivenSumRecursively = (
  sortedEntries: Array<number>,
  targetSum: number,
  l: number,
  r: number,
): [number, number] => {
  const currLeftNum = sortedEntries[l];
  const currRightNum = sortedEntries[r];
  const currSum = currLeftNum + currRightNum;

  return l >= r ? [-1, -1] : currSum === targetSum // NOSONAR
    ? [currLeftNum, currRightNum]
    : currSum < targetSum // NOSONAR
    ? findTwoWithGivenSumRecursively(sortedEntries, targetSum, l + 1, r)
    : findTwoWithGivenSumRecursively(sortedEntries, targetSum, l, r - 1);
};

const findTwoWithGivenSum = (
  entries: Array<number>,
  targetSum: number,
): [number, number] => {
  const sortedEntries = [...entries].sort((a, b) => a - b);

  return findTwoWithGivenSumRecursively(
    sortedEntries,
    targetSum,
    0,
    sortedEntries.length - 1,
  );
};

export { findTwoWithGivenSum };
