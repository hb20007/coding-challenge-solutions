const fs = require('fs');

const INPUT = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split('');
const santaDirections = INPUT.filter((_, i) => i % 2 === 0);
const roboDirections = INPUT.filter((_, i) => i % 2 === 1);

const houses = new Set().add('0,0');

const traverse = (directions) => {
  const currentHouse = [0, 0];
  directions.forEach((direction) => {
    // Shorter but slower alternative to the switch statement used in part-1:
    currentHouse[0] += ((direction === '>') | 0) - ((direction === '<') | 0);
    currentHouse[1] += ((direction === '^') | 0) - ((direction === 'v') | 0);

    houses.add(`${currentHouse[0]},${currentHouse[1]}`);
  });
};

traverse(santaDirections);
traverse(roboDirections);

console.log(houses.size);
