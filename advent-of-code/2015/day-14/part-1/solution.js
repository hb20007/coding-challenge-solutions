const fs = require('fs');

const INPUT = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8').split('\n');

const REINDEER_REGEX = /\d+/g;
const TIME = 2503;

const getReindeerDistance = (input) => {
  const args = input.match(REINDEER_REGEX).map(Number);
  const [speed, time, rest] = args;

  return Math.ceil(TIME / (time + rest)) * (speed * time); // Number of cycles * distance travelled at each cycle
};

const result = INPUT.reduce(
  (max, reindeer) =>
    getReindeerDistance(reindeer) > max ? getReindeerDistance(reindeer) : max,
  0
);

console.log(result);
