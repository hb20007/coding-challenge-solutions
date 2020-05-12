const fs = require('fs');

const INPUT = fs.readFileSync(`${__dirname}/input.txt`).toString(); // Using absolute URL for VS Code tasks

const result = INPUT.split('').reduce(
  (floor, direction) => (direction === '(' ? ++floor : --floor),
  0
);

console.log(result);
