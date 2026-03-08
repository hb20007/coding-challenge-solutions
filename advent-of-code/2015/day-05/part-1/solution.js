import { readFileSync } from 'node:fs';

const INPUT = readFileSync(`${import.meta.dirname}/input.txt`)
  .toString()
  .split('\n');

const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);
const DOUBLE_LETTERS = 'abcdefghijklmnopqrstuvwxyz'
  .split('')
  .map((item) => item + item);
const BAD_PAIRS = ['ab', 'cd', 'pq', 'xy'];

const hasThreeVowels = (string) =>
  string
    .split('')
    .reduce(
      (vowelCount, char) => (VOWELS.has(char) ? ++vowelCount : vowelCount),
      0
    ) >= 3;
const hasDoubleLetter = (string) =>
  DOUBLE_LETTERS.some((item) => string.includes(item));
const hasBadPair = (string) => BAD_PAIRS.some((item) => string.includes(item));

const isNiceString = (string) =>
  hasThreeVowels(string) && hasDoubleLetter(string) && !hasBadPair(string);

const result = INPUT.reduce(
  (total, string) => (isNiceString(string) ? ++total : total),
  0
);

console.log(result);
