import { EMPTY_BAG_TEXT, Regex } from './consts.ts';

const parseRulesAsObject = (
  rules: Array<string>,
): Record<string, Record<string, number>> => {
  const bagObj: Record<string, Record<string, number>> = {};

  for (const rule of rules) {
    const [_, outerBagColor, innerBagsText] = new RegExp(Regex.FULL_RULE).exec(
      rule,
    ) || [];
    const innerBagsObj: Record<string, number> = {};

    if (innerBagsText !== EMPTY_BAG_TEXT) {
      for (const innerBagText of innerBagsText.split(',')) {
        const [_, innerBagCount, innerBagColor] = new RegExp(Regex.INNER_BAG)
          .exec(innerBagText) || [];
        innerBagsObj[innerBagColor] = Number.parseInt(innerBagCount);
      }
    }

    bagObj[outerBagColor] = innerBagsObj;
  }

  return bagObj;
};

export { parseRulesAsObject };
