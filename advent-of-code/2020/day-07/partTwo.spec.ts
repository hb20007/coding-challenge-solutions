import { assertStrictEquals } from 'https://deno.land/std@0.177.1/testing/asserts.ts';
import { countBagsInsideBagColor } from './partTwo.ts';

const INPUTS = [
  {
    rules: [
      'light red bags contain 1 bright white bag, 2 muted yellow bags.',
      'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
      'bright white bags contain 1 shiny gold bag.',
      'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
      'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
      'dark olive bags contain 3 faded blue bags, 4 dotted black bags.',
      'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.',
      'faded blue bags contain no other bags.',
      'dotted black bags contain no other bags.',
    ],
    bagColor: 'shiny gold',
  },
  {
    rules: [
      'shiny gold bags contain 2 dark red bags.',
      'dark red bags contain 2 dark orange bags.',
      'dark orange bags contain 2 dark yellow bags.',
      'dark yellow bags contain 2 dark green bags.',
      'dark green bags contain 2 dark blue bags.',
      'dark blue bags contain 2 dark violet bags.',
      'dark violet bags contain no other bags.',
    ],
    bagColor: 'shiny gold',
  },
];
const RESULTS = [32, 126];

Deno.test(
  `The first example rules with bag color ${INPUTS[0].bagColor} should yield child bag count ${RESULTS[0]}`,
  () => {
    assertStrictEquals(
      countBagsInsideBagColor(INPUTS[0].rules, INPUTS[0].bagColor),
      RESULTS[0],
    );
  },
);

Deno.test(
  `The second example rules with bag color ${INPUTS[1].bagColor} should yield child bag count ${RESULTS[1]}`,
  () => {
    assertStrictEquals(
      countBagsInsideBagColor(INPUTS[1].rules, INPUTS[1].bagColor),
      RESULTS[1],
    );
  },
);
