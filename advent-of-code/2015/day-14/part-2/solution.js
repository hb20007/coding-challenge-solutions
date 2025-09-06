const fs = require('fs');

const INPUT = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8').split('\n');

const REINDEER_NAME_REGEX = /^\w+/;
const REINDEER_ARGS_REGEX = /\d+/g;
const TIME = 2503;

const reindeerPoints = new Map();

// Get reindeer name from input:
const getReindeerName = (input) => input.match(REINDEER_NAME_REGEX)[0];

// Calculate the distance for one of the reindeer from 0 to 2503 seconds:
function* getReindeerDistanceIterator(input) {
  const args = input.match(REINDEER_ARGS_REGEX).map(Number);
  const [speed, time, rest] = args;

  let currentDistance = 0;

  for (let currentTime = 0; currentTime <= TIME; currentTime++) {
    const isMoving = (currentTime % (time + rest) <= time) && (currentTime % (time + rest) !== 0);
    if (isMoving) {
      currentDistance += speed;
    }
    yield currentDistance;
  }
}

// Make a map of all distances for all reindeer:
const allTraveledDistances = INPUT.reduce(
  (map, reindeer) => map.set(
    getReindeerName(reindeer), Array.from(getReindeerDistanceIterator(reindeer))
  ), new Map()
);

// Start gathering winners for each second:
for (let currentTime = 0; currentTime <= TIME; currentTime++) {
  let winnerInTheRound = '';
  let max = 0;

  for (const reindeerName of allTraveledDistances.keys()) {
    const reindeerTraveled = allTraveledDistances.get(reindeerName)[currentTime];

    if (reindeerTraveled >= max) {
      winnerInTheRound = reindeerName;
      max = reindeerTraveled;
    }
  }

  reindeerPoints.set(winnerInTheRound, (reindeerPoints.get(winnerInTheRound) || 0) + 1);
}

// Calculate the winner and points:
const result = Math.max(...Array.from(reindeerPoints.values()));

console.log(result);
