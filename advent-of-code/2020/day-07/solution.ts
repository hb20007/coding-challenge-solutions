import { countColorsThatCanContainColor } from './partOne.ts';
import { countBagsInsideBagColor } from './partTwo.ts';

const input = Deno.readTextFileSync(`${import.meta.dirname}/input.txt`);

const rules = input.trim().split(/\r?\n/);
const BAG_COLOR = 'shiny gold';

console.log(`✅ Part 1: ${countColorsThatCanContainColor(rules, BAG_COLOR)}`);
console.log(`✅ Part 2: ${countBagsInsideBagColor(rules, BAG_COLOR)}`);
