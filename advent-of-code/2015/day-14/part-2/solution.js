import { readFileSync } from 'node:fs';

const INPUT = readFileSync(`${import.meta.dirname}/input.txt`, 'utf-8').split(
  '\n'
);

const REINDEER_NAME_REGEX = /^\w+/;
const REINDEER_ARGS_REGEX = /\d+/g;
const TIME = 2503;

const reindeerPoints = new Map();

const getReindeerName = (reindeerString) =>
  reindeerString.match(REINDEER_NAME_REGEX)[0];

// Calculate the distance for one reindeer from 0 to TIME seconds:
function* getReindeerDistanceIterator(reindeerString) {
  const [speed, time, rest] = reindeerString
    .match(REINDEER_ARGS_REGEX)
    .map(Number);

  const cycleDuration = time + rest;
  let currentDistance = 0;

  for (let currentTime = 0; currentTime <= TIME; currentTime++) {
    const secondsIntoCycle = currentTime % cycleDuration;
    const isMoving = secondsIntoCycle <= time && secondsIntoCycle !== 0;
    if (isMoving) {
      currentDistance += speed;
    }

    yield currentDistance;
  }
}

const allReindeerDistances = INPUT.reduce(
  (distanceMap, reindeerSentence) =>
    distanceMap.set(
      getReindeerName(reindeerSentence),
      Array.from(getReindeerDistanceIterator(reindeerSentence))
    ),
  new Map()
);

// Simulate race:
for (let currentTime = 1; currentTime <= TIME; currentTime++) {
  let roundWinners = [];
  let currentMaxDistance = 0;

  for (const reindeerName of allReindeerDistances.keys()) {
    const reindeerDistance =
      allReindeerDistances.get(reindeerName)[currentTime];

    if (reindeerDistance > currentMaxDistance) {
      roundWinners = [reindeerName];
      currentMaxDistance = reindeerDistance;
    } else if (reindeerDistance === currentMaxDistance) {
      roundWinners.push(reindeerName);
    }
  }

  for (const roundWinner of roundWinners) {
    reindeerPoints.set(roundWinner, (reindeerPoints.get(roundWinner) || 0) + 1);
  }
}

const winnerPoints = Math.max(...Array.from(reindeerPoints.values()));

console.log(winnerPoints);
