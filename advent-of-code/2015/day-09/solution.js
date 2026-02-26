const fs = require('fs');

const INPUT = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8').split('\n');

const DIRECTION_REGEX = /(\w+) to (\w+) = (\d+)/;

// Takes the input and builds a set of all places that need to be visited:
const buildPlacesSet = (input) => {
  const places = new Set();

  input.forEach((direction) => {
    const parsed = direction.match(DIRECTION_REGEX);
    places.add(parsed[1]).add(parsed[2]);
  });

  return places;
};

// Takes the input and builds a map of all possible routes between two points:
const buildDistanceMap = (input) => {
  const map = new Map();

  input.forEach((direction) => {
    const parsed = direction.match(DIRECTION_REGEX);
    map.set(`${parsed[1]} -> ${parsed[2]}`, +parsed[3]);
    map.set(`${parsed[2]} -> ${parsed[1]}`, +parsed[3]);
  });

  return map;
};

// Takes a set of items and builds an array with all possible permutations between them:
const permuteSet = (set) => {
  const array = Array.from(set);

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

const places = buildPlacesSet(INPUT);
const distances = buildDistanceMap(INPUT);
const allPossibleRoutes = permuteSet(places);

const allPossibleDistances = allPossibleRoutes.reduce((acc, route) => {
  let total = 0;

  for (let i = 0; i < route.length; i++) {
    if (route[i + 1] === undefined) break;

    total += distances.get(`${route[i]} -> ${route[i + 1]}`);
  }

  return acc.concat([total]);
}, []);

// For part 2, change "min" below to "max".
const result = Math.min.apply(null, allPossibleDistances);

console.log(result);
