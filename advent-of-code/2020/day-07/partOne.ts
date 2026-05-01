import { parseRulesAsObject } from './utils.ts';

const transposeBagGraph = (
  graph: Record<string, Record<string, number>>,
): Record<string, Set<string>> => {
  const transpose: Record<string, Set<string>> = {};

  for (const outerBag of Object.keys(graph)) {
    const innerBags = graph[outerBag];

    for (const innerBagColor of Object.keys(innerBags)) {
      if (!(innerBagColor in transpose)) {
        transpose[innerBagColor] = new Set<string>();
      }
      transpose[innerBagColor].add(outerBag);
    }
  }

  return transpose;
};

const countColorsThatCanContainColor = (
  rules: Array<string>,
  color: string,
): number => {
  const bagGraph = parseRulesAsObject(rules);
  const bagGraphTranspose = transposeBagGraph(bagGraph);

  const findAncestorsRecursively = (
    bagColor: string,
    visited = new Set<string>(),
  ): Set<string> => {
    visited.add(bagColor);
    const parentSet = bagGraphTranspose[bagColor] || new Set();

    for (const parent of parentSet) {
      if (!visited.has(parent)) {
        findAncestorsRecursively(parent, visited);
      }
    }

    return visited;
  };

  return findAncestorsRecursively(color).size - 1;
};

export { countColorsThatCanContainColor };
