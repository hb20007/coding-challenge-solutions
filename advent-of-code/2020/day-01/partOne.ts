const findTwoWithGivenSumIteratively = (
  sortedEntries: Array<number>,
  targetSum: number,
): [number, number] => {
  let answer: [number, number] = [-1, -1];

  let l = 0;
  let r = sortedEntries.length - 1;

  while (l < r) {
    const currLeftNum = sortedEntries[l];
    const currRightNum = sortedEntries[r];
    const currSum = currLeftNum + currRightNum;

    if (currSum < targetSum) {
      l++;
    } else if (currSum > targetSum) {
      r--;
    } else {
      // currSum === targetSum
      answer = [currLeftNum, currRightNum];
      break;
    }
  }

  return answer;
};

const findTwoWithGivenSum = (
  entries: Array<number>,
  targetSum: number,
): [number, number] => {
  const sortedEntries = [...entries].sort((a, b) => a - b);

  return findTwoWithGivenSumIteratively(sortedEntries, targetSum);
};

export { findTwoWithGivenSum, findTwoWithGivenSumIteratively };
