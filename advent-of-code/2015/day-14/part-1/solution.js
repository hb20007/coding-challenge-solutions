import { readFileSync } from 'node:fs';

const INPUT = readFileSync(`${import.meta.dirname}/input.txt`, 'utf-8').split(
  '\n'
);

const REINDEER_REGEX = /\d+/g;
const TIME = 2503;

const getReindeerDistance = (reindeerString) => {
  const [speed, time, rest] = reindeerString.match(REINDEER_REGEX).map(Number);

  const cycleDuration = time + rest;
  const numberOfCompleteCycles = Math.floor(TIME / cycleDuration);
  const distanceCoveredInACycle = speed * time;
  const remainingSeconds = TIME % cycleDuration;

  const distanceCoveredInCompleteCycles =
    numberOfCompleteCycles * distanceCoveredInACycle;
  const distanceCoveredInLastCycle = speed * Math.min(remainingSeconds, time);

  return distanceCoveredInCompleteCycles + distanceCoveredInLastCycle;
};

const winnerDistance = INPUT.reduce(
  (maxDistance, reindeerSentence) =>
    Math.max(getReindeerDistance(reindeerSentence), maxDistance),
  0
);

console.log(winnerDistance);
