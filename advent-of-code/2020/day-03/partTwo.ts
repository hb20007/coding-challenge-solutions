import { countTreesInPath } from './partOne.ts';

const getProductOfTreesForSlopes = (
  map: Array<string>,
  slopesArr: Array<[number, number]>,
): number => {
  return slopesArr.reduce(
    (treesProduct, slope) =>
      treesProduct * countTreesInPath(map, slope[0], slope[1]),
    1,
  );
};

export { getProductOfTreesForSlopes };
