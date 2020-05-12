const fs = require('fs');

const INPUT = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8').split('\n');

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
  };
};

const lights = new Uint8Array(GRID_LENGTH * GRID_LENGTH);

INPUT.forEach((str) => {
  const commandObj = parseCommand(str);

  for (let x = commandObj.x1; x <= commandObj.x2; x++) {
    for (let y = commandObj.y1; y <= commandObj.y2; y++) {
      const i = 1000 * x + y;

      switch (commandObj.command) {
        case 'turn on':
          lights[i] += 1;
          break;
        case 'turn off':
          lights[i] = lights[i] === 0 ? 0 : lights[i] - 1;
          break;
        default:
          // toggle
          lights[i] += 2;
      }
    }
  }
});

const result = lights.reduce((brightness, light) => brightness + light, 0);

console.log(result);
