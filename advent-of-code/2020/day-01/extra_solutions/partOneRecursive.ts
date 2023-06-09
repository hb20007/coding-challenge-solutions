const find2WithGivenSumRecursively = (
  sortedEntries: Array<number>,
  targetSum: number,
  l: number,
  r: number,
): [number, number] => {
  const currLeftNum = sortedEntries[l];
  const currRightNum = sortedEntries[r];
  const currSum = currLeftNum + currRightNum;

  return l >= r
    ? [-1, -1]
    : currSum === targetSum // NOSONAR
    ? [currLeftNum, currRightNum]
    : currSum < targetSum // NOSONAR
    ? find2WithGivenSumRecursively(sortedEntries, targetSum, l + 1, r)
    : find2WithGivenSumRecursively(sortedEntries, targetSum, l, r - 1);
};

const find2WithGivenSum = (
  entries: Array<number>,
  targetSum: number,
): [number, number] => {
  const sortedEntries = [...entries].sort((a, b) => a - b);

  return find2WithGivenSumRecursively(
    sortedEntries,
    targetSum,
    0,
    sortedEntries.length - 1,
  );
};

export { find2WithGivenSum };
