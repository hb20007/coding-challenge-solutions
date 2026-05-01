import { parseRulesAsObject } from './utils.ts';

const countBagsInsideBagColor = (
  rules: Array<string>,
  color: string,
): number => {
  const bagGraph = parseRulesAsObject(rules);

  const countInnerBagsRecursively = (bagColor: string): number =>
    Object.entries(bagGraph[bagColor]).reduce(
      (
        count,
        [innerBagColor, innerBagQuantity],
      ) => count + innerBagQuantity * countInnerBagsRecursively(innerBagColor),
      1,
    );

  return countInnerBagsRecursively(color) - 1;
};

export { countBagsInsideBagColor };
