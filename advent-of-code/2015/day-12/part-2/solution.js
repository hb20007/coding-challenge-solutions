const fs = require('fs');
const INPUT = JSON.parse(
  fs.readFileSync(__dirname + '/input.txt', 'utf-8'),
  (_, value) => {
    if (!Array.isArray(value))
      return Object.keys(value)
        .map(key => value[key])
        .indexOf('red') !== -1
        ? {}
        : value;
    return value;
  }
);
const NUMBER_REGEX = /-?\d+/g;
const result = JSON.stringify(INPUT)
  .match(NUMBER_REGEX)
  .reduce((total, number) => total + +number, 0);

console.log(result);
