const fs = require('fs');

const INPUT = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split('\n');

const COMMANDS_REGEX = /(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)/;
const GRID_LENGTH = 1000;

const parseCommand = (string) => {
  const command = string.match(COMMANDS_REGEX);
  return {
    command: command[1],
    x1: +command[2],
    y1: +command[3],
    x2: +command[4],
    y2: +command[5]
  }; // command[0] is the string itself.
};

const lights = new Uint8Array(GRID_LENGTH * GRID_LENGTH); // Contents initialized to 0.

INPUT.forEach((str) => {
  const commandObj = parseCommand(str);

  for (let x = commandObj.x1; x <= commandObj.x2; x++) {
    for (let y = commandObj.y1; y <= commandObj.y2; y++) {
      const i = GRID_LENGTH * x + y;

      if (commandObj.command === 'turn on') {
        lights[i] = 1;
      } else if (commandObj.command === 'turn off') {
        lights[i] = 0;
      } else if (commandObj.command === 'toggle') {
        lights[i] = lights[i] === 0 ? 1 : 0;
      }
    }
  }
});

const result = lights.reduce(
  (total, light) => (light === 1 ? ++total : total),
  0
);

console.log(result);
