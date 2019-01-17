const assert = require('assert');
const partOne = require('./partOne');
const partTwo = require('./partTwo');

describe('Part 1', () => {
  it('should return 17 with given coordinates', () => {
    const input = `1, 1
1, 6
8, 3
3, 4
5, 5
8, 9`;
    assert.strictEqual(partOne(input), 17);
  });
});

describe('Part 2', () => {
  it('should return 16 with given coordinates and with limit 32', () => {
    const input = `1, 1
1, 6
8, 3
3, 4
5, 5
8, 9`;
    assert.strictEqual(partTwo(input, 32), 16);
  });
});
