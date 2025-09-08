const fs = require('fs');

const INPUT = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8').split('\n');

const PERSON_ATTRIBUTES_REGEX =
  /(\w+) would (\w+) (\d+) happiness units by sitting next to (\w+)./;

// Generate all possible permutations for an array:
const permuteArr = (input) => {
  const array = Array.from(input);
  const permute = (res, item, key, arr) =>
    res.concat(
      (arr.length > 1 &&
        arr
          .slice(0, key)
          .concat(arr.slice(key + 1))
          .reduce(permute, [])
          .map((perm) => [item].concat(perm))) ||
        item
    );

  return array.reduce(permute, []);
};

// Parse input and return map with attributes of each person:
const getPersonAttributes = (input) =>
  input.reduce((map, person) => {
    const parsed = person.match(PERSON_ATTRIBUTES_REGEX);
    const name = parsed[1]; // NOSONAR
    const isLose = parsed[2] === 'lose';
    const count = +parsed[3];
    const neighbor = parsed[4];

    map.set(`${name} -> ${neighbor}`, isLose ? -count : count);
    map.set(`hb20007 -> ${name}`, 0);
    map.set(`${name} -> hb20007`, 0);

    return map;
  }, new Map());

// Get attendees list:
const getAttendees = (input) =>
  input.reduce((set, person) => {
    const parsed = person.match(PERSON_ATTRIBUTES_REGEX);
    return set.add(parsed[1]);
  }, new Set().add('hb20007'));

// Get all persons' attributes:
const personAttributes = getPersonAttributes(INPUT);

// Get all possible permutations of the guests:
const allPossiblePermutations = permuteArr(getAttendees(INPUT));

const totalHappiness = allPossiblePermutations.reduce(
  (totalHappinessAcc, permutation) => {
    const finalTotal = permutation.reduce((total, person, index, arr) => {
      const leftOne = arr.at(index - 1 < 0 ? -1 : index - 1);
      const rightOne = arr.at(index + 1 > arr.length - 1 ? 0 : index + 1);

      total += personAttributes.get(`${person} -> ${leftOne}`);
      total += personAttributes.get(`${person} -> ${rightOne}`);

      return total;
    }, 0);

    return finalTotal > totalHappinessAcc ? finalTotal : totalHappinessAcc;
  },
  0
);

console.log(totalHappiness);
