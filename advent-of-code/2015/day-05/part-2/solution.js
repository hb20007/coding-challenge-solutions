const fs = require('fs');

const INPUT = fs.readFileSync(`${__dirname}/input.txt`).toString().split('\n');

const hasRepeatingPair = (string) => /([a-z][a-z]).*\1/.test(string);
const hasLetterSandwich = (string) => /([a-z])[a-z]\1/.test(string);

const isNiceString = (string) =>
  hasRepeatingPair(string) && hasLetterSandwich(string);

const result = INPUT.reduce(
  (total, string) => (isNiceString(string) ? ++total : total),
  0
);

console.log(result);
