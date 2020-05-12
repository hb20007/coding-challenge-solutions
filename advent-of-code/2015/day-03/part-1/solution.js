const fs = require('fs');

const INPUT = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split('');

const houses = new Set().add('0,0'); // Each house coordinate will be represented by a string in the format: 'x,y'. An array/object, each of which can be used below within the reduce() function, can't be used for the set due to comparison of references as opposed to values.

INPUT.reduce(
  (currentHouse, direction) => {
    switch (direction) {
      case '>':
        currentHouse[0] += 1;
        break;
      case '<':
        currentHouse[0] -= 1;
        break;
      case '^':
        currentHouse[1] += 1;
        break;
      default:
        currentHouse[1] -= 1;
    }

    houses.add(`${currentHouse[0]},${currentHouse[1]}`);
    return currentHouse;
  },
  [0, 0]
);

console.log(houses.size);
