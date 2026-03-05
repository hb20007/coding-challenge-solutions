const fs = require('node:fs');

const INPUT = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8').split('\n');

const result = INPUT.reduce(
  (acc, line) =>
    acc +
    (2 + line.replaceAll('\\', '\\\\').replaceAll('"', String.raw`\"`).length - line.length),
  0
);

console.log(result);
